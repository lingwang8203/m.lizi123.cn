$(document).ready(function(){
	
	/////////////////加载信息
	
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
 	  					if(obj.checked==0){
 	  						document.getElementsByClassName("aui-switch")[0].checked=false;
 	  					}else{
 	  						document.getElementsByClassName("aui-switch")[0].checked=true;
 	  					}
 	  					
 	  					for(var i=0;i<obj.people.length;i++){
 	  						if(i%2==0){
	 	  						var html='<div class="aui-col-xs-6 aui-row"style="border-right: 0.1rem solid #fcb058;border-top:0.1rem solid #fcb058 ;">';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center aui-padded-t-5">';
	 	  						html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html" target="_blank"><img src="'+obj.people[i].headImg+'" class="userPhoto"/></div></a>';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center"><a href=""target="_blank"><div class="aui-label aui-font-size-12 tap">联系TA</div></a>';
	 	  						html+='</div><div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #000000;">'+obj.people[i].name+'</div>';
	 	  						html+='<div  class="aui-col-xs-12 aui-text-center">真实姓名:'+obj.people[i].realName+'</div>';
	 	  						html+='<div class="aui-col-xs-12  aui-text-center">手机号：'+obj.people[i].phone+'</div>';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center  aui-padded-b-10">班级：'+obj.people[i].class+'</div>';
	 	  						html+='</div>';
	 	  					}else{
	 	  						var html='<div class="aui-col-xs-6 aui-row"style="border-right: 0.1rem solid #fcb058;border-top:0.1rem solid #fcb058 ;">';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center aui-padded-t-5">';
	 	  						html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html" target="_blank"><img src="'+obj.people[i].headImg+'" class="userPhoto"/></div></a>';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center">';
	 	  						html+='<a href=""target="_blank"><div class="aui-label aui-font-size-12 tap">联系TA</div></a></div>';
	 	  						html+='<div class="aui-col-xs-12 aui-font-size-18 aui-text-center"style="color: #000000;">'+obj.people[i].name+'</div>';
	 	  						html+='<div  class="aui-col-xs-12 aui-text-center">真实姓名:'+obj.people[i].realName+'</div>';
	 	  						html+='<div class="aui-col-xs-12  aui-text-center">手机号：'+obj.people[i].phone+'</div>';
	 	  						html+='<div class="aui-col-xs-12 aui-text-center  aui-padded-b-10">班级：'+obj.people[i].class+'</div>';
	 	  						html+='</div>';
	 	  					}
 	  				}
 	  					
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
	
	document.getElementsByClassName("aui-switch")[0].addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.checked==false){
			this.checked=true;
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
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
		}else{
			this.checked=false;
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
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
		}
	},false)
	
	document.getElementById("back").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("312_publish_sports_step2_Manage.html?sports_id"+sports_id);
	},false)
}
