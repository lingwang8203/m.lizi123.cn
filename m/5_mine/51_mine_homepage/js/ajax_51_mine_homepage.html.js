$(document).ready(function(){
	
	////////别人看自己
	id=getQueryString('user_id');
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/taInfo",
            xhrFields: {
                withCredentials: true
            },
			data:{
//	         "user_id":user_id,
           "client_type":0,
           "user_id":id
			},	
			success:function(data){
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				document.getElementById("mine_headImg").src=obj.head_image;
 	  				document.getElementById("mine_intro").innerHTML=obj.school_name;
 	  				document.getElementById("mine_name").innerHTML=obj.user_name;
 	  				if(obj.guanzhu_index==0){///0未关注  1已关注
 	  					document.getElementById("guanzhu_index").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/5_mine/51_mine_homepage/follow.png";
 	  					document.getElementById("guanzhu_index").index=0;
 	  				}else{
 	  					document.getElementById("guanzhu_index").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/5_mine/51_mine_homepage/ic_cancel_focus.png";
 	  					document.getElementById("guanzhu_index").index=1;
 	  				}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
	
	
	
})

window.onload=function(){
	

//	document.getElementById("guanzhu_index").index=0;
	document.getElementById("guanzhu_index").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/5_mine/51_mine_homepage/ic_cancel_focus.png";
			this.index=1;
			
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
			this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/5_mine/51_mine_homepage/follow.png";
			this.index=0;
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
	
	document.getElementById("chat_he").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open(""+user_id);
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
}; 
