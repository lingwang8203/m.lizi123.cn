﻿<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx2e0779fc5b8d4454", "1609838f5fae1774a3f1dc78a21f65c3");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<title>群聊页面</title>
		<link href="css/group_chat.css" rel="stylesheet"/>
		<script src="js/group_chat.js"></script>
		<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
		<script type="text/javascript">
        $(document).ready(function(){
        });
			 wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
        'checkJsApi',
        'hideMenuItems',
        'hideAllNonBaseMenuItem',
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
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',    
    ]
  });
  wx.hideAllNonBaseMenuItem(); 
   wx.ready(function(){
   	 alert('2222222222222222222222222');
   	 var voice = {
        localId: '',
        serverId: ''
    };
    var isPlaying = false;
  document.querySelector('#yuyin').ontouchstart = function () {
       event.preventDefault();
    wx.startRecord({
      cancel: function () {
        alert('用户拒绝授权录音');
      }
    });
  };
  document.querySelector('#yuyin').ontouchend = function () {
  	
    wx.stopRecord({
      success: function (res) {
        voice.localId = res.localId;
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };
  //单击一次播放音频，第二次停止播放
  document.querySelector('#playVoice').onclick = function () {
    if(isPlaying){
    	    wx.stopVoice({
      localId: voice.localId
    });
      isPlaying = false;
    }else{
    	  
    	    wx.playVoice({
      localId: voice.localId
    });
  	isPlaying = true;
  	}
  }; 
   });
		</script>
	</head>
	<body>
		<header>
			<a class="title" href="chat_homepage.html"><</a>
			<p><span>不玩游戏的LOLer(10人)</span></p>
			<a href="data_group.html" style="float: right;margin-right: 2vw;"><img src="img/config.png" id="create"/></a>
		</header>
		<div class="chat_interface" id="chat">
			<!--///////////////////////通知信息-->
			<div class="tz">
				<p class="tz_time">上滑加载更多消息</p>
				<p class="tz_time">2分钟前</p>
				<p class="tz_message">开车我只玩源氏发起了群聊</p>
			</div>
			<!--////////////////////////我发言 右方-->
			<div class="mytalk">
				<img src="img/touxiang.png" />
				<div class="lft">
					<div class="lftr">
						<span>2016-2-14 10:38:24</span>
						<h3>小栗子</h3>
					</div>
					<span class="me_message">组个队，双排吧555555555555</span>
				</div>
			</div>
			<!--//////////////////我发图片-->
			<div class="mytalk">
				<img src="img/touxiang.png" />
				<div class="lft">
					<div class="lftr">
						<span>2016-2-14 10:38:24</span>
						<h3>小栗子</h3>
					</div>
					<img src="../ffunction/img/book/book.png" />
				</div>
			</div>
			
			<!--//////////////////////我发表情-->
			<div class="mytalk">
				<img src="img/touxiang.png" />
				<div class="lft">
					<div class="lftr">
						<span>2016-2-14 10:38:24</span>
						<h3>小栗子</h3>
					</div>
					<div class="biaoqing_chat">
						<span>表情前</span> 
						<img src="img/gif_picture/F_01.gif" />
						<span>哈哈哈</span>
						<img src="img/gif_picture/F_01.gif" />
						<span>表情后</span> 
					</div>
				</div>
			</div>
			<!--//////////////////////////我方发语音-->
			<div class="mytalk">
				<img src="img/touxiang.png" />
				<div class="lft">
					<div class="lftr">
						<span>2016-2-14 10:38:24</span>
						<h3>小栗子</h3>
					</div>
					<div class="biaoqing_chat">
						<span>3”</span> 
						<img src="img/luyin_yangshi.png" class="yuyin_yangs"/>
					</div>
				</div>
			</div>
			<!--//////////////我发视频-->
			<div class="mytalk">
				<img src="img/touxiang.png" />
				<div class="lft">
					<div class="lftr">
						<span>2016-2-14 10:38:24</span>
						<h3>小栗子</h3>
					</div>
					<div style="position: relative;" id="video">
						<video class="shipin" loop="loop" poster="../ffunction/img/concret/photo.jpg" controls="controls" name="video"> 
						<source src="../ffunction/img/test.mp4" type="video/mp4" id="source"</source> 
						your browser does not support the video tag 
						</video> 
						<img src="../ffunction/img/concret/video.png" class="play" name="play"/>
					</div>
				</div>
			</div>
			<!--///////////////////////对方发言 左方-->
			<div class="yourtalk">
				<img src="img/touxiang1.png" />
				<div class="rgt">
					<div class="rgtl">
						<h3>一只大菜鸟</h3>
						<span>2016-2-14 10:38:24</span>
					</div>
					<span class="your_message">组个队</span>
				</div>
			</div>
			<!--/////////////////////对方发图片-->
			<div class="yourtalk">
				<img src="img/touxiang1.png" />
				<div class="rgt">
					<div class="rgtl">
						<h3>一只大菜鸟</h3>
						<span>2016-2-14 10:38:24</span>
					</div>
					<img src="../ffunction/img/book/book2.png" />
				</div>
			</div>
			<!--//////////////////对方发表情-->
			<div class="yourtalk">
				<img src="img/touxiang1.png" />
				<div class="rgt">
					<div class="rgtl">
						<h3>一只大菜鸟</h3>
						<span>2016-2-14 10:38:24</span>
					</div>
					<div class="your_biaoqing_chat"> 
						<span>表情前</span> 
						<img src="img/gif_picture/F_01.gif" />
						<span>哈哈哈</span>
						<img src="img/gif_picture/F_01.gif" />
						<span>表情后</span> 
					</div>
				</div>
			</div>
			<!--////////////////////////////对方发语音-->
			<div class="yourtalk">
				<img src="img/touxiang1.png" />
				<div class="rgt">
					<div class="rgtl">
						<h3>一只大菜鸟</h3>
						<span>2016-2-14 10:38:24</span>
					</div>
					<div class="your_biaoqing_chat">
						<span>3”</span> 
						<img src="img/luyin_yangshi.png" class="yuyin_yangs"/>
					</div>
				</div>
			</div>
			<!--
            	作者：354701412@qq.com
            	时间：2016-08-08
            	描述：
            -->
	 <form>
	  <button class="btn00" id="startRecord">startRecord</button>
	  <span><input type="button" class="btn00" name="startRecord" id="startRecord" value="startRecord" /></span>
      <button class="btn00" id="playVoice">playVoice</button>
      <button class="btn00" id="stopRecord">stopRecord</button>
      <button class="btn00" id="downloadVoice">downloadVoice</button>
	 </form>

			<!--///////////////////////////////////对方发视频-->
			<div class="yourtalk">
				<img src="img/touxiang1.png" />
				<div class="rgt">
					<div class="rgtl">
						<h3>一只大菜鸟</h3>
						<span>2016-2-14 10:38:24</span>
					</div>
					<div style="position: relative;" id="video">
						<video class="shipin" loop="loop" poster="../ffunction/img/concret/photo.jpg" controls="controls" name="video"> 
						<source src="../ffunction/img/test.mp4" type="video/mp4" id="source"</source> 
						your browser does not support the video tag 
						</video> 
						<img src="../ffunction/img/concret/video.png" class="play" name="play"/>
					</div>
				</div>
			</div>
			
			
		</div>
		<div id="tianchong"></div>
		<div class="chat_dilan">
			<div id="input">
				<input type="text" maxlength="100" id="message"/>
				<span id="fasong">发送</span>
			</div>
			<div id="tabs">
				<img src="img/biaoqing.png" id="biaoqing"/>
				<img src="img/luyin.png" id="luyin"/>
				<!--<img src="img/camera.png" id="camera"/>-->
				<a href="#" id="vid">
					<input type="file" id="upload_video" onchange="javascript:upload_video();"/>
				</a>
				<a href="#" id="pic">
					<input type="file" id="upload_pic" onchange="javascript:upload_img();"/>
				</a>
			</div>
			<div id="biaoqinglan">
				<div class="hang">
					<img src="img/gif_picture/F_01.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_02.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_03.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_04.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_05.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_06.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_07.gif" class="biaoqing"/>
				</div>
				<div class="hang">
					<img src="img/gif_picture/F_08.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_09.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_10.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_11.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_12.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_13.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_14.gif" class="biaoqing"/>
				</div>
				<div class="hang">
					<img src="img/gif_picture/F_15.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_16.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_17.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_18.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_19.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_20.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_21.gif" class="biaoqing"/>
				</div>
				<div class="hang">
					<img src="img/gif_picture/F_22.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_23.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_24.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_25.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_26.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_27.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_28.gif" class="biaoqing"/>
				</div>
				<div class="hang">
					<img src="img/gif_picture/F_29.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_30.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_31.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_32.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_33.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_34.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_35.gif" class="biaoqing"/>
				</div>
				<div class="hang">
					<img src="img/gif_picture/F_36.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_37.gif" class="biaoqing"/>
					<img src="img/gif_picture/F_38.gif" class="biaoqing"/>
				</div>
			</div>
			<div id="yuyinlan">
				<!--<img src="img/luyin_chat.png" id="yuyin"/>-->
				<button class="btn" id="yuyin"></button>
				<span id="tip">按住说话吧</span>
				<span id="time">0:01</span>
				<!--<img src="img/luyin_fasong.png" id="luyin_fasong"/>
				<img src="img/luyin_delete.png" id="luyin_delete"/>-->
			</div>
		</div>
	</body>
</html>
