<html>
	<head>
	<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<title>群聊页面</title>
		<link href="css/group_chat.css" rel="stylesheet"/>
		<script type="text/javascript" src="js/group_chat.js"></script>
		<script type="text/javascript" src="js/jquery.min.js" ></script>
		<script type="text/javascript" src="/js/swfobject.js"></script>
        <script type="text/javascript" src="/js/web_socket.js"></script>
        <script src="gif_file/jquery.js" type="text/javascript"></script>
	</head>
	  <script>
   //隐藏type=file 界面好看点
    $(document).ready(function(){
 	  $("#update_file").click(function(){
	  document.getElementById("file").click();
	  });
    });
  </script>
  <script type="text/javascript">
        if (typeof console == "undefined") {    this.console = { log: function (msg) {  } };}
    WEB_SOCKET_SWF_LOCATION = "/swf/WebSocketMain.swf";
    WEB_SOCKET_DEBUG = true;
    var ws, name, client_list={};

    // 连接服务端
    function connect() {
       // 创建websocket
       ws = new WebSocket("ws://"+document.domain+":15000");
       // 当socket连接打开时，输入用户名
       ws.onopen = onopen;
       // 当有消息时根据消息类型显示不同信息
       ws.onmessage = onmessage; 
       ws.onclose = function() {
    	  console.log("连接关闭，定时重连");
          connect();
       };
       ws.onerror = function() {
     	  console.log("出现错误");
       };
    }

    // 连接建立时发送登录信息
    function onopen()
    {
        if(!name)
        {
            show_prompt();
        }
        // 登录
        var login_data = '{"type":"login","client_name":"'+name.replace(/"/g, '\\"')+'","room_id":"<?php echo isset($_GET['room_id']) ? $_GET['room_id'] : 1?>"}';
        console.log("websocket握手成功，发送登录数据:"+login_data);
        ws.send(login_data);
    }

    // 服务端发来消息时
    function onmessage(e)
    {
		
		
        console.log(e.data);
        var data = eval("("+e.data+")");
        switch(data['type']){
            // 服务端ping客户端
            case 'ping':
                ws.send('{"type":"pong"}');
                break;;
            // 登录 更新用户列表
            case 'login':
                //{"type":"login","client_id":xxx,"client_name":"xxx","client_list":"[...]","time":"xxx"}
                say(data['client_id'], data['client_name'],  data['client_name']+' 加入了聊天室', data['time']);
                if(data['client_list'])
                {
                    client_list = data['client_list'];
                }
                else
                {
                    client_list[data['client_id']] = data['client_name']; 
                }
                console.log(data['client_name']+"登录成功");
                break;
            // 发言
            case 'say':
                //{"type":"say","from_client_id":xxx,"to_client_id":"all/client_id","content":"xxx","time":"xxx"}
                say2(data['from_client_id'], data['from_client_name'], data['content'], data['time'],data['picture']);
				//say(data['from_client_id'], data['from_client_name'], data['content'], data['time']);
                break;
        }
    }

    // 输入姓名
    function show_prompt(){  
        name = prompt('输入你的名字：', '');
        if(!name || name=='null'){  
            name = '游客';
        }
    }  

    // 提交对话
    function onSubmit() {
      var input = document.getElementById("textarea");
      var to_client_id = $("#client_list option:selected").attr("value");
      var to_client_name = $("#client_list option:selected").text();	  
	  ws.send('{"type":"say","to_client_id":"'+to_client_id+'","to_client_name":"'+to_client_name+'","content":"'+input.value.replace(/"/g, '\\"').replace(/\n/g,'\\n').replace(/\r/g, '\\r')+'","picture":"'+txt+'"}');
      input.value = "";
	  file.value="";
	  
	  input.focus(); 
    }

    // 发言	公告类
    function say(from_client_id, from_client_name, content, time){
		//显示文字内容
    	$("#dialog").append('<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'</p> </div>');
		//显示表情
		rContent=$("#dialog").html();
		rContent = rContent.replace(/\[@/g, "<img src=gif_file/gif_picture/");
		rContent = rContent.replace(/\@]/g, ".gif />"); 
		$("#dialog").html(rContent);
		G(fileID);
    }
	//全员聊天或私聊,可发送本地图片和表情
	 function say2(from_client_id, from_client_name, content, time,picture){
		 //有本地图片时的文字内容及图片
	 	var file = picture;
	 	if ( file !="null") {
			$("#dialog").append('<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'<img src="'+file+'"/></p> </div>')
			$test_txt = '<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'<img src="'+file+'"/></p> </div>';
			//$("#dialog").append($test_txt);
		}else{
		 //无本地图片时的文字内容
	 	$("#dialog").append('<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'</p> </div>')
		$test_txt='<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'</p> </div>';
		//$("#dialog").append($test_txt);
		}
		//表情
		rContent=$("#dialog").html();
		rContent = rContent.replace(/\[@/g, "<img src=gif_file/gif_picture/");
		rContent = rContent.replace(/\@]/g, ".gif />"); 
		$("#dialog").html(rContent);
		G(fileID);
	 }
		 
		 
    $(function(){
    	select_client_id = 'all';
	    $("#client_list").change(function(){
	         select_client_id = $("#client_list option:selected").attr("value");
	    });
    });
    
  </script>
	<body onload="connect();"> 
		<header>
			<a class="title" href="chat_homepage.php"><</a>
			<p><span>不玩游戏的LOLer(10人)</span></p>
			<a href="data_group.html" style="float: right;margin-right: 2vw;"><img src="img/config.png" id="create"/></a>
		</header>      
	         <div class="caption" id="dialog"></div>
             <div class="chat_dilan">
			<div id="input">
            <form method="post" onSubmit="onSubmit(); return false;" enctype="multipart/form-data" >
            <select style="margin-bottom:8px;display:none" id="client_list">
                        <option value="all">所有人</option>
                    </select>
				<input type="text" maxlength="100" id="textarea"/>
                <input type="file" id = "file" name = "file" onChange="getUrl(this.files,this.id);" style="display:none"/>
				<span id=fasong >发送</span>
                <canvas id="myCanvas"     style="display: none" ></canvas>
                <img src="" alt="" id="ago" style="width: 500px;display:none"/>
                <div id = "result"> </div>
                <input type="submit" id="real_submit" style="display:none"/>
                </form>
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