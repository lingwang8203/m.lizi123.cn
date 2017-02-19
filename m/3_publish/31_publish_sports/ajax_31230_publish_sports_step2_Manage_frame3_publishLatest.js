var xiangqing_text;
var xiangqing_images_serverId=new Array;
var poll;
var user_id=new Array;
var deadline;
$(document).ready(function(){
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/active/publishActProgress",
			xhrFields:{
	       		withCredentials: true
	   		},
			data:{
			// "sports_id":sports_id,
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
		var header=document.getElementById("header").value;
		var choose_icon;
		for(var i=0;i<icon.length;i++){
			if(icon[i].index==1){
				choose_icon=icon[i].order;
			}
		}
//		alert(choose_icon);
		xiangqing_text=$("#ifram").contents().find("#content").val();
		poll=$("#ifram").contents().find("#poll").val();
		deadline=$("#ifram").contents().find("#time").val();
		//alert(xiangqing_images_serverId);
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/active/publishActProgress",
            xhrFields: {
                withCredentials: true
            },
			data:{
//	         "sports_id":sports_id,
        	"client_type":0,
        	
			},
			success:function(data){
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
		
	},false)
}