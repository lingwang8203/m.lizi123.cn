<!DOCTYPE html>
<head>
	<meta charset="UTF-8">
	<meta content="user-scalable=0;" name="viewport" />
	<title>群资料</title>
	<link rel="stylesheet" type="text/css" href="css/css_group.css">
	<link rel="stylesheet" type="text/css" href="css/reset.css">
</head>
<body>
<?php
	$group_id = $_GET['group_id'];		//群id
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
	$result_owner = mysql_query("SELECT * FROM qj_user
WHERE user_id ='$group_onwer_id'");
	//群主名字
	while($row = mysql_fetch_array($result_owner)){
		$group_owner_nickname = $row['user_nickname'];
		}
	//群人数
	$result_group_people = mysql_query("SELECT * FROM qj_group_people WHERE group_id = '$group_id' and is_agree = '1' ");
			$group_num = 0;		
			while($row = mysql_fetch_array($result_group_people)){
				$group_num++;
			}
	mysql_close($con);
	
?>
	<!-- ===header====== -->
	<div class="header">
		<span class="return"></span>
        <a href="information_group.php?group_id=<?php echo $group_id ?>">
		<p class="title">群资料</p>
        </a>
		<p class="edit">编辑</p>
		<!-- <p class="edit">完成</p> -->
	</div>
	<!-- ====content==== -->
	<div class="content">
		<img src="<?php echo $group_image ?>" class="logo">
		<p class="name-icon"><?php echo $group_name ?></p>
		<p class="msg">群主<input class="textbox host-group" type="text" name="host-group" value=<?php echo $group_owner_nickname ?> size="34" readonly /></p>
		<p class="msg">成员<input class="textbox" type="text" name="member-group" value=<?php echo $group_num ?> size="34" readonly /></p>
		<p class="msg">简介<textarea class="textbox" type="text" name="introduction-group"  rows="2" cols="40" readonly /><?php echo $group_introduction ?></textarea></p>
        <?php 
			if($group_type == 1){
			?>
            <p class="msg">群位置<input class="textbox" type="text" name="position-group" value=<?php echo $group_location ?> size="34" readonly /></p>
            <?php
			}
		?> 
	</div>
</body>
</html>