var diaAll={};
    function dialog(opt){
        this.config={
            width:300,
            height:200,
            top:0,
            left:0,
            content:"",
            title:"",
            mark:false,
            isdrag:false
        };

        for(var i in opt){
            this.config[i]=opt[i];
        };
        this.body=document.getElementsByTagName("body")[0];
        this.dialogBox=null;
        this.title=null;
        this.dialogClose=null;
        this.wrap=null;
        this.create();

    }
    dialog.prototype={
        create:function(){
            var that=this;
            var wrap=document.createElement("div");
            wrap.setAttribute("class","wrap");
            var dialogBox=document.createElement("div");
            dialogBox.setAttribute("class","dialogBox");
            var title=document.createElement("div");
            title.setAttribute("class","title");
            var txt=document.createElement("span");
            txt.setAttribute("class","txt");
            txt.innerHTML=this.config.title;
            var content=document.createElement("form");
            content.setAttribute("class","cont");
            content.setAttribute("action","action.php");
            content.setAttribute("method","post");
            content.innerHTML=this.config.content;
            dialogBox.style.cssText="width:"+this.config.width+"px;height:"+this.config.height+"px;top:"+this.config.top+"px;left:"+this.config.left+"px;";
            var dialogClose=document.createElement("button");
            dialogClose.setAttribute("class","close");
            dialogClose.innerHTML="close";

            title.appendChild(txt);
            title.appendChild(dialogClose);
            dialogBox.appendChild(title);
            dialogBox.appendChild(content);
            if(this.config.mark){
                wrap.appendChild(dialogBox);
                this.body.appendChild(wrap);
            }else{
                this.body.appendChild(dialogBox);
            }

            this.dialogBox=dialogBox;
            this.dialogClose=dialogClose;
            this.title=title;
            this.wrap=wrap;
            this.dialogClose.onclick=function(){
                that._close();
            }
            if(this.config.isdrag){
                that.drag();
            }
        },
        _close:function(){
            if(this.config.mark){
                this.body.removeChild(this.wrap);
            }else{
                this.body.removeChild(this.dialogBox);
            }

        },
        drag:function(){
            var that=this;
            this.title.onmousedown=function(event){
                var dialogBoxP={left:that.dialogBox.offsetLeft,top:that.dialogBox.offsetTop};
                var DmouseP={left:event.clientX,top:event.clientY};
                document.onmousemove=function(event){
                    var MmouseP={left:event.clientX,top:event.clientY};
                    var thisP={left:MmouseP.left-DmouseP.left+dialogBoxP.left,
                        top:MmouseP.top-DmouseP.top+dialogBoxP.top
                    }
                    that.dialogBox.style.left=thisP.left+"px";
                    that.dialogBox.style.top=thisP.top+"px";
                    var lll=parseFloat(that.dialogBox.style.left);
                    var yyy=parseFloat(that.dialogBox.style.top);
                    var W=parseFloat(that.dialogBox.style.width);
                    var H=parseFloat(that.dialogBox.style.height);
                    if(lll<0){
                        that.dialogBox.style.left=0;
                    }else if(lll>document.body.clientWidth-W){
                        that.dialogBox.style.left=document.body.clientWidth-W+13+"px";
                    }
                    if(yyy<0){
                        that.dialogBox.style.top=0;
                    }else if(yyy>document.documentElement.clientHeight-H){

                        that.dialogBox.style.top=document.documentElement.clientHeight-H-5+"px";
                    }
                }
                document.onmouseup=function(){
                    document.onmousemove=null;
                }
            }
        }
    }