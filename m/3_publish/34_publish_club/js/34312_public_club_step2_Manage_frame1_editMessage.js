$(document).ready(function() {
	var club_id = getQueryString('club_id');
	$("#finish").click(function() {
		var content_val = $("#content").val();
		if(content_val == "") {
			alert("正文内容不能为空！！！");
			return false;
		} else {
			$.ajax({
				type: "POST",
				url: "http://api.lizi123.cn/index.php/home/club/clubAnnouncement",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"club_id" :club_id,
                     "content":content_val
				},
				success: function(data) {
					var obj = eval(data);
					console.dir(obj);
					if(obj.status == 200) {
//						showDefault('custom');
                        alert("发布成功，自动转到管理社团界面~~~");
						location.href = "http://m.lizi123.cn/3_publish/34_publish_club/342_publish_club_step2_Manage.html?club_id=" + club_id;
					}

				},
				error: function(data) {
					alert("提交失败，请重试！！！");
				}

			}, false)
		}
	})

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return unescape(r[2]);
		} else {
			return null;
		}
	};
})