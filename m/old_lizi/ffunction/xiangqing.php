<?php
require_once "../test/jssdk.php";
$jssdk = new JSSDK("wxcda8cccadc7b71b8", "22c1a729370f50cdb5a56431b8c56653");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta content="user-scalable=0;" name="viewport" />	
		<title>详情</title>
		<link rel="stylesheet" type="text/css" href="css/toupiao.css">
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>	
	</head>
	<body class="toupiao_body">
		<div class="toupiao_middle2">
			<textarea type="text" id="input2" placeholder="活动详情内容"></textarea>
		</div>
		<div id="show_class_miaoshu_img1" class="show_class_miaoshu_img">
		    <img id="preview1" width="-1" height="-1" style="display: none" /> 
		    <video class="shipin" loop="loop" poster="img/concret/photo.jpg" controls="controls" name="video" id="shipin"> 
				<source src="" type="video/mp4" id="source"></source> 
				your browser does not support the video tag 
			</video>
		</div>
		<div id="show_class_miaoshu_img2" class="show_class_miaoshu_img">
		    <img id="preview2" width="-1" height="-1" style="display: none" /> 
		</div>

		<div id="show_class_miaoshu_img3" class="show_class_miaoshu_img">
		    <img id="preview3" width="-1" height="-1" style="display: none" />  
		</div>
		<form action="" method="post" enctype="multipart/form-data">
		<div class="xiangqing_bottom">
			<div class="xiangqing_bottom_left">
				<a id="img_album" href="#"></a>
				<a id="img_camera" href="#"></a>
				<a id="add_class_miaoshu_img_3" href="#">
					<input type="file" name="file" id="upload_video"  onchange="javascript:setVideoPreview();" />
				</a>
			</div>
			<div class="xiangqing_bottom_right">
				<img src="img/concret/xiangqing4.png" id="delete_tabs">
			</div>		
		</div>
		</form>
	</body>
	<script>
			var index=0;		
 	//视频上传预览
		 function setVideoPreview(){
		 	if(index==1){
		 		document.getElementById("preview1").src="";
		 		document.getElementById("preview1").style.display="none";
		 		document.getElementById("preview2").src="";
		 		document.getElementById("preview2").style.display="none";
		 		document.getElementById("preview3").src="";
		 		document.getElementById("preview3").style.display="none";
		 	}
			document.getElementById("shipin").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_video"),
		            picture = file_head.value; 
//		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
//		            !1;  
		            if (preview = document.getElementById("source"), file_head.files && file_head.files[0]) preview.style.display = "block",  
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                index=2,
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_class_miaoshu_img1"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}
		 
	/////////删除
	document.getElementById("delete_tabs").addEventListener("touchstart",function(e){
		e.preventDefault();
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
							index=1;
                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];
                               	var pos=check_position();
                               	document.getElementById("preview"+pos).style.display="inline-block";
								document.getElementById("preview"+pos).style.width="100%";
								document.getElementById("preview"+pos).style.height="100%";
								document.getElementById("preview"+pos).src=images.localId[0];
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
	 	for(var i=1;i<=3;i++){
	 		if(document.getElementById("preview"+i).style.display=="none")
	 			return i;
	 	}
	 	return 3;
	 }
	 /////////////相册选图
	 document.querySelector('#img_album').onclick=function(){
	  	wx.chooseImage({
                       count: 3, // 默认9
                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
   						sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
                       success: function (res) {
                           images.localId = res.localIds;
							index=1;
                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];

								for(var k=1;k<=length;k++){
									document.getElementById("preview"+k).style.display="inline-block";
									document.getElementById("preview"+k).style.width="100%";
									document.getElementById("preview"+k).style.height="100%";
									document.getElementById("preview"+k).src=images.localId[k-1];
								}
								for(var m=length+1;m<=3;m++){
									document.getElementById("preview"+m).style.display="none";
								}
								var pos=check_position();
								if(pos>6){
									document.getElementById("preview").children[0].style.display="inline-block";
									document.getElementById("preview").children[1].style.display="inline-block";
								}
								else{
									document.getElementById("preview").children[0].style.display="none";
									document.getElementById("preview").children[1].style.display="none";
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

