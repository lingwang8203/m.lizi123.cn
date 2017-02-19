var xiangqing_text;
var xiangqing_images_serverId=new Array;
var poll;
var user_id=new Array;
var deadline;
var sports_id = getQueryString('activity_id');
// alert("hahahaha");
alert(window.index);
$(document).ready(function(){
		

		$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/activity/getActive",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"client_type" : 0,
					"sports_id" : sports_id,
				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {	
 	  					$("#class_name").text("");
 	  					var name = obj.activity_name.name;
 	  					$("#class_name").append(name);
					}else{
						//活动名称获取失败
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});

		$.ajax({
				type:"post",
				url:"",
				xhrFields:{
               		withCredentials: true
           		},
				data:{

				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {
 	  					document.getElementById("header").value=obj.header;
 	  					document.getElementsByName("latest_ic")[obj.icon_order].className="latest_ic shadow";
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
	
})
window.onload=function(){
	
	var icon=document.getElementsByName("latest_ic");
	for(var i=0;i<icon.length;i++){
		icon[i].index=0;
		icon[i].order=i;
		icon[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<icon.length;j++){
				icon[j].className="latest_ic";
				icon[j].index=0;
			}
			this.className="latest_ic shadow";
			this.index=1;
		},false)
	}
	
	document.getElementById("furnish").addEventListener("touchstart",function(e){
		e.preventDefault();
		// alert(images.serverId);
		console.dir(images.serverId);
		var header=document.getElementById("header").value;
		var choose_icon;
		for(var i=0;i<icon.length;i++){
			if(icon[i].index==1){
				var choose_icon_src = icon[i].src;
			}
		}

		$.param(images.serverId,true);
		xiangqing_text = document.getElementById("ifram").contentWindow.document.getElementById("content").value;
		poll=$("#ifram").contents().find("#poll").val();
		deadline=$("#ifram").contents().find("#time").val();
		// alert(xiangqing_text);
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/activity/publishActProgress",
            xhrFields: {
                withCredentials: true
            },
			data:{
	        "sports_id":sports_id,
			"client_type" : 0,
			"header" : header,
			"icon" : choose_icon_src,
			"text" : xiangqing_text,
		    "images":images.serverId,
			},	
			success:function(data){
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				window.location.href="http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+sports_id;
 	  				alert("dsfsf");
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}else{
					alert("发布进展失败" + obj.status);
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
		
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

