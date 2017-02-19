window.onload=function(){
	var fasong=document.getElementById("fasong");
	var chat=document.getElementById("chat");
	var h = document.documentElement.scrollHeight || document.body.scrollHeight;
	var img_num1=new Array;
	var img_num2=new Array;
	var xiabiao=new Array;
	window.scrollTo(h,h);
	///////////////////////发表情
		var biaoqing=document.getElementsByClassName("biaoqing");
		var open=document.getElementById("biaoqing");
		open.index=0;
		open.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				document.getElementById("yuyinlan").style.display="none";
				document.getElementById("biaoqinglan").style.display="block";
				this.index=1;
			}
			else{
				document.getElementById("biaoqinglan").style.display="none";
				this.index=0;
			}
		},false);
		for(var i=0;i<biaoqing.length;i++){
			biaoqing[i].index=i;
			biaoqing[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				if(this.index<=9){
				document.getElementById("textarea").value+="[@F_0"+(this.index+1)+"@]";
				}
				else{
				document.getElementById("textarea").value+="[@F_"+(this.index+1)+"@]";
				}
			},false);
		}
		
	fasong.addEventListener("touchstart",function(e){
		e.preventDefault();
		var message=document.getElementById("message").value;
		if(message.length==0){
			return alert("输入不能为空");
		}
		if(find()==false){
		var html="<div class='mytalk'><img src='img/touxiang.png' /><div class='lft'><div class='lftr'><span>2016-2-14 10:38:24</span><h3>小栗子</h3></div><span id='bofangyuyin' class='me_message'>"+message+"</span></div></div>";
		$("#chat").append(html);
		}
		else{
			var html="<div class='mytalk'><img src='img/touxiang.png' /><div class='lft'><div class='lftr'><span>2016-2-14 10:38:24</span><h3>小栗子</h3></div><div class='biaoqing_chat'>";
			var foot="</div></div></div>";
//			for(var i=0;i<message.length;i++){
//				if(findinxiabiao(i)){
//					var m=i+4;
//					var n=i+5;
//					var img="<img src='img/gif_picture/F_"+m+""+n+".gif/>";
//					html+=img;
//				}
//				var font="<span>"+message[i]+"</span>";
//				html+=foot;
//			}
//			html+=foot;
//			$("#chat").append(html);
			var st=message.split("[@F");
//			alert(st);
			for(var i=0;i<st.length;i++){
				var str=st[i].split("@]");
				for(var j=0;j<str.length;j++){
					if(str[j].length==3&&str[j][1]>=0&&str[j][1]<=3&&str[j][2]>=0&&str[j][2]<=9&&str[j][0]=="_"){
						var m=str[j][1];
						var n=str[j][2];
						var img="<img src='img/gif_picture/F_"+m+n+".gif'/>";
						html+=img;
					}
					else if(str[j].length>=0){
						var font="<span>"+str[j]+"</span>";
						html+=font;
					}
				}
			}
			html+=foot;
//			alert(html);
			$("#chat").append(html);

		}
		
		var h = document.documentElement.scrollHeight || document.body.scrollHeight;
		window.scrollTo(h,h);
		document.getElementById("message").value="";
	},false);
	
	
	function find(){
		var message=document.getElementById("message").value;
		for(var i=0;i<message.length;i++){
			if(message[i]=="["&&message[i+1]=="@"&&message[i+2]=="F"&&message[i+3]=="_"&&message[i+6]=="@"&&message[i+7]=="]"){
//				xiabiao.push(i);
//				img_num1.push(i+4);
//				img_num2.push(i+5);
				return true;
			}
			}
		return false;
	}
	
//	function findinxiabiao(j){
//		for(var i=0;i<xiabiao.length;i++){
//			if(j==xiabiao[i])
//				return true;
//		}
//		return false;
//	}

        var luyin=document.getElementById("luyin");
		var yuyinlan=document.getElementById("yuyinlan");
		var bofangyuyin=document.getElementById("yuyinbofang");
        luyin.index=0;
        luyin.addEventListener("touchstart",function(e){////////////////////录音栏打开
			e.preventDefault();
			/*luyin.index=0;*/
			if(this.index==0){
				document.getElementById("biaoqinglan").style.display="none";
				yuyinlan.style.display="block";
				this.index=1;
			}
			else{
				yuyinlan.style.display="none";
				this.index=0;
			}
		},false);
		yuyin.addEventListener("touchstart",function(e){/////////////显示时间
			e.preventDefault();
				tip.style.display="none";
				time.style.display="block";
		},false)
		
		yuyin.addEventListener("touchend",function(e){
			e.preventDefault();
			tip.style.display="block";
			time.style.display="none";
			$("#chat").append("<div class='mytalk'><img src='img/touxiang.png' /><div class='lft'><div class='lftr'><span>2016-2-14 10:38:24</span><h3>小栗子</h3></div><div class='biaoqing_chat'><span></span><a id='bofangyuyin'><img src='img/luyin_yangshi.png' class='yuyin_yangs'/></a></div></div></div>");
		},false);
		
		 /*document.querySelector('#bofangyuyin').onclick = function () {
		 	alert('ererer');
		 };*/
		 bofangyuyin.addEventListener("click",function(e){
		 	alert('aaaaaaaaa');
		 })
		//////////发语音
     
