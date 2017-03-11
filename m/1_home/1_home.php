<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>首页</title>
		<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
		<link rel="stylesheet" type="text/css" href="../css/aui.2.0.css" />
		<link rel="stylesheet" type="text/css" href="css/index.css" />
		<link rel="stylesheet" type="text/css" href="../css/aui-slide.css" />
		<link rel="stylesheet" type="text/css" href="../css/iconfont_like.css" />
		
		<?php include("../footer.html);?>
		
		<script src="../js/jquery-2.2.3.min.js"></script>
		<script src="../js/add_loading.js"></script>
		<script src="js/ajax_home.js"></script>
	</head>

	<body>
	
		<!-------------------顶部------------------>
		<header class="aui-bar aui-bar-nav aui-row">
			<a href="http://m.lizi123.cn/7_login/73_login_location/73_login_location.php" target="_blank" class="aui-pull-left aui-btn aui-col-xs-4">
				<img src="http://img.lizi123.cn/LiZi/index/img/place.png" class="btn-place aui-pull-left" />
				<p class="aui-font-size-14 aui-pull-left" id="placeName">华侨大学</p>
			</a>
			<div class="aui-title aui-col-xs-5">
				<img src="http://img.lizi123.cn/LiZi/index/img/logo.png" id="logo" />
			</div>
			<div class="aui-col-xs-3 aui-row aui-pull-right">
				<a class="aui-pull-right aui-btn aui-col-xs-6" id="search" href="11_home_search/12_home_search.html" target="_blank">
					<span class="aui-iconfont aui-icon-search" style="padding-top: 0.1rem;"></span>
				</a>
				<a class="aui-pull-right aui-btn aui-col-xs-6" href="../6_chat/new_chat_homepage.php" target="_blank">
					<img src="http://img.lizi123.cn/LiZi/index/img/news_weidu.png" class="btn-news" id="message_state" style="width: 1.2rem;height:0.9rem;" />
				</a>
			</div>
		</header>
		<!--------------------------轮播-------------------------->
	<div id="aui-slide3">
	    <div class="aui-slide-wrap" >
	        <div class="aui-slide-node bg-dark">
	            <a href="" class="bannerLink"><img src="" class="banner"/></a>
	        </div>
	        <div class="aui-slide-node bg-dark">
	            <a href="" class="bannerLink"><img src="" class="banner"/></a>
	        </div>
	        <div class="aui-slide-node bg-dark">
	            <a href="" class="bannerLink"><img src="" class="banner"/></a>
	        </div>
	    </div>
	    <div class="aui-slide-page-wrap"><!--分页容器--></div>
	</div>
		<!--热门------------------------------------------------------------------------->
		<div class="aui-content title">
			<p class="aui-pull-left hot">热门内容</p>
			<a href="12_home_hotMore/12_home_hotMore.html" target="_blank">
				<p class="aui-pull-right aui-font-size-12 more aui-text-yellow">更多</p>
			</a>
		</div>
		<div id="aui-slide">
			<div class="aui-slide-wrap">
				<div class="aui-slide-node" style="background: none;">
					<div class="aui-grid">
						<div class="aui-row">
							<a href="../2_function/23_function_sports/232_function_sports_concret.html" class="hot_content_link" target="_blank">
								<div class="aui-col-xs-4 aui-text-center" style="padding: 0;background: #ffde9b;height: 100%">
									<div class="aui-grid-label aui-font-size-16 hot_title">摄影技巧</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">522人参与</div>
								</div>
							</a>
							<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank" class="hot_content_link">
								<div class="aui-col-xs-4" style="padding: 0;background: #ffd98c">
									<div class="aui-grid-label aui-font-size-16 hot_title">化妆技巧</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">365人参与</div>
								</div>
							</a>
							<a href="../2_function/21_function_class/212_function_class_concret.html" target="_blank" class="hot_content_link">
								<div class="aui-col-xs-4" style="padding: 0;background:#ffd277">
									<div class="aui-grid-label aui-font-size-16 hot_title">一起来画画</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">256人参与</div>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div class="aui-slide-node" style="background: none;">
					<div class="aui-grid">
						<div class="aui-row">
							<a href="../2_function/21_function_class/212_function_class_concret.html" target="_blank" class="hot_content_link">
								<div class="aui-col-xs-4" style="padding: 0;background: #ffce6a;">
									<div class="aui-grid-label aui-font-size-16 hot_title">玩转吉他</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">156人参与</div>
								</div>
							</a>
							<a href="../2_function/21_function_class/212_function_class_concret.html" target="_blank" class="hot_content_link">
								<div class="aui-col-xs-4" style="padding: 0;background: #ffc95a">
									<div class="aui-grid-label aui-font-size-16 hot_title">汉服活动</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">252人参与</div>
								</div>
							</a>
							<a href="../2_function/21_function_class/212_function_class_concret.html" target="_blank" class="hot_content_link">
								<div class="aui-col-xs-4" style="padding: 0;background:#ffc040">
									<div class="aui-grid-label aui-font-size-16 hot_title">攀岩趣味</div>
									<div class="aui-grid-label aui-font-size-12 hot_num" style="margin: 0 1rem 0 1rem;border-top: 0.05rem solid white;">58人参与</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="aui-slide-page-wrap">
				<!--分页容器-->
			</div>
		</div>
		<!-----------------今日推送-------------->
		<div class="aui-content title">
			<p class="aui-pull-left hot">今日精选</p>
		</div>
		<div class="aui-content">
			<ul class="aui-list" id="todayReCommend">
				<!----------------------秀秀推送格式（一图）-------------->
				<!--<li class="aui-row aui-padded-b-5 aui-padded-t-5" style="width:100%;background: white;">
			<div class="aui-col-xs-2 aui-text-center" style="margin: 0;padding: 0;margin-top: 0.1rem;">
				<a href="../5_mine/51_mine_homepage/51_mine_homepage.html"target="_blank"><img src="http://img.lizi123.cn/LiZi/index/img/user1.png" class="aui-img-round" style="width:2rem;height:2rem;margin-top: 0.1rem;"/></a>
			</div>
			<div class="aui-col-xs-8 aui-row aui-padded-t-5">
				<div class="aui-col-12 aui-font-size-14">韶华嫣然。</div>
				<div class="aui-col-12 aui-font-size-12"style="color: #414141;height: 1rem;">"越努力越幸福，相"越努力越幸福，相信自己!"</div>
			</div>
			<div class="aui-col-xs-2 aui-font-size-12" style="margin-top: 0.3rem;color: #9E9E9E;">
			<div class="aui-text-center aui-padded-r-5">10:29</div></div>  <!--超过一天的把date和time都写，如：16/12/12 10:29。今天之内发布的，只出现time，如：10:23-->
				<!--<a href="../2_function/24_function_show/241_function_show_concret.html"target="_blank">
			<div class="aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10">快夸我萌好不好(*^__^*) 嘻嘻……</div>				
			<div class="aui-col-xs-12 aui-pull-left" style="padding:0 0.4rem;margin: 0;height:9rem;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/show_photo6.jpg" style="height:9rem;width: 100%;" /> 
			</div>			
			</a>
			<div class="aui-row aui-col-xs-12">
				<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
					<i class="aui-iconfont aui-icon-like" name="xiuxiu_dianzan"></i>
					<span class="aui-font-size-12">125</span>
				</div>
				<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank">
					<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
						<i class="aui-iconfont aui-icon-comment"></i>
						<span class="aui-font-size-12">289</span>
					</div>
				</a>
			</div>		
		</li>
		<div class="hr"></div>	-->
				<!----------------------秀秀推送格式(3图)-------------->
				<!--<li class="aui-row aui-padded-b-5 aui-padded-t-5"style="width:100%;background: white;">
			<div class="aui-col-xs-12 aui-row">
				<div class="aui-col-xs-2 aui-text-center" style="margin-top: 0.1rem;">
					<a href="../5_mine/51_mine_homepage/51_mine_homepage.html" target="_blank"><img src="http://img.lizi123.cn/LiZi/index/img/user1.png" class="aui-img-round" style="width:2rem;height:2rem;margin-top: 0.1rem;"/></a>
				</div>
			<div class="aui-col-xs-8 aui-row aui-padded-t-5">
				<div class="aui-col-12 aui-font-size-14">韶华嫣然。</div>
				<div class="aui-col-12 aui-font-size-12"style="color: #414141;height: 1rem;">"越努力越幸福，相"越努力越幸福，相信自己!"</div>
			</div>
			<div class="aui-col-xs-2 aui-font-size-12" style="margin-top: 0.3rem;color: #9E9E9E;">
			<div class="aui-text-center aui-padded-r-5">10:29</div></div>  <!--超过一天的把date和time都写，如：16/12/12 10:29。今天之内发布的，只出现time，如：10:23-->
				<!--</div>-->
				<!--<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank">
			<div class="aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5">珠海横琴长隆海洋王国真的好好玩吖！</div>
			<div class="aui-row aui-col-xs-12 "style="padding: 0.2rem;padding-bottom: 0;">
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show4.jpg"class="showphoto3"/>
				</div>
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show5.jpg"class="showphoto3"/>
				</div>
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show6.jpg"class="showphoto3"/>
				</div>	
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show1.jpg"class="showphoto3"/>
				</div>
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show2.jpg"class="showphoto3"/>
				</div>
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/24_function_show/show3.jpg"class="showphoto3"/>
				</div>		
			</div>
			</a>
			<div class="aui-row aui-col-xs-12">
				<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
					<i class="aui-iconfont aui-icon-like" name="xiuxiu_dianzan"></i>
					<span class="aui-font-size-12">125</span>
				</div>
				<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank">
					<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
						<i class="aui-iconfont aui-icon-comment"></i>
						<span class="aui-font-size-12">289</span>
					</div>
				</a>
			</div>				
		</li>
		<div class="hr"></div>		-->
				<!----------------------秀秀推送格式(2图)-------------->
				<!--<li class="aui-row aui-padded-b-5 aui-padded-t-5"style="width:100%;background: white;">
			<div class="aui-col-xs-12 aui-row">
				<div class="aui-col-xs-2 aui-text-center" style="margin-top: 0.1rem;">
					<a href="../5_mine/51_mine_homepage/51_mine_homepage.html" target="_blank"><img src="http://img.lizi123.cn/LiZi/index/img/user1.png" class="aui-img-round" style="width:2rem;height:2rem;margin-top: 0.1rem;"/></a>
				</div>
			<div class="aui-col-xs-8 aui-row aui-padded-t-5">
				<div class="aui-col-12 aui-font-size-14">韶华嫣然。</div>
				<div class="aui-col-12 aui-font-size-12"style="color: #414141;height: 1rem;">"越努力越幸福，相"越努力越幸福，相信自己!"</div>
			</div>
			<div class="aui-col-xs-2 aui-font-size-12" style="margin-top: 0.3rem;color: #9E9E9E;">
			<div class="aui-text-center aui-padded-r-5">16/12/12 10:29</div></div>  <!--超过一天的把date和time都写，如：16/12/12 10:29。今天之内发布的，只出现time，如：10:23-->
				<!--</div>
			<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank">
			<div class="aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5">我是真的好想你。</div>
			<div class="aui-row aui-col-xs-12 "style="padding: 0.2rem;padding-bottom: 0;">
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/show_photo2.jpg"class="showphoto3"/>
				</div>
				<div class="aui-col-xs-4 aui-text-center">
					<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/show_photo9.jpg"class="showphoto3"/>
				</div>		
			</div>
			</a>
			<div class="aui-row aui-col-xs-12">
				<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
					<i class="aui-iconfont aui-icon-like" name="xiuxiu_dianzan"></i>
					<span class="aui-font-size-12">125</span>
				</div>
				<a href="../2_function/24_function_show/241_function_show_concret.html" target="_blank">
					<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
						<i class="aui-iconfont aui-icon-comment"></i>
						<span class="aui-font-size-12">289</span>
					</div>
				</a>
			</div>				
		</li>
		<div class="hr"></div>	-->
				<!----------------------课程推送格式-------------->
				<!--<li class="aui-row aui-padded-t-5 aui-padded-b-5"style="width:100%;background: white;">
				<div class="aui-col-xs-2 aui-text-center"style="margin: 0;padding: 0;margin-top: 0.1rem;">
	        		<a href="../5_mine/51_mine_homepage/51_mine_homepage.html" style="width: 2rem !important;height:auto;"target="_blank"><img src="http://img.lizi123.cn/LiZi/index/img/user1.png" class="aui-img-round" style="width:2rem;height:2rem;margin-top: 0.1rem;" /></a>
	        	</div>
	        	<div class="aui-col-xs-6 aui-row aui-padded-t-5">
	        		<div class="aui-col-12 aui-font-size-14">韶华嫣然。</div>  
	 	      		<div class="aui-col-12 aui-font-size-12">越努力越幸福，相信自己！</div> 	        			
	        	</div>  
	    		<div class="aui-col-xs-4"style="margin-top: 0.3rem;">
	      			<a href="13_home_label/13_home_label.html"target="_blank"><div class="aui-label aui-pull-right aui-font-size-12 tap">摄影摄影</div></a>
	        	</div>       
	        	<a href="../2_function/21_function_class/212_function_class_concret.html" style="color: #212121 !important;"target="_blank">
		        	<div class="aui-row aui-col-xs-12">
				        <div class="aui-col-xs-5 aui-pull-left"style="height: 8.4rem;	padding: 0.5rem !important;padding-top: 0 !important;">
				        		<img src="http://img.lizi123.cn/LiZi/index/img/class_photo.png"style="height:8.4rem;width: 100%;" />
				        </div>
			        	<div class="aui-col-xs-7 aui-row aui-pull-left">
			        		<div class="aui-row aui-col-12 ">
			        			<div class="aui-col-12 aui-font-size-18 ">"标题名字"</div>
			        		</div>		        		
			        		<div class="aui-row aui-col-12 ">
			        			<div class="aui-col-xs-4  aui-font-size-12">上课方式</div>
			        			<div class="aui-col-xs-8 aui-font-size-12">线上·一对一</div>
			        		</div>	
			        		<div class="aui-row aui-col-12 ">
			        			<div class="aui-col-xs-4  aui-font-size-12">课程简介</div>
			        			<div class="aui-col-xs-8 aui-font-size-12">由华侨大学摄影协会会长线下教学的摄影课，提供上课时可用的单反摄影操作......</div>
			        		</div>	
			        		<div class="aui-row aui-col-12 ">
			        			<div class="aui-col-xs-4  aui-font-size-12">上课地点</div>
			        			<div class="aui-col-xs-8 aui-font-size-12">厦门校区 A336</div>
			        		</div>		 
			        		<div class="aui-row aui-col-12 ">
			        			<div class="aui-col-xs-4  aui-font-size-12">上课时间</div>
			        			<div class="aui-col-xs-8  aui-row aui-font-size-12">
			        				<div class="aui-col-12" >周一，二，三</div>
			        				<div class="aui-col-12">共 <span style="color: #ffac0d;">43</span>学时</div>	          				
			        			</div>
			        		</div>	        		
			        	</div>
		        	</div>
	        	</a>
	        	<div class="aui-row aui-col-xs-12">
		        	<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
		        		<i class="aui-iconfont aui-icon-like" name="class_dianzan"></i>
		        		<span class="aui-font-size-12">125</span>       		
		        	</div>
		        	<a href="../2_function/21_function_class/212_function_class_concret.html" target="_blank">
			        	<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
			        		<i class="aui-iconfont aui-icon-comment"></i>
			        		<span class="aui-font-size-12">289</span>       		
			        	</div> 
		        	</a>
		    		<div class="aui-col-xs-4 aui-pull-right">
		    			<a href="../2_function/23_function_sports/2321_function_sports_concret_fillMessage.html" target="_blank">
		      				<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on"style="margin-top: 0;">报名参加</div>
		      			</a>
		      	    </div> 	        	        	
		        </div>	        	
			</li>
		<div class="hr"></div>	-->
				<!------活动推送样式------------>
				<!--<li  class="aui-row aui-padded-b-5"style="width:100%;height: auto;position: relative;background: white;">
	        	<div class="aui-col-xs-12"style="padding: 0;margin: 0;height:auto;">
	        		<a href="../5_mine/51_mine_homepage/51_mine_homepage.html"target="_blank"><img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/show_photo5.jpg" style="height:16rem;width: 100%;"/></a>
	        	</div>
	        		<a href="13_home_label/13_home_label.html"target="_blank"><div class="aui-label aui-pull-right aui-font-size-12 tap"style="position: absolute;top: 0.5rem;right: 0;">摄影摄影</div></a>        	
        	<div class="sportcontect"style="width:100%;height: auto;position: absolute;bottom:1.8rem;">
	        	<div style="width: 100%;height: auto;">
		        	<div class="aui-col-xs-12 out">
		        		<div class="aui-col-xs-12 in_opacity"></div>
		        		<div class="aui-col-xs-2 join_title aui-text-center aui-row aui-margin-t-10">
		        			<div class="aui-font-size-16 aui-col-12">投票</div>
		        			<div class="aui-font-size-12 aui-col-12">进行中</div>
		        		</div>
		        		<div class="aui-row aui-col-xs-7 aui-padded-t-5 ">
		        			<div class="aui-font-size-16 aui-col-xs-12"style="color: white;max-height: 1.2rem;overflow: hidden;">春季流浪猫摄影影大浪猫11111111111111111...</div>
		        			<div class="aui-font-size-12 aui-col-xs-12"style="color: white;max-height:1.7rem !important;overflow:auto;">替他们表达心意（活动简介）</div>
		        			<div class="aui-font-size-12 aui-col-xs-12"style="color: white;">主办方：华侨大学爱心社</div>
		        		</div>
			    		<div class="aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5"style="width: auto;">
			      			<div class="aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-12"style="width: auto; color:white ;text-align: center;border-radius: 0.4rem;padding:0.1rem 0.3rem;">参与投票</div>
			        		<a href="../2_function/23_function_sports/232_function_sports_concret.html"target="_blank"><div class="aui-col-xs-12 aui-font-size-12"style="color: white;">
        					<div class="aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10"style="width: auto;">活动详情></div> 
			        		</div></a> 
			    		</div>           		
		        	</div>
	        	</div>
	        </div>
	        	<div class="aui-row aui-col-xs-12">
		        	<div class="aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left">
		        		<i class="aui-iconfont aui-icon-like" name="sport_dianzan"></i>
		        		<span class="aui-font-size-12">125</span>       		
		        	</div>
		        	<a href="../2_function/23_function_sports/232_function_sports_concret.html" target="_blank">
			        	<div class="aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left">
			        		<i class="aui-iconfont aui-icon-comment"></i>
			        		<span class="aui-font-size-12">289</span>       		
			        	</div> 	
		        	</a>
		        </div>	            	
	       </li>
		<div class="hr"></div>		       -->
				<!--社团推送样式---------->
				<!--<li class="aui-row aui-padded-b-5  aui-padded-t-5"style="border-top: 0.05rem solid  #f5f5f5;border-bottom: 0.05rem solid  #f5f5f5;background: white;">
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/5_mine/51_mine_homepage/photo.jpg"class="aui-img-round club_photo_suit" />
			</div>
			<div class="aui-col-xs-8">
				<div class="aui-col-xs-12 aui-font-size-16">栗子社</div>
				<div class="aui-col-xs-12 aui-font-size-12"style="color:#666666;">华侨大学厦门校区栗子研发实验室</div>
				<div class="aui-col-xs-12">
					<i class="aui-icon-my aui-iconfont aui-pull-left"></i>
					<div class="aui-font-size-12 aui-pull-left  aui-padded-l-5"style="padding-top: 0.1rem;color:#666666;"><span style="color:#ffcb53;"> 120人 </span>已加入</div>
				</div>
			</div>
		    <div class="aui-col-xs-2 aui-pull-right">
		      	<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on" name="tap_on">申请加入</div>
		      	<a href="../2_function/22_function_club/222_function_club_concret.html" target="_blank">
			      	<div class="aui-bar-ligh-col-xs-12">
			      		<i class="aui-iconfont aui-icon-right aui-pull-right aui-padded-r-15"></i>
			      	</div>
		      	</a>
		    </div> 			
		</li>	       -->
			</ul>
		</div>
	</div>
	</body>
	<script type="text/javascript" src="../js/aui-slide.js"></script>
	<script type="text/javascript">
//-----------------------轮播-------------------------------------
    var slide = new auiSlide({
        container:document.getElementById("aui-slide"),
        // "width":300,
        "height":50,
        "speed":300,
        "autoPlay": 500, //自动播放        
        "pageShow":false,
        "pageStyle":'dot',
        "loop":true,
        'dotPosition':'center',
        currentPage:currentFun
    })
       function currentFun(index) {
//      console.log(index);
    }
    var slide3 = new auiSlide({
        container:document.getElementById("aui-slide3"),
        // "width":300,
        "height":200,
        "speed":500,
        "autoPlay": 3000, //自动播放
        "loop":true,
        "pageShow":true,
        "pageStyle":'dot',
        'dotPosition':'center'
    })
//  console.log(slide3.pageCount());
			//----------------------------报名参加----------
		var join = new Array;;
		join = document.getElementsByName("tap_on");
		for(var i = 0; i < join.length; i++) {
			join[i].addEventListener("touchstart", function(e) {
				e.preventDefault();
				this.style.cssText = "color:white;text-align: center;background:#ffc040 ;margin: 0.3rem;border-radius: 0.4rem;";
				this.innerHTML = "已申请";
			}, false);
		}
	</script>

</html>