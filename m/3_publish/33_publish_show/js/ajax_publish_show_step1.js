$(document).ready(function() {
	//完成
	i = 0; 
	var loadimg=document.getElementById("loadimg");
	document.getElementById("furnish").addEventListener("touchstart", function() {

		var content = document.getElementById("content").value;
		//document.getElementById("preview1").style.display=="none"||
		if(content == "") {
			alert("信息未填写完善，或填写错误");
		} else {
			loadimg.style.display="block";
			$.param(images.serverId, true);
			$.ajax({
				type: "POST",
				url: "http://api.lizi123.cn/index.php/home/user/publishShow",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"intro": content,
					"images": images.serverId,
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {
						//发布秀秀 直接跳转到广场

						//window.location.href="../../../4_ground/4_ground.html?xiu_id="+obj.id+"";
						loadimg.parentNode.removeChild(loadimg);
						setTimeout('window.open("http://m.lizi123.cn/?url_index=gro4");',1000);

					} else if(obj.status == 199) {
						window.location.href = "http://m.lizi123.cn/7_login/7_login.html";
					}

				},
				error: function(data) {
					//		                alert("error!");
				},
			});

		}
	}, false);

})