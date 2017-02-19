$(document).ready(function(){
	online_user_id = 0;
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/user/userCareList",
		async:false,
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				online_user_id = obj.online_user_id;
				$("#people_list").text("");
				for(var i=0;i<obj.user_num;i++){
					var html='<li class="aui-col-xs-12 aui-row">';
					html+='<div class="aui-col-xs-2"style="padding:0 0.2rem;">';
					html+='<a href="../../5_mine/51_mine_homepage/51_mine_homepage.html" target="_blank"><img src="'+obj[i].user_info.head_image+'" style="margin-top: 0.2rem;width: 2rem;height: 2rem;border-radius: 50%;"/></div></a>';
					html+='<div class="aui-col-xs-9 aui-padded-t-15 aui-padded-l-10">'+obj[i].user_info.user_name+'</div>';
					html+='<div class="aui-col-xs-1">';
					html+='<label ><input class="aui-radio" type="radio" name="after"style="margin-top:0.5rem;" id="'+obj[i].user_info.id+'"></label>';
					html+='</div></li><li class="aui-hr"></li>';
					$("#people_list").append(html);
				}
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
		//	alert("失败！");
		},
	});
	
})

window.onload=function(){
	var radio=document.getElementsByClassName("aui-radio");
	var choosed;
	document.getElementById("confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		for(var i=0;i<radio.length;i++){
			if(radio[i].checked==true){
				choosed=radio[i].id;
				if (online_user_id==0) {
            		window.open("http://m.lizi123.cn/7_login/7_login.html");
            	}else{
            		window.open("http://m.lizi123.cn/6_chat/siliao.php?id="+choosed+"&id2="+online_user_id+"");
            	}

				
			}
		}
		
	},false)
	
	
}
