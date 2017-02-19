$(document).ready(function(){
	var club_id = getQueryString('club_id');
	//alert("ifram1:"+club_id);
	
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/club/clubImpress",
			data:{
				"client_type":0,
		        "club_id":club_id,
			},	
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
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
 	  					$("#club_people_list").text("");
 	  					for(var j=0;j<6&&j<obj.member.length;j++){
	 	  					var html="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.member[j].id+"' target='_blank'><img src='"+obj.member[j].head_image+"' class='aui-img-round aui-col-xs-2'/></a>";
	 	  					$("#club_people_list").append(html);
	 	  				}
 	  				}
 	  				
 	  				//社团简介、特色
 	  				document.getElementById("club_jianjie").innerHTML=obj.intro;
 	  				//document.getElementById("club_tese").innerHTML=obj.feature;
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("获取社团详情失败!");
	     	}
	
		});
})
window.onload=function(){
	
	/*document.getElementById("club_more_member").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("2221_club_member.html?club_id="+club_id);
	},false)*/
	
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