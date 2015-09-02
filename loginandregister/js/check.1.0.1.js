/**
 * Created by jack on 15-6-12.
 */
;(function($){
    $.fn.test=function(opt){
        var regAll={
            email:/^\w+@[a-z\d]+\.(com|cn|org)$/,
            phone:/^1[3|4|5|7|8]\d{9}$/,
            url:/^http(s)?:\/\/(www\.)?\w+\.(com|cn|com\.cn|gov|org)(\/\w+)*$/,
            qq:/^[1-9][0-9]{4,9}$/,
            password:/^\w{6,16}$/
        };
        this.on("blur",function(){
            if($(this).val()==""||$(this).val()==" "){
                alert("不能为空");
            }else if(regAll[opt.text]){
                if(regAll[opt.text].test($(this).val())){
                    alert("匹配成功");
                }else{
                    alert("格式不正确");
                }
            }/*else if(opt._reg){
                if(opt._reg.test($(this).val())){
                    alert(opt.yes);
                }else{
                    alert(opt.error);
                }
            }*/
        })
    }
})(jQuery);