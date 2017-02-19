<?php
session_start();

include_once( 'weibo/config.php' );
include_once( 'weibo/saetv2.ex.class.php' );

$o = new SaeTOAuthV2( WB_AKEY , WB_SKEY );

$code_url = $o->getAuthorizeURL( WB_CALLBACK_URL );

?>
<html xmlns:wb="http://open.weibo.com/wb">
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1, initial-scale=1.0" />
		<title>login</title>
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>
		<script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" data-appid="101338320" data-redirecturi="http://m.lizi123.cn/LiZi/footer/footer.html" charset="utf-8"></script>
		<script type="text/javascript" src="http://qzonestyle.gtimg.cn/qzone/openapi/qc_loader.js" charset="utf-8" data-callback="true"></script>
		<script type="text/javascript" src="js/login.js"></script>
		<!-- <script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=734897818" type="text/javascript" charset="utf-8"></script> -->
		<script type="text/javascript" src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" data-appid="734897818" data-redirecturi="http://m.lizi123.cn/LiZi/footer/footer.html" charset="utf-8"></script>
		<script type="text/javascript" src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js" charset="utf-8" data-callback="true"></script>
		<script type="text/javascript">
            var childWindow;
            function toQzoneLogin()
            {
                childWindow = window.open("qq/example/oauth/index.php","TencentLogin","width=450,height=320,menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
            } 
            
            function closeChildWindow()
            {
                childWindow.close();
            }
        </script>
		

		<script type="text/javascript">
			function borderFocus(x){
				x.style.borderColor="#FFA500";
			}

			function borderBlur(x){
				x.style.borderColor="#bbb";
			}

			function load(){
				document.body.style.height=window.screen.height;
			}

		</script>
		<link rel="stylesheet" type="text/css" href="css/style.css">
		<style type="text/css">
			/*@font-face {
				font-family:myFont; src: url("font/方正细圆简�?ttf")
			}  */

			body{
				font-family: 微软雅黑, 宋体,'Hiragino Sans GB', 'WenQuanYi Micro Hei',  sans-serif;
			}

			.foot {
				height: 35vw;
			}

			.slogan {
				position: relative;
				height: 10vw;
				width: 10vw;

				border-radius: 1.5vw 1.5vw;
				background-color: #ffbf2b;

				color: white;
				font-weight: 300;
				font-size: 7.5vw;
				text-align: center;

				margin-left: 45vw;
				top: 15vw;
			}

			.slogan div {
				padding-top: 1vw;
			}



			.head {
				height: 29%;
				width: 100vw;
			}

			.inputs {
				height: 5vw;

			}

			.inputs input {
				font-size: 4.3vw;

				width: 75%;
				margin-left: 12.5%;
				
				margin-top: 8vw;

				border-width: 0 0 2px 0;
				outline: none;
				border-color: #bbbbbb;
			}

			.rst {
				cursor: pointer;
				height: 3.7vw;
				margin-top: 28vw;
				margin-right: 12.5%;

				float: right;
				color: #ffac0d;
				font-size: 3.5vw;
			}

			.buttons {
				height: 24vw;
				margin-top: 18vw;
			}

			.buttons button {
				font-size: 4.3vw;

				border-radius: 2.67vw;

				height: 9vw;
				width: 75%;

				margin-top: 3.55vw;
				margin-left: 12.5%;
				border: none;

				cursor: pointer;
				outline: none;

				color: white;
				background: #ffac0d;
			}

			.crt {
				cursor: pointer;
				height: 3.55vw;
				margin-top: 26.7vw;
				padding-top: -9vw;
				text-align: center;

				color: #ffac0d;
				font-size: 3.55vw;
			}

			.shares {
				width: 75%;
				padding-left: 10%;

			}

			.shares img {
				float: left;
				width: 20%;
				margin-left: 12%;
				margin-top: 15vw;
			}

		</style>

	</head>

	<body>

		<div class="foot">
			<div class="slogan">
				<div>�?/div>
			</div>
		</div>
		
				  
		<div class="inputs">
			<div class="account">
				<input type="text" id="account" placeholder="账号" required onfocus="borderFocus(this)" onblur="borderBlur(this)">
			</div>

			<div class="password">
				<input type="password" id="password" placeholder="密码" required  onfocus="borderFocus(this)" onblur="borderBlur(this)">
			</div>
		</div>

		<div class="rst">
			<a href="forget_password.html"><span>忘记密码</span></a>
		</div>
		
		<div class="buttons">
			<div id="login">
				<button class="login" type="submit">登陆</button>
			</div>

			<div id="seenow">
				<button class="seenow" type="submit">先看�?/button>
			</div>
		</div>

		<div class="crt">
			<a href="../register/index.html"><span onclick="">创建账号</span></a>
		</div>
		

		<div class="shares">
			<div id="qq">
				<!-- <span ></span> -->
				
				<!-- <img  class="qq"  ><span id="qqLoginBtn" ></span>
                <script type="text/javascript">
                
                 QC.Login({
                      btnId:"qqLoginBtn"    //插入按钮的节点id
                        });
                
            
                </script> -->
                <a href="#" onclick='toQzoneLogin()'><img src="img/qq.png"></a>
              <!--   <a href="#" onclick='toLogin()'>
                <img src="img/qq.png" ></a>
               <script>
                 function toLogin()
                 {
                   //以下为按钮点击事件的逻辑。注意这里要重新打开窗口
                   //否则后面跳转到QQ登录，授权页面时会直接缩小当前浏览器的窗口，而不是打开新窗�?
                   var A=window.open("oauth/index.php","TencentLogin","width=450,height=320,menubar=0,scrollbars=1,resizable=1,status=1,titlebar=0,toolbar=0,location=1");
                 } 
                </script> -->
                 <!-- <script> 
           function callback(user) 
           {
              var userName = document.getElementById('userName');
              var greetingText = document.createTextNode('Greetings, '+ user.openid + '.');
              userName.appendChild(greetingText);
           }
 
           //应用的APPID，请改为你自己的
            var appID = "101338320";
           //成功授权后的回调地址，请改为你自己的
            var redirectURI = "http://m.lizi123.cn/LiZi/login/index.html";
 
           //构造请�?
           if (window.location.hash.length == 0) 
           {
              var path = 'https://graph.qq.com/oauth2.0/authorize?';
              var queryParams = ['client_id=' + appID,'redirect_uri=' + redirectURI,'scope=' + 'get_user_info,list_album,upload_pic,add_feeds,do_like','response_type=token'];
 
              var query = queryParams.join('&');
              var url = path + query;
              window.open(url);
           }
           else 
           {
              //获取access token
              var accessToken = window.location.hash.substring(1);
              //使用Access Token来获取用户的OpenID
              var path = "https://graph.qq.com/oauth2.0/me?";
              var queryParams = [accessToken, 'callback=callback'];
              var query = queryParams.join('&');
              var url = path + query;
              var script = document.createElement('script');
              script.src = url;
              document.body.appendChild(script);        
           }
        </script> -->
              <!--   <span id="qqLoginBtn"></span>
                <script type="text/javascript">
               //调用QC.Login方法，指定btnId参数将按钮绑定在容器节点�?
                 QC.Login({
                     //btnId：插入按钮的节点id，必�?
                     btnId:"qqLoginBtn",    
                     //用户需要确认的scope授权项，可选，默认all
                     scope:"all",
                     //按钮尺寸，可用值[A_XL| A_L| A_M| A_S|  B_M| B_S| C_S]，可选，默认B_S
                     size: "img/qq.png"
                 }, function(reqData, opts){//登录成功
                     //根据返回数据，更换按钮显示状态方�?
                     var dom = document.getElementById(opts['btnId']),
                     _logoutTemplate=[
                          //头像
                          '<span><img src="{figureurl}" class="{size_key}"/></span>',
            //昵称
                          '<span>{nickname}</span>',
                          //退�?
                          '<span><a href="javascript:QC.Login.signOut();">退�?/a></span>'    
                     ].join("");
                     dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
                         nickname : QC.String.escHTML(reqData.nickname), //做xss过滤
                         figureurl : reqData.figureurl
                     }));
                 }, function(opts){//注销成功
                       alert('QQ登录 注销成功');
                 }
              );
                </script> -->
			</div>

			<div id="wechat">
				<img class="wechat" src="img/wechat.png">
			</div>

			<div id="weibo">
		
	

			<!-- <wb:login-button type="3,2" ></wb:login-button> -->
				<!-- <img class="weibo" src="img/weibo.png"> -->
                  <p><a href="<?=$code_url?>"><img src="img/weibo.png" class="weibo" title="点击进入授权页面" alt="点击进入授权页面" border="0" /></a></p>
				<!-- <wb:share-button type="button" size="middle"> </wb:share-button> -->
				
				
			<!-- <wb:login-button type="3,2" onlogin="login" onlogout="logout">登录按钮</wb:login-button> -->
                <!--  <wb:login-button type="3,2" onlogin="login" onlogout="logout"></wb:login-button> -->
            
            
               
			</div>
		</div>
	</body>
</html>