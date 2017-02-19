<?php
require_once "../../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">		
		<title>活动进展管理--发布进展</title>
		<link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />
		<script src="../../js/jquery-2.2.3.min.js"></script>
		<script src="js/aui-tab-latest.js"></script>
		<script src="js/ajax_31230_publish_sports_step2_Manage_frame3_publishLatest.js"></script>
	</head>
	<style>
		body{
			background: white;
		}
		#activity_title ::-webkit-input-placeholder {
			font-family: "微软雅黑";
			color: #ffdf95;
		}
		.latest_ic{
			width: 2rem;
			height: 2rem;
		}
		.shadow{
			-webkit-filter:grayscale(1);
		}
		.ff .aui-active{
	color: #fcb023;
	border-bottom: 2px solid #fcb023;
		}
	</style>
	<body>
		<!--  -顶部 -> -->
		<header class="aui-bar aui-bar-nav">
			 <a class="aui-pull-left aui-col-xs-2 aui-font-size-18" id="return"><</a>	
			<div class="aui-col-xs-8 aui-text-center aui-font-size-16" id="class_name">创新科技大赛</div>
			<a class="aui-pull-right aui-col-xs-2 aui-font-size-12" id="furnish">完成</a>	
		</header>
		<!-- 输入部分 -->
		<div class="aui-col-xs-12 aui-row aui-padded-t-10 aui-padded-b-10">
			<div class="aui-col-xs-2 tit"style="color: #686767;" >标题</div>
			<div class="aui-col-xs-9"id="activity_title">
                    <input type="text" placeholder="请在此处输入标题"style="color: #ffbf2a;" id="header" maxlength="15">
			</div>
		</div>
		<div class="hr"style="height: 0.1rem;"></div>
		<div class="aui-col-xs-12 aui-row aui-padded-t-10">
			<div class="aui-col-xs-12 tit" style="color: #686767;">选个你喜欢的图标吧~</div>
		</div>	
		<div class="aui-col-xs-12 aui-row aui-padded-t-10">
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_love.png"class="latest_ic" name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_text.png"class="latest_ic" name="latest_ic"  />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_good.png"class="latest_ic"  name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_leaf.png"class="latest_ic"  name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_write.png"class="latest_ic" name="latest_ic"  />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_music.png"class="latest_ic" name="latest_ic" />
			</div>			
		</div>
		<div class="aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-15">
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_gift.png"class="latest_ic" name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_search.png"class="latest_ic" name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_photo.png"class="latest_ic" name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_flaw.png"class="latest_ic" name="latest_ic"  />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_picture.png"class="latest_ic" name="latest_ic" />
			</div>
			<div class="aui-col-xs-2 aui-text-center">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_begin.png"class="latest_ic" name="latest_ic" />
			</div>			
		</div>	
		<div class="hr"></div>
		<!--  tab切换栏   -->
			<div class="aui-tab aui-col-xs-12 ff" id="tab">
			    <div class="aui-tab-item aui-active aui-col-xs-4"style="background: none;"id="else">详情类</div>
			    <div class="aui-tab-item aui-col-xs-4"style="background: none;"id="vote"><div></div>投票类</div>
			</div>
		       	
		<iframe name="ifram"  id="ifram"style="width: 100%;height: 100em;"src="312301_publish_sports_step2_Manage_frame3_publishLatest_frame1.php" frameborder=no  border=0  marginwidth=0  marginheight=0  scrolling=no></iframe>		
	</body>
	<script type="text/javascript">
        apiready = function(){
        	api.parseTapmode();
    	}
	    tab = new auiTab({
	        element:document.getElementById("tab"),
	        index:1,
	        // callback:function(o,dom){
	        //     console.log(o);
	        // }
	    },function(ret){
	        console.log(ret)
	    	// alert(window.index);
	    });
	</script>
	<script>
		var url_index="jinzhan";
		document.getElementById("return").addEventListener("touchstart",function(e){
			var url=location.href;  
	  		var tmp1=url.split("?")[1];  
	        var tmp3=tmp1.split("=")[1];  
	        var parm1=tmp3;   
			e.preventDefault();
			var myurl="http://m.lizi123.cn/3_publish/31_publish_sports/312_publish_sports_step2_Manage.html?activity_id="+parm1+"&url_index="+url_index;
			window.location.assign(myurl);
		},false);
	</script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script>
	  // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。 
	  // 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
	  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
	  wx.config({
	  	debug:true,
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
		  $("#ifram").contents().find("#add_show_miaoshu_img").click(function(){
		  	wx.chooseImage({
	                       count: 9, // 默认9
	                       success: function (res) {
	                           images.localId = res.localIds;

	                                //upload
	                                var i = 0, length = images.localId.length;
	                                img_length=length;
	                                images.serverId = [];

									for(var j=0;j<length;j++){
										var obj=document.getElementById("ifram").contentWindow;
										var ifmObj=obj.document.getElementById("preview"+j);
										ifmObj.style.display="inline-block";
										ifmObj.style.width="100%";ifmObj.style.height="100%";
										ifmObj.src=images.localId[j];
									}
	                                upload();

	                                function upload()
	                                {
	                                    wx.uploadImage({
	                                        localId: images.localId[i],
											//isShowProgressTips: 1,
	                                        success: function (res) {
	                                            i++;
	                                            images.serverId.push(res.serverId);
	                                            window.parent.xiangqing_images_serverId.push(res.serverId);
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
		 });
		for(var l=0;l<9;l++){
		 	document.getElementById("ifram").contentWindow.document.getElementById("preview"+l).index=l;
		 	$("#ifram").contents().find("#preview"+l).click(function(){
		 		wx.previewImage({
			     	current: images.localId[this.index],
			     	urls: [
			    	    images.localId[this.index]
			    	]
			 	});
		 	})
		 }	  
	});
	</script>
</html>	