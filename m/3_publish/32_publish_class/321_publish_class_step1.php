<?php
require_once "../../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>发布课程</title>
	<link rel="stylesheet" href="../../css/aui.2.0.css"/>
	<link rel="stylesheet" href="css/new_publish_class.css" />
	<script src="../../js/jquery-2.2.3.min.js"></script>
	<script src="js/ajax_publish_class_step1.js"></script>
	<style type="text/css">
		.aui-list textarea{
			height: 10rem;
		}
	</style>
</head>
<body>
		<!--顶部，发布活动-->
		<header class="aui-bar aui-bar-nav aui-bar-light aui-bg-base" style="color: white !important;">
		    <a class="aui-pull-left aui-btn" href="http://m.lizi123.cn/index.html">
		        <span class="aui-iconfont aui-icon-left-white"></span>
		    </a>
		    <div class="aui-title aui-font-size-20">发布课程</div>
		    <a class="aui-pull-right aui-btn" style="color: white !important;" id="furnish">下一步</a>
		</header>
		<div class="aui-content aui-margin-b-15">
			<ul class="aui-list aui-form-list">
				<li class="aui-list-item">
					<div class="aui-list-item-inner">
				        <div class="aui-list-item-input">
		                    <input type="text" placeholder="添加标题" id="header" maxlength="15">
		                </div>
	                </div>
	        	</li>
	        	<li class="aui-list-item">
					<div class="aui-list-item-inner">
				        <div class="aui-list-item-input">
		                    <input type="text" readonly="readonly" placeholder="请选择分类>" maxlength="15" id="class_type">
		                </div>
	                </div>
	        	</li>
	            <li class="aui-list-item">
		            <div class="aui-list-item-inner">
		                <div class="aui-list-item-input">
		                    <textarea placeholder="添加描述" id="content" maxlength="140"></textarea>
		                </div>
		            </div>
		        </li>
		   </ul>
		</div>
		<div id="add_class_miaoshu_img" style="display: block !important;"></div>
		<div id="show_class_miaoshu_img" class="show_class_miaoshu_img">
		    <img id="preview" width="-1" height="-1" style="display: none" /> 
		</div>
		<!-- //放大预览层-->
		<span id="add_label"class="aui-font-size-16 aui-margin-b-15">添加标签</span>
		<div id="frame_back" style="display: none;"></div>
		<div id="change_module" style="display: none;">					   
			<div class="tap_class">
				<p id="exchange"class="aui-font-size-16">选择标签(不超过三个)</p>
			</div>
		    <div style="clear: both;"></div>
		    
		    <div id="selected_label1">
		    <a href="#" class="change_module_label label_back"><span>添加标签1</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    </div>
		    
		    <div id="selected_label2">
		    <a href="#" class="change_module_label label_back"><span>添加标签2</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    </div>
		    <div id="selected_label3">
		    <a href="#" class="change_module_label label_back"><span>添加标签3</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    </div>
		    <div id="selected_label4">
		    <a href="#" class="change_module_label label_back"><span>添加标签4</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    </div>
		    <a href="#" id="refresh_label"class="aui-font-size-16 aui-margin-b-15">换一批标签</a>
		    <a href="#" id="cancel_change_module"class="aui-font-size-16 aui-margin-b-15">取消</a>
		    <a href="#" id="confirm_change_module"class="aui-font-size-16 aui-margin-b-15">好</a>
		 
