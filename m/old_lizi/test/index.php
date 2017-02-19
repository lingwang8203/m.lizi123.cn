<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxcda8cccadc7b71b8", "22c1a729370f50cdb5a56431b8c56653");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  	<button id="checkjs" style="display: block; width: 100%;height: 80px;">checkjs</button>
  	<button id="getLocation" style="display: block; width: 100%;height: 80px;">getlocation</button>
  	<button id="choose_img" style="display: block; width: 100%;height: 80px;">choose_image</button>
  	<button id="download_img" style="display: block; width: 100%;height: 80px;">download_image</button>
  	<button id="preview_img" style="display: block; width: 100%;height: 80px;">preview_image</button>
  	<img src="../ffunction/img/club/photo2.jpg" width="50%" height="50%" id="image"/>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”�?
  // 如果发现�?Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级�?6.0.2.58 版本及以上�?
  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  wx.config({
  	debug:true,
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
	  document.querySelector('#checkjs').onclick = function () {
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
	  };
	  
	  document.querySelector('#getLocation').onclick = function () {
	  	alert("rig");
	    wx.getLocation({
	    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	    success: function (res) {
	        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180�?
	        var speed = res.speed; // 速度，以�?每秒�?
	        var accuracy = res.accuracy; // 位置精度
	    },
	    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
   		 }
		});
	  };
	  
	  var images = {
        localId: [],
        serverId: []
    };
	  
	  document.querySelector('#choose_img').onclick=function(){
	  	wx.chooseImage({
                       count: 9, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                images.serverId = [];

//                              var time = new Date().getTime();
//                              var tag = time + "_" + Math.random();
																document.getElementById("image").src=images.localId[0];
                                upload();

                                function upload()
                                {
                                    wx.uploadImage({
                                        localId: images.localId[i],
//                                      isShowProgressTips: 1,
                                        success: function (res) {
                                            i++;

//                                          $.get("download_img.php?MediaID="+res.serverId+"&tag=" + tag,function(data,status){
//
//                                              if (i == length)
//                                              {
//                                                  setTimeout(function () {
//                                                      var msg2server = '{"tag":"'+tag+'"}';
//                                                      var str1 = '{"type": "send_msg", "client_type": "html","app_name":"'+app_name+'","mid":"'+mid+'","msg":'+msg2server+'}';
//
//                                                      ws.send( str1 );
//
//                                                       $(".main1").addClass('main1-end');
//                                                       $(".main2-begin").addClass('main2-end');
//
//                                                     // mySwiper.slideNext(false,1000);		//页面滚动到下一�?
//
//                                                  });//延迟两秒
//                                              }
//                                          });


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
	  
						  document.querySelector("#download_img").onclick=function(){
								  	if (images.serverId.length === 0) {
							      alert('请先使用 uploadImage 上传图片');
							      return;
							    }
							    var i = 0, length = images.serverId.length;
							    images.localId = [];
							    function download() {
							      wx.downloadImage({
							        serverId: images.serverId[i],
							        success: function (res) {
							          i++;
							          alert('已下载：' + i + '/' + length);
							          images.localId.push(res.localId);
							          alert(images.localId);
							          if (i < length) {
							            download();
							          }
							        }
							      });
							    }
							    download();
						  }
	  
	  document.querySelector("#preview_img").onclick=function(){
		  	 wx.previewImage({
	      current: 'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
	      urls: [
	        images.localId
//	        'http://img5.douban.com/view/photo/photo/public/p1353993776.jpg',
//	        'http://img3.douban.com/view/photo/photo/public/p2152134700.jpg'
	      ]
	 	   });
	  }
	  
	  var shareData = {
            title: '栗子校园',
            desc: '栗子校园',
            link: 'http://m.lizi123.cn/LiZi/footer/footer.html',
            imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
        };
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
	  
  });
</script>
</html>