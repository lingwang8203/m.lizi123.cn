
window.onload=function(){
	var special=document.getElementsByName("special");
	var nospecial=document.getElementsByName("nospecial");
	var people=document.getElementsByClassName("people");
	var people_list=document.getElementsByClassName("people_list");
	function recover(){
		for(var i=0;i<people.length;i++){
			people[i].children[2].style.display="none";
			people[i].index=0;
		}
	}
	//////////////////////////出现关注选项
	for(var i=0;i<people.length;i++){
		people[i].index=0;
		people[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				recover();
				this.children[2].style.display="inline-block";
				this.index=1;
			}
			else{
				this.children[2].style.display="none";
				this.index=0;
			}
		},false);
	}
	
	/////////////////////////取消特别关注
	for(var i=0;i<special.length;i++){
		special[i].addEventListener("touchstart",function(e){
			e.preventDefault();

			//alert(this.id);
			deleteSpecialCare(this.id);

			////////////状态变为非特别关注
			var touxiang=people[i].children[0].src;
			var name=people[i].children[1].innerHTML;
			var html="<div class='people'><img src='"+touxiang+"' class='people_touxiang'/><span class='people_name'>"+name+"</span><span class='special' name='special'>设为特别关注</span></div>";
			$(".people_list").eq(1).append(html);
			this.parentNode.remove(this);
			window.location.reload();//重新加载页面
		},false);
	}
	
	////////////////////设为特别关注
	for(var i=0;i<nospecial.length;i++){
		nospecial[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			setSpecialCare(this.id);
			var length=special.length;
			var touxiang=people[i+length-1].children[0].src;
			var name=people[i].children[1].innerHTML;
			var html="<div class='people'><img src='"+touxiang+"' class='people_touxiang'/><span class='people_name'>"+name+"</span><span class='special' name='special'>设为特别关注</span></div>";
			$(".people_list").eq(0).append(html);
			this.parentNode.remove(this);
			window.location.reload();//重新加载页面
		},false);
	}
	
	
}

obtainMyCareList();

//==============================获取我的关注列表==================================
function obtainMyCareList(){
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/user/obtainMyCareList",
	    data:{
	    },
	    success:function(data){
	        var obj = eval(data);
	        console.dir(obj);
	        if (obj.status==200) {
	        	careListShow(obj);
	        };
	    },
	    error:function(data){
	        alert("获取标签失败!");
	    },
	        
	});
}

//=================================关注列表显示=========================================
function careListShow(obj){
	for (var i = 0; i < obj.length; i++) {
		if (obj[i].is_special_care==1) {
			var specialHtml = "<a href='http://m.lizi123.cn/LiZi/me/PersonalHomepage_header.html?user_id="+obj[i].content_id+"'><div class='people'>";
			specialHtml += "<img src='"+obj[i].member_info.user_image+"' class='people_touxiang'/>";
			specialHtml += "<span class='people_name'>"+obj[i].member_info.user_nickname+"</span>";
			specialHtml += "<span class='special' id="+obj[i].content_id+" name='special'>取消特别关注</span>";
			specialHtml += "</div></a>";
			$("#special").append(specialHtml);
		}else{
			var normalHtml = "<a href='http://m.lizi123.cn/LiZi/me/PersonalHomepage_header.html?user_id="+obj[i].content_id+"'><div class='people'>";
			normalHtml += "<img src='"+obj[i].member_info.user_image+"' class='people_touxiang'/>";
			normalHtml += "<span class='people_name'>"+obj[i].member_info.user_nickname+"</span>";
			normalHtml += "<span class='special' id="+obj[i].content_id+" name='nospecial'>设为特别关注</span>";
			normalHtml += "</div></a>";
			$("#normal").append(normalHtml);
		}
	}
}


//=================================取消特别关注===================================
function deleteSpecialCare(id){
	//alert(id);
	if (id) {
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/user/deleteSpecialCare",
		    data:{
		    	"content_id":id,
		    },
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        if (obj.status==200) {
		        };
		    },
		    error:function(data){
		        //alert("取消特别关注失败!");
		    },
		        
		});
	}
}

//====================================设为特别关注=======================================
function setSpecialCare(id){
	//alert(id);
	if (id) {
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/user/setSpecialCare",
		    data:{
		    	"content_id":id,
		    },
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        if (obj.status==200) {
		        };
		    },
		    error:function(data){
		        //alert("特别关注失败!");
		    },
		        
		});
	}
}