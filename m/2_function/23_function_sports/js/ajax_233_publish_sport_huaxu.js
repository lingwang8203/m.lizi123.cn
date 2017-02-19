$(document).ready(function(){
	var activity_id = getQueryString("activity_id");
	//alert(activity_id);
	//完成
		document.getElementById("furnish").addEventListener("touchstart",function(){
			var content = document.getElementById("content").value;
			//document.getElementById("preview1").style.display=="none"||
			if(content==""){
				alert("信息未填写完善，或填写错误");
			}else{
				$.param(images.serverId,true);
				$.ajax({
		            type:"POST",
		            url:"http://api.lizi123.cn/index.php/home/activity/publishActHuaxu",
		            xhrFields: {
		                withCredentials: true
		            },
		            data:{
		            	"activity_id":activity_id,
		            	"client_type":0,
		            	"intro":content,
		            	"images":images.serverId,
		            },
		            success:function(data){
		                var obj = eval(data);
		                if (obj.status==200) {
		                	//发布活动花絮
							window.location.href="http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+activity_id;
		                }else if(obj.status==199){
		                	window.location.href = "http://m.lizi123.cn/7_login/7_login.html";
		                }
		                
		            },
		            error:function(data){
		                //alert("error!");
		            },
			    });

			}
		},false);
	
	document.getElementById("return").addEventListener("touchstart",function(e){
			e.preventDefault();
			var myurl="http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+activity_id+"&ifram=2";
			window.location.assign(myurl);
		},false);
	
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
