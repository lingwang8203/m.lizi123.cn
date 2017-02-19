$(document).ready(function(){
	activity_id = getQueryString('activity_id');
	//alert("1:"+activity_id);
	/////////活动详情
	getActivityDetail(activity_id);
	
	/////////////////更新点赞状态
	document.getElementById("sports_zan").addEventListener("touchstart",function(e){
		e.preventDefault();
					
		if(this.src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png"){
			this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
			this.parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)+1;
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/activity/actGood",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"activity_id":activity_id,
					"client_type":0
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
 	  				if (obj.status==200) {
						//document.getElementById("sports_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
						//document.getElementById("sports_zan").parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)+1;
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("点赞失败！");
				},
			});
		}else{
			this.src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png";
			this.parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)-1;

			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/activity/deleteActGood",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"client_type":0,
					"activity_id":activity_id,
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
 	  				if (obj.status==200) {
						//document.getElementById("sports_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png";
						//document.getElementById("sports_zan").parentElement.nextElementSibling.innerHTML=parseInt(this.parentElement.nextElementSibling.innerHTML)-1;
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("取消点赞失败！");
				},
			});
		}
	},false)
	
	/////////////////更新收藏状态
	document.getElementById("sports_shoucang").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.src=="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png"){
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/activity/actCollect",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"client_type":0,
					"activity_id":activity_id,
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
 	  				if (obj.status==200) {
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_liked.png";
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("收藏失败！");
				},
			});
		}else{
			$.ajax({
				type:"post",
				url:"http://api.lizi123.cn/index.php/home/activity/deleteActCollect",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
					"client_type":0,
					"activity_id":activity_id,
				},
				success:function(data){
					var obj = eval(data);
					console.dir(obj);
 	  				if (obj.status==200) {
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png";
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("取消收藏失败！");
				},
			});
		}
	},false)
	
	///////////发布者头像链接
	/*document.getElementById("sports_fabuzhe_headImg").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+user_id);
	},false)*/
	
	//相关活动推荐链接
	document.getElementById("sports_tuijian_more").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("2321_jian_more_activities.html?activity_id="+activity_id);
	},false)
	
	document.getElementById("sports_signUp").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("2321_function_sports_concret_fillMessage.html?activity_id="+activity_id);
	},false)
	
})


//========================获取活动详情====================
function getActivityDetail(activity_id){
	if (activity_id) {
		$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/activity/actDetail",
            xhrFields: {
                withCredentials: true
            },
			data:{
				"client_type":0,
				"activity_id":activity_id,
			},	
			success:function(data){
				var obj = eval(data);
				console.dir(obj);
 	  			if (obj.status==200) {
 	  				if (obj.club_info) {
 	  					document.getElementById("sports_fabuzhe_image").href="http://m.lizi123.cn/2_function/22_function_club/222_function_club_concret.html?club_id="+obj.club_info.id;
 	  					document.getElementById("sports_fabuzhe_headImg").src=obj.club_info.image;
 	  					document.getElementById("sports_fabuzhe").innerHTML=obj.club_info.name;
 	  					document.getElementById("sports_fabuzhe_jianjie").innerHTML=obj.club_info.sign;
	 	  				if(obj.club_info.is_collect==0){///////////0未关注 1已关注
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="+收藏";
						}
						else if(obj.club_info.is_collect==1){
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="已收藏";
						}
					}else if(obj.user_info){
						user_id = obj.user_info.id;
                        document.getElementById("sports_fabuzhe_image").href="http://m.lizi123.cn/5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.user_info.id;
						document.getElementById("sports_fabuzhe_headImg").src=obj.user_info.head_image;
 	  					document.getElementById("sports_fabuzhe").innerHTML=obj.user_info.user_name;
 	  					document.getElementById("sports_fabuzhe_jianjie").innerHTML=obj.user_info.intro;
	 	  				if(obj.user_info.is_care==0){///////////0未关注 1已关注
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="+关注";
						}
						else if(obj.user_info.is_care==1){
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="已关注";
						}
					}
 	  				
 	  				document.getElementById("sports_time").innerHTML=obj.act_starting;
 	  				document.getElementById("sports_address").innerHTML=obj.address;
 	  				document.getElementById("sports_require").innerHTML=obj.requirements;
 	  				document.getElementById("sports_jianjie").innerHTML=obj.intro;
 	  				
 	  				
					
					$("#sports_people_list").text("");
					////////参与活动的用户列表
					for(var i=0;i<obj.member.length&&i<6;i++){
						var html="<a target='_blank' href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.member[i].id+"'><div class='aui-col-xs-2' style='width: auto;'>";
						html+="<img src='"+obj.member[i].head_image+"' class='aui-img-round photo'/>";
						html+="</div></a>";
						$("#sports_people_list").append(html);
					}
					if(obj.member.length>=6){/////////超出6个  显示更多链接
						html+="<a target='_blank href='2321_jian_more_people.html'><div class='aui-col-xs-2'style='width: auto;'>";
						html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/more.png' style='width:0.6rem;height:0.8rem;margin: 0.3rem;margin-right: 0;margin-top: 0.8rem;' />";
						html+="</div></a>";
						$("#sports_people_list").append(html);
					}
					$("#sports_recommend_list").text("");
					//相关活动推荐
					for(var j=0;j<obj.activity_recommend.length&&j<3;j++){
						var htm="<div class='aui-col-xs-4 aui-row aui-padded-l-15 aui-padded-r-10'>";
						htm+="<a target='_blank href='232_function_sports_concret.html?activity_id="+obj.activity_recommend[j].activity_id+"'><div class='aui-col-xs-12'>";
						htm+="<img src='"+obj.activity_recommend[j].album_picture+"' class='book_photo'/>";
						htm+="</div></a><div class='aui-col-xs-12 tex'>"+obj.activity_recommend[j].activity_name+"</div></div>";
						$("#sports_recommend_list").append(htm);
					}
					
					document.getElementById("sports_zan_number").innerHTML=obj.good_num;
					//if(obj.sports_info.is_zan==0){///////////0未赞 1已赞
						document.getElementById("sports_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_big_good.png";
					/*}else if(obj.sports_info.is_zan==1){
						document.getElementById("sports_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
					}*/
					
					if(obj.is_collect==0){///////////0未收藏 1已收藏
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png";
					}
					else if(obj.is_collect==1){
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_liked.png";
					}
					
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("获取活动详情失败!");
	     	}
	
		});
	};
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