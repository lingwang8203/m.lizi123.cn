<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">	
	<title>社团记忆</title>
	<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
	<script src="http://apps.bdimg.com/libs/jquery/1.11.1/jquery.js"></script>
	<script src="js/ajax_3423_publish_club_step2_Manager_frame3.js"></script>
	
	<?php include("342_publish_club_step2_Manage.html");?>
	
	<style>
		.topCircle{
			width:4rem;
			height: 2rem;
		}
		#club_search::-webkit-input-placeholder {
			font-family: "微软雅黑";
			color: #ffcb79;
		}
		#club_search{
			font-size: 0.6rem;-webkit-appearance: none;float: left;width: 80%;height: 1.4rem;line-height: 1.4rem; color: #ffcb79;
		}
		.club_search_out{
			border: 0.1rem solid #ffc955;font-size: 0.4rem; border-radius: 0.25rem;height: 1.4rem;line-height: 1.4rem; color: #ffcb79;width: 80%;margin: 0 auto;
		}	
		.club_line{
			border: 0.07rem solid #ffc955;
			margin-top: 2.3rem;
		}
		.club_photo_record{
			width: 4.5rem;
			height: 4.5rem;
			border-radius: 50%;
			margin-left: 0.5rem;
			border: 0.1rem solid #ffc955 ;
		}
		@media screen and (min-width:365px){ 
		.club_photo_record{
			width: 5.5rem;
			height: 5.5rem;
		}
		.club_line{
			margin-top: 2.8rem;
		}		
		 }				
	</style>
</head>
<body>
	<div class="aui-content aui-text-center">
		<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/topCircle.png" class="topCircle"/>
	</div>
	<ul id="recall_list">
		<li class="aui-col-xs-12 aui-row">
			<div class="aui-col-xs-6 aui-padded-r-5"style="padding-top: 4.5rem;">
				<div class="club_search_out">
					<input type="search" placeholder="搜记忆"id="club_search"/>
					<i class="aui-iconfont aui-icon-search"style="color: #ffc955; float: left;padding-left: 0.2rem;"></i>
				</div>
				</div>
			<div class="aui-col-xs-6 aui-row"style="border-left: 0.1rem solid #ffc955 ;">
				<div class="aui-col-xs-2 club_line"></div>
				<div class="aui-col-xs-10">
					<a class="aui-pull-right ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/shanchu.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/photo1.png" class="club_photo_record"/>
					<a class="aui-pull-right  ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/Bianji.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
				</div>
				<div class="aui-col-xs-12 aui-row">
					<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #ffc955;padding:0 0.2rem;">外景写生</div>
					<div class="aui-col-xs-12 aui-font-size-12 aui-text-center"style="color: #ffc955;padding:0 0.2rem;">2016.04.12</div>
					<div class="aui-bar-ligh-col-xs-12 aui-font-size-12"style="color: #757575;padding:0 0.4rem;">鼓浪屿，一个充满魔力的地方，万物栩栩如生，拼命地成长着。</div>
				</div>
			</div>
		</li>
		<li class="aui-col-xs-12 aui-row">
			<div class="aui-col-xs-6 aui-padded-r-5">
				<div class="aui-col-xs-10">
					<a class="aui-pull-left ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/shanchu.png" class="aui-col-xs-4 aui-margin-l-5" />
					</a>
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/photo2.png" class="club_photo_record"style="margin: 0;margin-right: 0.4rem;float: right;"/>
					<a class="aui-pull-left  ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/Bianji.png" class="aui-col-xs-4 aui-margin-l-5" />
					</a>
				</div>
				<div class="aui-col-xs-2 club_line"style="float: right;"></div>				
				<div class="aui-col-xs-12 aui-row">
					<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">古装扮演</div>
					<div class="aui-col-xs-12 aui-font-size-12 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">2016.04.12</div>
					<div class="aui-bar-ligh-col-xs-12 aui-font-size-12"style="color: #757575;padding:0 0.1rem 0 0.6rem;">鼓浪屿，一个充满魔力的地方，万物栩栩如生，拼命地成长着。</div>
				</div>
			</div>
			<div class="aui-col-xs-6 aui-row"style="border-left: 0.1rem solid #ffc955 ;padding-top: 5rem;">
				<div class="aui-col-xs-2 club_line"></div>
				<div class="aui-col-xs-10">
					<a class="aui-pull-right ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/shanchu.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/photo3.png" class="club_photo_record"/>
					<a class="aui-pull-right  ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/Bianji.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
				</div>
				<div class="aui-col-xs-12 aui-row">
					<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">美术鉴赏</div>
					<div class="aui-col-xs-12 aui-font-size-12 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">2016.04.12</div>
					<div class="aui-bar-ligh-col-xs-12 aui-font-size-12"style="color: #757575;padding: 0 0.4rem;">鼓浪屿，一个充满魔力的地方，万物栩栩如生，拼命地成长着。</div>
				</div>
			</div>
		</li>		
		<li class="aui-col-xs-12 aui-row">
			<div class="aui-col-xs-6 aui-padded-r-5">
				<div class="aui-col-xs-10">
					<a class="aui-pull-left ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/shanchu.png" class="aui-col-xs-4 aui-margin-l-5" />
					</a>
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/photo4.png" class="club_photo_record"style="margin: 0;margin-right: 0.4rem;float: right;"/>
					<a class="aui-pull-left  ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/Bianji.png" class="aui-col-xs-4 aui-margin-l-5" />
					</a>
				</div>
				<div class="aui-col-xs-2 club_line"style="float: right;"></div>				
				<div class="aui-col-xs-12 aui-row">
					<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">摄影抓拍</div>
					<div class="aui-col-xs-12 aui-font-size-12 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">2016.04.12</div>
					<div class="aui-bar-ligh-col-xs-12 aui-font-size-12"style="color: #757575;padding:0 0.1rem 0 0.6rem;">鼓浪屿，一个充满魔力的地方，万物栩栩如生，拼命地成长着。</div>
				</div>
			</div>
			<div class="aui-col-xs-6"style="border-left: 0.1rem solid #ffc955 ;padding-top: 5rem;">
				<div class="aui-col-xs-2 club_line"></div>
				<div class="aui-col-xs-10">
					<a class="aui-pull-right ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/shanchu.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/22_function_club/photo5.png" class="club_photo_record"/>
					<a class="aui-pull-right  ">
						<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/Bianji.png" class="aui-col-xs-4 aui-pull-right aui-margin-r-15" />
					</a>
				</div>
				<div class="aui-col-xs-12 aui-row">
					<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">外景写生</div>
					<div class="aui-col-xs-12 aui-font-size-12 aui-text-center"style="color: #ffc955;padding: 0 0.2rem;">2016.04.12</div>
					<div class="aui-bar-ligh-col-xs-12 aui-font-size-12"style="color: #757575;padding: 0 0.4rem;">鼓浪屿，一个充满魔力的地方，万物栩栩如生，拼命地成长着。</div>
				</div>
			</div>
		</li>		
	</ul>
</body>
</html>