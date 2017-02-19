<?php
require_once "../test/jssdk.php";
$jssdk = new JSSDK("wxcda8cccadc7b71b8", "22c1a729370f50cdb5a56431b8c56653");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<title>选择学校</title>
		<link href="css/choose_school.css" rel="stylesheet"/>
	</head>
	<body>
		<h3 id="header">选择学校</h3>
		<div id="header_search">
		<input type="text" placeholder=" 请输入城市或学校 " id="search" maxlength="12"/>
		<img src="img/search.png" id="search_image"/>
		</div>
		<p>定位城市</p>
		<p id="city">厦门</p>
		<p style="margin-top: 4vh;">定位学校</p>
		<p id="school">华侨大学厦门校区</p>
		<p style="margin-top: 4vh;">临近学校</p>
		<div id="near_school">
			<p name="school_name">厦门理工学院</p>
			<p name="school_name">华侨大学厦门工学�?/p>
			<p name="school_name" class="checked">集美大学诚毅学院</p>
			<p name="school_name">华侨大学厦门校区</p>
			<p name="school_name">集美大学</p>
			<p name="school_name">集美大学</p>
			<p name="school_name">集美大学</p>
		</div>
		<div class="buttons">
			<div id="confirm">
				<button class="confirm" type="submit">下一�?/button>
			</div>
		</div>
	</body>
	<script src="js/choose_school.js"></script>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  // 注意：所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”�?
  // 如果发现�?Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级�?6.0.2.58 版本及以上�?
  // 完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
  wx.config({
  	debug:false,
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
	    wx.checkJsApi({
	      jsApiList: [
	        'getNetworkType',
	        'getLocation',
	      ],
	      success: function (res) {
	        alert(JSON.stringify(res));
	      }
	    });
	  	
	    wx.getLocation({
	    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	    success: function (res) {
	        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180�?
	        var speed = res.speed; // 速度，以�?每秒�?
	        var accuracy = res.accuracy; // 位置精度
	        alert(latitude);
  			alert(longitude);
  			$.ajax({
                type:"POST",
                url:"http://api.lizi123.cn/index.php/home/index/getLocation",
                data:{
                	"latitude":latitude,
                	"longitude":longitude,
                },
                success:function(data){
                	var obj  = eval(data);
                	wx.openLocation({
					    latitude: obj.latitude, // 纬度，浮点数，范围为90 ~ -90
					    longitude: obj.longitude, // 经度，浮点数，范围为180 ~ -180�?
					    name: '', // 位置�?
					    address: '', // 地址详情说明
					    scale: 1, // 地图缩放级别,整形�?范围�?~28。默认为最�?
					    infoUrl: '' // 在查看位置界面底部显示的超链�?可点击跳�?
					});
                },
                error:function(data){
                    alert("error!");
                },
        	});
	    },
	    cancel: function (res) {
        alert('用户拒绝授权获取地理位置');
   		 }
		});
	});
</script>
</html>
