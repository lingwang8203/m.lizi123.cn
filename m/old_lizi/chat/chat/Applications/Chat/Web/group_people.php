<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
		<title>邀请成员</title>
		<link href="css/group_people.css" rel="stylesheet"/>
        <link href="css/yaoqing.css" rel="stylesheet"/>
	</head>
	<body>
    <?php 
	$user_id = $_GET['my_id'];
	$group_id = $_GET['group_id'];
	?>
		<header>
			<a class="title" href="group_chat.php?room_id=<?php echo $group_id ?>&user_id=<?php echo $user_id ?>"><</a>
			<span>我关注的人</span>
			<p id="next">完成邀请</p>
		</header>
		<div id="search">
			<img src="../../../../login/img/search.png" />
			<input type="text" placeholder="搜索关注的人"/>
		</div>
		<!--////////////////////////////////////////分组-->
		<div id="pageclub_people">
			<div class="list">
				<div class="list_header">
					<span class="fenzu_name">特别关注</span>
				</div>
				<div id="special" class="people_list">
                <!-- 特别关注对象列表-->
                <form  method="post" >
                <?php
					//echo $_GET['group_id'];		//群id
					//echo $_GET['my_id'];		//自己id
					$user_id = $_GET['my_id'];
					$con = mysql_connect("127.0.0.1","root","tokushimazg");
				    if(!$con)	echo  mysql_error(); 
				    mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
				    $db_selected = mysql_select_db("qj",$con);
					$result_tebie = mysql_query("SELECT * FROM qj_care
WHERE user_id ='$user_id' and area_id='0' and is_special_care ='1' ORDER BY care_time DESC");
					$num_special = 0;
					while($row = mysql_fetch_array($result_tebie)){
						//逐个去查找关注人的nickname和头像
						$contnet_id = $row['content_id'];
						$result_user = mysql_query("SELECT * FROM qj_user
WHERE user_id='$contnet_id'");
						while($row_user = mysql_fetch_array($result_user)){
							$special_care[$num_special]['nickname'] = $row_user['user_nickname'];
							$special_care[$num_special]['image'] = $row_user['user_image'];
							$special_care[$num_special]['user_id'] = $row_user['user_id'];
							$num_special++;
							break;
							}
						}
					mysql_close($con);
					for($i=0;$i<$num_special;$i++){
						?>
                        <div class="people">
                        <img src="<?php echo $special_care[$i]['image']; ?>" />
                        <span><?php echo $special_care[$i]['nickname']; ?></span>
                        <img src="img/unchecked.png" class="choose"/>
                        <input type="text" id="<?php echo $i ?>" name="<?php echo $special_care[$i]['user_id']; ?>" value="<?php echo $special_care[$i]['user_id']; ?>" style="display:none"/>
                        </div>
                        <?php
						}
				?>
				</div>
			</div>
			<div class="list">
				<div class="list_header">
					<span class="fenzu_name">已关注</span>
				</div>
			  <div id="normal" class="people_list">    
				<!-- 关注对象列表-->
                <?php
					//echo $_GET['group_id'];		//群id
					//echo $_GET['my_id'];		//自己id
					$user_id = $_GET['my_id'];
					$group_id = $_GET['group_id'];
					$con = mysql_connect("127.0.0.1","root","tokushimazg");
				    if(!$con)	echo  mysql_error(); 
				    mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
				    $db_selected = mysql_select_db("qj",$con);
					$result_normal = mysql_query("SELECT * FROM qj_care
WHERE user_id ='$user_id' and area_id='0' and is_special_care ='0' ORDER BY care_time DESC");
					$num_normal = 0;
					while($row = mysql_fetch_array($result_normal)){
						//逐个去查找关注人的nickname和头像
						$contnet_id = $row['content_id'];
						$result_user = mysql_query("SELECT * FROM qj_user
WHERE user_id='$contnet_id'");
						while($row_user = mysql_fetch_array($result_user)){
							$normal_care[$num_normal]['nickname'] = $row_user['user_nickname'];
							$normal_care[$num_normal]['image'] = $row_user['user_image'];
							$normal_care[$num_normal]['user_id'] = $row_user['user_id'];
							$num_normal++;
							break;
							}
						}
					mysql_close($con);
					for($i=0;$i<$num_normal;$i++){
						?>
                <div class="people">
                  <img src="<?php echo $normal_care[$i]['image']; ?>" />
                        <span><?php echo $normal_care[$i]['nickname']; ?></span>
                        <img src="img/unchecked.png" class="choose"/>
                        <input type="text" id="<?php echo $i+$num_special ?>" name="<?php echo $normal_care[$i]['user_id']; ?>" value="<?php echo $normal_care[$i]['user_id']; ?>" style="display:none"/>
                      </div>
                      <?php
						}
				?>
				</div>
			</div>
		</div>
        <input type="submit" style="display:none" name="finish_invite" id="finish_invite" />
        </form>
	</body>
    <?php
	if(!empty($_POST['finish_invite'])){
		$con = mysql_connect("127.0.0.1","root","tokushimazg");
		if(!$con)	echo  mysql_error(); 
		mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
		$db_selected = mysql_select_db("qj",$con);
		$time=date('Y-m-d H:i:s');
		for($i=0;$i<$num_special;$i++){
			if($_POST[$special_care[$i]['user_id']]=="选中"){
				//echo $special_care[$i]['user_id'];
				$invite_id = $special_care[$i]['user_id'];
				mysql_query("INSERT INTO qj_group_people (user_id, group_id, time,is_agree) VALUES ('$invite_id','$group_id','$time','1')");
				}
			}
		for($i=0;$i<$num_normal;$i++){
			if($_POST[$normal_care[$i]['user_id']]=="选中"){
				//echo $normal_care[$i]['user_id'];
				$invite_id = $normal_care[$i]['user_id'];
				mysql_query("INSERT INTO qj_group_people (user_id, group_id, time,is_agree) VALUES ('$invite_id','$group_id','$time','1')");
				}
			}
		mysql_close($con);
		header("Location: group_chat.php?room_id=$group_id&user_id=$user_id");
		}
	
	?>
	<script>
		var aa = 0;
		var choose=document.getElementsByClassName("choose");
		for(var i=0;i<choose.length;i++){
			choose[i].index=0;
			choose[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				if(this.index==0){
					this.src="img/checked.png";
					this.index=1;
				}
				else{
					this.src="img/unchecked.png";
					this.index=0;
				}
			},false);
		}
		
		$("#next").click(function(){
			var num_special = "<?php echo $num_special ?>";
			var num_normal = "<?php echo $num_normal ?>";
			var sum = Number(num_special)+Number(num_normal);
			var my_care = new Array();
			//获得我特别关注的人的user_id
			for(var i=0;i<num_special;i++){
				my_care[i] = $("#"+i).val();
				}
			//获得我关注的人的user_id
			for(var i=num_special;i<sum;i++){
				my_care[i] = $("#"+i).val();
				}
			//my_care为我所关注的人的id,按顺序依次下来,先是特别关注,再是关注
			var choose=document.getElementsByClassName("choose");
			for(var i=0;i<choose.length;i++){
				if(choose[i].index == 1){
					document.getElementById(""+i).value = "选中";
					//alert(document.getElementById(""+i).value);
					}
			}
			document.getElementById("finish_invite").click();
			});
	</script>
</html>
