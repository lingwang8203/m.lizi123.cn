var method_face_type;
var method_online_type;
var method_charge_type;
var day=new Array;
var times = 1;
$(document).ready(function(){
	class_id = getQueryString('class_id');
	document.getElementById("ifram").src = "3231_publish_class_step2_frame1.html?class_id="+class_id;
	getClassInfo(class_id);
})
window.onload=function(){
	
	/////完成发布课程
	
	document.getElementById("class_edit").addEventListener("touchstart",function(e){
		e.preventDefault();
		var xueshi=$("#ifram").contents().find("#class_all_xueshi").val();
		var time=$("#ifram").contents().find("#class_start_time").val();
		var address=$("#ifram").contents().find("#class_address").val();
		var intro=$("#ifram").contents().find("#class_intro").val();
		var methodBoolean=0;
		if(method_face_type==null&&method_online_type==null&&method_charge_type==null){
			methodBoolean=1;
		}
		if(xueshi==""||time==""||address==""||intro==""||methodBoolean==1||day==""){
			alert("信息未填写完善");
		}else{
			//alert(xueshi);
			//alert(time);
			//alert(address);
			/*alert(intro);
			alert(method_face_type);
			alert(day);*/
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
			//alert(day);
			$.param(day,true);
				$.ajax({
					type:"post",
					url:"http://api.lizi123.cn/index.php/home/class/setClassInfo",
					xhrFields:{
	               		withCredentials: true
	           		},
	           		async:false,
					data:{
						"class_id":class_id,
						"client_type":0,
						"time":time,
						"week_hour":xueshi,
						"address":address,
						"intro":intro,
						"way":method_face_type,///0表示一对一  1表示一对多
						"method":method_online_type,//0表示线上  1表示线下
						"sale_type":method_charge_type,//0表示免费  1表示付费
						"week_time":day  ///0-6 周一到周日
					},
					success:function(data){
						var obj = eval(data);
	 	  				if (obj.status==200) {
//	 	  					window.open("http://m.lizi123.cn"+obj.class_id);///跳到广场
							window.open("http://m.lizi123.cn/?url_index=gro");
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
					},
					error:function(data){
//						alert("失败！");
						window.open("http://m.lizi123.cn/?url_index=gro");
					},
				});
				window.open("http://m.lizi123.cn/?url_index=gro");
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
	            	document.getElementById("class_name").innerHTML=obj.name;
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

