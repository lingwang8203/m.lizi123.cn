<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>微信上传+阿里云存储DEMO2</title>
	<link rel="stylesheet" href="../../publish/css/new_publish_class.css"/>
	<script type="text/javascript" src="../../ffunction/js/jquery-2.2.3.min.js"></script>
</head>
<body>
		<a id="add_class_miaoshu_img" href="#"></a>
		<div id="show_class_miaoshu_img1" class="show_class_miaoshu_img">
		    <img id="preview1" width="-1" height="-1" style="display: none" /> 
		</div>
		<div id="show_class_miaoshu_img2" class="show_class_miaoshu_img">
		    <img id="preview2" width="-1" height="-1" style="display: none" /> 
		</div>
		<div id="show_class_miaoshu_img3" class="show_class_miaoshu_img">
		    <img id="preview3" width="-1" height="-1" style="display: none" />  
		</div>
	
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
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
  	// 1 åˆ¤æ–­å½“å‰ç‰ˆæœ¬æ˜¯å¦æ”¯æŒæŒ‡å®š JS æŽ¥å£ï¼Œæ”¯æŒæ‰¹é‡åˆ¤æ–?
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
	  document.querySelector('#add_class_miaoshu_img').onclick=function(){
	  	wx.chooseImage({
                       count: 3, // é»˜è®¤9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
								if(length==1){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.display="none";
									document.getElementById("preview1").src=images.localId[0];
								}
								else if(length==2){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview2").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview2").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.height="100%";
									document.getElementById("preview1").src=images.localId[0];
									document.getElementById("preview2").src=images.localId[1];
								}
								else if(length==3){
									document.getElementById("preview1").style.display="inline-block";
									document.getElementById("preview2").style.display="inline-block";
									document.getElementById("preview3").style.display="inline-block";
									document.getElementById("preview1").style.width="100%";
									document.getElementById("preview2").style.width="100%";
									document.getElementById("preview3").style.width="100%";
									document.getElementById("preview1").style.height="100%";
									document.getElementById("preview2").style.height="100%";
									document.getElementById("preview3").style.height="100%";
									document.getElementById("preview1").src=images.localId[0];
									document.getElementById("preview2").src=images.localId[1];
									document.getElementById("preview3").src=images.localId[2];
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
                                            	alert("图片在微信服务器上serverId:"+images.serverId);
                                            	alert("图片数量："+images.serverId.length);
                                            	for(var j=0;j<images.serverId.length;j++){
                                            	$.ajax({
											            type:"POST",
											           	//dataType:"json",
											            //traditional:true,
											            url:"http://api.lizi123.cn/index.php/home/index/weixinUploads",
											            data:{
											            	"serverId":images.serverId[j],
											            },
											            success:function(data){
											                var obj = eval(data);
											                alert("图片云存储外网访问地址："+obj.msg);
											                console.dir(obj);
											            },
											            error:function(data){
											                alert("error!");
											            },
											    });
                                            }
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
	  
	
	  document.querySelector("#preview1").onclick=function(){
	  		 if(img_length==1){
			  	 wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==2){
	 	    	wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0],
		    	    images.localId[1]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==3){
	 	    	wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0],
		    	    images.localId[1],
		    	    images.localId[2]
		    	  ]
		 	     });
	 	    }
	 	 }
	 	 
	 document.querySelector("#preview2").onclick=function(){
	 		if(img_length==2){
			  	 wx.previewImage({
		     	 current: images.localId[1],
		     	 urls: [
		     	 	images.localId[0],
		    	    images.localId[1]
		    	  ]
		 	     });
	 	    }
	 	    else if(img_length==3){
	 	    	 wx.previewImage({
		     	 current: images.localId[1],
		     	 urls: [
		     	 	images.localId[0],
		    	    images.localId[1],
		    	    images.localId[2]
		    	  ]
		 	     });
	 	    }
	 	 }
	 
	 document.querySelector("#preview3").onclick=function(){
		  	 wx.previewImage({
	     	 current: images.localId[2],
	     	 urls: [
	     	    images.localId[0],
		    	images.localId[1],
	    	    images.localId[2]
	    	  ]
	 	     });
	 	 }
	  
  });
</script>
</html>