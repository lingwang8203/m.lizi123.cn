<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">		
		<title>系统聊天列表</title>
		<link rel="stylesheet" type="text/css" href="../css/aui.2.0.css" />
	</head>
	<style>
		.touxiang{
			width:2.6rem;height:2.6rem;margin-top: 0.1rem;
		}
		.new_chat{
			color:white;background: red;width: auto;border-radius: 50%;margin-right: 1rem;margin-top: 0.1rem;
		}
		.new_chat_dot{
			padding:0 0.3rem;border-radius: 50%;color: red;
		}
		.right_photo{
			width: 100%;
			height: 4rem;
		}
		.aui-col-xs-33 {
			position: relative;
			float: left;			
			width: 22%;
		}		
		@media screen and (min-width:365px){
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
			 <a href="http://m.lizi123.cn/6_chat/new_chat_homepage.php" class="aui-pull-left aui-col-xs-2 aui-font-size-18"><</a>	
			<div class="aui-col-xs-8 aui-text-center aui-font-size-16">系统消息</div>			       
		</header>	
		<!--列表-->
		<ul>
        
        <?php
		$user_id = $_GET['id'];	//用户id
		$con = mysql_connect("127.0.0.1","root","tokushimazg");
		if(!$con)	echo  mysql_error(); 
		mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
		$db_selected = mysql_select_db("lizi",$con);
		$result_system_message = mysql_query("SELECT * FROM lz_system_message
WHERE user_id='$user_id' ORDER BY time DESC");
		$system_message_number = 0;	//消息数
		//获取所有的消息
		while($row = mysql_fetch_array($result_system_message)){
			$system_message[$system_message_number]['time'] = $row['time'];
			$system_message[$system_message_number]['text'] = $row['text'];
			$system_message[$system_message_number]['type'] = $row['type'];
			$system_message[$system_message_number]['from_id'] = $row['from_id'];
			$system_message[$system_message_number]['object_id'] = $row['object_id'];
			$system_message[$system_message_number]['status'] = $row['status'];
			$system_message_number++;
			}
		//显示消息
		for($i=0;$i<$system_message_number;$i++){
			//平台系统通知
			if($system_message[$i]['type'] == 0){
				?>
                <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/6_chat/touxiang_system.png" class="aui-img-round touxiang"/>
					</div>
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14">系统消息</div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo $system_message[$i]['text']; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
                <?php
				//粉丝提示
				}else if ($system_message[$i]['type'] == 1){
					//获得该粉丝的头像与名字
					$fan_id = $system_message[$i]['from_id'];
					$result_inf_fan = mysql_query("SELECT * FROM lz_user WHERE id='$fan_id' ");
					while($row = mysql_fetch_array($result_inf_fan)){
						$system_message[$i]['fan_image'] = $row['head_image'];
						$system_message[$i]['fan_user_name'] = $row['user_name'];
						break;
						}
					?>
                    <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['fan_image']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/6_chat/siliao.php?id=<?php echo $system_message[$i]['from_id']; ?>&id2=<?php echo $user_id; ?>" tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['fan_user_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo $system_message[$i]['text']; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
                    <?php
					//社团提示
					}else if($system_message[$i]['type'] == 2){
						//获取社团的头像与名字
						$club_id = $system_message[$i]['object_id'];
						$result_inf_club = mysql_query("SELECT * FROM lz_club WHERE id='$club_id' ");
						while($row = mysql_fetch_array($result_inf_club)){
							$system_message[$i]['club_image'] = $row['image'];
							$system_message[$i]['club_name'] = $row['name'];
							break;
							}
							?>
                            <a href="http://m.lizi123.cn/2_function/22_function_club/222_function_club_concret.html?club_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['club_image']; ?>" class="aui-img-round touxiang"/>
					</div>
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['club_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo $system_message[$i]['text']; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
                            <?php
						//课程感悟提示
						}else if($system_message[$i]['type'] == 3){
							//获取发布人的头像与名字
							$student_id = $system_message[$i]['from_id'];
							$result_inf_student = mysql_query("SELECT * FROM lz_user WHERE id='$student_id' ");
							while($row = mysql_fetch_array($result_inf_student)){
								$system_message[$i]['student_image'] = $row['head_image'];
								$system_message[$i]['student_name'] = $row['user_name'];
								break;							
								}
							//获取该课程的名字,从show表中的class_id找过去
							$show_id = $system_message[$i]['object_id'];
							$result_inf_show = mysql_query("SELECT * FROM lz_show WHERE id='$show_id' ");
							while($row = mysql_fetch_array($result_inf_show)){
								$system_message[$i]['class_id'] = $row['class_id'];
								break;
								}
							$class_id = $system_message[$i]['class_id'];
							$result_inf_class = mysql_query("SELECT * FROM lz_class WHERE id='$class_id' ");
							while($row = mysql_fetch_array($result_inf_class)){
								$system_message[$i]['class_name'] = $row['name'];
								break;
								}
							?>
                            <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['student_image']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['student_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo "ta在课程《{$system_message[$i]['class_name']}》中发布了课程感悟"; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
                            <?php
							//活动花絮提示
							}else if($system_message[$i]['type'] == 4){
								//获得发布人的名字与头像
								$active_man_id = $system_message[$i]['from_id'];
								$result_inf_active_man = mysql_query("SELECT * FROM lz_user WHERE id='$active_man_id' ");
							while($row = mysql_fetch_array($result_inf_active_man)){
								$system_message[$i]['active_man_image'] = $row['head_image'];
								$system_message[$i]['active_man_name'] = $row['user_name'];
								break;							
								}
								//获取该活动的名字
								//获取该课程的名字,从show表中的class_id找过去
							$show_id = $system_message[$i]['object_id'];
							$result_inf_show = mysql_query("SELECT * FROM lz_show WHERE id='$show_id' ");
							while($row = mysql_fetch_array($result_inf_show)){
								$system_message[$i]['activity_id'] = $row['activity_id'];
								break;
								}
							$activity_id = $system_message[$i]['activity_id'];
							$result_inf_activity = mysql_query("SELECT * FROM lz_activity WHERE id='$activity_id' ");
							while($row = mysql_fetch_array($result_inf_activity)){
								$system_message[$i]['activity_name'] = $row['name'];
								break;
								}
								?>
                                <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['active_man_image']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['active_man_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo "ta在活动《{$system_message[$i]['activity_name']}》中发布了活动花絮"; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
								<?php
								//秀秀提示
								}else if($system_message[$i]['type'] == 5){
									//获得评论人的名字与头像
									$comment_person_id = $system_message[$i]['from_id'];
									$result_comment_person = mysql_query("SELECT * FROM lz_user WHERE id='$comment_person_id' ");
									while($row = mysql_fetch_array($result_comment_person)){
										$system_message[$i]['comment_person_head'] = $row['head_image'];
										$system_message[$i]['comment_person_name'] = $row['user_name'];
										break;
										}
									//获得评论的内容,由时间,评论人id,show_id去show_comment表中找到
									$show_id = $system_message[$i]['object_id'];
									$time = $system_message[$i]['time'];
									$result_comment = mysql_query("SELECT * FROM lz_show_comment WHERE user_id='$comment_person_id' and show_id='$show_id' and time='$time' ");
									while($row = mysql_fetch_array($result_comment)){
										$system_message[$i]['comment'] = $row['content'];
										break;
										}
									?>
                                    <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['comment_person_head']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['comment_person_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo "ta评论了你的秀秀:" ?></div>									
                    <div class="aui-col-xs-12 aui-font-size-12"style="color: black;"><?php echo $system_message[$i]['comment']; ?></div>										
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
									<?php
									//课程收藏提示
									}else if($system_message[$i]['type'] == 6){
										//获取该人的名字与头像
										$student_id = $system_message[$i]['from_id'];
										$result_inf_student = mysql_query("SELECT * FROM lz_user WHERE id='$student_id' ");
										while($row = mysql_fetch_array($result_inf_student)){
											$system_message[$i]['student_image'] = $row['head_image'];
											$system_message[$i]['student_name'] = $row['user_name'];
											break;
											}
										//获取该课程的名字
										$class_id = $system_message[$i]['object_id'];
										$result_inf_class = mysql_query("SELECT * FROM lz_class WHERE id='$class_id' ");
										while($row = mysql_fetch_array($result_inf_class)){
											$system_message[$i]['class_name'] = $row['name'];
											break;
											}
										?>
                                        <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['student_image']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['student_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo "{$system_message[$i]['text']}《{$system_message[$i]['class_name']}》"; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
                                        <?php
										//活动报名或活动收藏提示
										}else if ($system_message[$i]['type'] == 7){
											//获取该人的名字与头像
											$active_man_id = $system_message[$i]['from_id'];
											$result_inf_active_man = mysql_query("SELECT * FROM lz_user WHERE id='$active_man_id' ");
											while($row = mysql_fetch_array($result_inf_active_man)){
												$system_message[$i]['active_man_image'] = $row['head_image'];
												$system_message[$i]['active_man_name'] = $row['user_name'];
												break;						
												}
											//获取该活动的名字
											$activity_id = $system_message[$i]['object_id'];
											$result_inf_activity = mysql_query("SELECT * FROM lz_activity WHERE id='$activity_id' ");
											while($row = mysql_fetch_array($result_inf_activity)){
												$system_message[$i]['activity_name'] = $row['name'];
												break;
												}
											?>
                                             <a href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id=<?php echo $system_message[$i]['from_id']; ?>"  tartget="_blank">
                    <li>
				<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5">
					<div class="aui-col-xs-3 aui-padded-l-10 aui-padded-r-5" style="width: auto; margin-top: 0.1rem;position: relative;">
                    <?php if($system_message[$i]['status'] == 0){ //未读,头像右上角红点标识?><div class="aui-dot"style="position: absolute;top:0.5rem;right:0.25rem;"></div><?php }?>				
                    <img src="<?php echo $system_message[$i]['active_man_image']; ?>" class="aui-img-round touxiang"/></a>
					</div>
                    <a href="http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id=<?php echo $system_message[$i]['object_id']; ?>"  tartget="_blank">
					<div class="aui-col-xs-7 aui-row aui-padded-t-10">
						<div class="aui-col-12 aui-font-size-14"><?php echo $system_message[$i]['active_man_name']; ?></div>
						<div class="aui-col-xs-12 aui-font-size-12 aui-padded-t-5"style="color: #9E9E9E;"><?php echo "{$system_message[$i]['text']}《{$system_message[$i]['activity_name']}》"; ?></div>									
					</div>
					<div class="aui-col-xs-2 aui-font-size-12 aui-pull-right" style="margin-top: 0.3rem;color: #9E9E9E;"><?php show_time($system_message[$i]['time']); ?></div>				
				</div>
				<div class="aui-hr"></div>
			</li>	
            </a>
                                            <?php
											}
										
						
						
			}
		//将所有消息标识为已读
		mysql_query("UPDATE lz_system_message SET status = '1' WHERE user_id = '$user_id'");
		mysql_close($con);
		?>		
		</ul>
		
	</body>
</html>
