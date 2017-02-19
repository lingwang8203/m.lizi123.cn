$(document).ready(function(){
	//id=1;//用于测试
	/*id=getQueryString('user_id');
	document.getElementById("ifram").src = "501_mine_homepage_self_frame1.html?user_id="+id;*/
	////////自己看自己
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/selfInfo",
            xhrFields: {
                withCredentials: true
            },
			data:{
			 "client_type":0,
             
			},	




  success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
 	  				document.getElementById("mine_headImg").src=obj.head_image;
 	  				document.getElementById("mine_intro").innerHTML=obj.school_name;
 	  				document.getElementById("mine_name").innerHTML=obj.user_name;
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
	document.getElementById("edit_myself").addEventListener("touchstart",function(e){
		window.location.href="504_edit_mine_homepage.php";
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