<!--		 
		  <div id="selected_label2">
			<div class="tap_class">
				<p id="exchange"class="aui-font-size-16">选择标签2(不超过三个)</p>
			</div>
		    <div style="clear: both;"></div>
		    <a href="#" class="change_module_label label_back"><span>添加标签</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" id="refresh_label"class="aui-font-size-16 aui-margin-b-15">换一批标签</a>
		    <a href="#" id="cancel_change_module"class="aui-font-size-16 aui-margin-b-15">取消</a>
		    <a href="#" id="confirm_change_module"class="aui-font-size-16 aui-margin-b-15">好</a>
		 </div>
		 
		  <div id="selected_label3">
			<div class="tap_class">
				<p id="exchange"class="aui-font-size-16">选择标签3(不超过三个)</p>
			</div>
		    <div style="clear: both;"></div>
		    <a href="#" class="change_module_label label_back"><span>添加标签</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" id="refresh_label"class="aui-font-size-16 aui-margin-b-15">换一批标签</a>
		    <a href="#" id="cancel_change_module"class="aui-font-size-16 aui-margin-b-15">取消</a>
		    <a href="#" id="confirm_change_module"class="aui-font-size-16 aui-margin-b-15">好</a>
		 </div>
		 
		  <div id="selected_label4">
			<div class="tap_class">
				<p id="exchange"class="aui-font-size-16">选择标签4(不超过三个)</p>
			</div>
		    <div style="clear: both;"></div>
		    <a href="#" class="change_module_label label_back"><span>添加标签</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" class="change_module_label label_back" name="change_label"><span>PS</span></a>
		    <a href="#" id="refresh_label"class="aui-font-size-16 aui-margin-b-15">换一批标签</a>
		    <a href="#" id="cancel_change_module"class="aui-font-size-16 aui-margin-b-15">取消</a>
		    <a href="#" id="confirm_change_module"class="aui-font-size-16 aui-margin-b-15">好</a>
		 </div>-->
		 
		</div>
		<!--//已选择标签-->
		<p id="label"class="aui-font-size-16 aui-margin-b-15">已选择标签:<span id="label0"class="aui-font-size-16">标签一</span><span id="label1"class="aui-font-size-16">标签二</span><span id="label2"class="aui-font-size-16">标签三</span></p>
		
		<!--/////选择活动类型-->
		<div id="choose_module" style="display: none;width: 12rem;">
			<div class="class_type"style="width: 5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">语言学习</span>
			</div>
			<div class="class_type"style="width:5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">软件使用</span>
			</div>
			<div class="class_type"style="width:5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">生活实用</span>
			</div>
			<div class="class_type"style="width: 5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">运动竞技</span>
			</div>
			<div class="class_type"style="width:5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">文化艺术</span>
			</div>
			<div class="class_type"style="width: 5.5rem;float: left;">
				<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png" class="class_type_radio"/>
				<span class="class_type_name">其他课程</span>
			</div>
			<div style="padding-bottom: 3vw;">
				<span id="choose_type_confirm"class="aui-font-size-16">确认</span>
				<span id="choose_type_cancel"class="aui-font-size-16">取消</span>
			</div>
		</div>
</body>
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
	        //alert(JSON.stringify(res));
	      }
	    });
	  
	  
	  images = {
        localId: [],
        serverId: []
    };
	  var img_length;
	  document.querySelector('#add_class_miaoshu_img').onclick=function(){
	  	wx.chooseImage({
                       count: 1, // 默认9
                       success: function (res) {
                           images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                img_length=length;
                                images.serverId = [];
                                
                                if(length>0){
                                	document.getElementById("preview").style.display="block";
									document.getElementById("preview").style.width="100%";
									document.getElementById("preview").style.height="100%";
									document.getElementById("preview").src=images.localId[0];
                                }else{
                                	document.getElementById("preview").style.display="none";
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

                                        },
                                        fail:function (res)
                                        {
                                            alert(JSON.stringify(res));
                                        }
                                   });
                              }
                            
                                
                            }
                        });
	 }
	 
	 document.querySelector("#preview").onclick=function(){
	 		wx.previewImage({
		     	 current: images.localId[0],
		     	 urls: [
		    	    images.localId[0]
		    	  ]
		 	});
	 	}
	  
//	  var shareData = {
//          title: '栗子校园',
//          desc: '栗子校园',
//          link: 'http://qj_wa.qdmedia.cc/LiZi/footer/footer.html',
//          imgUrl: 'http://qdmedia.cc/Public/images/logo.png'
//      };
//      wx.onMenuShareAppMessage(shareData);
//      wx.onMenuShareTimeline(shareData);
//      wx.onMenuShareQQ(shareData);
//      wx.onMenuShareWeibo(shareData);
	  
  });
</script>
</html>