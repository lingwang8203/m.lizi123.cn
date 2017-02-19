$(document).ready(function(){
	club_id = getQueryString('club_id');
	//////////////按分组读入用户列表
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
				///分组长度
				$("#invite_list").text("");
				var html="<ul class='aui-list aui-media-list'>";
				html+="<li class='aui-list-header'>最近联系人</li>";
				for(var i=0;i<obj.user_num;i++){
					html+="<li class='aui-list-item aui-list-item-middle'>";
					html+="<div class='aui-media-list-item-inner'>";
					html+="<div class='aui-list-item-media' style='width: 8vw;padding-right: 0.2rem !important;'>";
					html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/choose1.png' name='choose_user' id='"+obj[i].user_info.id+"'>";
					html+="</div><div class='aui-list-item-media' style='width: 3rem;padding-top:0 !important;padding-bottom: 0 !important;'>";
					html+="<a target='_blank' href='http://m.lizi123.cn/5_mine/50_mine_homepage_self/50_mine_homepage_self.html?user_id="+obj[i].user_info.id+"'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round aui-list-img-sm'>";
					html+="</div><div class='aui-list-item-inner'><div class='aui-list-item-text'>";
					html+="<div class='aui-list-item-title aui-font-size-14'>"+obj[i].user_info.user_name+"</div></div></div></div></li>";
				}
				html+="</ul>";
				$("#invite_list").append(html);
				
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			// alert("失败！");
		},
	});
	
})

window.onload=function(){
	
	var people=document.getElementsByName("choose_user");
	for(var i=0;i<people.length;i++){
		people[i].index=0;
		people[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/choose2.png";
				this.index=1;
			}
			else{
				this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/choose1.png";
				this.index=0;
			}
		},false);
	}
	
	document.getElementById("furnish").addEventListener("touchstart",function(e){
		e.preventDefault();
		var user_id=new Array;
		for(var k=0;k<people.length;k++){
			if(people[k].index==1){
				user_id.push(people[k].id);
			}
		}
		
		// alert(user_id);
		if (user_id.length>0) {
			$.param(user_id,true);
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/club/inviteClubUser",
				xhrFields:{
	           		withCredentials: true
	       		},
				data:{
					"client_type":0,
					"club_id":club_id,
					"invite_user":user_id
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
		  			if (obj.status==200) {
		  				window.location.href="343_publish_club_Manage.html?club_id="+club_id;
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


//=================================获取url参数=====================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}