<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">	
        <script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>	
		<title>聊天主页</title>
		<link rel="stylesheet" type="text/css" href="../css/aui.2.0.css" />
	</head>
	<style>
		.ic_share{
			
			width: 1rem;
			height: 1rem;
			float: right;
		}
		.touxiang{
			width:2.6rem;height:2.6rem;margin-top: 0.1rem;
		}
		.new_chat{
			color:white;background: red;width: auto;border-radius: 50%;margin-right: 1rem;margin-top: 0.1rem;
		}
		.new_chat_1{
			padding:0rem 0.25rem;
		}
		.new_chat_2{
			padding:0.1rem 0.2rem;
		}
		.new_chat_99{
		 padding:0.1rem;	
		}
		.new_chat_dot{
			padding:0 0.3rem;border-radius: 50%;
		}
		@media screen and (min-width:365px){
		.ic_share{
			width: 1.2rem;
			height: 1.2rem;
			float: right;
		}
		.new_chat{
			margin-right: 1.5rem;
			margin-top: 0.2rem;
		}
		.touxiang{
			width:2.8rem;height:2.8rem;margin-top: 0.1rem;
		}
	
		}			
	</style>
    <?php
		function show_time($result_time){	//显示时间
			$differ_second = time() - strtotime($result_time);//当前时间与数据库存的时间所差的秒数
			if($differ_second<60*60){ //相差小于一小时
			echo floor($differ_second/60);
			echo "分钟前";
			}else if ($differ_second>=60*60 and $differ_second<60*60*2){//相差大于一小时但小于俩小时
			echo floor($differ_second/(60*60));
			echo "小时前";
			}else if($differ_second>=60*60*2 and $differ_second<60*60*24){//相差大于两小时但小于一天,显示样式:  21:10
			echo substr($result_time,11,5);
			}
			else if ($differ_second>=60*60*24 and $differ_second<60*60*24*7){//相差大于一天但小于一周
			echo floor($differ_second/(60*60*24));
			echo "天前";
			}else if ($differ_second>=60*60*24*7){//相差大于一周
			//显示样式 16/10/26
			echo substr($result_time,2,2);
			echo "/";
			echo substr($result_time,5,2);
			echo "/";
			echo substr($result_time,8,2);
			}
		}
	
	?>
	<body>
		<!-------------------顶部------------------->
		<header class="aui-bar aui-bar-nav">
			 <a href="http://m.lizi123.cn/" class="aui-pull-left aui-col-xs-2 aui-font-size-18"><</a>	
			<div class="aui-col-xs-8 aui-text-center aui-font-size-16">消息</div>
		    <a href="http://m.lizi123.cn/6_chat/61_chat_creatPrivatechat/61_chat_creatPrivatechat.html"  class="aui-pull-right aui-col-xs-2  aui-padded-t-10"style="width: auto;">
		    	<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/6_chat/ic_create.png" class="ic_share"/>
		    </a>			       
		</header>
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
WHERE user_id='$user_id' ORDER BY time DESC");
	$system_message_number = 0;		//判断是否有系统消息
	$number_of_no_read_system_message = 0;	//有几条未读的系统消息
	while($row = mysql_fetch_array($result_system_message)){
		if($row['status'] == 0){
			$number_of_no_read_system_message++;
			}
		if($system_message_number == 0){
			$system_message[0]['time'] = $row['time'];
			$system_message[0]['have_read'] = $row['status'];
			$system_message[0]['content'] = $row['text'];
			$system_message_number = 1;
			}
	}
	/*	
	//获取社团消息
	$result_club_message = mysql_query("SELECT * FROM lz_system_message
WHERE user_id='$user_id' and type = '2' ORDER BY time DESC");
	$club_message_number = 0;
	while($row = mysql_fetch_array($result_club_message)){
		$club_message[$club_message_number]['time'] = $row['time'];
		$club_message[$club_message_number]['have_read'] = $row['status'];
		$club_message[$club_message_number]['content'] = $row['text'];
		$club_message[$club_message_number]['club_id'] = $row['object_id'];
		$club_message_number++;
		}
	//获取社团头像及名字
	for($i=0;$i<$club_message_number;$i++){
		$club_id = $club_message[$i]['club_id'];
		$result_club_inf = mysql_query("SELECT * FROM lz_club
WHERE id='$club_id' ");
		while($row = mysql_fetch_array($result_club_inf)){
			$club_message[$i]['image'] = $row['image'];
			$club_message[$i]['name'] = $row['name'];
			break;
			}
		}*/
	//
	mysql_close($con);
	//将所有消息合并为一个数组,type:0为私聊,1为群聊,2为平台系统消息,3为社团消息
	$sum = 0;
	for($i=0;$i<$friend_num+$group_num+$system_message_number+$club_message_number;$i++){
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
				}/*
			else if($i>=$friend_num+$group_num+$system_message_number and $i<$friend_num+$group_num+$system_message_number+$club_message_number){ //社团消息
				$number = 0;
				$result_all[$i]['type'] = 3;
				$result_all[$i]['content'] = $club_message[$number]['content'];
				$result_all[$i]['time'] = $club_message[$number]['time'];
				$result_all[$i]['have_read'] = $club_message[$number]['have_read'];
				$result_all[$i]['club_id'] = $club_message[$number]['club_id'];
				$result_all[$i]['image'] = $club_message[$number]['image'];
				$result_all[$i]['name'] = $club_message[$number]['name'];
				$number++;
				}*/
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
            <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;">
                    <!-- 头像 -->
						<img src="<?php echo $result_all[$i]['image']; ?>" class="aui-img-round touxiang"/>
					</div>
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
                    <!-- 昵称 -->
						<div class="aui-col-12 aui-font-size-14"><?php echo $result_all[$i]['nickname']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;">
                    <!-- 内容 -->
						<?php 
						echo $result_all[$i]['content']; 
					    if($result_all[$i]['picture'] != "" && $result_all[$i]['picture'] != "null") echo "[图片]";
						?></div>										
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;">
					<!-- 时间 -->
					<?php 
					show_time($result_all[$i]['time']);
					?></div>
                     <!-- 未读消息数 -->
                 <?php if($result_all[$i]['have_read'] == 0){ ?><div class="aui-col-xs-12  aui-pull-right new_chat new_chat_1">!</div><?php }?>			
				</div>
				<div class="aui-hr"></div>
			</li>
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
                    <a href="http://m.lizi123.cn/6_chat/61_chat_systemlist.php?id=<?php echo $user_id ?>" tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/6_chat/touxiang_system.png" class="aui-img-round touxiang"/>
					</div>
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14">系统消息</div>				
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo $result_all[$i]['content']; ?></div>										
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right aui-row" style="margin-top: 0.3rem;color: #9E9E9E;">
						<div class="aui-col-xs-12 aui-pull-right">
						<?php
						show_time($result_all[$i]['time']);
						?>
                        </div>
						 <?php if($result_all[$i]['have_read'] == 0){ ?><div class="aui-col-xs-12  aui-pull-right new_chat new_chat_1">
						 <?php  
						 	if($number_of_no_read_system_message >99){
								echo "99+";
								}else{
									echo $number_of_no_read_system_message;
									}
						 ?></div><?php }?>	
					</div>	
				</div>	
				<div class="aui-hr"></div>				
			</li>
            </a>
                    <?php
					/*
					}else if($result_all[$i]['type'] == 3){		//社团消息
						?>
                        <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;">
						<img src="<?php echo $result_all[$i]['image']; ?>" class="aui-img-round touxiang"/>
					</div>
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $result_all[$i]['name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo $result_all[$i]['content']; ?></div>										
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right aui-row" style="margin-top: 0.3rem;color: #9E9E9E;">
						<div class="aui-col-xs-12 aui-pull-right">
						<?php
						show_time($result_all[$i]['time']);
						?>
                        </div>
						<?php if($result_all[$i]['have_read'] == 0){ ?><div class="aui-col-xs-12  aui-pull-right new_chat new_chat_1">!</div><?php }?>	
					</div>					
				</div>
				<div class="aui-hr"></div>				
			</li>
                        <?php*/
						}
		}
 ?>
        		
		</ul>
	</body>
    
	<script>
	user_id = "<?php echo $user_id ?>";
	$.ajax({
		type:"POST",
		url:"http://api.lizi123.cn/index.php/home/user/isUserLogin",
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
				window.location.href="http://m.lizi123.cn/6_chat/new_chat_homepage.php?id="+user_id+"";
				return;
			}
		},
		error:function(data){
			alert("获取登陆信息失败,请重新登陆");
			window.location.href="http://m.lizi123.cn";
		},
	});
	</script>
	
</html>