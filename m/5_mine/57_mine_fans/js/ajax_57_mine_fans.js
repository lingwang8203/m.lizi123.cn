$(document).ready(function(){
	//alert("57");
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/user/userFansList",
		async:false,
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			$("#care_list").text("");
			show(obj);
		},
		error:function(data){
			//alert("获取信息失败！");
		},
	});
})

//==========================展示=============================
function show(obj){						
	if (obj.status==200) {
		var time_array = new Array();
		for (var i = obj.user_num-1; i >= 0; i--) {        
			if ($.inArray(obj[i]['care_time'],time_array)<0) {
				var time_tag = "<li id='"+obj[i]['care_time']+"' class='aui-list-header'>"+obj[i]['care_time']+"</li>";
				$("#care_list").append(time_tag);
				time_array.push(obj[i]['care_time']);
			}
		}
		for (var j = obj.user_num-1; j >= 0; j--) {
			var html = "<li class='aui-list-item aui-list-item-middle'>";
			html += "<div class='aui-media-list-item-inner'>";
			html += "<div class='aui-list-item-media' style='width: 3rem;'>";
            html += "<a href='http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[j].user_info.id+"'><img src='"+obj[j].user_info.head_image+"' class='aui-img-round aui-list-img-sm'></a>";
            html += "</div>";
       		html += "<div class='aui-list-item-inner'>";
       		html += "<div class='aui-list-item-text'>";
            html += "<div class='aui-list-item-title aui-font-size-14'>"+obj[j].user_info.user_name+"</div>";
            if (obj[j].is_care==1) {
				html += "<div class='aui-list-item-right'><div id='"+obj[j].user_id+"' name='is_care' class='aui-label ' style='margin-top: 0.5rem;'>已关注</div></div>";
				html += "</div></div></div></li>"; 
			}else{
				html += "<div class='aui-list-item-right'><div id='"+obj[j].user_id+"' name='not_care' class='aui-label ' style='margin-top: 0.5rem;'>加关注</div></div>";
				html += "</div></div></div></li>"; 
			}
			var selectTag = "#"+obj[j]['care_time'];
			$(selectTag).append(html);
       	}
	}else if(obj.status==199){
		window.open("http://m.lizi123.cn/7_login/7_login.html");
	}
}

window.onload=function(){
	
	//取消关注
	var is_care=document.getElementsByName("is_care");
	for(var i=0;i<is_care.length;i++){
		is_care[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			deleteUserCare(this.id);
			this.name="not_care";
			this.innerHTML="关注";
			window.location.reload(true);
		},false);
	}

	
	//关注
	var not_care=document.getElementsByName("not_care");
	for(var i=0;i<not_care.length;i++){
		not_care[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			userCare(this.id);
			this.name="is_care";
			this.innerHTML="已关注";
			window.location.reload(true);
		},false);
	}
}

//=======================用户关注=============================
function userCare(id){
	if (id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/userCare",
			async:false,
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
				"client_type":0,
				"user_id":id,
			},
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
			},
			error:function(data){
				//alert("关注失败！");
			},
		});
	};
}


//========================用户取消关注============================
function deleteUserCare(id){
	if (id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/deleteUserCare",
			async:false,
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
				"client_type":0,
				"user_id":id,
			},
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
				$("#care_list").text("");
				show(obj);
			},
			error:function(data){
				//alert("取消关注失败！");
			},
		});
	};
}