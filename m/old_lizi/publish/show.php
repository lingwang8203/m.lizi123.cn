<?php
require_once "../test/jssdk.php";
$jssdk = new JSSDK("wxcda8cccadc7b71b8", "22c1a729370f50cdb5a56431b8c56653");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>秀一秀</title>
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<link rel="stylesheet" href="css/show.css"/>
		<script src="http://api.map.baidu.com/api?v=1.4" type="text/javascript"></script>
	</head>
	<body>
		<!--顶部，秀一秀-->
		<header>
			<a href="../footer/footer.html" id="more"><</a>
			<h1>秀一秀</h1>
			<a href="#" id="furnish">发布</a>
		</header>
		<form action="" method="post">
			<div id="show_img">
				<div id="show_div">
			    	<img id="tupian" width="-1" height="-1" style="display: none" /> 
				</div>
				<a href="#" id="icon_paizhao"></a>
				<a href="#" id="choose_img"></a>
			</div>
		</form>
		<div id="shuo">
			<div class="tap_class">
				<p class="class">说点什么吧</p>
			</div>
			<textarea id="content" placeholder="   聊聊秀的内容"></textarea>
		</div>
		<div id="footer">
			<img src="http://img.lizi123.cn/LiZi/publish/img/aite.png" id="aite">
			<img src="http://img.lizi123.cn/LiZi/publish/img/jing.png" id="jing"/>
			<img src="http://img.lizi123.cn/LiZi/publish/img/weizhi.png" id="weizhi"/>
		</div>
	</body>
	<script src="js/show.js"></script>
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
	  ////////////////////手机拍照
	  document.querySelector('#icon_paizhao').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   						sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

									document.getElementById("tupian").style.display="inline-block";
									document.getElementById("tupian").style.width="100%";
									document.getElementById("tupian").style.height="100%";
									document.getElementById("tupian").src=images.localId[0];
								
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
	 /////////////相册选图
	 document.querySelector('#choose_img').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   						sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

									document.getElementById("tupian").style.display="inline-block";
									document.getElementById("tupian").style.width="100%";
									document.getElementById("tupian").style.height="100%";
									document.getElementById("tupian").src=images.localId[0];
								
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
//                                          	for(var j=0;j<images.serverId.length;j++){
//                                          	$.ajax({
//											            type:"POST",
//											           	//dataType:"json",
//											            //traditional:true,
//											            url:"http://qj_api.qdmedia.cc/index.php/home/index/weixinUploads",
//											            data:{
//											            	"serverId":images.serverId[j],
//											            },
//											            success:function(data){
//											            	
//											                var obj = eval(data);
//											                //alert(obj.id);
//											                alert(obj.serverId);
//											                console.dir(obj);
//											                //转到发布页面第二步
//															//window.location.href="new_publish_class_second.html?skill_id="+obj.id;
//											            },
//											            error:function(data){
//											                alert("error!");
//											            },
//											    });
//                                          }
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
	
	  
	  var shareData = {
            title: '栗子校园',
            desc: '栗子校园',
            link: 'http://qj_wa.qdmedia.cc/LiZi/footer/footer.html',
            imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
        };
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
	  
  });
</script>
</html>