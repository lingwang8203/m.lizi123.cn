<?php
require_once "../../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
		<script src="../../js/jquery-2.2.3.min.js"></script>
		<title>创建社团</title>
		<link href="../../css/aui.2.0.css" rel="stylesheet"/>
		<link href="css/Create_PageClub.css" rel="stylesheet"/>
		<script src="js/ajax_341_Create_PageClub.js"></script>
	</head>
	<body>
		<!--顶部-->
		<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base" style="color: #212121 !important;">
		    <a class="aui-pull-left aui-btn" href="../../5_mine/53_mine_club/531_mine_club_manage.html">
		        <span class="aui-iconfont aui-icon-left-black"></span>
		    </a>
		    <div class="aui-title aui-font-size-20">社团基本信息</div>
		    <a class="aui-pull-right aui-btn" style="color: #212121 !important;" id="furnish">下一步</a>
		</header>
		<form action="" method="post" id="logo">
			<a href="#" id="add_logo"></a>
			<div id="show_logo" class="show_logo">
		  	 	<img id="preview" width="-1" height="-1" style="display: none" /> 
		  	 	<!--<img src="../../favicon.ico" width="100%" height="100%"/>-->
			</div>
		</form>
		<input type="text" maxlength="15" placeholder="填写社团名称" id="edit_clubname"/>
		<!--//已选择标签-->
		<p id="label">已选择类别:<span id="label0">标签一</span></p>
		<p id="tips">点击[下一步]代表你已阅读并同意<a href="#">用户使用协议</a></p>
		<!--////////////////弹出层-->
		<div id="back"></div>
		<div id="choose_fenlei">
			<div class="tap_class">
				<p class="class">选择社团分类</p>
			</div>
			<div style="height: 1vh;clear: both;"></div>
			<div class="tabs">
				<span id="1" class="unchecked" name="leibie">社会实践</span>
				<span id="2" class="unchecked" name="leibie">学生组织</span>
			</div>
			<div style="height: 5vh;"></div>
			<div class="tabs">
				<span id="3" class="unchecked" name="leibie">学术科技</span>
				<span id="4" class="unchecked" name="leibie">志愿服务</span>
			</div>
			<div style="height: 5vh;"></div>
			<div class="tabs">
				<span id="5" class="unchecked" name="leibie">文化艺术</span>
				<span id="6" class="unchecked" name="leibie">体育娱乐</span>
			</div>
			<p id="confirm">好</p>
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
	        // alert(JSON.stringify(res));
	      }
	    });
	  
	  
	  images = {
        localId: [],
        serverId: []
    };
	  var img_length;
	  document.querySelector('#add_logo').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];
                                document.getElementById("add_logo").style.backgroundImage="none";
								document.getElementById("preview").style.display="inline-block";
								document.getElementById("preview").style.width="100%";
								document.getElementById("preview").style.height="100%";
								document.getElementById("preview").src=images.localId[0];
								//alert("wwwwwwwww");
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