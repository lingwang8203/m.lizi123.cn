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
		<title>发布活动</title>
		<script type="text/javascript" src="../../js/jquery-2.2.3.min.js"></script>
		<link rel="stylesheet" href="css/publish_activities.css"/>
		<link rel="stylesheet" href="../../css/aui.2.0.css"/>
		<script src="js/ajax_publish_activities_step1.js"></script>
		<style type="text/css">
			.aui-list textarea{
				height: 10rem;
			}
		</style>
	</head>
	
	<body>
		<!--顶部，发布活动-->
			<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base" style="color: white !important;">
			    <a class="aui-pull-left aui-btn" href="http://m.lizi123.cn/index.html">
			        <span class="aui-iconfont aui-icon-left-black"></span>
			    </a>
			    <div class="aui-title aui-font-size-20">发布活动</div>
			    <a class="aui-pull-right aui-btn" style="color: #212121 !important;" id="furnish">完成</a>
			</header>
			
			<form action="" method="post" id="poster">
				<a href="#" id="upload_poster_img"></a>
				<div id="show_poster_img" class="show_poster_img">
			  	 	<img id="preview" width="-1" height="-1" style="display: none" /> 
				</div>
			</form>						
			<div class="aui-content aui-margin-b-15">
		        <ul class="aui-list aui-list-in">		            
		            <li class="aui-list-item">
		                <div class="aui-list-item-inner">
		                    	添加标题
		                </div>
		            </li>		            
		        </ul>
    		</div>
			
			<div class="aui-content aui-margin-b-15">
        		<ul class="aui-list aui-list-in">
            		
            		<li class="aui-list-item aui-list-item-middle">
            			<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ClOCK.png" class="aui-img-round aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner aui-list-item-arrow">               			
                    		时间
                    	</div>
           	 		</li>
           	 		
           			<li class="aui-list-item">
           				<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/LeiXing.png" class=" aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner aui-list-item-arrow">
                    		类型
                		</div>
            		</li>
            		
            		<li class="aui-list-item">
            			<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/LaiXIngBiaoQing.png" class=" aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner aui-list-item-arrow">
                    		标签
                		</div>
            		</li>
            		
            		<li class="aui-list-item">
            			<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/BaoMing.png" class=" aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner aui-list-item-arrow">
                    		报名信息
                		</div>
            		</li>
            		
            		<li class="aui-list-item">
            			<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/DiDian.png" class="aui-img-round aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner">
                    		报名地点
                		</div>
                		<div class="aui-col-xs-18 aui-font-size-14 aui-list-item-input"style="height: 2.2rem;" >
							<textarea placeholder="        输入活动地点" id="content" maxlength="14"style="height: 2.2rem;"></textarea>
						</div>
            		</li>
            		
            		<li class="aui-list-item">
            			<div class="aui-list-item-label-icon">
	                		<i class="aui-iconfont ">
	                			<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/HuoDongXiangQing.png" class="aui-img-round aui-col-xs-6"style="height: 1rem;width: 1rem;"/>
	                		</i>
           				</div>
                		<div class="aui-list-item-inner">
                    		活动详情
                		</div>            
            		</li>
            		
            		<li class="aui-list-item">
				        <div class="aui-list-item-inner">
				            <div class="aui-list-item-input aui-margin-l-15"style="height: 15rem;">
				                <textarea placeholder="详细描述下这次活动的安排啥啥吧~" id="content" maxlength="500" minlength="15"class="aui-font-size-12 aui-margin-l-15"></textarea>
				            </div>
				        </div>
				    </li>
        		</ul>       		
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
	  wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];
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