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
 	  				$("#peopleSearchResult").text("");
 	  				for(var i=0;i<obj.people.length;i++){
 	  						var html='';
 	  						html+='<li class="aui-col-xs-12"><div class="aui-hr"></div><div class="aui-col-xs-12 aui-row">';
 	  						html+='<div class="aui-col-xs-2 aui-text-center" style="margin: 0;padding: 0;margin-top: 0.1rem;">';
 	  						html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id='+obj.people[i].id+'"><img src="'+obj.people[i].headImg+'" class="aui-img-round club_photo_suit" id="teacher_pic"/></a></div>';
 	  						html+='<div class="aui-col-xs-7 aui-row aui-padded-t-15 aui-padded-l-10">';
 	  						html+='<div class="aui-col-12 aui-font-size-14" id="teacher_name">'+obj.people[i].name+'</div>';
 	  						html+='<div class="aui-col-xs-12 aui-font-size-12"style="color: #9E9E9E;" id="teacher_miaoshu">'+obj.people[i].intro+'</div></div>';
 	  						html+='<div class="aui-col-xs-3" style="margin-top: 1.2rem;color: #9E9E9E;">';
 	  						if(obj.people[i].guanzhu_index==0){
 	  							html+='<div class="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5"style="width: auto;border-radius: 0.4em;" id="guanzhu_index">+关注</div>';
 	  						}else{
 	  							html+='<div class="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5"style="width: auto;border-radius: 0.4em;" id="guanzhu_index">已关注</div>';
 	  						}
 	  						html+='</div></div></li><div class="aui-hr"></div>';
 	  						$("#peopleSearchResult").append(html);
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
	
	//////////关注取消关注
	
	var guanzhu_index=document.getElementsByName("guanzhu_index");
//	alert(guanzhu_index.length);
	for(var i=0;i<guanzhu_index.length;i++){
		guanzhu_index[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.className=="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5"){
				this.className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
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
				this.className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
				this.innerHTML="+关注";
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
