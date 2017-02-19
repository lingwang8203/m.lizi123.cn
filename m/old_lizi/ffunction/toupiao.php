<?php
require_once "../test/jssdk.php";
$jssdk = new JSSDK("wxcda8cccadc7b71b8", "22c1a729370f50cdb5a56431b8c56653");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<!-- <meta content="user-scalable=0;" name="viewport" />	 -->
		<meta name=”viewport” content=”width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;” />
		<title>投票</title>
		<link rel="stylesheet" type="text/css" href="css/toupiao.css">
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>	
	</head>
	<body class="toupiao_body">
		<form action="" method="post" enctype="multipart/form-data">
		<div class="toupiao_middle2" id="toupiao_middle">
			<textarea type="text" id="input2" placeholder="请输入详情......"></textarea>
			<div class="jiezhi">
				<span>截止日期</span><input id = "year" type="text" maxlength="4"/><span>年</span><input id="month" type="text" maxlength="2"/><span>月</span><input id="day" type="text" maxlength="2"/><span>日</span>
			</div>
			<div class="xiangqing">
				<div class="xiangqing_box">1</div>
				<div class="xiangqing_img">
					<a id="add_toupiao_img1" href="#" class="add_toupiao_img"></a>
					<div id="show_toupiao_img1" class="show_toupiao_img">
		   			 	<img id="toupiao1" width="-1" height="-1" style="display: none" class="toupiao"/> 
					</div>
				</div>
				<div class="xiangqing_right">
					<textarea type="text" class="input3" id="voteContent1" placeholder="请输入详情......" maxlength="50"></textarea>
				</div>
			</div>
		</div>
		</form>
		<p class="bottom_jia" id="add_new_toupiao">添加</p>
	</body>
	<script src="js/toupiao.js"></script>
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
	  document.querySelector('#add_toupiao_img1').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

									document.getElementById("toupiao1").style.display="inline-block";
									document.getElementById("toupiao1").style.width="100%";
									document.getElementById("toupiao1").style.height="100%";
									document.getElementById("toupiao1").src=images.localId[0];
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