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
 	  					for(var i=0;i<obj.length;i++){////////////分组
 	  						var html='<ul class="aui-list aui-media-list">';
 	  						html+="<li class='aui-list-header'>"+obj[i].group_name+"</li>";
 	  						for(var j=0;j<obj[i].member.length;j++){//////////组成员人数
 	  							html+='<li class="aui-list-item aui-list-item-middle">';
 	  							html+='<div class="aui-media-list-item-inner">';
 	  							html+='<div class="aui-list-item-media" style="width: 3rem;">';
 	  							html+='<a href="../51_mine_homepage/51_mine_homepage.html?user_id='+onj[i].member[j].user_id+'" target="_blank"><img src="'+obj[i].member[j].headImg+'" class="aui-img-round aui-list-img-sm"></a>';
 	  							html+='<div class="aui-list-item-inner ">';
 	  							html+='<div class="aui-list-item-text">';
 	  							html+='<div class="aui-list-item-title aui-font-size-14">'+obj[i].member[j].name+'</div>';
 	  							if(obj[i].member[j].is_care==0){////0还未关注
 	  								html+='<div class="aui-list-item-right"><div class="aui-label aui-label-info" style="margin-top: 0.5rem;">关注</div></div></div>';
 	  							}else{
 	  								html+='<div class="aui-list-item-right"><div class="aui-label-outlined aui-label-info" style="margin-top: 0.5rem;">已关注</div></div>';
 	  							}
 	  							html+='<div class="aui-list-item-text aui-font-size-12">';
 	  							switch(obj[i].member[j].from){
 	  								case "0":html+="来自同好推荐";break;
 	  								case "1":html+="来自参与活动推荐";break;
 	  								case "2":html+="来自参与课程推荐";break;
 	  								default:html+="推荐好友";break;
 	  							}
 	  							html+='</div></div></div></li>';
 	  						}
 	  						html+="</ul>";
 	  						$("#related_me").append(html);
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
						//alert("失败！");
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
						//alert("失败！");
					},
				});
			}
		},false)
	}
	
}
