$(document).ready(function(){
	times = 1;//加载次数,全局变量
	var class_id = getQueryString('class_id');
	getClassDetail(class_id);

	//获取对老师的关注状态
	guanzhu_index=document.getElementById("guanzhu_index");
	//更改关注状态
	guanzhu_index.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.index==0){
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/user/userCare",
				async:true,
				data:{
					"client_type":0,
					"user_id":document.getElementById("teacher_name").value,
				},
		        xhrFields: {
		            withCredentials: true
		        },
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
					if (obj.status==200) {
						guanzhu_index.className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
						guanzhu_index.innerHTML="已关注";
						guanzhu_index.index=1;
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
        			}
				},
				error:function(data){
					//alert("更新关注状态失败");
				},
			});
		}
		else if(this.index==1){
			if(window.confirm('你确定要取消关注吗？')){
				$.ajax({
					type:"post",
					url:"http://api.lizi123.cn/index.php/home/user/deleteUserCare",
					data:{
						"client_type":0,
						"user_id":document.getElementById("teacher_name").value,
					},
			        xhrFields: {
			            withCredentials: true
			        },
					success:function(data){
						var obj = eval(data);
						console.dir(obj);
						if (obj.status==200) {
							guanzhu_index.className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
							guanzhu_index.innerHTML="+关注";
							guanzhu_index.index=0;
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
            			}
					},
					error:function(data){
						//alert("更新关注状态失败");
					},
				});
			}else{
				return false;
			}
		}
	},false);
	
	//点赞收藏
	var class_zan=document.getElementById("class_zan");
	class_zan.index = 0;//只能点赞一次
	class_shoucang=document.getElementById("class_like");
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
	},false)
	
})

window.onload=function(){
	/*document.getElementById("more_class_recommend").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("2121_jian_more_activities.html"+class_id);
	},false)*/
}

//==========================获取课程详情===========================
function getClassDetail(class_id){
	if (class_id) {
		times++;
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/class/classDetail",
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

	            	//联系教师
	            	if (obj.online_user_id==0) {
	            		document.getElementById("chat_teacher").href = "http://m.lizi123.cn/7_login/7_login.html";
	            	}else{
	            		document.getElementById("chat_teacher").href = "http://m.lizi123.cn/6_chat/siliao.php?id="+obj.teacher_info.id+"&id2="+obj.online_user_id+"";
	            	}
	            	//讲师信息
	            	document.getElementById("teacher_image").href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.teacher_info.id;
					document.getElementById("teacher_name").innerHTML=obj.teacher_info.user_name;
					document.getElementById("teacher_name").value = obj.teacher_info.id;
					document.getElementById("teacher_miaoshu").innerHTML=obj.teacher_info.intro;
					document.getElementById("teacher_pic").src=obj.teacher_info.head_image;
					var teacher_label=document.getElementsByName("teacher_label");
					if (obj.teacher_info.tag.length) {
						for(var i = 0;i<teacher_label.length&&i<obj.teacher_info.tag.length;i++){
							teacher_label[i].innerHTML=obj.teacher_info.tag[i].tag_name;
						}
					}
					guanzhu_index.index=obj.teacher_info.is_care;
					if(obj.teacher_info.is_care==0){///////////0未关注 1已关注
						document.getElementById("guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
						document.getElementById("guanzhu_index").innerHTML="+关注";
					}
					else if(obj.teacher_info.is_care==1){
						document.getElementById("guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
						document.getElementById("guanzhu_index").innerHTML="已关注";
					}
					//上课方式
					var html="";
					if(obj.way==0){
						html+="一对一,";
					}else if(obj.way==1){
						html+="一对多,";
					}else{
						html+="不限,";
					}

					if(obj.method==0){
						html+="线上,";
					}else if(obj.method==1){
						html+="线下,";
					}else{
						html+="不限";
					}
						
					if(obj.sale_type==0)
						html+="免费,";
					else if(obj.pay_way==1)
						html+=obj.sale_money+"元";
					document.getElementById("class_way").innerHTML=html;
					document.getElementById("class_xueshi").innerHTML=obj.week_hour*obj.week_num;
					document.getElementById("class_time").innerHTML=obj.time;

					document.getElementById("class_schedule_time").innerHTML="周"+obj.week_time;
					document.getElementById("class_schedule_address").innerHTML=obj.address;
		
					document.getElementById("class_jianjie").innerHTML=obj.intro;
		
		        	$("#class_jian").text("");
		        	document.getElementById("more_href").href = "http://m.lizi123.cn/2_function/21_function_class/2121_jian_more_activities.html?type_id="+obj.type_id+"&class_id="+class_id;
					for(var k=0;k<obj.class_command.length;k++){
						var html="";
						html+="<div class='aui-col-xs-4 aui-row aui-padded-l-15 aui-padded-r-10'>";
						html+="<div class='aui-col-xs-12'>";
						html+="<a target='_blank' href='212_function_class_concret.html?class_id="+obj.class_command[k].id+"'><img src='"+obj.class_command[k].image+"' class='book_photo'/></a>";
						html+="</div>";
						html+="<div class='aui-col-xs-12 tex'>"+obj.class_command[k].name+"</div>";
						html+="</div>";
						$("#class_jian").append(html);
					}

					//是否收藏
					class_shoucang.index = obj.is_collect;
					if (obj.is_collect==1) {
						document.getElementById("class_like").src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_liked.png";
					}else{
						document.getElementById("class_like").src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_like.png";
					}
					//点赞
					document.getElementById("class_zan").parentElement.nextElementSibling.innerHTML = obj.good_num;
		        }

			},
			error:function(data){
				if (times<4) {
					getClassDetail(class_id);
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




