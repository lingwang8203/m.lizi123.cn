<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
		<title>管理社团主页</title>
		<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
		<!--link rel="stylesheet" type="text/css" href="../../css/iconfont_like.css" />-->
		<link rel="stylesheet" type="text/css" href="css/index.css" />
		<script src="../../js/jquery-2.2.3.min.js"></script>
		<script src="js/ajax_3421_publish_club_step2_Manager_frame1.js"></script>
		
		<?php include("342_publish_club_step2_Manage.html");?>
		
	</head>

	<style>
		#club_headImg {
			width: 3rem;
			height: 3rem;
			margin-top: 1rem;
		}
		
		@media screen and (min-width:365px) {
			#club_headImg {
				width: 4rem;
				height: 4rem;
				margin-top: 0;
			}
		}
		
		.club_photo_record {
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 50%;
			border: 4px solid #FFFFFF;
		}
		
		.miaoBianClub {
			color: white;
			border-top: 4px solid white;
			z-index: 100;
		}
		
		.TouWei {
			height: 8rem;
			position: relative;
			bottom: 1rem;
			z-index: 120;
		}
		
		.weiZhiClub {
			height: 6rem;
			margin-right: 12rem;
			position: relative;
			top: 4rem;
			z-index: 0;
		}
		.out1{
			height: 4rem;
    		position: absolute;
    		bottom: 0;
		}
		.join_title {
    		color: white;
    		border: 0.1rem solid white;
    		padding: 0.2rem;
    	}
	</style>

	<body>
		<div class="aui-content">
			<ul class="aui-list">
				<li class="aui-row aui-padded-b-5 aui-padded-t-0" style="width:100%;height: auto;position: relative;">
					<div class="aui-col-xs-12" style="padding: 0;margin: 0;height: auto;">
						<img src="http://m.lizi123.cn/2_function/22_function_club/image/she_fenmian.jpg" style="height: 16rem;width: 100%;" />
					</div>
					<div class="sportcontect" style="width: 100%;height: auto;position: absolute;bottom: 0.5rem;">
						<div style="width: 100%;height: auto;">
							<div class="aui-col-xs-20 out" style="width: 100%;">
								<div class="aui-col-xs-12 in_opacity" style="width: 100%;height: 6rem;"></div>
								<div class="aui-col-xs-12 miaoBianClub aui-margin-b-15 weiZhiClub" style="width: 100%;">
									<div class="aui-col-xs-9 aui-row aui-text-center " style="top: 1rem;left: 5rem;">
										<div id="club_name" class="aui-font-size-16 aui-col-xs-8 aui-text-center" style="color: white;">文学社
											<div class="aui-font-size-12 aui-col-xs-8 aui-pull-right aui-padded-t-5" style="color: white;text-align: left;" id="club_school">(华侨大学)</div>
										</div>
									</div>
									<div class="aui-col-xs-12 aui-row aui-padded-t-10 aui-padded-l-15 aui-padded-r-15" style="top: 1.5rem;">
										<p id="club_miaoshu" class="aui-font-size-12 aui-col-xs-14" style="color: white;line-height: 130%;">"俨然依旧，一副温柔娴淑岁月安好的样子谢你们，带着包容，依次出现在我那不上不下的年纪里 " </p>
									</div>
								</div>
								<div class="aui-row aui-col-xs-3 aui-pull-right aui-padded-b-5 aui-padded-r-5" style="bottom: 4.5rem;">
									<div class="iconfont_like icon-xin aui-pull-right aui-font-size-20 aui-col-xs-12 " style="color: white;">
										<div class="aui-label lab_join aui-margin-l-15 aui-font-size-12">178</div>
									</div>
								</div>
								<div class="aui-col-xs-6 aui-margin-l-10 TouWei " style="bottom: 5rem;">
									<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/WenXueShe_Tou.jpg" class="aui-img-round club_photo_record" />
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>

			<div class="aui-row" style="width: 100%;height: 5rem;background: white;">
				<a class="aui-col-xs-3" href="34312_public_club_step2_Manage_frame1_editMessage.html" target="_blank" style="left: 1rem;" id="add_public">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/GongGao.png" class="aui-padded-t-10 " style="height: 4rem;left: 4rem;" />
				</a>
				<a class="aui-col-xs-3" href="../31_publish_sports/311_publish_sports_step1.php" target="_blank" style="left: 1rem;" id="add_activity">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/HuoDong.png" class="aui-padded-t-10 " style="height: 4rem;left: 4rem;" />
				</a>
				<a class="aui-col-xs-3" href="34331_publish_club_step2_Manage_frame3_publishRecord.html" target="_blank" style="left: 1rem;" id="fabu_memory">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/JiYi.png" class="aui-padded-t-10 " style="height: 4rem;left: 4rem;" />
				</a>
				<a class="aui-col-xs-3" href="34331_public_club_Manage_frame3_readApply.html" target="_blank" style="left: 1rem;" id="check_request">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/ShengQing.png" class="aui-padded-t-10 " style="height: 4rem;left: 4rem;" />
				</a>
			</div>

		</div>

		<div class="aui-content " style="width: 100%;background: white;">
			<div>
				<ul class="aui-list-header aui-row aui-padded-b-5 tit" style="width: 72%;display: inline-block;text-align: left;">
					<div style="color: #000000;">社团成员</div>
				</ul>
				<a class="aui-pull-right aui-margin-r-15 aui-font-size-14" href="345_manage_club_member.html" target="_blank">人></a>
				<a class="aui-font-size-12 aui-pull-right aui-margin-r-0" href="345_manage_club_member.html" target="_blank" style="color: #212121;padding-top: 0.1rem;right: 1em;" id="club_member_number">51</a>
			</div>

			<li class="aui-row aui-padded-b-5 aui-padded-t-5 aui-padded-l-5 aui-padded-r-5 aui-margin-t-5" style="width:100%;background:white;height: 4rem;" id="club_member_list">
				<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/touxiang1.jpg" class="aui-img-round aui-col-xs-2" />
				<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/touxiang3.jpg" class="aui-img-round aui-col-xs-2" />
				<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/touxiang3.jpg" class="aui-img-round aui-col-xs-2" />
				<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/touxiang4.jpg" class="aui-img-round aui-col-xs-2" />
				<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/touxiang4.jpg" class="aui-img-round aui-col-xs-2" />
				<img src="http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/add.png" class="aui-img-round aui-col-xs-2" id="add_club_member" />
			</li>
		</div>

		<div class="aui-content" style="width: 100%;background: white;">
			<div>
				<ul class="aui-list-header aui-row aui-padded-b-5 tit" style="width: 72%;display: inline-block;">
					<div style="color: #000000;">社团活动</div>
				</ul>
				<a class="aui-pull-right aui-margin-r-15 aui-font-size-14" href="../../2_function/22_function_club/2221_club_member.html" target="_blank">个></a>
				<a class="aui-font-size-12 aui-pull-right aui-margin-r-0" style="color: #212121;padding-top: 0.1rem;right: 1em;" id="club_active_number">51</a>
			</div>

			<!--
      	作者：2249986392@qq.com
      	时间：2017-03-09
      	描述：
    
		<div class="aui-card-list"style="width: 100%;background: white;">
			<div class="aui-card-list-content-padded aui-border-b aui-border-t">
				<div class="aui-row aui-row-padded"  id="club_poster">
					<div class="aui-col-xs-4">
						<a href="../21_function_class/212_function_class_concret.html" target="_blank"><img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/haibao1.JPG"/></a>
					</div>
					<div class="aui-col-xs-4">
						<a href="../23_function_sports/232_function_sports_concret.html" target="_blank"><img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/haibao2.JPG"/></a>
					</div>
					<div class="aui-col-xs-4">
						<img src="http://img.lizi123.cn/new_lizi/2_function/22_function_club/haibao3.jpg"/>
					</div>
				</div>
			</div>
		</div>  -->

			<!--
        	作者：2249986392@qq.com
        	时间：2017-03-09
        	描述：TEXT
        -->
			<li class="aui-row aui-padded-b-5 " style="width:100%;height: auto;position: relative;">
				<div class="aui-col-xs-12" style="padding: 0;margin: 0;height:auto;">
					<img src="E:\前端\m\3_publish\34_publish_club\img" style="height:16rem;width:100%;">
				</div>
				<a target="_blank" href="13_home_label/13_home_label.html?tag_id=4">
					<div class="aui-label aui-pull-right aui-font-size-12 tap" style="position: absolute;top: 0.5rem;right: 0;">Aftereffet</div>
				</a>
				<div class="sportcontect" style="width:100%;height: auto;position: absolute;bottom:1.8rem;">
					<div style="width: 100%;height: auto;">
						<div class="aui-col-xs-12 out1">
							<div class="aui-col-xs-12 in_opacity"></div>
							<div class="aui-col-xs-2 join_title aui-text-center aui-row aui-margin-t-10">
								<div class="aui-font-size-16 aui-col-12">报名</div>
								<div class="aui-font-size-12 aui-col-12">进行中</div>
							</div>
							<div class="aui-row aui-col-xs-7 aui-padded-t-5 aui-margin-l-5">
								<div class="aui-font-size-16 aui-col-xs-12" style="color: white;max-height: 1.2rem;overflow: hidden;">好吃</div>
								<div class="aui-font-size-12 aui-col-xs-12" style="color: white;max-height:1.7rem !important;overflow:auto;">混乱了</div>
								<div class="aui-font-size-12 aui-col-xs-12" style="color: white;">主办方:IAM郭MQ</div>
							</div>
							<div class="aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5" style="width:auto;">
								<a href="../../2_function/23_function_sports/232_function_sports_concret.html?activity_id=51" target="_blank">
									<div class="aui-col-xs-12 aui-font-size-12" style="color: white;">
										<div class="aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-b-0" style="width: auto;">活动详情&gt;</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="aui-row aui-col-xs-12">
					<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
						<i class="aui-iconfont aui-icon-like" name="sport_dianzan"></i>
						<span class="aui-font-size-12" style="padding-left:4px !important;">0</span>
					</div>
					<a href="../2_function/23_function_sports/232_function_sports_concret.html?activity_id=51" target="_blank">
						<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
							<i class="aui-iconfont aui-icon-comment"></i>
							<span class="aui-font-size-12" style="padding-left:4px !important;">0</span>
						</div>
					</a>
					<a class="aui-font-size-12 aui-pull-right aui-margin-r-5" href="../../2_function/22_function_club/2221_club_member.html" target="_blank" style="color: #212121;padding-top: 0.1rem;right: 2em;" id="club_member_number">更多活动></a>
				</div>
			</li>

		</div>

	</body>

</html>