var method_face_type;
var method_online_type;
var method_charge_type;
var day=new Array;
edit_index=0;////表示现在处于查看模式   1表示处于编辑模式
$(document).ready(function(){
	class_id = getQueryString('class_id');
	document.getElementById("ifram").src = "3221_publish_class_Manage_frame1.html?class_id="+class_id;
	getClassInfo(class_id);	
})
window.onload=function(){
	
	document.getElementById("class_edit").addEventListener("touchstart",function(e){
			e.preventDefault();
			if(edit_index==0){
				this.innerHTML="完成";
				$("#ifram").contents().find("#class_all_xueshi").removeAttr("readonly");
				$("#ifram").contents().find("#class_address").removeAttr("readonly");
				$("#ifram").contents().find("#class_intro").removeAttr("readonly");
				edit_index=1;
			}else{
				if(window.confirm("确认保存修改吗?")){
					var new_time=$("#ifram").contents().find("#class_start_time").val();
					var new_address=$("#ifram").contents().find("#class_address").val();
					var new_xueshi=$("#ifram").contents().find("#class_all_xueshi").val();
					var new_jianjie=$("#ifram").contents().find("#class_intro").val();
					this.innerHTML="编辑";
		 	  		edit_index=0;
		 	  		var data = new Object();
		 	  		data.client_type = 0;
		 	  		data.class_id = class_id;
		 	  		if (day[0]!=false) {
		 	  			for (var i = day.length - 1; i >= 0; i--) {
							if (day[i]==0) {
								day[i] = "一";
							}else if (day[i]==1) {
								day[i] = "二";
							}else if (day[i]==2) {
								day[i] = "三";
							}else if (day[i]==3) {
								day[i] = "四";
							}else if (day[i]==4) {
								day[i] = "五";
							}else if (day[i]==5) {
								day[i] = "六";
							}else{
								day[i] = "日";
							}
						}
						data.week_time = day;//$.param(day,true);
		 	  		}
		 	  		if (method_charge_type) {
		 	  			data.sale_type = method_charge_type;
		 	  		}
		 	  		if (new_address) {
		 	  			data.address = new_address;
		 	  		}
		 	  		if (new_time) {
		 	  			data.time = new_time;
		 	  		}
		 	  		if (new_jianjie) {
		 	  			data.intro = new_jianjie;
		 	  		}
		 	  		if (new_xueshi) {
		 	  			data.week_hour = new_xueshi;
		 	  		}
		 	  		if (method_face_type) {
		 	  			data.way = method_face_type;
		 	  		}
		 	  		if (method_online_type) {
		 	  			data.method = method_online_type;
		 	  		};
		 	  		console.dir(data);
					$.ajax({
						type:"post",
						url:"http://api.lizi123.cn/index.php/home/class/setClassInfo",
						xhrFields:{
		               		withCredentials: true
		           		},
						data:data,
						success:function(data){
							var obj = eval(data);
		 	  				if (obj.status==200) {
		 	  					window.open("http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+class_id);
							}else if(obj.status==199){
								window.open("http://m.lizi123.cn/7_login/7_login.html");
							}
						},
						error:function(data){
							//alert("失败！");
						},
					});
				}else{
					
				}
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

//===================获取课程基本信息==============================
function getClassInfo(class_id){
	if (class_id) {
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
	            	document.getElementById("class_name").innerHTML=obj.name;
					document.getElementsByClassName("cover")[0].src=obj.image+"@192h";
	            }
			},
			error:function(data){
			},
		});
	}
	
}
