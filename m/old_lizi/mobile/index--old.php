<!DOCTYPE html>
<!-- saved from url=(0048)http://demo.open.weixin.qq.com/jssdk/#menu-share -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta charset="utf-8">
  <title>个性化鞋垫打印</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
 <!-- <link rel="stylesheet" href="http://demo.open.weixin.qq.com/jssdk/css/style.css">-->
  <link rel="stylesheet" href="boilerplate.css">
  <link rel="stylesheet" href="home.css">
  <link rel="stylesheet" href="gif.css">
  <link rel="stylesheet" href="css/swiper.min.css">
  <script type="text/javascript" src="js/json2.js"></script>
  <script type="text/javascript" src="js/json_parse.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0">

    <style>

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    </style>

</head>
<body>
	
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">

    		<input name="pcid" type="hidden" id="pcid" value="<?php echo $_GET["pcid"];?>"></input>
			<div id="primaryContainer" class="primaryContainer clearfix">
				<img id="Top" src="img/top.gif" class="image" />
				<input id="chooseImage" type="button" value="选择多张照片"></input>
			</div>

        </div>
        <div class="swiper-slide">

		    <div id="primaryContainer" class="primaryContainerGif clearfix">
		        <input id="input" type="button" value="中秋让爱回家"></input>
		    </div>

        </div>
    </div>
</div>
      
   
<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx94f8c61c85dc9075", "ce300467aab17adcb36379a9d63813a9");
$signPackage = $jssdk->GetSignPackage();


?> 
 
  <script src="./js/zepto.min.2.js" type="text/javascript"></script>
  <script src="../js/jquery.timers-1.2.js" type="text/javascript"></script>  
  <script src="./js/jweixin-1.0.0.js"></script>
  
  <script src="js/swiper.min.js"></script>
  <script>     
	var mySwiper = new Swiper ('.swiper-container', {
		
		direction : 'vertical',
		
		allowSwipeToNext : false,
		
		allowSwipeToPrev : false,
		
	  }) 
	     
  </script>

<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
      debug: false,
	   
    //  appId: 'wx94f8c61c85dc9075',
   //   timestamp: 1424157370,
   //   nonceStr: 'ZLE1pvq7dPbzOJaH',
  //    signature: 'd1217a1eb20c2edaf8f3e8d1e8c6908a26f9d0df',
	  
	   appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
	  
      jsApiList: [
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
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
</script>
<script>
/*
 * 注意：
 * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
 * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
 * 3. 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
 *
 * 如有问题请通过以下渠道反馈：
 * 邮箱地址：weixin-open@qq.com
 * 邮件主题：【微信JS-SDK反馈】具体问题
 * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
 */
  
   $(document).ready(function ()
        {
			//socket
			 var app_name = "xd_print";  //每个app 名字不一样
   
             var msg_from_server;
             var pcid  = document.getElementById('pcid').value;  //得到phpww传来的pcid值
   
             ws = new WebSocket("ws://jty_api.qdmedia.cc:1201");  //每个app 端口不一样
             ws.onopen = function() { 
	         var str1 = '{"type": "first_connect", "client_type": "html","app_name":"'+app_name+'","pcid":"' + pcid +'" }';  
	         ws.send( str1 );
	        // alert(str1);
   // ws.send('tom');
   // alert("给服务端发送一个字符串：tom");
   };

   ws.onmessage = function(e) {
    // alert("收到服务端的消息：" + e.data);
    msg_from_server = e.data;
    
    $("#msg").html( "这是从服务中接收到的信息："+ msg_from_server );
	
	var data = eval('(' + msg_from_server + ')');		//转化为Json
	
	if(data["msg"]["command"] == "end")
	{		
		
	}
   };



   ws.onerror = function(){ 
      $("#err_msg").html( "error..." ); 
   };  


  
  
  var click_times = 0;
  
 $("#btn").click(function(){
	  
	 
       click_times = click_times + 1;
	   var msg2u3d = '{"tag":"'+click_times+'"}';
       var str1 = '{"type": "send_msg", "client_type": "html","app_name":"'+app_name+'","pcid":"'+pcid+'","msg":'+msg2u3d+'}'; 
       ws.send( str1 ); 
	   
  });
  
			//end socket
			 var images = {
             localId: [],
             serverId: []
              };
  
			 $("#chooseImage").click(function()
			 {  
			    wx.chooseImage({
                   success: function (res) {
                    images.localId = res.localIds;
                  
					//upload
				  var i = 0, length = images.localId.length;
                  images.serverId = [];
				  
				   var time = new Date().getTime();
				   var tag = time + "_" + Math.random();
				        
				   upload();   
				
                  function upload()
				   {
                        wx.uploadImage({
                           localId: images.localId[i],
                           success: function (res) {
                           i++;

						   $.get("download_img.php?MediaID="+res.serverId+"&tag=" + tag,function(data,status){
                              
							    if (i == length)
							    {
								    setTimeout(function () {
									var msg2server = '{"tag":"'+tag+'"}';
                                    var str1 = '{"type": "send_msg", "client_type": "html","app_name":"'+app_name+'","pcid":"'+pcid+'","msg":'+msg2server+'}';
	  
                                    ws.send( str1 );
                               		
                               		mySwiper.slideNext(false,1000);		//页面滚动到下一页		
                               						 
									});//延迟两秒
							    }
                           }); 


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
						 
                   
	         	  
	 
					//end of upload
					
					
					
					
                     }   
			      }); 
		     });
			 
		
		
//wx.ready(function ()
 //{  
  
 // });
   
     
 
  var shareData = {
    title: '中秋团圆',
    desc: '中秋大团圆',
    link: 'http://app.qdmedia.cc/zhong_qiu/',
    imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
  };
  wx.onMenuShareAppMessage(shareData);
  wx.onMenuShareTimeline(shareData);
});

wx.error(function (res) {
  alert(res.errMsg);
});


</script>

<div><object id="ClCache" click="sendMsg" host="" width="0" height="0"></object></div></body></html>