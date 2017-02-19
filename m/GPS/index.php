<?php
require_once "../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
  <meta name="format-detection" content="telephone=no,email=no,date=no,address=no"> 
  <title>手机GPS信息的采集</title>
  <script src="js/jquery-2.2.3.min.js"></script>
  <script src="js/index.js"></script>
  <link rel="stylesheet" type="text/css" href="css/index.css" />
</head>
<body>
    <div class="userinfo">
        <a href="history.html">
          <img class="userinfo-avatar" id="user_image" src="" background-size="cover" ></img>
        </a>
        <div class="userinfo-nickname" id="user_name"></div>
    </div>
    <div id="lct" class="location"></div>
    <div id="time" class="time"></div>
    <div id="lng" class="lat_lng"></div>

    <div id="container" class="container"></div>
</body>   
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script charset="utf-8" src="http://map.qq.com/api/js?v=2.exp"></script>
<script>
  wx.config({
    debug:false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
       'checkJsApi',
        'getNetworkType',
        'openLocation',
        'getLocation',
    ]
  });
  wx.ready(function () {
      wx.checkJsApi({
        jsApiList: [
          'getNetworkType',
          'getLocation',
        ],
        success: function (res) {
          //alert(JSON.stringify(res));
        }
      });
      //获取初始位置
      getlatlng();
      //每30秒获取一次地理位置
      setInterval(getlatlng,30000);
      //显示停留时间
      setInterval(showTime,1000);
  });


</script>
</html>