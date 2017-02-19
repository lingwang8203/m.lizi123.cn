<?php
require_once "../../test/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>发布课程</title>
	<link rel="stylesheet" href="../../publish/css/new_publish_class.css"/>
	<script type="text/javascript" src="../../ffunction/js/jquery-2.2.3.min.js"></script>
	<!--引用css-->
	<link rel="stylesheet" type="text/css" href="../dist/css/wangEditor-mobile.css">
	<script type="text/javascript" src="../../publish/js/new_publish_class_first.js"></script>
	<style type="text/css">
		body {
			background-color:#f1f1f1;
			/*text-shadow: 0 0 2px #ccc;*/
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
		.container {
			width:100%; 
			height:50vh; 
			border:1px solid #ccc;
			background-color: #fff;
			text-align: left;
			box-shadow: 0 0 10px #ccc;
			text-shadow: none;
			margin-top: 0.5vh;
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
	<!--顶部，发布课程-->
	<header>
		<a href="../footer/footer.html" id="more">
			<img src="../../index/img/return1.png">
		</a>
		<h1>发布课程</h1>
		<a href="#" id="furnish">下一步</a>
	</header>
	<form action="" method="post" id="fb_class">
		<input type="text" id="class_header" placeholder="添加标题"/>
	</form>
	<center>
		<div class="container">
			<textarea id="textarea1" style="width:100%;height:100%;" placeholder="请输入课程详情">
			</textarea>
		</div>
	</center>
		<a id="add_class_miaoshu_img" href="#">
			<!--<input type="file" name="file" id="upload_class_miaoshu_img"  onchange="javascript:setImagePreview();" multiple="multiple"/>-->
		</a>
		<div id="show_class_miaoshu_img1" class="show_class_miaoshu_img">
		    <img id="preview1" width="-1" height="-1" style="display: none" /> 
		</div>
		<div id="show_class_miaoshu_img2" class="show_class_miaoshu_img">
		    <img id="preview2" width="-1" height="-1" style="display: none" /> 
		</div>
		<div id="show_class_miaoshu_img3" class="show_class_miaoshu_img">
		    <img id="preview3" width="-1" height="-1" style="display: none" />  
		</div>
		<!-- //放大预览层-->
		<div id="zoom_preview"><img id="zoom_img"/></div>
		<span id="add_label">添加标签</span>
		<div id="frame_back" style="display: none;"></div>
		<div id="change_module" style="display: none;">
			<div class="tap_class">
				<p id="exchange">选择标签(不超过三个)</p>
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
		    <a href="#" id="refresh_label">换一批标签</a>
		    <a href="#" id="cancel_change_module">取消</a>
		    <a href="#" id="confirm_change_module">好</a>
		</div>
		<!--//已选择标签-->
		<p id="label">已选择标签:<span id="label0">标签一</span><span id="label1">标签二</span><span id="label2">标签三</span></p>
	<script type="text/javascript" src="../dist/js/lib/zepto.js"></script>
	<script type="text/javascript" src="../dist/js/lib/zepto.touch.js"></script>
	<script type="text/javascript" src="../dist/js/wangEditor-mobile.js"></script>
	<script type="text/javascript">
	$(function () {

		// 全局配置
		// ___E.config.menus = ['bold', 'color', 'quote'];

		// 生成编辑器
		var editor = new ___E('textarea1');

		// 自定义配置
		editor.config.uploadImgUrl = 'http://qj_api.qdmedia.cc/index.php/home/index/uploads';

		// editor.config.menus = ['bold', 'quote', 'list','img'];

		// 初始化
		editor.init();

		console.log(editor.$txt);
	});
	</script>
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
	        alert(JSON.stringify(res));
	      }
	    });
	  
	  
	  var images = {
        localId: [],
        serverId: []
    };
	  var img_length;
	  document.querySelector('#add_class_miaoshu_img').onclick=function(){
	  	wx.chooseImage({
                       count: 3, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

//                              var time = new Date().getTime();
//                              var tag = time + "_" + Math.random();
								if(length==1){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.display="none";
									document.getElementById("preview1").src=images.localId[0];
								}
								else if(length==2){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview2").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview2").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.height="100%";
									document.getElementById("preview1").src=images.localId[0];
									document.getElementById("preview2").src=images.localId[1];
								}
								else if(length==3){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview2").style.display="inline-block";
									document.getElementById("preview3").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview2").style.width="100%";
									document.getElementById("preview3").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.height="100%";
									document.getElementById("preview3").style.height="100%";
									document.getElementById("preview1").src=images.localId[0];
									document.getElementById("preview2").src=images.localId[1];
									document.getElementById("preview3").src=images.localId[2];
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
                                            else {
                                            	alert(images.serverId);
                                            	alert(images.serverId.length);
                                            	for(var j=0;j<images.serverId.length;j++){
                                            	$.ajax({
											            type:"POST",
											           	//dataType:"json",
											            //traditional:true,
											            url:"http://qj_api.qdmedia.cc/index.php/home/index/weixinUploads",
											            data:{
											            	"serverId":images.serverId[j],
											            },
											            success:function(data){
											            	
											                var obj = eval(data);
											                //alert(obj.id);
											                alert(obj.msg);
											                console.dir(obj);
											                //转到发布页面第二步
															//window.location.href="new_publish_class_second.html?skill_id="+obj.id;
											            },
											            error:function(data){
											                alert("error!");
											            },
											    });
                                            }
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
	  
	
	  document.querySelector("#preview1").onclick=function(){
	  		 if(img_length==1){
			  	 wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==2){
	 	    	wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0],
		    	    images.localId[1]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==3){
	 	    	wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0],
		    	    images.localId[1],
		    	    images.localId[2]
		    	  ]
		 	     });
	 	    }
	 	 }
	 	 
	 document.querySelector("#preview2").onclick=function(){
	 		if(img_length==2){
			  	 wx.previewImage({
		     	 current: images.localId[1],
		     	 urls: [
		     	 	images.localId[0],
		    	    images.localId[1]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==3){
	 	    	 wx.previewImage({
		     	 current: images.localId[1],
		     	 urls: [
		     	 	images.localId[0],
		    	    images.localId[1],
		    	    images.localId[2]
		    	  ]
		 	     });
	 	    }
	 	 }
	 
	 document.querySelector("#preview3").onclick=function(){
		  	 wx.previewImage({
	     	 current: images.localId[2],
	     	 urls: [
	     	    images.localId[0],
		    	images.localId[1],
	    	    images.localId[2]
	    	  ]
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