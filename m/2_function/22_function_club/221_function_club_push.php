<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">		
		<title>社团</title>
		<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
		
		<script src="../../js/jquery-2.2.3.min.js"></script>
		<script src="js/ajax_function_club_push.js"></script>
		<script type="text/javascript" src="../js/aui-tab.js"></script>
		<?php include("../../footer.html"); ?>
		
	</head>
	<body>
		
		<!-------------------顶部------------------->
		<header class="aui-bar aui-bar-nav">
			<a target="_blank" href="http://m.lizi123.cn/1_home/11_home_search/12_home_search.html" class="aui-pull-left aui-btn  aui-col-xs-2">
				<span class="aui-iconfont aui-icon-search"></span>
			</a>
			<div class="aui-tab aui-col-xs-8 ffuntion" id="tab">
				<div class="aui-tab-item" style="background: none;color: white;" id="sports">活动</div>
				<div class="aui-tab-item" style="background: none;color: white;" id="club">社团</div>
				<div class="aui-tab-item" style="background: none;color: white;" id="subject">课程</div>
			</div>
			<a target="_blank" href="http://m.lizi123.cn/6_chat/new_chat_homepage.php" class="aui-pull-right aui-btn  aui-col-xs-2">
				<img src="http://img.lizi123.cn/LiZi/index/img/news.png" class="btn-news aui-pull-right" style="width: 1.2rem;height:0.9rem;" />
			</a>
		</header>
		
		<!--标签分类----------------------------------------------------------->
	<div class="aui-content"style="width: 100%;padding-top: 0.2rem;">
   		 <p class="aui-pull-left tit">社团分类</p>
	</div>	
	<div class="aui-row"style="width: 100%;padding-bottom: 0.2rem;">
		<div class="aui-col-xs-4 aui-text-center">
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12 " name="function_club_label"></div>	
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12"  name="function_club_label"></div>	
		</div>
		<div class="aui-col-xs-4 aui-text-center">
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12" name="function_club_label"></div>	
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12" name="function_club_label"></div>	
		</div>		
		<div class="aui-col-xs-4 aui-text-center">
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12" name="function_club_label"></div>	
			<div class="aui-label tap_nor aui-font-size-12  aui-col-xs-12" name="function_club_label"></div>	
		</div>			
	</div>
	<div class="aui-hr"></div>
	<!--------------社团推送---------->
	<ul id="club_label_push">
		
	</ul>
	</body>
</html>
