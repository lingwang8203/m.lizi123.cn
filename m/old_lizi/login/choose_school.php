<?php
require_once "../test/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<title>é€‰æ‹©å­¦æ ¡</title>
		<link href="css/choose_school.css" rel="stylesheet"/>
	</head>
	<body>
		<h3 id="header">é€‰æ‹©å­¦æ ¡</h3>
		<div id="header_search">
		<input type="text" placeholder=" è¯·è¾“å…¥åŸŽå¸‚æˆ–å­¦æ ¡ " id="search" maxlength="12"/>
		<img src="img/search.png" id="search_image"/>
		</div>
		<p>å®šä½åŸŽå¸‚</p>
		<p id="city">åŽ¦é—¨</p>
		<p style="margin-top: 4vh;">å®šä½å­¦æ ¡</p>
		<p id="school">åŽä¾¨å¤§å­¦åŽ¦é—¨æ ¡åŒº</p>
		<p style="margin-top: 4vh;">ä¸´è¿‘å­¦æ ¡</p>
		<div id="near_school">
			<p name="school_name">åŽ¦é—¨ç†å·¥å­¦é™¢</p>
			<p name="school_name">åŽä¾¨å¤§å­¦åŽ¦é—¨å·¥å­¦é™?/p>
			<p name="school_name" class="checked">é›†ç¾Žå¤§å­¦è¯šæ¯…å­¦é™¢</p>
			<p name="school_name">åŽä¾¨å¤§å­¦åŽ¦é—¨æ ¡åŒº</p>
			<p name="school_name">é›†ç¾Žå¤§å­¦</p>
			<p name="school_name">é›†ç¾Žå¤§å­¦</p>
			<p name="school_name">é›†ç¾Žå¤§å­¦</p>
		</div>
		<div class="buttons">
			<div id="confirm">
				<button class="confirm" type="submit">ä¸‹ä¸€æ­?/button>
			</div>
		</div>
	</body>
	<script src="js/choose_school.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  // æ³¨æ„ï¼šæ‰€æœ‰çš„JSæŽ¥å£åªèƒ½åœ¨å…¬ä¼—å·ç»‘å®šçš„åŸŸåä¸‹è°ƒç”¨ï¼Œå…¬ä¼—å·å¼€å‘è€…éœ€è¦å…ˆç™»å½•å¾®ä¿¡å…¬ä¼—å¹³å°è¿›å…¥â€œå…¬ä¼—å·è®¾ç½®â€çš„â€œåŠŸèƒ½è®¾ç½®â€é‡Œå¡«å†™â€œJSæŽ¥å£å®‰å…¨åŸŸåâ€ã€?
  // å¦‚æžœå‘çŽ°åœ?Android ä¸èƒ½åˆ†äº«è‡ªå®šä¹‰å†…å®¹ï¼Œè¯·åˆ°å®˜ç½‘ä¸‹è½½æœ€æ–°çš„åŒ…è¦†ç›–å®‰è£…ï¼ŒAndroid è‡ªå®šä¹‰åˆ†äº«æŽ¥å£éœ€å‡çº§è‡?6.0.2.58 ç‰ˆæœ¬åŠä»¥ä¸Šã€?
  // å®Œæ•´ JS-SDK æ–‡æ¡£åœ°å€ï¼šhttp://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  wx.config({
  	debug:false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // æ‰€æœ‰è¦è°ƒç”¨çš?API éƒ½è¦åŠ åˆ°è¿™ä¸ªåˆ—è¡¨ä¸?
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
	    wx.checkJsApi({
	      jsApiList: [
	        'getNetworkType',
	        'getLocation',
	      ],
	      success: function (res) {
	        alert(JSON.stringify(res));
	      }
	    });
	  	alert(0);
	    wx.getLocation({
		    type: 'wgs84', // é»˜è®¤ä¸ºwgs84çš„gpsåæ ‡ï¼Œå¦‚æžœè¦è¿”å›žç›´æŽ¥ç»™openLocationç”¨çš„ç«æ˜Ÿåæ ‡ï¼Œå¯ä¼ å…¥'gcj02'
		    success: function (res) {
		        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
		        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
		        var speed = res.speed; // 速度，以米/每秒计
		        var accuracy = res.accuracy; // 位置精度
		        alert(latitude);
		    },
		    cancel: function (res) {
		        alert('用户拒绝授权获取地理位置');
		    }
		});


	});
</script>
</html>
