$(document).ready(function(){
	
	
		$.ajax({
				type:"post",
				url:"",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
//					"sports_id":sports_id,
				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {
 	  					document.getElementById("poll").value=obj.poll;
 	  					
 	  					for(var i=0;i<obj.length;i++){
 	  						var html='<div class="aui-col-xs-2 aui-padded-t-5 aui-padded-r-5"><a href="../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id'+obj[i].user_id+'" target="_blank">';
 	  						html+='<img src="'+obj[i].headImg+'" class="aui-col-xs-12" style="border-radius: 50%;"/></a>';
 	  						html+='<img src="http://img.lizi123.cn/new_lizi/3_publish/31_publish_sports/cut.png" style="width: 1rem;position: absolute;top: 0;right: 0;" name="deleteUser"/></div>';
 	  					}
 	  					
 	  					document.getElementById("time").value=obj.time;
 	  					
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
	
})
window.onload=function(){
	
	document.getElementById("add_vote_object").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("312303_publish_sports_jinzhan_add_vote_people.htmlsport_id"+sport_id);
	},false)
	
	var deleteUser=document.getElementsByName("deleteUser");
//	alert(deleteUser.length);
	for(var i=0;i<deleteUser.length;i++){
		deleteUser[i].index=i;
		deleteUser[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("choosedVotePeopleList").removeChild(document.getElementById("choosedVotePeopleList").children[this.index]);
		},false)
	}
	
}
