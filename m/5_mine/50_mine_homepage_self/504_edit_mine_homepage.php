<?php
require_once "../../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	<meta name="format-detection" content="telephone=no,email=no,date=no,address=no">	
	<title>编辑个人资料</title>
	<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
	<link rel="stylesheet" type="text/css" href="../../3_publish/34_publish_club/css/Edit_Club.css"/>
	<script src="../../js/jquery-2.2.3.min.js"></script>
	<script src="js/ajax_504_edit_mine_homepage.js"></script>
</head>
<style>
		.t{
			width:2.6rem;padding: 0.2rem;font-size: 0.4rem;
			color:white;text-align: center;background:#ffc040 ;margin: 0.3rem;border-radius: 0.4rem;
		}
		.tt{
			width:2.6rem;padding: 0.2rem;font-size: 0.4rem;
			color:white;text-align: center;background:#ff9000 ;margin: 0.3rem;border-radius: 0.4rem;
		}		
			.tap_out{
			padding-left: 0;
		}
		@media screen and (min-width:365px){ 
			.t{
				width:3.2rem;padding: 0.2rem;
				color:white;text-align: center;background:#ffc040 ;margin: 0.3rem;border-radius: 0.4rem;				
			}
		.tt{
			width:3.2rem;padding: 0.2rem;
			color:white;text-align: center;background:#ff9000 ;margin: 0.3rem;border-radius: 0.4rem;
		}				
		.tap_out{
			padding-left: 1.4rem;}
		}		
</style>
	<body style="background-color: #ece9e3 !important;height: 100vh;">
	<!--顶部-->
		<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base">
		    <a class="aui-pull-left aui-btn" href="50_mine_homepage_self.html">
		        <span class="aui-iconfont aui-icon-left-white" style="color: white !important;">编辑个人资料</span>
		    </a>
		    <a class="aui-pull-right aui-btn" id="furnish">完成</a>
		</header>
		<!--!--////////////////////////////////logo-->
		<div class="Club_logo">
			<form action="" method="post" enctype="multipart/form-data">
				<a href="#" id="add_Club_logo"></a>
				<div id="show_Club_logo">
			  	 	<img id="Club_logo" width="100%" height="100%"/> 
			  	 	<img src="http://img.lizi123.cn/LiZi/ffunction/img/concret/1-3.png" id="camera"/>
				</div>
			</form>
		</div>
		<div class="aui-content">
			<ul class="aui-list aui-form-list">
				<li class="aui-list-item">
					<div class="aui-list-item-inner">
						<div class="aui-list-item-label">栗子昵称</div>
				        <div class="aui-list-item-input">
		                    <input type="text" placeholder="" id="name" maxlength="15">
		                </div>
	                </div>
	        	</li>
	        	<li class="aui-list-item">
					<div class="aui-list-item-inner">
						<div class="aui-list-item-label">个人简介</div>
				        <div class="aui-list-item-input">
		                    <textarea placeholder="" id="intro" maxlength="140" style="height: 6rem;"></textarea>
		                </div>
	                </div>
	        	</li>
	            <li class="aui-list-item">
		            <div class="aui-list-item-inner">
		            	<div class="aui-list-item-label">兴趣标签</div>
	<a href="http://m.lizi123.cn/7_login/74_login_chooseLabel/74_login_chooseLabel.html#">
		<div id="tag_list" class="aui-row"style="width: 100%;">
		<div class="aui-row aui-col-xs-12 tap_out">
			<div class="aui-label aui-font-size-12 tt">标签</div>
			<div class="aui-label aui-font-size-12 tt">标签</div>		
			<div class="aui-label aui-font-size-12 tt">标签</div>	
		</div>
		<div class="aui-row aui-col-xs-12 tap_out">
			<div class="aui-label aui-font-size-12 t">标签</div>
			<div class="aui-label aui-font-size-12 t">标签标签</div>	
		</div>		
	</div></a>
		            </div>
		        </li>
		   </ul>
		</div>
		<div class="yinying"></div>
	</div>
	</body>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。 
  // 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  wx.config({
  	debug:false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
    // 所有要调用的 API 都要加到这个列表中
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
  	// 1 判断当前版本是否支持指定 JS 接口，支持批量判断
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
	        //alert(JSON.stringify(res));
	      }
	    });
	  
	  
	  images = {
        localId: [],
        serverId: []
   };
	  document.querySelector('#add_Club_logo').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                images.serverId = [];
								document.getElementById("Club_logo").src=images.localId[0];
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
	  
	  
//	 	document.querySelector("#preview").onclick=function(){
//	 		wx.previewImage({
//		     	 current: images.localId[0],
//		     	 urls: [
//		    	    images.localId[0]
//		    	  ]
//		 	});
//	 	}
//	  var shareData = {
//          title: '栗子校园',
//          desc: '栗子校园',
//          link: 'http://qj_wa.qdmedia.cc/LiZi/footer/footer.html',
//          imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
//      };
//      wx.onMenuShareAppMessage(shareData);
//      wx.onMenuShareTimeline(shareData);
//      wx.onMenuShareQQ(shareData);
//      wx.onMenuShareWeibo(shareData);
	  
 });
</script>
</html>
</html>