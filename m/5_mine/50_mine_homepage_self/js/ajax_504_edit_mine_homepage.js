$(document).ready(function(){
	////////////获得已知项
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/user/userInfo",
		xhrFields:{
       		withCredentials: true
   		},
   		async:false,
		data:{
			"client_type":0,
			"is_get_tag":1,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				document.getElementById("Club_logo").src=obj.head_image;
				document.getElementById("name").value=obj.user_name;
				document.getElementById("intro").value=obj.intro;
				if (obj.tag) {
					$("#tag_list").text("");
					var i=0;
					var html = '<div class="aui-row aui-col-xs-12 tap_out">';
					for (; i < obj.tag.length&&i<3; i++) {
						html += '<div class="aui-label aui-font-size-12 tt">'+obj.tag[i].tag_name+'</div>';
					};
					html += '</div>';
					if (obj.tag.length>=3) {
						html += '<div class="aui-row aui-col-xs-12 tap_out">';
						for (; i < obj.tag.length&&i<6; i++) {
							html += '<div class="aui-label aui-font-size-12 tt">'+obj.tag[i].tag_name+'</div>';
						};
						html += '</div>';
					};
					$("#tag_list").append(html);
				};
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			//alert("失败！");
		},
	});
	
})
window.onload=function(e){
	
	document.getElementById("furnish").addEventListener("touchstart",function(e){
		e.preventDefault();
		var newHeadImg=images.serverId[0];
		var newName=document.getElementById("name").value;
		var newIntro=document.getElementById("intro").value;
		var data = new Object();
		if (newHeadImg||newName||newIntro) {
			data.client_type = 0;
			if (newHeadImg) {data.user_image = newHeadImg;};
			if (newName) {data.user_name = newName;};
			if (newIntro) {data.user_intro = newIntro;};
			console.dir(data);
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/user/editUserInfo",
				xhrFields:{
               		withCredentials: true
           		},
				data:data,
				success:function(data){
					var obj = eval(data);
					//alert(obj.status);
 	  				if (obj.status==200) {
 	  					window.location.href="http://m.lizi123.cn/5_mine/50_mine_homepage_self/50_mine_homepage_self.html";
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
		}
	},false)
	
}
