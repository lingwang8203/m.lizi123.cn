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
		<title>发布花絮</title>
		<link href="css/fabu_huaxu.css" rel="stylesheet"/>
		<script src="js/swipe.js"></script>
	</head>
	<body>
		<header>
			<a id="return"><</a>
			<h3>花絮</h3>
			<a id = "publish" href="" style="margin-left: 30vw;">发布</a>
		</header>
		<textarea class="content" maxlength="200" placeholder="活动详情内容"></textarea>
		<div class="addWrap" id="addwrap">
			   	<div class="swipe" id="mySwipe">
			      	<div class="swipe-wrap" id="recover_page">
			      		<div class="mulu">
				      		<div id="show_picture1" class="show_picture">
			  	 				<img id="picture1" width="-1" height="-1" style="display: none" />
							</div>
							<div id="show_picture2" class="show_picture">
			  	 				<img id="picture2" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture3" class="show_picture">
			  	 				<img id="picture3" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture4" class="show_picture">
			  	 				<img id="picture4" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture5" class="show_picture">
			  	 				<img id="picture5" width="-1" height="-1" style="display: none" /> 
							</div>
						</div>
						<div class="mulu">
				      		<div id="show_picture6" class="show_picture">
			  	 				<img id="picture6" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture7" class="show_picture">
			  	 				<img id="picture7" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture8" class="show_picture">
			  	 				<img id="picture8" width="-1" height="-1" style="display: none" /> 
							</div>
							<div id="show_picture9" class="show_picture">
			  	 				<img id="picture9" width="-1" height="-1" style="display: none" /> 
							</div>
						</div>
						<ul id="position">
					  	 	<li class="cur"></li>
					  		<li class=""></li>
						</ul>
			     	</div>
			    </div>
		</div>
		<div id="show_video" class="show_video">
		    <video class="shipin" loop="loop" poster="img/concret/photo.jpg" controls="controls" name="video" id="shipin"> 
				<source src="" type="video/mp4" id="source"></source> 
				your browser does not support the video tag 
			</video>
		</div>
		<form action="" method="post" enctype="multipart/form-data">
		<div class="xiangqing_bottom">
			<div class="xiangqing_bottom_left">
				<a id="img_album" href="#"></a>
				<a id="img_camera" href="#"></a>
				<a id="add_class_miaoshu_img_3" href="#">
					<input type="file" name="file" id="upload_video"  onchange="javascript:setVideoPreview();"/>
				</a>
			</div>
			<div class="xiangqing_bottom_right">
				<img src="img/concret/xiangqing4.png" id="delete_tabs">
			</div>		
		</div>
		</form>
	</body>
	<script type="text/javascript">
		var bullets = document.getElementById('position').getElementsByTagName('li');
		var banner = Swipe(document.getElementById('mySwipe'), {
			auto: 0,
			continuous: true,
			disableScroll:false,
			callback: function(pos) {
				var i = bullets.length;
				while (i--) {
				  bullets[i].className = ' ';
				}
				bullets[pos].className = 'cur';
			}
		});
	</script>
	<script src="js/fabu_huaxu.js"></script>
	<script>
		var url_index="huaxu";
		document.getElementById("return").addEventListener("touchstart",function(e){
			e.preventDefault();
			var myurl="concret_activities.html"+"?"+"url_index="+url_index;
			window.location.assign(myurl);
		},false);
	</script>
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
	  document.querySelector('#img_camera').onclick=function(){
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
                               	var pos=check_position();
                               	document.getElementById("picture"+pos).style.display="inline-block";
								document.getElementById("picture"+pos).style.width="100%";
								document.getElementById("picture"+pos).style.height="100%";
								document.getElementById("picture"+pos).src=images.localId[0];
								
								pos=check_position();
								if(pos>6){
									document.getElementById("position").children[0].style.display="inline-block";
									document.getElementById("position").children[1].style.display="inline-block";
								}
								else{
									document.getElementById("position").children[0].style.display="none";
									document.getElementById("position").children[1].style.display="none";
								}
                                upload();
		
                                function upload()
                                {
                                    wx.uploadImage({
                                        localId: images.localId[i],
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
	 
	 function check_position(){
	 	for(var i=1;i<=9;i++){
	 		if(document.getElementById("picture"+i).style.display=="none")
	 			return i;
	 	}
	 	return 9;
	 }
	 /////////////相册选图
	 document.querySelector('#img_album').onclick=function(){
	  	wx.chooseImage({
                       count: 9, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   						sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

								for(var k=1;k<=length;k++){
									document.getElementById("picture"+k).style.display="inline-block";
									document.getElementById("picture"+k).style.width="100%";
									document.getElementById("picture"+k).style.height="100%";
									document.getElementById("picture"+k).src=images.localId[k-1];
								}
								for(var m=length+1;m<=9;m++){
									document.getElementById("picture"+m).style.display="none";
								}
								var pos=check_position();
								if(pos>6){
									document.getElementById("position").children[0].style.display="inline-block";
									document.getElementById("position").children[1].style.display="inline-block";
								}
								else{
									document.getElementById("position").children[0].style.display="none";
									document.getElementById("position").children[1].style.display="none";
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