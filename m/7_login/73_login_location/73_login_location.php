<?php
require_once "../../wx_js_sdk/jssdk.php";
$jssdk = new JSSDK("wxc9322355d54f2074", "7990e5325f20cc13aaec08d0a3e8ed04");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>选择学校</title>
	    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
	    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
	    <link rel="stylesheet" type="text/css" href="../../css/aui.2.0.css" />	
	    <script src="../../js/jquery-2.2.3.min.js"></script>
	    <style type="text/css">
	    	.aui-bar-nav.aui-bar-light:after{
	    		height: 0;
	    	}
	    	.aui-searchbar{
	    		top: 3.5rem;
	    		left:0 ;
	    		background-color: white;
	    	}
	    	.aui-searchbar-input{
	    		border: 1px solid #a09e9f;
	    	}
	    	#near_school{
	    		margin-top: 2vh;
				height: 28vh;
				overflow: auto;
				text-align: center;
			}
			#near_school p{
				margin-top: 2vh;
				filter:alpha(opacity=50);
				-moz-opacity:0.5; 
				opacity: 0.5;
				color: #fc9e0b;
			}
			.checked{
				font-size: 6vw;
				filter:alpha(opacity=100) !important;
				-moz-opacity:1 !important; 
				opacity: 1 !important;
				color: #fc9e0b;
			}
			.hidd{
				display: none;
			}
			.aui-btn-block {
			    display: block;
			    width: 90%;
			    padding: 0.6rem 0;
			    margin-bottom: 0;
			    margin-left: 5%;
			    font-size: 0.9rem;
			    border-radius: 15px;
			    background-color: #fc9e0b !important;
			}
	    </style>
	</head>
	<body style="background-color: white;">
		<header class="aui-bar aui-bar-nav aui-bar-light aui-margin-t-15">
		    <div class="aui-title aui-font-size-20" style="color: #212121;">选择学校</div>
		</header>
		<!--<div class="aui-searchbar" id="search">
		    <div class="aui-searchbar-input aui-border-radius" tapmode onclick="doSearch()">
		        <i class="aui-iconfont aui-icon-search"></i>
		        <form action="javascript:search();">
		            <input type="search" placeholder="请输入城市或学校" id="search-input" style="text-align: center;" maxlength="20">
		        </form>
		    </div>
		    <div class="aui-searchbar-cancel" tapmod>取消</div>
		</div>-->
		<header class="aui-bar aui-bar-nav aui-bar-light" style="top: 0;">
		    <div class="aui-title aui-font-size-16" style="color: #212121;">定位城市</div>
		</header>
		<header class="aui-bar aui-bar-nav aui-bar-light" style="top: 0rem; line-height: 1rem;">
		    <div class="aui-title aui-font-size-16" style="color: #fc9e0b;" id="city"></div>
		</header>
		<header class="aui-bar aui-bar-nav aui-bar-light" style="top: 0rem;">
		    <div class="aui-title aui-font-size-16" style="color: #212121;">定位学校</div>
		</header>
		<header class="aui-bar aui-bar-nav aui-bar-light" style="top: 0.3rem; line-height: 1.4rem;">
		    <div class="aui-title aui-font-size-16" style="color: #fc9e0b;" id="campus"></div>
		</header>
		<header class="aui-bar aui-bar-nav aui-bar-light" style="top: 0rem;">
		    <div class="aui-title aui-font-size-16" style="color: #212121;">临近学校</div>
		</header>
		<div id="near_school">
			<!--<p name="school_name" id="1">厦门理工学院</p>
			<p name="school_name" id="2">华侨大学厦门工学院</p>
			<p name="school_name" class="checked" id="3">华侨大学厦门校区</p>
			<p name="school_name">集美大学诚毅学院</p>
			<p name="school_name">集美大学</p>
			<p name="school_name">北京大学</p>
			<p name="school_name">清华大学</p>-->
		</div>
		<div style="padding-top: 0.5rem;margin-bottom: 1rem;">
	        <div class="aui-content-padded">
	        	<p><div class="aui-btn aui-btn-warning aui-btn-block" id="confirm">下一步</div></p>
	        </div>
        </div>
	</body>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	<script>
	var campus=document.getElementById("campus");
	wx.config({
	  	debug:false,
	    appId: '<?php echo $signPackage["appId"];?>',
	    timestamp: '<?php echo $signPackage["timestamp"];?>',
	    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
	    signature: '<?php echo $signPackage["signature"];?>',
	    jsApiList: [
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
		        //alert(JSON.stringify(res));
		      }
		    });
		    var	latitude;
		    var longitude;
			var speed;
			var	accuracy ;
		    wx.getLocation({
			    type: 'wgs84',
			    success: function (res) {
			        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
			        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
			         speed = res.speed; // 速度，以米/每秒计
			         accuracy = res.accuracy; // 位置精度
			         //alert(latitude);
			         //alert(longitude);
			         var campus;
			        $.ajax({
						type:"post",
						url:"http://api.lizi123.cn/index.php/home/index/getLocation",
						async:false,
						xhrFields:{
		               		withCredentials: true
		           		},
						data:{
							"client_type":0,
							"lat":latitude,
							"lng":longitude
						},
						success:function(data){
							var obj = eval(data);
							console.dir(obj);
							//alert(obj.status);
		 	  				if (obj.status==200) {
		 	  					campus=document.getElementById("campus");
		 	  					document.getElementById("city").innerHTML=obj.city;
		 	  					document.getElementById("campus").innerHTML=obj.school_name;
		 	  					document.getElementById("campus").id=obj.school_id;
//		 	  					alert(campus);
		 	  					campus.innerHTML=obj.school_name;
		 	  					campus.id=obj.school_id;
		 	  					$("#near_school").text("");
		 	  					for(var i=0;i<obj.school_num;i++){
		 	  						if(obj.school_num>=3){
		 	  							if (i!=obj.local_tag) {
		 	  								var html='<p name="school_name" id='+obj[i].id+'>'+obj[i].school_name+'</p>';
		 	  							}
		 	  							if(i==3){
		 	  								var html='<p name="school_name" class="checked" id='+obj.school_id+'>'+obj.school_name+'</p>';
		 	  							}

		 	  						}else{
		 	  							if(i==obj.school_num-1){
		 	  								var html='<p name="school_name" class="checked" id='+obj.school_id+'>'+obj.school_name+'</p>';
		 	  							}else{
		 	  								var html='<p name="school_name" id='+obj[i].id+'>'+obj[i].school_name+'</p>';
		 	  							}
		 	  						}
		 	  						$("#near_school").append(html);
		 	  					}
							}else if(obj.status==199){
								window.open("http://m.lizi123.cn/7_login/7_login.html");
							}
						},
						error:function(data){
							alert("失败！");
						},
					});
					var school_name=new Array;
					school_name=document.getElementsByName("school_name");
					//alert(school_name.length);
					for(var i=0;i<school_name.length;i++){
						school_name[i].addEventListener("touchstart",function(e){
							e.preventDefault();
							for(var j=0;j<school_name.length;j++)
								school_name[j].className="";
							this.className="checked";
//							alert(this.innerHTML);
							campus.innerHTML=this.innerHTML;
							campus.id=this.id;
						},false);
					}
			    },
			    cancel: function (res) {
			        alert('用户拒绝授权获取地理位置');
			        window.open("http://m.lizi123.cm");
			    }
			});
		});
		</script>
		<script src="js/choose_school.js"></script>
</html>