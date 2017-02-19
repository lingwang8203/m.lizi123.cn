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
 	  					for(var i=0;i<obj.length;i++){///
 	  							var html='';
 	  							html+='<li class="aui-list-item aui-list-item-middle">';
 	  							html+='<div class="aui-media-list-item-inner">';
 	  							html+='<div class="aui-list-item-media" style="width: 3rem;">';
 	  							html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id='+obj[i].user_id+'" target="_blank"><img src="'+obj[i].headImg+'" class="aui-img-round aui-list-img-sm"></a>';
 	  							html+='<div class="aui-list-item-inner ">';
 	  							html+='<div class="aui-list-item-text">';
 	  							html+='<div class="aui-list-item-title aui-font-size-14">'+obj[i].name+'</div>';
 	  							if(obj[i].is_care==0){////0还未关注
 	  								html+='<div class="aui-list-item-right"><div class="aui-label aui-label-info" style="margin-top: 0.5rem;" name="focus">关注</div></div></div>';
 	  							}else{
 	  								html+='<div class="aui-list-item-right"><div class="aui-label-outlined aui-label-info" style="margin-top: 0.5rem;" name="focus">已关注</div></div>';
 	  							}
 	  							html+='<div class="aui-list-item-text aui-font-size-12">来自'+obj[i].tag_name+'圈';
 	  							html+='</div></div></div></li>';
 	  							$("#more_list").append(html);
 	  						}
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					alert("失败！");
				},
			});
	
})

window.onload=function(){
	///////////////返回
	document.getElementById("back").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("13_home_label.html?tag_id="+tag_id);
	},false)
	
	
	
	var focus=document.getElementsByName("focus");
	for(var i=0;i<focus.length;i++){
		focus[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.className=="aui-label aui-label-info"){
				this.className="aui-label-outlined aui-label-info";
				this.innerHTML="已关注";
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
						alert("失败！");
					},
				});
			}else{
				this.className="aui-label aui-label-info";
				this.innerHTML="关注";
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
						alert("失败！");
					},
				});
			}
		},false)
	}
	
}