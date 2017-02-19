<!DOCTYPE <html>
<head>
	<meta charset="UTF-8">
	<meta content="user-scalable=0;" name="viewport" />
	<title>群聊信息</title>
	<link rel="stylesheet" type="text/css" href="css/css_group.css">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
</head>
<body>
<?php
	$user_id = $_GET['user_id'];
	$group_id = $_GET['group_id'];
	$con = mysql_connect("127.0.0.1","root","tokushimazg");
	if(!$con)	echo  mysql_error(); 
	mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
	$db_selected = mysql_select_db("qj",$con);
	$result_group = mysql_query("SELECT * FROM qj_group
WHERE id ='$group_id'");
	//群信息
	while($row = mysql_fetch_array($result_group)){
		$group_image =  $row['group_image'];
		$group_onwer_id = $row['group_owner'];
		$group_introduction = $row['group_introduction'];
		$group_location = $row['group_location'];
		$group_name = $row['group_name'];
		$group_type = $row['type'];
		break;
		}
	//群成员信息
	$result_group_people = mysql_query("SELECT * FROM qj_group_people WHERE group_id = '$group_id' and is_agree = '1' ");
	$group_num = 0;		
	while($row = mysql_fetch_array($result_group_people)){
		$group_people[$group_num]['user_id'] = $row['user_id'];
		$group_num++;
		}
	//群成员头像
	for($i=0;$i<$group_num;$i++){
		$member_id = $group_people[$i]['user_id'];
		$result_group_people_image = mysql_query("SELECT * FROM qj_user WHERE user_id = '$member_id' ");
		while($row = mysql_fetch_array($result_group_people_image)){
			$group_people[$i]['image'] = $row['user_image'];
		}
	}
	
	mysql_close($con);
?>
	<!-- ===header====== -->
	<div class="header">
		<span class="return"></span>
		<a href="group_chat.php?room_id=<?php echo $group_id ?>&user_id=<?php echo $user_id ?>"><p class="title">群聊信息</p></a>
        <a href="group_people.php?group_id=<?php echo $group_id;?>&my_id=<?php echo $user_id; ?>">
		<p class="edit">邀请</p>
        </a>
	</div>
	<!-- ====content==== -->
	<div class="header-content">
		<img src="<?php echo $group_image ?>" class="logo-information">
		<a href="data_group.php?group_id=<?php echo $group_id ?>"><p class="perfectInformation">资料待完善</p></a>
		<a href="data_group.php?group_id=<?php echo $group_id ?>"><span class="icon-modify"></span></a>
		<p class="name-icon-information"><?php echo $group_name ?></p>
		<p class="introduction-information"><?php echo $group_introduction ?></p>
        <?php
			if($group_type == 0){
				?>
                <p class="location-information"><?php echo $group_location ?></p>
                <?php
				}
		?>
	</div>
	<div class="member-content">
		<div class="block-member">
		<p class="bar-member">群成员:</p>
        <?php
			for($i=0;$i<$group_num;$i++){
				?>
                <img class="icon-member"  src="<?php echo $group_people[$i]['image']; ?>">
                <?php
				}
		?>
		<p class="number-group"><?php echo $group_num ?></p>
		<span class="icon-modify-member"></span>
	</div>
		<a href="information_group.html"><img class="icon-modify-member" src="http://img.lizi123.cn/LiZi/chat_new/img/icon_modify.png"></a>
		<a href="data_group.php?group_id=<?php echo $group_id ?>"><p class="matter-group">群资料</p></a>
		<img class="icon-modify-member" src="http://img.lizi123.cn/LiZi/chat_new/img/icon_modify.png">
		<p class="matter-group">我的群昵称</p>
		<img class="icon-modify-member" src="http://img.lizi123.cn/LiZi/chat_new/img/icon_modify.png">
		<p class="matter-group">待处理的申请</p>
		<p class="dissolution-group">解散群聊</p>
	</div>
</body>
</html>