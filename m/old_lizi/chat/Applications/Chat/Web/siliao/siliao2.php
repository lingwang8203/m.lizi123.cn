﻿<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta content="user-scalable=0;" name="viewport" />	
		<script type="text/javascript" src="../ffunction/js/jquery-2.2.3.min.js"></script>
		<title>私聊页面</title>
		<link href="css/group_chat.css" rel="stylesheet"/>
		<script type="text/javascript"  src="js/group_chat.js"></script>
        <script type="text/javascript" src="/js/swfobject.js"></script>
		<script type="text/javascript" src="/js/web_socket.js"></script>
        <script type="text/javascript" src="/js/jquery.min.js"></script>
        <script src="gif_file/jquery.js" type="text/javascript"></script>
	    <script type="text/javascript">
  //隐藏type=file 界面好看点
  $(document).ready(function(){
	  $("#pic").click(function(){
	  document.getElementById("file").click();
	  });
 });
  </script>
  <script type="text/javascript">  
  	
	  var txt = null;	//图片传到服务器的值
	//压缩图片
	function getUrl(fil, id) {
            var Cnv = document.getElementById('myCanvas');
            var Cntx = Cnv.getContext('2d');//获取2d编辑容器
            var imgss =  new Image();
            var agoimg=document.getElementById("ago");
                var tmpFile = fil[0];
				if(tmpFile){
						if(!/image\/\w+/.test(tmpFile.type)){ 
						alert("文件必须为图片文件");
						document.getElementById("file").value="";
						return false;
					}
                var reader = new FileReader();
                reader.readAsDataURL(tmpFile);
                reader.onload = function (e) {
                    url = e.target.result;
					//若图片小于150kb则发送原图
					if(tmpFile.size <=150000){
						txt = url;
						onSubmit();
						return true;
						}
                    imgss.src = url;
                    agoimg.src=url;
                    agoimg.onload = function () {
                        //等比缩放
                        var m = imgss.width / imgss.height;
                         Cnv.height =220;//该值影响缩放后图片的大小
                         Cnv.width= 220*m ;
                        //img放入画布中
                        //设置起始坐标，结束坐标
                        Cntx.drawImage(agoimg, 0, 0,220*m,220);
						onSubmit();
                    }
                }
            }
     	}
		
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
                //say(data['client_id'], data['client_name'],  data['client_name']+' 加入了聊天室', data['time']);
                if(data['client_list'])
                {
                    client_list = data['client_list'];
                }
                else
                {
                    client_list[data['client_id']] = data['client_name']; 
                }
                flush_client_list();
                console.log(data['client_name']+"登录成功");
                break;
            // 发言
            case 'say':
                //{"type":"say","from_client_id":xxx,"to_client_id":"all/client_id","content":"xxx","time":"xxx"}
                say2(data['from_client_id'], data['user_nickname'], data['content'], data['time'],data['picture'],data['flag'],data['user_image']);
				//say(data['from_client_id'], data['from_client_name'], data['content'], data['time']);
                break;
            // 用户退出 更新用户列表
            case 'logout':
                //{"type":"logout","client_id":xxx,"time":"xxx"}
                //say(data['from_client_id'], data['from_client_name'], data['from_client_name']+' 退出了', data['time']);
                delete client_list[data['from_client_id']];
				
                flush_client_list();
        }
    }

    // 输入姓名
    function show_prompt(){ 
		
        var html_user_nickname = document.getElementById('user_nickname');
		//name = html_user_nickname.innerHTML;
		var code = "mj_code_?[}{|_+"+document.getElementById('from_user_id').innerHTML+"to"+document.getElementById('to_user_id').innerHTML+"mj_end_code_?[}{|_+";
		name = code;
		//name = prompt('输入你的名字：', '');
        //if(!name || name=='null'){  
          //  name = '游客';
        //}
    }  

    // 提交对话
    function onSubmit() {
	  //var Pic = document.getElementById("myCanvas").toDataURL("image/png");
	  var html_to_nickname = document.getElementById('to_nickname');
	  var to_user_nickname = html_to_nickname.innerHTML;
	  var html_user_image = document.getElementById('user_image');
	  var user_image = html_user_image.innerHTML;
	  var html_from_user_id = document.getElementById('from_user_id');
	  var from_user_id = html_from_user_id.innerHTML;
	  var html_to_user_id = document.getElementById('to_user_id');
	  var to_user_id = html_to_user_id.innerHTML;
	  var user_nickname = document.getElementById('user_nickname').innerHTML;
	  var file = document.getElementById("file").files[0];
	  //判断对方是否在该聊天室
	  var html_client_list = document.getElementById('client_list');
	  var html_client_list_len = html_client_list.options.length;
	  var flag_exist = false;
	  var code = "mj_code_?[}{|_+"+document.getElementById('to_user_id').innerHTML+"to"+document.getElementById('from_user_id').innerHTML+"mj_end_code_?[}{|_+";
	  for(var i = 0;i<html_client_list_len;i++){
		  var value = html_client_list.options[i].text;
		  if(value == code){
			  flag_exist = true;
			  html_client_list.options[i].selected = true;
			  break;
			  }
		  }
	  //alert(flag_exist);
	  if(file){
		  //如果图片小于150kb则直接发送,否则发送压缩过后的图片
			if(file.size>150000){
				txt=document.getElementById("myCanvas").toDataURL("image/png");
			}
	  }else{
	  	txt = null;
	  }
      var input = document.getElementById("textarea");
	  var file = document.getElementById('file');
	  if(flag_exist){
      	var to_client_id = $("#client_list option:selected").attr("value");
		}else{
		var to_client_id = "只要不是all都行";	
			}
	  //alert(to_client_id);
	  var flag = 1;
	  var to_client_name = $("#client_list option:selected").text();  
	  ws.send('{"type":"say","to_client_id":"'+to_client_id+'","to_client_name":"'+to_client_name+'","content":"'+input.value.replace(/"/g, '\\"').replace(/\n/g,'\\n').replace(/\r/g, '\\r')+'","picture":"'+txt+'","from_user_id":"'+from_user_id+'","to_user_id":"'+to_user_id+'","flag":"'+flag+'","flag_exist":"'+flag_exist+'","user_image":"'+user_image+'","user_nickname":"'+user_nickname+'"}');
      input.value = "";
	  file.value="";
	  input.focus();
    }

    // 刷新用户列表框
    function flush_client_list(){
    	var userlist_window = $("#userlist");
    	var client_list_slelect = $("#client_list");
    	userlist_window.empty();
    	client_list_slelect.empty();
    	userlist_window.append('<h4>在线用户</h4><ul>');
    	client_list_slelect.append('<option value="all" id="cli_all">所有人</option>');
    	for(var p in client_list){
			userlist_window.append('<li id="'+p+'">'+client_list[p]+'</li>');
            client_list_slelect.append('<option value="'+p+'">'+client_list[p]+'</option>');
        }
    	$("#client_list").val(select_client_id);
    	userlist_window.append('</ul>');
    }
    // 发言	公告类
    function say(from_client_id, from_client_name, content, time){
		//显示文字内容
    	$("#dialog").append('<div class="speech_item"><img src="http://lorempixel.com/38/38/?'+from_client_id+'" class="user_icon" /> '+from_client_name+' <br> '+time+'<div style="clear:both;"></div><p class="triangle-isosceles top">'+content+'</p> </div>');
		//显示表情
		rContent=$("#dialog").html();
		rContent = rContent.replace(/\[@/g, "<img src=img/gif_picture/");
		rContent = rContent.replace(/\@]/g, ".gif />"); 
		$("#dialog").html(rContent);
		var fileID="update_file";
		G(fileID);
    }
	//全员聊天或私聊,可发送本地图片和表情
	 function say2(from_client_id, from_client_name, content, time,picture,flag,user_image){
		 //有本地图片时的文字内容及图片
	 	var file = picture;
		real_content = content.replace(/\[@/g, "</span><img src=img/gif_picture/");
		real_content = real_content.replace(/\@]/g, ".gif /><span>"); 
	 	if ( file !="null" && file != "" && file!=null) {
			if(flag == 1){
				//$("#chat").append('<div class="mytalk"><img src="'+user_image+'" /><div class="lft"><div class="lftr"><span>'+time+'</span><h3> '+from_client_name+' </h3></div><div class="biaoqing_chat"><span>'+real_content+'<img src="'+file+'"/></span></div></div></div>');
				$("#chat").append('<div class="mytalk"><img src="'+user_image+'" /><div class="lft"><div class="lftr"><span>'+time+'</span><h3> '+from_client_name+' </h3></div><img src="'+file+'"/></div></div>');
			}
			else{
				//$("#chat").append('<div class="yourtalk"><img src="'+user_image+'" /><div class="rgt"><div class="rgtl"><h3> '+from_client_name+' </h3><span>'+time+'</span></div><span class="your_message">'+real_content+'<img src="'+file+'"/></span></div> </div>');
				$("#chat").append('<div class="yourtalk"><img src="'+user_image+'" /><div class="rgt"><div class="rgtl"><h3> '+from_client_name+' </h3><span>'+time+'</span></div><img src="'+file+'"/></div> </div>');
			}
			}else{
		 //无本地图片时的文字内容
		 if(flag == 1){
			 //$("#chat").append('<div class="mytalk"><img src="'+user_image+'" /><div class="lft"><div class="lftr"><span>'+time+'</span><h3> '+from_client_name+' </h3></div><span class="me_message">'+real_content+'</span></div> </div>');
			 $("#chat").append('<div class="mytalk"><img src="'+user_image+'" /><div class="lft"><div class="lftr"><span>'+time+'</span><h3> '+from_client_name+' </h3></div><div class="biaoqing_chat"><span>'+real_content+'</span></div></div></div>');
			 }else{
	 			$("#chat").append('<div class="yourtalk"><img src="'+user_image+'" /><div class="rgt"><div class="rgtl"><h3> '+from_client_name+' </h3><span>'+time+'</span></div><div class="your_biaoqing_chat"> '+real_content+'</div></div> </div>');
			 }}
		var h = document.documentElement.scrollHeight || document.body.scrollHeight;
		window.scrollTo(h,h);
		//表情
		//rContent=$("#chat").html();
		//rContent = rContent.replace(/\[@/g, "<img src=img/gif_picture/");
		//rContent = rContent.replace(/\@]/g, '.gif />'); 
		//alert(rContent);
		//$("#chat").html(rContent);
		//G(fileID);
	 }
		 
		 
    $(function(){
    	select_client_id = 'all';
	    $("#client_list").change(function(){
	         select_client_id = $("#client_list option:selected").attr("value");
	    });
    });
	    </script>
	</head>
	<body>
		<header>
			<a class="title" href="chat_homepage.html"><</a>
			<p><span>我是一只大菜鸟</span></p>
			<a href="data_group.html" style="float: right;margin-right: 2vw;"><img src="img/config.png" id="create"/></a>
		</header>
		<!-- 老版界面,代码部分有用,老界面已全部隐藏,请勿注释掉这部分代码 -->
   <div id="eventReply" style="display:none" ></div><br />
    <div class="container" style="display:none">
	    <div class="row clearfix" style="display:none">
	        <div class="col-md-1 column" style="display:none">
	        </div>
	        <div class="col-md-6 column" style="display:none">
	           <div class="thumbnail" style="display:none">
	               <div class="caption" id="dialog" style="display:none"></div>
                   <div id="mysql_content" style="display:none"></div>
                   <!-- 传到event.php中所需要用到该部分 -->
                   <div id="user_image" style="display:none"></div>
                   <div id="from_user_id" style="display:none"></div>
                   <div id="to_user_id" style="display:none"></div>
                   <div id="user_nickname" style="display:none"></div>
                   <div id="to_nickname" style="display:none"></div>
	           </div>

               <div style="display:none">
               &nbsp;&nbsp;&nbsp;&nbsp;<b>房间列表:</b>（当前在&nbsp;房间<?php echo isset($_GET['room_id'])&&intval($_GET['room_id'])>0 ? intval($_GET['room_id']):1; ?>）<br>
               &nbsp;&nbsp;&nbsp;&nbsp;<a href="/?room_id=1">房间1</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/?room_id=2">房间2</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/?room_id=3">房间3</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/?room_id=4">房间4</a></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/?room_id=5">房间5</a>
               <br><br>
               </div>
               <p class="cp"></p>
	        </div>
	        <div class="col-md-3 column">
	           <div class="thumbnail" style="display:none">
                   <div class="caption" id="userlist" ></div>
               </div>
             
	        </div>
	    </div>
    </div>
		
		
		<!-- 新版界面 -->
		<div class="chat_interface" id="chat">
			<!--///////////////////////通知信息-->
			<div class="tz">
				<p class="tz_time">2分钟前</p>
				<p class="tz_message">开车我只玩源氏发起了群聊</p>
			</div>	
		</div>
		<div id="tianchong"></div>
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
		<!-- 从数据库中取得聊天记录 -->
                   <?php
				   //echo $_SERVER["REMOTE_ADDR"]; 用户ip
				   $to_user_id = $_GET['id'];	//to_user_id,对方的id
				   $from_user_id = $_GET['id2'];	//from_user_id,自己的id
				   $con = mysql_connect("localhost","root","tokushimazg");
				   if(!$con)	echo  mysql_error(); 
				   mysql_query('SET NAMES UTF8'); //不加这句话输出中文会变成????
				   $db_selected = mysql_select_db("qj",$con);
				   //取得两个人的聊天记录
				   //发送方为自己
$result_from_user_id = mysql_query("SELECT * FROM qj_chat_dialog
WHERE from_user_id='$from_user_id' and to_user_id='$to_user_id' ORDER BY time ASC");
					$num = 0;
					while($row = mysql_fetch_array($result_from_user_id)){
						$result[$num] = $row;
						$num++;
					}
					//接收方为自己
$result_to_user_id = mysql_query("SELECT * FROM qj_chat_dialog
WHERE to_user_id='$from_user_id' and from_user_id='$to_user_id' ORDER BY time ASC");
					while($row = mysql_fetch_array($result_to_user_id)){
						$result[$num] = $row;
						$num++;
					}
					//对聊天记录按时间排序
					$time=array();
					foreach($result as $result2){
						$time[]=$result2["time"];
						}
					array_multisort($time, SORT_ASC, $result); 
					//获取两个人的nickname与头像
					$result_name = mysql_query("SELECT * FROM qj_user
WHERE user_id='$from_user_id'");
					while($row_name = mysql_fetch_array($result_name)){
						$from_nickname = $row_name['user_nickname'];
						$from_image = $row_name['user_image'];
						}
					$result_name = mysql_query("SELECT * FROM qj_user
WHERE user_id='$to_user_id'");
					while($row_name = mysql_fetch_array($result_name)){
						$to_nickname = $row_name['user_nickname'];
						$to_image = $row_name['user_image'];
						}
					//将自己的头像的赋值
					?>
                    <script>
					var user_image = document.getElementById('user_image');
					var mysql_user_image = "<?php echo $from_image; ?>";
	 				user_image.innerHTML = mysql_user_image;
					var f_id = document.getElementById('from_user_id');
					var mysql_from_user_id = "<?php echo $from_user_id ?>";
					f_id.innerHTML = mysql_from_user_id;
					var t_id = document.getElementById('to_user_id');
					var mysql_to_user_id = "<?php echo $to_user_id ?>";
					t_id.innerHTML = mysql_to_user_id;
					var f_nickname = document.getElementById('user_nickname');
					var mysql_nickname = "<?php echo $from_nickname; ?>";
					f_nickname.innerHTML = mysql_nickname;
					var t_nickname = document.getElementById('to_nickname');
					var mysql_to_nickname = "<?php echo $to_nickname ?>";
					t_nickname.innerHTML = mysql_to_nickname;
					var ori_to_user_nickname = document.getElementById('ori_to_user_nickname');
					ori_to_user_nickname.innerHTML = mysql_to_nickname;
	 			    </script>
	  <?php
	  				$show_count = 0;
					//显示聊天记录
					for($i=0;$i<$num;$i++){
						if($show_count < $num - 10){
							$show_count++;
							continue;
							}
						?>
                        <script type="text/javascript">
						
						var mysql_from_user_id = "<?php echo $result[$i]['from_user_id']; ?>";
						<?php
							if($result[$i]['from_user_id'] == $from_user_id){
								?>
								var mysql_from_user_name = "<?php echo $from_nickname  ?>";
								var flag = 1;//表示发送方是自己,显示文字为在右边
								var user_image = "<?php echo $from_image; ?>";
								<?php
								}else{
									?>
									var mysql_from_user_name = "<?php echo $to_nickname ?>";
									var flag = 0;//表示发送方为他人,显示文字在左边
									var user_image = "<?php echo $to_image ?>";
									<?php
									//将该记录更新为已读
									$mysql_id = $result[$i]['id'];
									mysql_query("UPDATE qj_chat_dialog SET have_read = '1' WHERE id = '$mysql_id'");
									}
						?>
					    var mysql_content = "<?php  echo $result[$i]['content']; ?>";
					    var mysql_time = "<?php  echo $result[$i]['time']; ?>";
						var mysql_picture = "<?php  echo $result[$i]['picture']; ?>";
						say2(mysql_from_user_id,mysql_from_user_name,mysql_content,mysql_time,mysql_picture,flag,user_image);
						</script>
                        <?php
						}
						mysql_close($con);
                   ?>
	</body>
	<script>
	  //监听发送
     var fasong=document.getElementById("fasong");
     fasong.addEventListener("touchstart",function(e){
		e.preventDefault();
		document.getElementById("real_submit").click();
		},false);
	</script>
</html>