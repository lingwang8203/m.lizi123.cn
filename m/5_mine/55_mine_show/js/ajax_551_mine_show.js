$(document).ready(function(){
	//alert("56");
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/user/userShowList",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			$("#show_list").text("");
			show(obj);
		},
		error:function(data){
			//alert("点赞失败！");
		},
	});
})

//==========================秀秀展示=============================
function show(obj){						
	if (obj.status==200) {
		for (var i = obj.show_num-1; i >= 0; i--) {
			var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
			html += "<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
			html += "<a href='../../5_mine/50_mine_homepage_self/50_mine_homepage_self.html?user_id=" + obj[i].user_info.id + "' target='_blank'><img src='" + obj[i].user_info.head_image + "' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
			html += "</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
			html += "<div class='aui-col-12 aui-font-size-14'>" + obj[i].user_info.user_name + "</div>";
			html += "<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>" + obj[i].user_info.intro + "</div></div>";
			html += "<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
			html += "<div class='aui-pull-right aui-padded-r-5'>" + obj[i].time + "</div></div></div>";
			html += "<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=" + obj[i].id + "'>";
			if(obj[i].images.length == 1) {
				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj[i].intro + "</div>";
				html += "<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
				html += "<img src='" + obj[i].images[0] + "' style='height:9rem;width: 100%;' /> ";
				html += "</div>";
			} else if(obj[i].images.length == 2) {
				html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj[i].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
				html += "<div class='aui-col-xs-4 aui-text-center'>";
				html += "<img src='" + obj[i].images[0] + "'class='showphoto3'/></div>";
				html += "<div class='aui-col-xs-4 aui-text-center'>";
				html += "<img src='" + obj[i].images[1] + "'class='showphoto3'/></div></div>";
			} else if(obj[i].images.length >= 3) {
				html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj[i].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
				for(var j = 0; j < obj[i].images.length; j++) {
					html += "<div class='aui-col-xs-4 aui-text-center'>";
					html += "<img src='" + obj[i].images[j] + "'class='showphoto3'/>";
					html += "</div>";
				}
				html += "</div>";
			} else {
				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj[i].intro + "</div>";
			}

			html += "</a><div class='aui-row aui-col-xs-12'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
			html += "<i class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj[i].good_num + "</span>";
			html += "</div>";
			html += "<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id=" + obj[i].id + "'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
			html += "<i class='aui-iconfont aui-icon-comment'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj[i].comment_num + "</span></div></a></div></li>";
			html += "<div class='aui-hr'></div>";
			$("#show_list").append(html);
		}
	}else if(obj.status==199){
		window.open("http://m.lizi123.cn/7_login/7_login.html");
	}
}