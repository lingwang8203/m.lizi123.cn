<?php
require_once "../../test/jssdk.php";
$jssdk = new JSSDK("wx94f8c61c85dc9075", "ce300467aab17adcb36379a9d63813a9");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>发布活动</title>
	<script type="text/javascript" src="../../ffunction/js/jquery-2.2.3.min.js"></script>
	<link rel="stylesheet" href="../../publish/css/publish_activities.css"/>
	<link rel="stylesheet" type="text/css" href="../dist/css/wangEditor-mobile.css">
	<style type="text/css">
		body {
			/*background-color:#f1f1f1;*/
			text-shadow: 0 0 2px #ccc;
		}

		.wangEditor-mobile-menu-container {
			text-shadow: none;
		}

		a {
			text-decoration: none;
		}

		.title {
			padding: 15px 0;
			text-align: center;
			opacity: 0.7;
		}
		/*.wangEditor-mobile-menu-container{
			height: 6vw;
		}
		.item{
			font-size: 4vw;
		}*/
		.container {
			width:100%; 
			height:35vh; 
			border:1px solid #ccc;
			background-color: #fff;
			text-align: left;
			box-shadow: 0 0 10px #ccc;
			text-shadow: none;
			font-size: 3.5vw;
		}

		footer {
			width: 100%;
			text-align: center;
			padding: 10px 0;
			opacity: 0.6;
			margin-top: 10px;
		}

	</style>
</head>
<body>
	<!--顶部，发布活�?->
		<header>
		<a href="../footer/footer.html" id="more">
			<img src="../../index/img/return1.png">
		</a>
		<h1>发布活动</h1>
		<a href="#" id="furnish">下一�?/a>
	</header>
		<form action="" method="post" id="poster">
			<a href="#" id="upload_poster_img"></a>
			<div id="show_poster_img" class="show_poster_img">
		  	 	<img id="preview" width="-1" height="-1" style="display: none" /> 
			</div>
		</form>
		<div id="activities">
			<div id="activities_header">
				<input type="text" maxlength="15" id="header" name="activity_title" placeholder="添加标题"/>
			</div>
		</div>
	<center>
		<div class="container">
			<textarea id="textarea1" style="width:100%;height:100%;" placeholder="请输入活动详�?>
			</textarea>
		</div>
	</center>
	<span id="add_label">添加标签</span>
		<div id="frame_back" style="display: none;"></div>
		<div id="change_module" style="display: none;">
			<div class="tap_class">
				<p id="exchange">选择标签(不超过三�?</p>
			</div>
		    <div style="clear: both;"></div>
		    <a href="#" class="change_module_label_long label_back"><span>添加标签</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span></span></a>
		    <a href="#" id="refresh_label">换一批标�?/a>
		    <a href="#" id="cancel_change_module">取消</a>
		    <a href="#" id="confirm_change_module">�?/a>
		</div>
		<!--//已选择标签-->
		<p id="label">已选择标签:<span id="label0">标签一</span><span id="label1">标签�?/span><span id="label2">标签�?/span></p>
	</body>
	<script src="../../publish/js/publish_activities_first.js"></script>
	<script type="text/javascript" src="../dist/js/lib/zepto.js"></script>
	<script type="text/javascript" src="../dist/js/lib/zepto.touch.js"></script>
	<script type="text/javascript" src="../dist/js/wangEditor-mobile.js"></script>
	<script type="text/javascript">
	$(function () {

		// 全局配置
		// ___E.config.menus = ['bold', 'color', 'quote'];

		// 生成编辑�?
		var editor = new ___E('textarea1');

		// 自定义配�?
		editor.config.uploadImgUrl = 'http://api.lizi123.cn/index.php/home/index/uploads';

		// editor.config.menus = ['bold', 'quote', 'list','img'];

		// 初始�?
		editor.init();

		console.log(editor.$txt);
	});
	</script>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”�?
  // 如果发现�?Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级�?6.0.2.58 版本及以上�?
  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  wx.config({
  	debug:false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用�?API 都要加到这个列表�?
       'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
    ]
  });
  wx.ready(function () {
  	// 1 判断当前版本是否支持指定 JS 接口，支持批量判�?
	    wx.checkJsApi({
	      jsApiList: [
	        'getNetworkType',
	        'previewImage',
	        'getLocation',
	        'chooseImage',
	        'previewImage',
          'uploadImage',
          'downloadImage',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo'
	      ],
	      success: function (res) {
	        alert(JSON.stringify(res));
	      }
	    });
	  
	  
	  var images = {
        localId: [],
        serverId: []
    };
	  var img_length;
	  wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

//                              var time = new Date().getTime();
//                              var tag = time + "_" + Math.random();
								document.getElementById("preview").style.display="block";
								document.getElementById("preview").style.width="100%";
								document.getElementById("preview").style.height="100%";
								document.getElementById("preview").src=images.localId[0];
                                upload();

                                function upload()
                                {
                                    wx.uploadImage({
                                        localId: images.localId[i],
//                                      isShowProgressTips: 1,
                                        success: function (res) {
                                            i++;
                                            images.serverId.push(res.serverId);
                                            if (i < length)
                                            {
                                                upload();
                                            }
                                            else {
                                            	alert(images.serverId);
                                            	alert(images.serverId.length);
                                            }

                                        },
                                        fail: function (res)
                                        {
                                            alert(JSON.stringify(res));
                                        }
                                   });
                              }
                            
                                
                            }
                        });
	  document.querySelector('#upload_poster_img').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

//                              var time = new Date().getTime();
//                              var tag = time + "_" + Math.random();
								document.getElementById("preview").style.display="block";
								document.getElementById("preview").style.width="100%";
								document.getElementById("preview").style.height="100%";
								document.getElementById("preview").src=images.localId[0];
                                upload();

                                function upload()
                                {
                                    wx.uploadImage({
                                        localId: images.localId[i],
//                                      isShowProgressTips: 1,
                                        success: function (res) {
                                            i++;
                                            images.serverId.push(res.serverId);
                                            if (i < length)
                                            {
                                                upload();
                                            }
                                            else {
                                            	alert(images.serverId);
                                            	alert(images.serverId.length);
                                            }

                                        },
                                        fail: function (res)
                                        {
                                            alert(JSON.stringify(res));
                                        }
                                   });
                              }
                            
                                
                            }
                        });
	 }
//	  var shareData = {
//          title: '栗子校园',
//          desc: '栗子校园',
//          link: 'http://m.lizi123.cn/LiZi/footer/footer.html',
//          imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
//      };
//      wx.onMenuShareAppMessage(shareData);
//      wx.onMenuShareTimeline(shareData);
//      wx.onMenuShareQQ(shareData);
//      wx.onMenuShareWeibo(shareData);
	  
  });
</script>
</html>