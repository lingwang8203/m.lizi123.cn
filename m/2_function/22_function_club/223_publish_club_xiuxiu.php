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
	<title>发布社团秀秀</title>
	<script type="text/javascript" src="../../js/jquery-2.2.3.min.js"></script>
	<link rel="stylesheet" href="../../css/aui.2.0.css"/>
	<link rel="stylesheet" href="../../3_publish/33_publish_show/css/new_publish_show.css" />
	<script src="js/ajax_223_publish_club_xiuxiu.js"></script>
	<style type="text/css">
		.aui-list textarea{
			height: 9rem;
		}
	</style>
</head>
<body>
	<!--顶部，发布活动-->
		<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base" style="color: #212121 !important;">
		    <a class="aui-pull-left aui-btn" id="return">
		        <span class="aui-iconfont aui-icon-left-black"></span>
		    </a>
		    <div class="aui-title aui-font-size-20">发布社团秀秀</div>
		    <a class="aui-pull-right aui-btn" style="color: #212121 !important;" id="furnish">发布</a>
		</header>
		<div class="aui-content aui-margin-b-15">
			<ul class="aui-list aui-form-list">
	            <li class="aui-list-item">
		            <div class="aui-list-item-inner">
		                <div class="aui-list-item-input">
		                    <textarea placeholder="秀出社团的风采" id="content" maxlength="140"></textarea>
		                </div>
		            </div>
		        </li>
		   </ul>
		</div>
		<div id="add_show_miaoshu_img" style="display: block !important;"></div>
		<div id="img_div">
			<div  class="show_miaoshu_img">
			    <img id="preview0" width="-1" height="-1" style="display: none" /> 
			</div>
			<div  class="show_miaoshu_img">
			    <img id="preview1" width="-1" height="-1" style="display: none" /> 
			</div>
			<div class="show_miaoshu_img">
			    <img id="preview2" width="-1" height="-1" style="display: none" />  
			</div>
			<div class="show_miaoshu_img">
			    <img id="preview3" width="-1" height="-1" style="display: none" />  
			</div>
		</div>
		<div id="img_div">
			<div  class="show_miaoshu_img">
			    <img id="preview4" width="-1" height="-1" style="display: none" /> 
			</div>
			<div  class="show_miaoshu_img">
			    <img id="preview5" width="-1" height="-1" style="display: none" /> 
			</div>
			<div class="show_miaoshu_img">
			    <img id="preview6" width="-1" height="-1" style="display: none" />  
			</div>
			<div  class="show_miaoshu_img">
			    <img id="preview7" width="-1" height="-1" style="display: none" /> 
			</div>
		</div>
		<div id="img_div" style="margin-bottom: 3vh;">
			<div  class="show_miaoshu_img">
			    <img id="preview8" width="-1" height="-1" style="display: none" /> 
			</div>
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
	  var img_length;
	  document.querySelector('#add_show_miaoshu_img').onclick=function(){
	  	wx.chooseImage({
                       count: 9, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

								for(var j=0;j<length;j++){
									document.getElementById("preview"+j).style.display="inline-block";
									document.getElementById("preview"+j).style.width="100%";
									document.getElementById("preview"+j).style.height="100%";
									document.getElementById("preview"+j).src=images.localId[j];
								}
								for(var k=length;k<9;k++){
									document.getElementById("preview"+k).style.display="none";
								}
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
	 for(var l=0;l<9;l++){
	 	document.querySelector("#preview"+l).index=l;
	 	document.querySelector("#preview"+l).onclick=function(){
	 		wx.previewImage({
		     	 current: images.localId[this.index],
		     	 urls: [
		    	    images.localId[this.index]
		    	  ]
		 	});
	 	}
	 }
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