/*      var luyin=document.getElementById("luyin");
		var yuyinlan=document.getElementById("yuyinlan");
		var yuyin=document.getElementById("yuyin");
		var tip=document.getElementById("tip");
		var time=document.getElementById("time");
		var luyin_fasong=document.getElementById("luyin_fasong");
		var luyin_delete=document.getElementById("luyin_delete");
		luyin.index=0;
		luyin.addEventListener("touchstart",function(e){////////////////////录音栏打开
			e.preventDefault();
			if(this.index==0){
				document.getElementById("biaoqinglan").style.display="none";
				yuyinlan.style.display="block";
				this.index=1;
			}
			else{
				yuyinlan.style.display="none";
				this.index=0;
			}
		},false);
		
		yuyin.addEventListener("touchstart",function(e){/////////////显示时间
			e.preventDefault();
				tip.style.display="none";
				time.style.display="block";
		},false)
		
		yuyin.addEventListener("touchend",function(e){
			e.preventDefault();
			tip.style.display="block";
			time.style.display="none";
//			alert("right");
			
		},false);
   */		
		var play=document.getElementsByName("play");
		var myVideo=document.getElementsByName("video");
		function playPause(i) 
		{ 
		if (myVideo[i].paused){ 
			myVideo[i].play(); 
			play[i].style.opacity="0";
			}
		else {
			myVideo[i].pause(); 
			play[i].style.opacity="1";
			}
		} 
		for(var i=0;i<play.length;i++){
			play[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				playPause(i-1);
			},false);
		}
		
}
function upload_img(){
	var preview, img_txt, localImag, file_head = document.getElementById("upload_pic"),
            picture = file_head.value; 
            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
            !1;  
//          if (preview = document.getElementById("preview"), file_head.files && file_head.files[0]) preview.style.display = "block",  
//              preview.style.width = "100%",  
//              preview.style.height = "100%",
//              document.getElementById("add_logo").style.backgroundImage="none",
//               var preview= window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
//弹出无用窗口	var html="<div class='mytalk'><img src='img/touxiang.png' /><div class='lft'><div class='lftr'><span>2016-2-14 10:38:24</span><h3>小栗子</h3></div><img src='"+preview+"' /></div></div>";
//				$("#chat").append(html);
				var h = document.documentElement.scrollHeight || document.body.scrollHeight;
				window.scrollTo(h,h);
			
//          else {
//              file_head.select(),  
//              file_head.blur(),  
//              img_txt = document.selection.createRange().text,  
//              localImag = document.getElementById("show_logo"),  
//              localImag.style.width = "100%",  
//              localImag.style.height = "100%";  
//              try {  
//                  localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
//                  localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
//              } catch(f) {  
//                  return alert("您上传的图片格式不正确，请重新选择！"),  
//                  !1  
//              }  
//              preview.style.display = "none",  
//              document.selection.empty()  
//          }   
//          !0  
}

//视频上传预览
		 function upload_video(){
//			document.getElementById("shipin").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_video"),
		            picture = file_head.value; 
//		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
//		            !1;  
//		            if (preview = document.getElementById("source"), file_head.files && file_head.files[0]) preview.style.display = "block",  
//		                preview.style.width = "100%",  
//		                preview.style.height = "100%",
//		                index=2,
		              	var  preview = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);
		            	var  html="<div class='mytalk'><img src='img/touxiang.png' /><div class='lft'><div class='lftr'><span>2016-2-14 10:38:24</span><h3>小栗子</h3></div><div style='position: relative;' id='video'><video class='shipin' loop='loop' poster='../ffunction/img/concret/photo.jpg' controls='controls' name='video'>"; 
						 html+="<source src='"+preview+"' type='video/mp4' id='source'</source> your browser does not support the video tag </video> <img src='../ffunction/img/concret/video.png' class='play' name='play'/></div></div></div>";
						$("#chat").append(html);
						var h = document.documentElement.scrollHeight || document.body.scrollHeight;
						window.scrollTo(h,h);
//		            else {
//		                file_head.select(),  
//		                file_head.blur(),  
//		                img_txt = document.selection.createRange().text,  
////		                localImag = document.getElementById("add_class_miaoshu_img_3"),  
//		                localImag.style.width = "100%",  
//		                localImag.style.height = "100%";  
//		                try {  
//		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
//		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
//		                } catch(f) {  
//		                    return alert("您上传的图片格式不正确，请重新选择！"),  
//		                    !1  
//		                }  
//		                preview.style.display = "none",  
//		                document.selection.empty()  
//		            }   
//		            !0  
		}
		 
$(window).scroll(function () {
     //已经滚动到上面的页面高度
    var scrollTop = $(this).scrollTop();
     //页面高度
//  var scrollHeight = $(document).height();
      //浏览器窗口高度
//  var windowHeight = $(this).height();
     //此处是滚动条到底部时候触发的事件，在这里写要加载的数据，或者是拉动滚动条的操作
     if (scrollTop==0) {
//          dragThis.insertDom();
			alert("上滑加载更多!");
					
      }
});