$(document).ready(function() {
	var club_id = getQueryString('club_id');
	var activity_name = $("activity_name").val();
	var memory_data = $("activety_data").val();	
 /**判断输入框中输入的日期格式为yyyy-mm-dd和正确的日期 */
	var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
    var activity_memory=$("activity_memory").val();
    
	$("#memoty_public").click(function() {
		if(activity_name == "") {
			alert("活动标题不能为空");
			$("activity_name").focus();
		
		}else if(activity_memory == "") {
			alert("活动记忆不能为空！");
			$("activity_memory").focus();
			
		}
else if(!reg.test(memory_data) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
			alert("您输入的日期格式有误，正确格式应为: 2012 - 01 - 01 ");			
			$("#activety_data").focus();
		}else {
			$.param(memory_images.serverId, true);
			$.param(title_images.serverId, true);
			$.ajax({
				type: "POST",
				url: "http://api.lizi123.cn/index.php/home/user/publishShow",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"club_id": club_id,
					"activity_name": activity_name,
					"memory_data": memory_data,
					"activity_memory": activity_memory,
					"memory_images": memory_images.serverId,
					"title_images": title_images.serverId,
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {
						window.open("http://m.lizi123.cn/2_function/22_function_club/222_function_club_concret.html?club_id=" + club_id);

					} else if(obj.status == 199) {
						window.location.href = "http://m.lizi123.cn/7_login/7_login.html";
					}

				},
				error: function(data) {},
			});
		}
	});

})