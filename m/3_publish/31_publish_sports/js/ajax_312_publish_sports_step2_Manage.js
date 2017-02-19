$(document).ready(function(){
		edit_index=0;////表示现在处于查看模式   1表示处于编辑模式
		activity_id = getQueryString('activity_id');
		document.getElementById("ifram").src = "3121_publish_sports_step2_Manage_frame1.html?activity_id="+activity_id;
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
  					/*if (obj.user_info) {
  						$("#ifram").contents().find("#sports_fabuzhe_name").text(obj.user_info.user_name);
  						$("#ifram").contents().find("#sports_fabuzhe_jianjie").text(obj.user_info.intro);
  						$("#ifram").contents().find("#sports_fabuzhe_headImg").attr("src",obj.user_info.head_image);
  					}else{
  						$("#ifram").contents().find("#sports_fabuzhe_name").text(obj.club_info.name);
  						$("#ifram").contents().find("#sports_fabuzhe_jianjie").text(obj.club_info.sign);
  						$("#ifram").contents().find("#sports_fabuzhe_headImg").attr("src",obj.club_info.image);
  					}*/
  					
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
			if(edit_index==0){
				this.innerHTML="完成";
				$("#ifram").contents().find("#sports_address").removeAttr("readonly");
				$("#ifram").contents().find("#sports_require").removeAttr("readonly");
				$("#ifram").contents().find("#sports_jianjie").removeAttr("readonly");
				edit_index=1;
			}else{
				if(window.confirm("确认保存修改吗?")){
					var new_time=$("#ifram").contents().find("#time").val();
					var new_address=$("#ifram").contents().find("#sports_address").val();
					var new_require=$("#ifram").contents().find("#sports_require").val();
					var new_jianjie=$("#ifram").contents().find("#sports_jianjie").val();
					//alert(new_time+new_jianjie+new_require+new_address);
					this.innerHTML="编辑";
		 	  		edit_index=0;
					if (activity_id||new_time||new_address||new_require||new_jianjie) {
		 	  			$.ajax({
							type:"post",
							url:"http://api.lizi123.cn/index.php/home/activity/setActInfo",
							xhrFields:{
			               		withCredentials: true
			           		},
							data:{
								"client_type":0,
								"activity_id":activity_id,
								"time":new_time,
								"address":new_address,
								"requirements":new_require,
								"intro":new_jianjie
							},
							success:function(data){
								var obj = eval(data);
			 	  				if (obj.status==200) {
			 	  					window.open("http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+activity_id);///跳到广场
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
			
				}
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