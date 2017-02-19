$(document).ready(function(){
	times = 1;//加载次数,全局变量
	class_id = getQueryString('class_id');
	document.getElementById("ifram").src = "2121_function_class_concret_frame1.html?class_id="+class_id;
	getClassInfo(class_id);
})
//===================获取课程基本信息==============================
function getClassInfo(class_id){
	if (class_id) {
		times++;
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/class/classInfo",
			data:{
				"client_type":0,
				"class_id":class_id,
			},
	        xhrFields: {
	            withCredentials: true
	        },
			success:function(data){
				var obj = eval(data);
	            console.dir(obj);
	            if (obj.status==200) {
	            	document.getElementById("class_header").innerHTML=obj.name;
					document.getElementById("class_poster").src=obj.image+"@192h";

	            }
			},
			error:function(data){
				if (times<4) {
					getClassInfo(class_id);
				}
			},
		});
	}
	
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
