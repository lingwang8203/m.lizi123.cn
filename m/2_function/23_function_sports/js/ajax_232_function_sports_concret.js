$(document).ready(function(){
	activity_id = getQueryString('activity_id');
//	alert(activity_id);
	//alert(activity_id);
	document.getElementById("ifram").src = "2321_function_sports_concret_frame1.html?activity_id="+activity_id;
	
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/activity/actInfo",
            xhrFields: {
                withCredentials: true
            },
			data:{
				"client_type":0,
				"activity_id":activity_id,
			},	
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
 	  				document.getElementById("sports_name").innerHTML=obj.name;
 	  				document.getElementById("sports_poster").src=obj.image;
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