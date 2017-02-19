<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
		<title>创建群聊</title>
		<link href="css/create_groupchat.css" rel="stylesheet"/>
	</head>
	<body>
		<header>
			<a class="title" href="chat_homepage.php"><创建群聊</a>
			<a class="title" href="group_people.php" style="float: right;margin-right: 3vw;"><span id="next">完成创建</span></a>
		</header>
		<div id="tabs">
			<div id="tabs1">
				<img src="img/interest1.png" id="xingqu"/>
				<p>兴趣群聊</p>
			</div>
			<div id="tabs2">
				<img src="img/location1.png" id="weizhi"/>
				<p>位置群聊</p>
			</div>
		</div>
		<div id="tips">
			<h5>建议您创建与兴趣或交友相关的群聊。</h5>
			<p>（出于对社区的保护，色情、暴力、非法营销和个人及企业广告是被禁止的）</p>
		</div>
        <!-- 兴趣群聊 -->
        <div id="xingqu_group">
        <div class="group_details">
			<span>群名称</span>
            <form  method="post" >
			<input type="text" id="xingqu_group_name" name="xingqu_group_name" placeholder="（必填）10个字以内" maxlength="10"/>
		</div>
		<div class="group_details">
			<span>群简介</span>
			<textarea  id="xingqu_group_about" name="xingqu_group_about" placeholder="（必填）50个字以内" maxlength="50"></textarea>
		</div>
		<div class="group_details">
			<span>群标签</span>
			<input type="text" placeholder="（选填）可填写多个，按空空格键形成" style="width: 78vw;" maxlength="15" id="lab" onchange="change()"/>
			<div id="label">
				<!--<span>音乐</span>-->
			</div>
		</div>
        </div>
        <!-- 位置群聊 -->
        <div id="weizhi_group" style="display:none">
        <div class="group_details" >
			<span>群名称</span>
			<input type="text" id="weizhi_group_name" name="weizhi_group_name" placeholder="（必填）10个字以内" maxlength="10"/>
		</div>
		<div class="group_details">
			<span>群简介</span>
			<textarea id="weizhi_group_about" name="weizhi_group_about" placeholder="（必填）50个字以内" maxlength="50"></textarea>
		</div>
		<div class="group_details">
			<span style="margin-top: 2vw;">群位置</span>
			<input type="text" id="weizhi_group_location" name="weizhi_group_location" style="margin-top: 2vw;"/>
			<a href="#">></a>
		</div>
        </div>
         <input type="submit" style="display:none" name="finish_create" id="finish_create" />
         <input type="text" name="group_type" id="group_type" />
        </form>
        <!-- <iframe id="group_chat" src="xingqu_groupchat.html"></iframe> -->
	</body>
    <?php
	$login_ip =  $_SERVER["REMOTE_ADDR"];		//用户ip地址
	//先获取用户user_id
	$con = mysql_connect("127.0.0.1","root","tokushimazg");
	if(!$con)	echo  mysql_error(); 
	mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
	$db_selected = mysql_select_db("qj",$con);
	$result_user_id = mysql_query("SELECT * FROM qj_user_login_log
WHERE login_ip='$login_ip' ORDER BY login_time DESC");
	while($row = mysql_fetch_array($result_user_id)){
		$user_id =  $row['user_id'];
		break;
		}
	mysql_close($con);
	//echo $user_id;	//成功取得取得用户id
	
	if(!empty($_POST['finish_create'])){
		//兴趣群聊
		if($_POST['group_type'] == "0"){
			$xingqu_group_name = $_POST['xingqu_group_name'];
			$xingqu_group_introduction = $_POST['xingqu_group_about'];
			$con = mysql_connect("127.0.0.1","root","tokushimazg");
			if(!$con)	echo  mysql_error(); 
			mysql_query('SET NAMES UTF8');
			$db_selected = mysql_select_db("qj",$con);
			$time=date('Y-m-d H:i:s');
			mysql_query("INSERT INTO qj_group (type, group_name, group_introduction,group_owner,create_time) VALUES ('0','$xingqu_group_name','$xingqu_group_introduction','$user_id','$time')");
			mysql_close($con);
			//获取刚创建完的群的群id
			$con = mysql_connect("127.0.0.1","root","tokushimazg");
			if(!$con)	echo  mysql_error(); 
			mysql_query('SET NAMES UTF8');
			$db_selected = mysql_select_db("qj",$con);
			$result = mysql_query("SELECT * FROM qj_group
WHERE group_name = '$xingqu_group_name' and type='0' and group_owner = '$user_id' ORDER BY create_time DESC");
			while($row = mysql_fetch_array($result)){
				$group_id = $row['id'];
				break;
			}
			if($group_id == ""){
				echo "<script>alert('由于网络问题,该群无法成功创建,请稍后再试');</script>";
				}else{
				mysql_query("INSERT INTO qj_group_people (user_id, group_id, time,is_agree) VALUES ('$user_id','$group_id','$time','1')");
				header("Location: group_people.php?group_id=$group_id & my_id=$user_id");
			}
		}
		mysql_close($con);
		//位置群聊
		if($_POST['group_type'] == "1"){
			$weizhi_group_name = $_POST['weizhi_group_name'];
			$weizhi_group_introduction = $_POST['weizhi_group_about'];
			$weizhi_group_location = $_POST['weizhi_group_location'];
			$con = mysql_connect("127.0.0.1","root","tokushimazg");
			if(!$con)	echo  mysql_error(); 
			mysql_query('SET NAMES UTF8');
			$db_selected = mysql_select_db("qj",$con);
			$time=date('Y-m-d H:i:s');
			mysql_query("INSERT INTO qj_group (type, group_name, group_introduction,group_owner,group_location,create_time) VALUES ('1','$weizhi_group_name','$weizhi_group_introduction','$user_id','$weizhi_group_location','$time')");
			mysql_close($con);
			//获取刚创建的群的群id
			$con = mysql_connect("127.0.0.1","root","tokushimazg");
			if(!$con)	echo  mysql_error(); 
			mysql_query('SET NAMES UTF8');
			$db_selected = mysql_select_db("qj",$con);
			$result = mysql_query("SELECT * FROM qj_group
WHERE group_name = '$weizhi_group_name' and type='1' ORDER BY create_time DESC");
			while($row = mysql_fetch_array($result)){
				$group_id = $row['id'];
				break;
			}
			if($group_id == ""){
				echo "<script>alert('由于网络问题,该群无法成功创建,请稍后再试');</script>";
				}else{
				mysql_query("INSERT INTO qj_group_people (user_id, group_id, time,is_agree) VALUES ('$user_id','$group_id','$time','1')");
				header("Location: group_people.php?group_id=$group_id & my_id=$user_id");
			}
			}
		}
	?>
	<script>
		function change(){
			var str=document.getElementById("lab").value
	//		var str="test1  test2 test3";
			var ret=str.split(/\s+/);
//			alert(ret.length);
			for(var i=0;i<ret.length;i++){
				var html="<span>"+ret[i]+"</span>";
				$("#label").append(html);
				document.getElementById("lab").value="";
			}
		}
	
		var xingqu=document.getElementById("xingqu");
		var weizhi=document.getElementById("weizhi");
		var flag = 0;	//0表示兴趣群聊,1表示位置群聊
		//var group=document.getElementById("group_chat");
		xingqu.addEventListener("touchstart",function(e){
			flag = 0;
			e.preventDefault();
			this.src="img/interest1.png";
			weizhi.src="img/location1.png";
			document.getElementById("xingqu_group").style.display="";
			document.getElementById("weizhi_group").style.display="none";
			//group.src="xingqu_groupchat.html";
		},false);
		weizhi.addEventListener("touchstart",function(e){
			flag = 1;
			e.preventDefault();
			this.src="img/location2.png";
			xingqu.src="img/interest2.png";
			document.getElementById("xingqu_group").style.display="none";
			document.getElementById("weizhi_group").style.display="";
			//group.src="weizhi_groupchat.html";
		},false);
		
		$("#next").click(function(){
			//当前为兴趣群聊
			if(flag == 0){
				if($("#xingqu_group_name").val() == "" || 
				   $("#xingqu_group_about").val() == ""){
					   alert("信息填写不完整,请重新填写完整");
					   return false;
					}
				document.getElementById("group_type").value="0";
				document.getElementById("finish_create").click();
				return false;
				}
			//当前为位置群聊
			if(flag == 1){
				if($("#weizhi_group_name").val() == "" || 
				   $("#weizhi_group_about").val() == "" || 
				   $("#weizhi_group_location").val() == ""){
					   alert("信息填写不完整,请重新填写完整");
					   return false;
					}
				document.getElementById("group_type").value="1";
				document.getElementById("finish_create").click();
				return false;
				}
			});
	</script>
    
</html>
