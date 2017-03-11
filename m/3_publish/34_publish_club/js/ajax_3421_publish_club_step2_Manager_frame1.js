$(document).ready(function(){
	var club_id = getQueryString('club_id');
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/club/clubImpress",
			data:{
				"client_type":0,
		        "club_id":club_id
			},	
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
 	  				//社团名称
 	  				document.getElementById("club_name").innerHTML=obj.name;
 	  				//社团海报
 	  				if (obj.activity_image!=0) {
 	  					$("#club_poster").text("");
 	  					for(var i=0;i<3&&i<obj.activity_image.length;i++){
							var html='<div class="aui-col-xs-4">';
							if(obj.activity_image[i].type==0){///0表示课程  1表示活动
								html+='<a href="../21_function_class/212_function_class_concret.html?class_id='+obj.activity_image[i].id+'" target="_blank"><img src="'+obj.activity_image[i].album_picture+'"/></a>';
							}else{
								html+='<a href="../23_function_sports/232_function_sports_concret.html?activity_id='+obj.activity_image[i].activity_id+'" target="_blank"><img src="'+obj.activity_image[i].album_picture+'"/></a>';
							}
							html+='</div>';
							$("#club_poster").append(html);
	 	  			 	}
 	  				}	
 	  				//社团成员
 	  				if (obj.member!=0) {
 	  					$("#club_member_list").text("");
 	  					for(var j=0;j<6&&j<obj.member.length;j++){
	 	  					var html="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.member[j].id+"' target='_blank'><img src='"+obj.member[j].head_image+"' class='aui-img-round aui-col-xs-2'/></a>";
	 	  					$("#club_member_list").append(html);
	 	  				}
 	  				}
 	  				
 	  				//社团简介
 	  				document.getElementById("club_miaoshu").innerHTML=obj.intro;
 	  				$("#club_member_number").text(obj.member.length);
// 	  				document.getElementById("club_member_number").innerHTML=obj.member.length;
				}
    		},
	     	error:function(data)
	     	{
	     		alert("获取社团详情失败!");
	     	}
	
		});
		document.getElementById("add_public").addEventListener("touchstart",function(e){
			e.preventDefault();
			window.open("http://m.lizi123.cn/3_publish/34_publish_club/34312_public_club_step2_Manage_frame1_editMessage.html?club="+club_id);
		},false);
		document.getElementById("add_activity").addEventListener("touchstart",function(e){
			e.preventDefault();
			window.open("http://m.lizi123.cn/3_publish/31_publish_sports/311_publish_sports_step1.html?club="+club_id);
		},false);
		document.getElementById("fabu_memory").addEventListener("touchstart",function(e){
			e.preventDefault();
			window.open("http://m.lizi123.cn/3_publish/34_publish_club/34331_publish_club_step2_Manage_frame3_publishRecord.html?club="+club_id);
		},false);
		document.getElementById("check_request").addEventListener("touchstart",function(e){
			e.preventDefault();
			window.open("");
		},false);
})
