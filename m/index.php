<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>首页</title>
		<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
		<link rel="stylesheet" type="text/css" href="css/aui.2.0.css" />
        <link rel="stylesheet" type="text/css" href="css/iconfont.css" />  
		<link rel="stylesheet" type="text/css" href="1_home/css/index.css" />
		<link rel="stylesheet" type="text/css" href="css/aui-slide.css" />
		<link rel="stylesheet" type="text/css" href="css/iconfont_like.css" />
		
		<?php include("footer.html"); ?>
		
		<script src="js/jquery-2.2.3.min.js"></script>		
		<script src="1_home/js/ajax_home.js"></script>
		<script src="js/add_loading.js"></script>		
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

				<!----------------------课程推送格式-------------->

				<!------活动推送样式------------>

				<!--社团推送样式---------->
	
			</ul>
		</div>
	</div>
	</body>
	

</script><script type="text/javascript" src="js/api.js" ></script>

	<script type="text/javascript" src="js/aui-slide.js"></script>
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