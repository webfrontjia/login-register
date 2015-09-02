<?php
	require_once('db.php');

	$user=$_POST["user"];
	$pwd=$_POST["pwd"];
	@$pwd1=$_POST["pwd1"];
//echo $pwd1;
	if($pwd1){
		if($pwd==$pwd1){
			$sql="insert into register (user,password) values('$user','$pwd')";
		}else{
?>
<script>
	alert("密码不一致")；
</script>
<?php
		}
	}else{
		$sql="select * from login where user='$user' and password='$pwd'";
	}
	$rs=mysql_query($sql);
	$count=mysql_affected_rows();
	//echo $count;
	if ($count>=1) {
?>
<script>
	alert("成功！");
	location.href="index.html";
</script>
<?php
	}else{
?>
<script>
	alert("失败！");
	location.href="index.html";
</script>
<?php
	}

?>