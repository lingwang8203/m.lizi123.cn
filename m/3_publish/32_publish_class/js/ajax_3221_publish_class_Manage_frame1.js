$(document).ready(function(){
	var class_id = getQueryString('class_id');
	//alert(class_id);
	///////////////课程原信息
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/class/classDetail",
		data:{
			"client_type":0,
			"class_id":class_id,
		},
		xhrFields:{
       		withCredentials: true
   		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				document.getElementById("class_fabuzhe_headImg").src=obj.teacher_info.head_image;
				document.getElementById("class_fabuzhe_headImg").value = obj.teacher_info.id;
				document.getElementById("class_fabuzhe_name").innerHTML=obj.teacher_info.user_name;
				document.getElementById("class_fabuzhe_intro").innerHTML=obj.teacher_info.intro;
				if (obj.teacher_info.tag.length>0) {
					$("#class_fabuzhe_label").text("");
					for(var i = 0;i<4&&i<obj.teacher_info.tag.length;i++){
						var html = "<div class='aui-label aui-font-size-12 tap t1'>"+obj.teacher_info.tag[i].tag_name+"</div>";
						$("#class_fabuzhe_label").append(html);
					}
				}
				document.getElementById("class_zan").parentElement.nextElementSibling.innerHTML = obj.good_num;

				//document.getElementById("class_method").innerHTML=obj.method;
				document.getElementById("class_day").innerHTML="周"+obj.week_time;
				if (obj.week_num*obj.week_hour!=0) {
					document.getElementById("class_all_xueshi").placeholder=0;
				}else{
					document.getElementById("class_all_xueshi").placeholder=obj.week_num*obj.week_hour;
				}
				document.getElementById("class_start_time").placeholder=obj.time;
				document.getElementById("class_address").value=obj.address;
				document.getElementById("class_intro").placeholder=obj.intro;
				
				////日起 时间已经存在的选择
				window.parent.method_face_type=obj.method_face_type;
				window.parent.method_online_type=obj.method_online_type;
				window.parent.method_charge_type=obj.method_charge_type;
				window.parent.day[0]=false;
				
				document.getElementsByName("method_face")[obj.way].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				document.getElementsByName("method_online")[obj.method].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				document.getElementsByName("method_charge")[obj.sale_type].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				/*for(var i=0;i<obj.day.length;i++){
					document.getElementsByClassName("class_day")[obj.day[i]].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				}
				
				$("#class_fabuzhe_label").text("");
				for(var i=0;i<obj.label.length&&i<4;i++){
					var html="<div class='aui-label aui-font-size-12 tap t1'>"+obj.label[i].name+"</div>";
					$("#class_fabuzhe_label").append(html);
				}
				//////获取点赞收藏状态
				if(obj.zan==0){
					document.getElementById("class_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png";
				}else{
					document.getElementById("class_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
				}
				
				document.getElementById("class_zan_num").innerHTML=obj.zan_number;
				
				if(obj.shoucang==0){
					document.getElementById("class_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png";
				}else{
					document.getElementById("class_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_liked.png";
				}*/
  					
  					
  					
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
		//	alert("失败！");
		},
	});
	
})
window.onload=function(){
	////用户头像跳转个人主页
	document.getElementById("class_fabuzhe_headImg").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("../../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+document.getElementById("class_fabuzhe_headImg").value);
	},false)
	
	////上课方式选择
	var method_index=0;//////////记录选择方式和时间的弹窗打开状态  0未打开  1打开
	var day_index=0;
	document.getElementById("class_method").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(day_index==0&&window.parent.edit_index==1){
			document.getElementById("choose_class_method").style.display="block";
			method_index=1;
		}
	},false)
	
	var method_face=document.getElementsByName("method_face");
	var method_online=document.getElementsByName("method_online");
	var method_charge=document.getElementsByName("method_charge");
	var method_text="";
	for(var i=0;i<method_face.length;i++){
		method_face[i].index=i;
		method_face[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<method_face.length;j++)
				method_face[j].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
			
			this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
			window.parent.method_face_type=this.index;
		},false)
	}
	
	for(var i=0;i<method_online.length;i++){
		method_online[i].index=i;
		method_online[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<method_online.length;j++)
				method_online[j].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
			
			this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
			window.parent.method_online_type=this.index;
		},false)
	}
	
	for(var i=0;i<method_charge.length;i++){
		method_charge[i].index=i;
		method_charge[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			for(var j=0;j<method_charge.length;j++)
				method_charge[j].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
			
			this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
			window.parent.method_charge_type=this.index;
		},false)
	}
	
	document.getElementById("choose_method_confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		method_text="";
		for(var i=0;i<method_face.length;i++){
			if(method_face[i].children[0].src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png"){
				method_text+=method_face[i].children[1].innerHTML+=" ";
			}
		}
		for(var i=0;i<method_online.length;i++){
			if(method_online[i].children[0].src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png"){
				method_text+=method_online[i].children[1].innerHTML+=" ";
			}
		}
		for(var i=0;i<method_charge.length;i++){
			if(method_charge[i].children[0].src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png"){
				method_text+=method_charge[i].children[1].innerHTML+=" ";
			}
		}
		document.getElementById("choose_class_method").style.display="none";
		document.getElementById("class_method").innerHTML=method_text;
 	  	method_index=0;
	},false)
	
	document.getElementById("choose_method_cancel").addEventListener("touchstart",function(e){
		document.getElementById("choose_class_method").style.display="none";
		method_index=0;
	},false)
	
	
	
	///上课时间选择
	document.getElementById("class_day").addEventListener("touchstart",function(e){
		if(method_index==0&&window.parent.edit_index==1){
		document.getElementById("choose_class_day").style.display="block";
		day_index=1;
		}
	},false)
	
	
	var day_text="";
	var class_day=document.getElementsByClassName("class_day");
	for(var m=0;m<class_day.length;m++){
		class_day[m].index=m;
		class_day[m].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.children[0].src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png"){
				this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
			}else{
				this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
			}
		},false)
	}
	
	document.getElementById("choose_day_confirm").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.parent.day=[];
		day_text="";
		for(var n=0;n<class_day.length;n++){
			if(class_day[n].children[0].src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png"){
				window.parent.day.push(class_day[n].index);
				day_text+=class_day[n].children[1].innerHTML+" ";
			}
		}
		document.getElementById("choose_class_day").style.display="none";
		document.getElementById("class_day").innerHTML=day_text;
		day_index=0;
	},false)
	
	document.getElementById("choose_day_cancel").addEventListener("touchstart",function(e){
		e.preventDefault();
		document.getElementById("choose_class_day").style.display="none";
		day_index=0;
	},false)
	

	document.getElementById("choose_day_cancel").addEventListener("touchstart",function(e){
		e.preventDefault();
		//alert(0);
	},false)
	
	
	/*//点赞收藏
	var class_zan=document.getElementById("class_zan");
	class_zan.index = 0;//只能点赞一次
	class_shoucang=document.getElementById("class_shoucang");
	var zan_num;
	class_zan.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/yizan.png";
			this.index=1;
			this.parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)+1;
			zan_num=this.parentElement.nextElementSibling.innerHTML;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/class/classGood",
				async:true,
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
				},
				error:function(data){
					//alert("更新失败");
				},
			});
		}else if(this.index==1){
			this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png";
			this.index=0;
			this.parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)-1;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/class/deleteClassGood",
				async:true,
				data:{
					"client_type":0,
					"class_id":class_id,
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
				},
				error:function(data){
					//alert("更新失败");
				},
			});
		}
	},false)
	
	class_shoucang.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			this.src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_liked.png";
			this.index=1;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/class/classCollect",
				async:true,
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
				},
				error:function(data){
					//alert("更新失败");
				},
			});
		}else if(this.index==1){
			this.src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_like.png";
			this.index=0;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/class/deleteClassCollect",
				async:true,
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
				},
				error:function(data){
					//alert("更新失败");
				},
			});
		}
	},false)*/
	
	
};


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
