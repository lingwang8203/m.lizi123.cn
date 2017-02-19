<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link href="css/chat_homepage.css" rel="stylesheet"/>
		<link href="chat_homepage.css" rel="stylesheet"/>
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
		<title>聊天主页</title>
	
	</head>
	<body>
		<header>
			<a class="title" href="http://m.lizi123.cn"><</a>
			<span>聊天</span>
			<img src="img/create.png" id="create"/>
		</header>
		<div id="find">
			<span>发现群聊</span>
			<a href="#">></a>
			<img src="img/touxiang.png" />
			<img src="img/touxiang1.png" />
			<img src="img/touxiang.png" />
		</div>
		<!--/////////////////////个人聊天-->
        <ul>
        <?php 
	$user_id = $_GET['id'];	//用户id
 	/*$login_ip =  $_SERVER["REMOTE_ADDR"];		//用户ip地址
	//先获取用户user_id
	$con = mysql_connect("127.0.0.1","root","tokushimazg");
	if(!$con)	echo  mysql_error(); 
	mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
	$db_selected = mysql_select_db("lizi",$con);
	$result_user_id = mysql_query("SELECT * FROM lz_user_login_log
WHERE login_ip='$login_ip' ORDER BY login_time DESC");
	while($row = mysql_fetch_array($result_user_id)){
		$user_id =  $row['user_id'];
		break;
		}
	mysql_close($con);*/
	//echo $user_id;	//成功取得取得用户id
	//进入聊天记录中查询用户聊天对象
	$con = mysql_connect("127.0.0.1","root","tokushimazg");
	if(!$con)	echo  mysql_error(); 
	mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
	$db_selected = mysql_select_db("lizi",$con);
	//发送方为自己
	$result_from_user_id = mysql_query("SELECT * FROM lz_chat_dialog
WHERE from_user_id='$user_id' ORDER BY time DESC");
	$from_user_num = 0;
	while($row = mysql_fetch_array($result_from_user_id)){
		$from_user[$from_user_num] = $row;
		$from_user_num++;
	}
	//接收方为自己
	$result_to_user_id = mysql_query("SELECT * FROM lz_chat_dialog
WHERE to_user_id='$user_id' ORDER BY time DESC");
	$to_user_num = 0;
	while($row = mysql_fetch_array($result_to_user_id)){
		$to_user[$to_user_num] = $row;
		$to_user_num++;
	}
	//统计聊天对象共有多少
	$friend_num = 0;
	$flag = false;
	//发送方为自己
	for($i=0;$i<$from_user_num;$i++){
		for($j=0;$j<$friend_num;$j++){
			if($from_user[$i]['to_user_id'] != $friend[$j]['user_id']){
				$flag=false;
				}else{
					$flag = true;
					break;
					}
			}
		if(!$flag){
			$friend[$friend_num]['user_id'] = $from_user[$i]['to_user_id'];
			$friend[$friend_num]['time'] = $from_user[$i]['time'];
			$friend[$friend_num]['content'] = $from_user[$i]['content'];
			$friend[$friend_num]['picture'] = $from_user[$i]['picture'];
			$friend[$friend_num]['have_read'] = 1;
			$friend_num++;
			}
		}
	//接收方为自己
	for($i=0;$i<$to_user_num;$i++){
		for($j=0;$j<$friend_num;$j++){
			if($to_user[$i]['from_user_id'] != $friend[$j]['user_id']){
				$flag=false;
				}else{
					$flag = true;
					if($friend[$j]['time'] < $to_user[$i]['time']){
						$friend[$j]['time'] = $to_user[$i]['time'];
						$friend[$j]['content'] = $to_user[$i]['content'];
						$friend[$j]['picture'] = $to_user[$i]['picture'];
						$friend[$j]['have_read'] = $to_user[$i]['have_read'];
						}
					break;
					}
			}
		if(!$flag){
			$friend[$friend_num]['user_id'] = $to_user[$i]['from_user_id'];
			$friend[$friend_num]['time'] = $to_user[$i]['time'];
			$friend[$friend_num]['content'] = $to_user[$i]['content'];
			$friend[$friend_num]['picture'] = $to_user[$i]['picture'];
			$friend[$friend_num]['have_read'] = $to_user[$i]['have_read'];
			$friend_num++;
			}
		}
	//获得私聊对象的头像和nickname
	for($i=0;$i<$friend_num;$i++){
		$friend_id = $friend[$i]['user_id'];
		$result_friend = mysql_query("SELECT * FROM lz_user
WHERE id='$friend_id'");
		while($row = mysql_fetch_array($result_friend)){
			$friend[$i]['nickname'] = $row['user_name'];
			$friend[$i]['image'] = $row['head_image'];
			}
		}
	//获得我的所有群
	$result_my_group = mysql_query("SELECT * FROM lz_group_people
WHERE user_id = '$user_id' and is_agree = '1'");
	$group_num = 0;
	while($row = mysql_fetch_array($result_my_group)){
			$group[$group_num]['group_id'] = $row['group_id'];	//群id
			$group_num++;
		}
	//该群的头像,名字,最后一个聊天内容,时间,发言人
		for($i=0;$i<$group_num;$i++){
			$group_id = $group[$i]['group_id'];
			$result_group = mysql_query("SELECT * FROM lz_group
WHERE id = '$group_id'");
			while($row = mysql_fetch_array($result_group)){
				$group[$i]['group_name'] = $row['group_name'];	//群名字
				$group[$i]['group_image'] = $row['group_image'];	//群头像
				break;
				}
			$result_group_chat = mysql_query("SELECT * FROM lz_group_chat
WHERE group_id = '$group_id' ORDER BY time DESC");
			while($row = mysql_fetch_array($result_group_chat)){
				$group[$i]['content'] = $row['content'];		//发言内容
				$group[$i]['time'] = $row['time'];				//发言时间
				$group[$i]['picture'] = $row['picture'];		//图片
				$group[$i]['user_id'] = $row['user_id'];		//发言人id
				$group_chat_user_id = $row['user_id'];
				$result_group_chat_nickname = mysql_query("SELECT * FROM lz_user WHERE user_id = '$group_chat_user_id'");
				while($row_nickname = mysql_fetch_array($result_group_chat_nickname)){
					$group[$i]['nickname'] = $row_nickname['user_nickname'];//发言人名字
					break;
					}
				break;
				}
			}
	//获取平台系统通知
	$result_system_message = mysql_query("SELECT * FROM lz_system_message
WHERE user_id='$user_id' and type = '0' ORDER BY time DESC");
	$system_message_number = 0;
	while($row = mysql_fetch_array($result_system_message)){
		$system_message[0]['time'] = $row['time'];
		$system_message[0]['have_read'] = $row['status'];
		$system_message[0]['content'] = $row['text'];
		$system_message_number = 1;
	}	
	
	mysql_close($con);
	//将所有消息合并为一个数组,type:0为私聊,1为群聊,2为平台系统消息
	$sum = 0;
	for($i=0;$i<$friend_num+$group_num+$system_message_number;$i++){
		$sum++;
		if($i<$friend_num){	//私聊
			$result_all[$i]['type'] = 0;
			$result_all[$i]['content'] = $friend[$i]['content'];
			$result_all[$i]['picture'] = $friend[$i]['picture'];
			$result_all[$i]['time'] = $friend[$i]['time'];
			$result_all[$i]['user_id'] = $friend[$i]['user_id'];
			$result_all[$i]['have_read'] = $friend[$i]['have_read'];
			$result_all[$i]['nickname'] = $friend[$i]['nickname'];
			$result_all[$i]['image'] = $friend[$i]['image'];
			}else if($i>=$friend_num and $i<$friend_num+$group_num){	//群聊
				$result_all[$i]['type'] = 1;
				$result_all[$i]['content'] = $group[$i-$friend_num]['content'];
				$result_all[$i]['picture'] = $group[$i-$friend_num]['picture'];
				$result_all[$i]['time'] = $group[$i-$friend_num]['time'];
				$result_all[$i]['group_id'] = $group[$i-$friend_num]['group_id'];;
				$result_all[$i]['group_name'] = $group[$i-$friend_num]['group_name'];
				$result_all[$i]['group_image'] = $group[$i-$friend_num]['group_image'];
				$result_all[$i]['user_id'] = $group[$i-$friend_num]['user_id'];
				$result_all[$i]['nickname'] = $group[$i-$friend_num]['nickname'];
				}
			else if($i>=$friend_num+$group_num and $i<$friend_num+$group_num+$system_message_number){	//平台系统消息
				$result_all[$i]['type'] = 2;
				$result_all[$i]['content'] = $system_message[0]['content'];
				$result_all[$i]['time'] = $system_message[0]['time'];
				$result_all[$i]['have_read'] = $system_message[0]['have_read'];
				}
		}
	//为这些聊天对象按时间进行排序
	$time=array();
	foreach($result_all as $result_all2){
		$time[]=$result_all2["time"];
		}
	array_multisort($time, SORT_DESC, $result_all); 
	//显示聊天对象
	for($i=0;$i<$sum;$i++){
		if($result_all[$i]['type'] == 0){	//私聊
			?>
            <a href="http://m.lizi123.cn/6_chat/siliao.php?id=<?php echo $result_all[$i]['user_id']; ?>&id2=<?php echo $user_id; ?>" tartget="_blank">
            <div class="chat">
				<img src="<?php echo $result_all[$i]['image']; ?>" class="touxiang"/>
				<div class="font">
					<h3><?php echo $result_all[$i]['nickname']; ?></h3>
					<p><?php echo $result_all[$i]['content']; 
					$b="[@";
					if(strpos($friend[$i]['content'], $b) !== false){
						//echo "[表情]";
						}
					if($result_all[$i]['picture'] != "" && $result_all[$i]['picture'] != "null") echo "[图片]";
						?></p>
				</div>
				<span><?php echo $result_all[$i]['time']; 
						//$now = date('Y-m-d H:i:s');
						//echo "<br/>";
						//$a = strtotime($now)-strtotime($friend[$i]['time'] );
						//echo round($a/60);
						?></span>
                <?php if($result_all[$i]['have_read'] == 0){ ?><span class="weidu">未读消息</span><?php }?>
			</div>
		</a>
            <?php
			}else if($result_all[$i]['type'] == 1){		//群聊
				?>
                <a href="http://m.lizi123.cn/chat/Applications/Chat/Web/group_chat.php?room_id=<?php echo $result_all[$i]['group_id']; ?>&user_id=<?php echo $user_id ?>"  tartget="_blank">
             <div class="chat">
				<img src="<?php echo $result_all[$i]['group_image']; ?>" class="touxiang"/>
				<div class="font">
					<div class="header">
						<h3><?php echo $result_all[$i]['group_name']; ?></h3>
						<img src="img/group.png"/>
					</div>
					<p><?php
						if($result_all[$i]['user_id'] != $user_id){
						echo $result_all[$i]['nickname'];
						echo ": "; 
						}
						echo $result_all[$i]['content'];
						if($result_all[$i]['picture'] != "" && $result_all[$i]['picture'] != "null") 
						{
							echo "[图片]";
							}
					?>
                    </p>
				</div>
				<span><?php  echo $result_all[$i]['time']; ?></span>
			</div>
		</a>
                <?php
				}else if($result_all[$i]['type'] == 2){ //系统平台消息
					?>
                    
                    <?php
					}
		}
 ?>
		</ul>
		<!--///////////////////////////右上角弹窗-->
		<div id="back">
			<a href="">
				<div class="tabs">
					<img src="img/siliao.png" />
					<span>发起私聊</span>
				</div>
			</a>
			<a href="create_groupchat.php">
				<div class="tabs" style="padding-bottom: 1vw;">
					<img src="img/group.png" />
					<span>创建群聊</span>
				</div>
			</a>
		</div>
	</body>
	<script>
	user_id = "<?php echo $user_id ?>";
	$.ajax({
		type:"POST",
		url:"http://api.lizi123.cn/index.php/home/index/isUserLogin",
		data:{
			"client_type":0,
			},
		xhrFields:{
			withCredentials:true
		},
		success: function(data){
			var obj = eval(data);
			console.dir(obj);
			if(user_id == ""){
				user_id=obj['user_id'];			
				window.location.href="http://m.lizi123.cn/6_chat/chat_homepage.php?id="+user_id+"";
				return;
			}else if(user_id == 'undefined'){
				alert("账号未登陆,请登陆后再进入此页面");
				window.location.href="http://m.lizi123.cn";
				}
		},
		error:function(data){
			alert("获取登陆信息失败,请重新登陆");
			window.location.href="http://m.lizi123.cn";
		},
	});
	
	
		var create=document.getElementById("create");
		create.index=0;
		create.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				document.getElementById("back").style.display="block";
				this.index=1;
			}
			else{
				document.getElementById("back").style.display="none";
				this.index=0;
			}
		},false)
	</script>
</html>
