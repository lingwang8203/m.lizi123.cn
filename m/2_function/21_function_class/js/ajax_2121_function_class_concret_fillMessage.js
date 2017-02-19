window.onload=function(e){
	class_id = getQueryString('class_id');
	document.getElementById("back").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("212_function_class_concret.html?class_id="+class_id);
	},false)
	
	document.getElementById("confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		var name=document.getElementById("name").value;
		var phone=document.getElementById("phone").value;
		var address=document.getElementById("address").value;
		//alert(activity_id);
		//alert(name+phone+address);
		if(name==""||phone==""||address==""){
			alert("信息必须填写完整不能为空");
			return 0;
		}else{
			$.ajax({
		        type:"post",
		        url:"http://api.lizi123.cn/index.php/home/activity/joinAct",
		        data:{
		        	"client_type":0,
		        	"activity_id":activity_id,
		        	"name":name,
					"phone:":phone,
					"address":address,
		        },
		        xhrFields: {
		            withCredentials: true
		        },
		        success:function(data){
		            var obj = eval(data);
		            console.dir(obj);
		            if (obj.status==200) {
		            	alert("报名成功");
		            	window.open("http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+activity_id);
		            }else {
		            	alert("已报名");
		            	window.open("http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id="+activity_id);
		            }
		        },
		        error:function(data){
		            //alert("error!");
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
}; 