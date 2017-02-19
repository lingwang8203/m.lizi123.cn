$(document).ready(function(){
	var club_id = getQueryString('club_id');
	//alert(club_id);
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/club/clubInfo",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
			"club_id":club_id
			
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				//document.getElementById("club_fengmian").src=obj.image;
				document.getElementById("club_headImg").src=obj.image;
				document.getElementById("club_name").innerHTML=obj.name;
				//document.getElementById("club_school").innerHTML=("+obj.school+")";
				document.getElementById("club_miaoshu").innerHTML=obj.sign;
				document.getElementById("club_shoucang_number").innerHTML=obj.collect_num;
				document.getElementById("club_member_number").innerHTML=obj.member_num+"人>";
				
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			// alert("失败！");
		},
	});
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/club/clubImpress",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
			"club_id":club_id,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				
				////////////获取成员列表
				$("#club_member_list").text("");
				for(var i=0;i<obj.member.length;i++){
					var html="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.member[i].id+"' target='_blank' ><img src='"+obj.member[i].head_image+"' class='aui-img-round aui-col-xs-2' /></a>";
					$("#club_member_list").append(html);
				}
				var html="<img src='http://img.lizi123.cn/new_lizi/3_publish/34_publish_club/add.png' class='aui-img-round aui-col-xs-2' id='add_club_member'/>";
				$("#club_member_list").append(html);
				
				/////获取社团活动
				$("#club_activity_list").text("");
				if (obj.activity_image!=0) {
					document.getElementById("club_activity_number").innerHTML=obj.activity_image.length+"个>";
					for(var j=0;j<obj.activity_image.length;j++){
						var htm="<div class='aui-col-xs-4'>";
						htm+="<a href='../../2_function/23_function_sports/232_function_sports_concret.html?activity_id="+obj.activity_image[j].activity_id+"' target='_blank'><img src='"+obj.activity_image[j].album_picture+"' name='club_poster'/></a></div>";
						$("#club_activity_list").append(htm);
					}
				}else{
					document.getElementById("club_activity_number").innerHTML=obj.activity_image+"个>";					
				}
				
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			// alert("失败！");
		},
	});
	
})
window.onload=function(e){
	var club_id = getQueryString('club_id');
	/////编辑社团信息链接
	document.getElementById("editClubInfor").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.location.href="344_Manage_club_edit_information.php?club_id="+club_id;
	},false)
	
	/////管理成员链接
	document.getElementById("club_member_number").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.location.href="345_manage_club_member.html?club_id="+club_id;
	},false)
	
	////邀请成员加入链接
	document.getElementById("add_club_member").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.location.href="342_publish_club_step2_invite.html?club_id="+club_id;
	},false)
	
	///////管理活动链接
	document.getElementById("club_activity_number").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.location.href="34313_publish_club_step2_Manage_frame1_editMoreSports.html?"+club_id;
	},false)
	
}

//=================================获取url参数=====================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 
