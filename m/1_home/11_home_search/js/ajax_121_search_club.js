$(document).ready(function(){
	
	$.ajax({
			type:"post",
			url:"",
            xhrFields: {
                withCredentials: true
            },
			data:{
//	         "sports_id":sports_id,
			},	
			success:function(data){
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				$("#clubSearchResult").text("");
 	  				for(var i=0;i<obj.club.length;i++){
 	  							var html='';
 	  						html+='<li class="aui-row aui-padded-b-5  aui-padded-t-5"style="border-top: 0.05rem solid  #f5f5f5;border-bottom: 0.05rem solid  #f5f5f5;background: white;">';
 	  						html+='<div class="aui-col-xs-2 aui-text-center">';
 	  						html+= '<a href="../../2_function/22_function_club/222_function_club_concret.html?club_id=' + obj.club[i].id + '">';
 	  						html+='<img src="'+obj.club[i].headImg+'"class="aui-img-round club_photo_suit" />';
 	  						html+='</a>';
 	  						html+='</div><div class="aui-col-xs-8  aui-padded-l-10">';
 	  						html+='<div class="aui-col-xs-12 aui-font-size-16">'+obj.club[i].name+'</div>';
 	  						html+='<div class="aui-col-xs-12 aui-font-size-12"style="color:#666666;">'+obj.club[i].intro+'</div>';
 	  						html+='<div class="aui-col-xs-12"><i class="aui-icon-my aui-iconfont aui-pull-left"></i>';
 	  						html+='<div class="aui-font-size-12 aui-pull-left  aui-padded-l-5"style="padding-top: 0.1rem;color:#666666;"><span style="color:#ffcb53;"> '+obj.club[i].member+'人 </span>已加入</div>';
 	  						html+='</div></div><div class="aui-col-xs-2 aui-pull-right">';
 	  						if(obj.club[i].join_index==0){
 	  							html+='<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on">申请加入</div>';
 	  						}else if(obj.club[i].join_index==1){
 	  							html+='<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined aui-bg-base aui-text-white tap_on">已申请</div>';
 	  						}else{
 	  							html+='<div class="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined aui-bg-base aui-text-white tap_on j">已加入</div>';
 	  						}
 	  						html+='<div class="aui-bar-ligh-col-xs-12">';
 	  						html+='<a href="../../2_function/22_function_club/222_function_club_concret.html?club_id='+obj.club[i].id+'"><i class="aui-iconfont aui-icon-right aui-pull-right aui-padded-r-15"></i></a>';
 	  						html+='</div></div></li>';
 	  						html+='<div class="aui-hr"></div>';
 	  						$("#clubSearchResult").append(html);
 	  					}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		alert("失败!");
	     	}
	
		});
	
})
window.onload=function(){
	
	/////申请加入社团
	var tap_on=document.getElementsByClassName("tap_on");
//	alert(tap_on.length);
	for(var i=0;i<tap_on.length;i++){
		tap_on[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.className=="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on"){
				this.className="aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined aui-bg-base aui-text-white tap_on";
				this.innerHTML="已申请";
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
