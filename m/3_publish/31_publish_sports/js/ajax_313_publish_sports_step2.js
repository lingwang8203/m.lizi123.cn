$(window).load(function () {
	var activity_id = getQueryString('activity_id');
//		$("#ifram").contents().find("#sports_fabuzhe_name").text();
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
  					$("#ifram").contents().find("#sports_fabuzhe_name").text(obj.user_info.user_name);
  					$("#ifram").contents().find("#sports_fabuzhe_jianjie").text(obj.user_info.intro);
  					$("#ifram").contents().find("#sports_fabuzhe_headImg").attr("src",obj.user_info.head_image);
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
		
		
	
	document.getElementById("sports_edit").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(window.confirm("请确认信息填写无误哦")){
			var sports_time=$("#ifram").contents().find("#time").val();
			var sports_address=$("#ifram").contents().find("#sports_address").val();
			var sports_require=$("#ifram").contents().find("#sports_require").val();
			var sports_jianjie=$("#ifram").contents().find("#sports_jianjie").val();
 	  		edit_index=0;
 	  		if (activity_id&&sports_time&&sports_address&&sports_require&&sports_jianjie) {
 	  			$.ajax({
					type:"post",
					url:"http://api.lizi123.cn/index.php/home/activity/setActInfo",
					xhrFields:{
	               		withCredentials: true
	           		},
					data:{
						"client_type":0,
						"activity_id":activity_id,
						"time":sports_time,
						"address":sports_address,
						"requirements":sports_require,
						"intro":sports_jianjie
					},
					success:function(data){
						var obj = eval(data);
	 	  				if (obj.status==200) {
	 	  					window.open("http://m.lizi123.cn");///跳到广场
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}else{
							//alert(obj.msg);
						}
					},
					error:function(data){
						//alert("失败！");
					},
				});
 	  		}else{
 	  			//alert("活动信息不完整");
 	  		}
			
		}else{
			
		}
	},false)
	
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