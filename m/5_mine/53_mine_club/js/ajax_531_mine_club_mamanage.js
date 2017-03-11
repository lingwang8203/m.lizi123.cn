$(document).ready(function(){
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/club/manageClubList",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			$("#club_list").text("");
			resShow(obj);
		},
		error:function(data){
			//alert("点赞失败！");
		},
	});

})

//==========================秀秀展示=============================
function resShow(obj){						
	if (obj.status==200) {
		for (var i = 0; i < obj.length; i++) {
			var html="<li class='aui-row' style='border: 0.05rem solid #D9D9D9;border-radius:0.5rem;margin: 0.5rem 0.3rem;padding: 0.3rem 0.2rem;'>";
	   		html+="<div class='aui-col-xs-2 aui-text-center'>";
            html+="<a href='http://m.lizi123.cn/3_publish/34_publish_club/3421_publish_club_step2_Manage_frame1.php?club_id="+obj[i].id+"' target='_blank'>";
	   		html+="<img src='"+obj[i].image+"' class='aui-img-round club_photo_suit' /></a></div>";
	   		html+="<div class='aui-col-xs-8 aui-padded-l-5'>";
	   		html+="<div class='aui-col-xs-12 aui-font-size-16'>"+obj[i].name+"</div>";
	   		html+="<div class='aui-col-xs-12 aui-font-size-12' style='color:#666666;'>"+obj[i].sign+"</div>";
	   		html+="<div class='aui-col-xs-12'>";
	   		html+="<i class='aui-icon-my aui-iconfont aui-pull-left'></i>";
	   		html+="<div class='aui-font-size-12 aui-pull-left aui-padded-l-5' style='padding-top: 0.1rem;color:#666666;'><span style='color:#ffcb53;'> "+obj[i].member_num+"人 </span>已加入</div>";
	   		html+="</div></div> <div class='aui-col-xs-2 aui-pull-right'>";
	   		html+="<a href='http://m.lizi123.cn/3_publish/34_publish_club/3421_publish_club_step2_Manage_frame1.php?club_id="+obj[i].id+"'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on' style='margin-top: 0.1rem;'>进入管理</div></a>";
	   		html+="<a href='http://m.lizi123.cn/3_publish/34_publish_club/3421_publish_club_step2_Manage_frame1.php?club_id="+obj[i].id+"' target='_blank'>";
	   		html+="<div class='aui-bar-ligh-col-xs-12'>";
	   		html+="<i class='aui-iconfont aui-icon-right aui-pull-right aui-padded-r-10'></i>";
	   		html+="</div></a></div></li>";
	       	$("#club_list").append(html);
		}
	}else if(obj.status==199){
		window.open("http://m.lizi123.cn/7_login/7_login.html");
	}
}