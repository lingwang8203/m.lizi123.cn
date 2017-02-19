$(document).ready(function() {
	var searching = document.getElementById("searching");
	searching.addEventListener("touchstart", function(e) {
		//$("#").addEventListener("touchstart", function(e) {
		$("#result_none").hide();
		e.preventDefault();

		var search = document.getElementById("search-input").value;
		if(search == "") {} else {
			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/index/search",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"search_key": search
				},
				success: function(data) {
					var obj = eval(data);
					console.dir(obj);
					$("#clubSearchResult").text("");
					$("#peopleSearchResult").text("");
					$("#activitySearchResult").text("");
					$("#classSearchResult").text("");
					$("#result_none").hide();
					if(obj.status == 200) {
						for(var i = 0; i < obj.club.length && i < 2; i++) {
							$("#clubSearchResult").show();
							if(i == 0) {
								var html = '<li class="aui-col-xs-12" style="color: #404040;">社团</li>';
							} else {
								var html = '';
							}
							html += '<li class="aui-row aui-padded-b-5  aui-padded-t-5"style="border-top: 0.05rem solid  #f5f5f5;border-bottom: 0.05rem solid  #f5f5f5;background: white;">';
							html += '<a href="../../2_function/22_function_club/222_function_club_concret.html?club_id=' + obj.club[i].id + '">';
							html += '<div class="aui-col-xs-2 aui-text-center">';
							
							html += '<img src="' + obj.club[i].image + '"class="aui-img-round club_photo_suit" />';
		
							html += '</div></a><div class="aui-col-xs-8  aui-padded-l-10">';
							html += '<div class="aui-col-xs-12 aui-font-size-16">' + obj.club[i].name + '</div>';
							html += '<div class="aui-col-xs-12 aui-font-size-12"style="color:#666666;">' + obj.club[i].intro + '</div>';
							html += '<div class="aui-col-xs-12"><i class="aui-icon-my aui-iconfont aui-pull-left"></i>';
							html += '<div class="aui-font-size-12 aui-pull-left  aui-padded-l-5"style="padding-top: 0.1rem;color:#666666;"><span style="color:#ffcb53;"> ' + obj.club[i].member_num + '个</span>已加入</div>';
							html += '</div></div><div class="aui-col-xs-2 aui-pull-right">';
							if(obj.club[i].is_join == 0) {
								html += '<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on">申请加入</div>';
							} else if(obj.club[i].is_join == 1) {
								html += '<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined aui-bg-base aui-text-white tap_on">已申请</div>';
							} else {
								html += '<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined aui-bg-base aui-text-white tap_on j">已加入</div>';
							}
							html += '<div class="aui-bar-ligh-col-xs-12">';
							html += '<a href="../../2_function/22_function_club/222_function_club_concret.html?club_id=' + obj.club[i].id + '"><i class="aui-iconfont aui-icon-right aui-pull-right aui-padded-r-15"></i></a>';
							html += '</div></div></li>';
							$("#clubSearchResult").append(html);
						}
						/*var html='<div class="aui-hr"></div>';
						if(obj.club.length>=2){
							html+='<a href="121_search_club.html?search_id='+obj.search_id+'" ><li class="aui-col-xs-12 aui-font-size-12"style="padding: 0.1rem 0;color: #0d78a5;">查看更多相关社团></li></a>';
						}
						$("#clubSearchResult").append(html);*/

						for(var i = 0; i < obj.user.length && i < 2; i++) {
							$("#peopleSearchResult").show();
							if(i == 0) {
								var html = '<li class="aui-col-xs-12" style="color: #404040;">达人</li>';
							} else {
								var html = '';
							}
							html += '<li class="aui-col-xs-12"><div class="aui-hr"></div><div class="aui-col-xs-12 aui-row">';
							html+=  '<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id=' + obj.user[i].id + '">';
							html += '<div class="aui-col-xs-2 aui-text-center" style="margin: 0;padding: 0;margin-top: 0.1rem;">';
							html += '<img src="' + obj.user[i].head_image + '" class="aui-img-round club_photo_suit" id="teacher_pic"/></div></a>';
							html += '<div class="aui-col-xs-7 aui-row aui-padded-t-15 aui-padded-l-10">';
							html += '<div class="aui-col-12 aui-font-size-14" id="teacher_name">' + obj.user[i].user_name + '</div>';
							html += '<div class="aui-col-xs-12 aui-font-size-12"style="color: #9E9E9E;" id="teacher_miaoshu">' + obj.user[i].intro + '</div></div>';
							html += '<div class="aui-col-xs-3" style="margin-top: 1.2rem;color: #9E9E9E;">';
							if(obj.user[i].is_care == 0) {
								html += '<div class="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5"style="width: auto;border-radius: 0.4em;" onclick="userCare(this)" id="'+obj.user[i].id+'">+关注</div>';
							} else {
								html += '<div class="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5"style="width: auto;border-radius: 0.4em;" onclick="deleteUserCare(this)" id="'+obj.user[i].id+'">已关注</div>';
							}
							html += '</div></div></li>';
							$("#peopleSearchResult").append(html);
						}
						/*html='<div class="aui-hr"></div>';
						if(obj.club.length>=2){
							html+='<a href="121_search_people.html?search_id='+obj.search_id+'" ><li class="aui-col-xs-12 aui-font-size-12"style="padding: 0.1rem 0;color: #0d78a5;">查看更多相关达人></li></a>';
						}
						$("#clubSearchResult").append(html);*/

						for(var i = 0; i < obj.activity.length && i < 1; i++) {
							$("#activitySearchResult").show();
							var html = '<li class="aui-col-xs-12" style="color: #404040;">活动</li>';
							html += '<li class="aui-col-xs-12"><div class="aui-hr"></div>';
							html += '<a href="../../2_function/23_function_sports/232_function_sports_concret.html?activity_id=' + obj.activity[i].id + '">';
							html += '<div class="aui-col-xs-12 aui-row"style="background: white;">';
							html += '<div class="aui-col-xs-3 aui-text-center"style="padding:0.4rem 0;">';
							html += '<img src="' + obj.activity[i].image + '" class="sports_cover"/>';
							html += '</div><div class="aui-col-xs-9 aui-padded-t-5 aui-font-size-14"style="color: #000000;">' + obj.activity[i].name + '</div>';
							html += '<div class="aui-col-xs-12 aui-padded-t-5 aui-font-size-12 aui-padded-r-5" >' + obj.activity[i].intro + '</div></div>';
							//html+='</a></li><div class="aui-hr"></div>';
							//html+='<a href="121_search_activity.html?search_id='+obj.search_id+'"><li class="aui-col-xs-12 aui-font-size-12"style="padding: 0.1rem 0;color: #0d78a5;">查看更多相关活动></li></a>';
							$("#activitySearchResult").append(html);
						}

						for(var i = 0; i < obj.class.length && i < 1; i++) {
							$("#classSearchResult").show();
							var html = '<li class="aui-col-xs-12" style="color: #404040;">课程</li>';
							html += '<li class="aui-col-xs-12"><div class="aui-hr"></div>';
							html += '<a href="../../2_function/21_function_class/212_function_class_concret.html?class_id=' + obj.class[i].id + '">';
							html += '<div class="aui-col-xs-12 aui-row"style="background: white;"><div class="aui-col-xs-3 aui-text-center"style="padding:0.4rem 0;">';
							html += '<img src="' + obj.class[i].image + '" class="sports_cover"/></div>';
							html += '<div class="aui-col-xs-9 aui-padded-t-5 aui-font-size-14"style="color: #000000;">' + obj.class[i].name + '</div>';
							html += '<div class="aui-col-xs-12 aui-padded-t-5 aui-font-size-12 aui-padded-r-5" >' + obj.class[i].intro + '</div>';
							//html+='</div></a></li><div class="aui-hr"></div>';
							//html+='<a href="121_search_class.html?search_id='+obj.search_id+'" ><li class="aui-col-xs-12 aui-font-size-12"style="padding: 0.1rem 0;color: #0d78a5;">查看更多相关课程></li></a>';
							$("#classSearchResult").append(html);
						}
					} else if(obj.status == 199) {
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					} else if(obj.status == 1006) {
						$("#clubSearchResult").hide();
						$("#peopleSearchResult").hide();
						$("#activitySearchResult").hide();
						$("#classSearchResult").hide();
						$("#result_none").show();
					}
				},
				error: function(data) {
					//alert("失败");
				},
			}); //ajax
		} //else
	}, false); //touchstart
});



//=======================用户关注=============================
function userCare(dom){
	//alert(dom.id);
	dom.className = "aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
	dom.innerHTML = "已关注";
	dom.onclick = function(){deleteUserCare(this)};
	if (dom.id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/userCare",
			async:false,
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
				"client_type":0,
				"user_id":dom.id,
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
function deleteUserCare(dom){
	//alert(dom.id);
	dom.className = "aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
	dom.innerHTML = "+关注";
	dom.onclick = function(){userCare(this)};
	if (dom.id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/deleteUserCare",
			async:false,
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
				"client_type":0,
				"user_id":dom.id,
			},
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
			},
			error:function(data){
				//alert("取消关注失败！");
			},
		});
	};
}