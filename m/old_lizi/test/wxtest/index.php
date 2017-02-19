<?php
require_once "jssdk.php";

$jssdk = new JSSDK("wx2e0779fc5b8d4454", "1609838f5fae1774a3f1dc78a21f65c3");
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
	 var images = {
	 	localId: [],
	 	serverId: []
	 } ;
	 document.querySelector('#choose_img').onclick=function(){
	 	
	  wx.chooseImage({
	 	count: 9;
	    success: function(res){
	    	images.localId = res.localId;
	    	
	    	var i = 0, length = images.localId.length;
	    	images.serverId = [];
	    	var time = new Date().getTime();
	    	var tag = time + "_" + Math.random();
	    	
	    	upload();
	    	
	    	function upload()
	    	{
	    	   wx.uploadImages({
	    		localId: images.localId[i],
	    		success: function (res) {
	    			i++;
	    			
	    		$.get("download_img.php?MediaID="+res.serverId,function(data){
	    			
	    	});
	    	images.serverId.push(res.serverId);
	    	
	        if(i < length)
	        {
	        	upload();
	        }
	    };
	    fail:function(res)
	    {
	    	alert(JSON.stringify(res));
	    }
	 });
	} 
   } 	
  });
   
  };
	 
});
</script>
<?php
$MediaID = $_GET["MediaID"];
$fileContent =  getMedia($access_token,$MediaID);

   if(  downloadFile($file_path,$fileContent))             
			{				 
				//echo $pic_url;
				echo 1;
			}
			else
			{
				$content = "存储失败";
				echo 0;
			} //  */ 
    getMedia($access_token, $MediaID);
    function getMedia($access_token,$MediaID)
	{
		 $accessToken = self::getToken();  
        // 要存在你服务器哪个位置？  
        $savePathFile = '/home'.date('YmdHis').'.jpg';  
        $targetName = $savePathFile;  
		$url = "http://file.api.weixin.qq.com/cgi-bin/media/get?access_token={$access_token}&media_id={$MediaID}";
		
		$ch = curl_init($url);	
		curl_setopt($ch, CURLOPT_HEADER,0);
		curl_setopt($ch, CURLOPT_NOBODY,0);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);		
		$package = curl_exec($ch);
		$httpinfo = curl_getinfo($ch);
		curl_close($ch);
		$len = strlen($package);
		if($len<50)
		{
			return "false";
		}else{
			return $package;			
		}
		//return array_merge(array("body"=>$package),array("header"=>$httpinfo));
         return PubCommon::serverDomain() . $savePathFile;
	}
	
	function downloadFile($filename,$fileContent)
	{				
		//$date = date('Y-m-d');	
		$local_file = fopen($filename,'w');
		
		if(false !== $local_file){
			if(fwrite($local_file,$fileContent)){
				fclose($local_file);
				clearstatcache();
				return true;
			}
		}				
	}	
	
	function cacheFile($filename,$fileContent)
	{
		$local_file = fopen($filename,'w');
		
		if( $local_file !=false  )
		{
			if(fwrite($local_file,$fileContent))
			{
				fclose($local_file); 
				clearstatcache();				 
	
				return true;
			}
			else
			{
				return false;
			}
		}	
		else
		{
			return false;
		}
	}
	downloadFile($filename, $fileContent);
	cacheFile($filename, $fileContent);
	
?>
</html>
