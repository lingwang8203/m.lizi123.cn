$(document).ready(function(){
	var class_id = getQueryString("class_id");
	//alert(class_id);
	//完成
		document.getElementById("furnish").addEventListener("touchstart",function(){
			var content = document.getElementById("content").value;
			//alert(images.serverId);
			//document.getElementById("preview1").style.display=="none"||
			if(content==""){
				alert("信息未填写完善，或填写错误");
			}else{
				$.param(images.serverId,true);
				$.ajax({
		            type:"POST",
		            url:"http://api.lizi123.cn/index.php/home/class/publishClassEvaluate",
		            xhrFields: {
		                withCredentials: true
		            },
		            data:{
		            	"client_type":0,
		            	"class_id":class_id,
		            	"intro":content,
		            	"images":images.serverId,
		            },
		            success:function(data){
		                var obj = eval(data);
		                //alert(obj.status);
		                if (obj.status==200) {
		                	//发布课程感悟
							window.location.href="http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+class_id;
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
			var myurl="http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+class_id+"&ifram=2";
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