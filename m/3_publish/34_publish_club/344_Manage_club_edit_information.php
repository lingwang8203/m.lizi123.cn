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
	<title>编辑社团资料</title>
	<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
	<link rel="stylesheet" type="text/css" href="css/Edit_Club.css"/>
	<script src="../../js/jquery-2.2.3.min.js"></script>
	<script src="js/ajax_344_Manage_club_edit_information.js"></script>
</head>
	<!--顶部-->
		<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base">
		    <a class="aui-pull-left aui-btn" id="return">
		        <span class="aui-iconfont aui-icon-left-white" style="color: white !important;">编辑社团资料</span>
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
						<div class="aui-list-item-label">社团名称</div>
				        <div class="aui-list-item-input">
		                    <input type="text" placeholder="" id="name" maxlength="15">
		                </div>
	                </div>
	        	</li>
	        	<li class="aui-list-item">
					<div class="aui-list-item-inner">
						<div class="aui-list-item-label">社团简介</div>
				        <div class="aui-list-item-input">
		                    <textarea placeholder="" id="intro" maxlength="140"></textarea>
		                </div>
	                </div>
	        	</li>
	            <li class="aui-list-item">
		            <div class="aui-list-item-inner">
		            	<div class="aui-list-item-label">社团签名</div>
		                <div class="aui-list-item-input">
		                    <input type="text" placeholder="" id="belongTo" maxlength="15">
		                </div>
		            </div>
		        </li>
		        <li class="aui-list-item">
		            <div class="aui-list-item-inner">
		            	<div class="aui-list-item-label">社团类型</div>
		                <div class="aui-list-item-input">
		                    <span style="padding: 0.4vh 3vw;background-color: #ffbf2b;border-radius: 30px;color: white;"id="type">文化艺术</span>
		                </div>
		            </div>
		        </li>
		   </ul>
		</div>
		<div class="yinying"></div>
		<div class="pageclub_photo">
			<div class="photo_box" >
				<div class="club_photo">
						<a href="#" class="add_pageclub_photo" ></a>
						<div id="show_pageclub_photo" class="show_pageclub_photo">
						 	<img id="photo1" width="100%" height="100%" /> 
						</div>
				</div>
			</div>
		</div>
		<div id="img_div">
			<div  class="show_pageclub_photo">
			    <img id="preview0" width="-1" height="-1" style="display: none" /> 
			</div>
			<div  class="show_pageclub_photo">
			    <img id="preview1" width="-1" height="-1" style="display: none" /> 
			</div>
			<div class="show_pageclub_photo">
			    <img id="preview2" width="-1" height="-1" style="display: none" />  
			</div>
			<div class="show_pageclub_photo">
			    <img id="preview3" width="-1" height="-1" style="display: none" />  
			</div>
		</div>
		<div id="img_div">
			<div  class="show_pageclub_photo">
			    <img id="preview4" width="-1" height="-1" style="display: none" /> 
			</div>
			<div  class="show_pageclub_photo">
			    <img id="preview5" width="-1" height="-1" style="display: none" /> 
			</div>
			<div class="show_pageclub_photo">
			    <img id="preview6" width="-1" height="-1" style="display: none" />  
			</div>
			<div  class="show_pageclub_photo">
			    <img id="preview7" width="-1" height="-1" style="display: none" /> 
			</div>
		</div>
		<div id="img_div" style="margin-bottom: 3vh;">
			<div  class="show_pageclub_photo">
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
	  
	  
	  clubphoto = {
        localId: [],
        serverId: []
   };
	  document.querySelector('#show_pageclub_photo').onclick=function(){
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
                                            clubphoto.serverId.push(res.serverId);
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
	 	document.querySelector("#preview"+l).onclick=function(){//alert("serverId"+clubphoto.serverId);
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
</html>