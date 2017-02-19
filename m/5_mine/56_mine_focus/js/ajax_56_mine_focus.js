$(document).ready(function(){
	//alert("56");
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
			$("#special_care_list").text("");
			$("#special_care_list").append("<li class='aui-list-header'>特别关注</li>");
			$("#care_list").text("");
			$("#care_list").append("<li class='aui-list-header'>已关注</li>");
			show(obj);
		},
		error:function(data){
			//alert("点赞失败！");
		},
	});
	
})

//==========================展示=============================
function show(obj){						
	if (obj.status==200) {
		for (var i = obj.user_num-1; i >= 0; i--) {
			var html = "<li class='aui-list-item aui-list-item-middle'>";
			html += "<div class='aui-media-list-item-inner'>";
			html += "<div class='aui-list-item-media' style='width: 3rem;'>";
            html += "<a href='http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round aui-list-img-sm'></a>";
            html += "</div>";
       		html += "<div class='aui-list-item-inner'>";
       		html += "<div class='aui-list-item-text'>";
            html += "<div class='aui-list-item-title aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
            if (obj[i].is_special_care==1) {
				html += "<div class='aui-list-item-right'><div id='"+obj[i].object_id+"' name='is_special_care' class='aui-label ' style='margin-top: 0.5rem;'>取消特别关注</div></div>";
				html += "</div></div></div></li>"; 
				$("#special_care_list").append(html);
			}else{
				html += "<div class='aui-list-item-right'><div id='"+obj[i].object_id+"' name='not_special_care' class='aui-label ' style='margin-top: 0.5rem;'>设为特别关注</div></div>";
				html += "</div></div></div></li>"; 
				$("#care_list").append(html);
			}
		}
	}else if(obj.status==199){
		window.open("http://m.lizi123.cn/7_login/7_login.html");
	}
}

window.onload=function(){

		//取消特别关注
		var is_special_care=document.getElementsByName("is_special_care");
		//alert(is_special_care.length);
		for(var i=0;i<is_special_care.length;i++){
			is_special_care[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				deleteSpecialCare(this.id);
				this.name="not_special_care";
				this.innerHTML="设为特别关注";
				window.location.reload(true);
			},false);
		}
	
		//特别关注
		var not_special_care=document.getElementsByName("not_special_care");
		//alert(not_special_care.length);
		for(var i=0;i<not_special_care.length;i++){
			not_special_care[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				setSpecialCare(this.id);
				this.name="is_special_care";
				this.innerHTML="取消特别关注";
				window.location.reload(true);
			},false);
		}

//		var is_special_care=document.getElementsByClassName("aui-label");
//		alert(is_special_care.length);
//		for(var i=0;i<is_special_care.length;i++){
//			is_special_care[i].addEventListener("touchstart",function(e){
//				e.preventDefault();
//				alert("1111111111");
//				if(this.name=="is_special_care"){
//					deleteSpecialCare(this.id);
//					this.name="not_special_care";
//					this.innerHTML="设为特别关注";
//				}else{
//					setSpecialCare(this.id);
//					this.innerHTML="取消特别关注";
//					this.name="is_special_care";
//				}
//			})
//		}
		
	}

//=======================特别关注=============================
function setSpecialCare(id){
	if (id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/setSpecialCare",
			async:false,
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
				"client_type":0,
				"user_id":id,
			},
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
			},
			error:function(data){
				//alert("关注失败！");
			},
		});
	};
}


//========================取消特别关注============================
function deleteSpecialCare(id){
	if (id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/deleteSpecialCare",
			xhrFields:{
	       		withCredentials: true
	   		},
	   		async:false,
			data:{
				"client_type":0,
				"user_id":id,
			},
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
				$("#care_list").text("");
				show(obj);
			},
			error:function(data){
				//alert("取消关注失败！");
			},
		});
	};
}