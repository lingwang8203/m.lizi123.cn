$(document).ready(function(){
	var activity_id = getQueryString('activity_id');
	//alert(activity_id);
	getActivityDetail(activity_id);
	
			
	/////推荐活动 更多链接
	document.getElementById("sports_tuijian_more").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("../../../2_function/23_function_sports/2321_jian_more_activities.html");
	},false)
	
	///////////////////选择报名信息链接
	
	document.getElementById("sports_choose_join_information").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/3_publish/31_publish_sports/3121_publish_sports_step2_Manage_chooseMessage.html");
	},false)
	
	///////查看报名人员链接
	
	document.getElementById("sports_check_join_people").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.open("http://m.lizi123.cn/3_publish/31_publish_sports/3121_publish_sports_step2_Manage_member.html");
	},false)
	
	
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
 	  					document.getElementById("sports_fabuzhe_headImg").src=obj.club_info.image;
 	  					document.getElementById("sports_fabuzhe_name").innerHTML=obj.club_info.name;
 	  					document.getElementById("sports_fabuzhe_jianjie").innerHTML=obj.club_info.sign;
	 	  				/*if(obj.club_info.is_collect==0){///////////0未关注 1已关注
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="+收藏";
						}
						else if(obj.club_info.is_collect==1){
							document.getElementById("sports_fabuzhe_guanzhu_index").className="aui-col-xs-12 aui-label lab aui-font-size-12 aui-bg-base aui-text-white aui-label-outlined aui-pull-right aui-margin-r-5";
							document.getElementById("sports_fabuzhe_guanzhu_index").innerHTML="已收藏";
						}*/
					}else if (obj.user_info) {
						document.getElementById("sports_fabuzhe_headImg").src=obj.user_info.head_image;
 	  					document.getElementById("sports_fabuzhe_name").innerHTML=obj.user_info.user_name;
 	  					document.getElementById("sports_fabuzhe_jianjie").innerHTML=obj.user_info.intro;
					};
 	  				
 	  				document.getElementById("time").placeholder=obj.act_starting;
 	  				document.getElementById("sports_address").placeholder=obj.address;
 	  				document.getElementById("sports_require").placeholder=obj.requirements;
 	  				document.getElementById("sports_jianjie").placeholder=obj.intro;
 	  				
 	  				
					
					$("#sports_join_people_list").text("");
					////////参与活动的用户列表
					for(var i=0;i<obj.member.length&&i<6;i++){
						var html="<a target='_blank' href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.member[i].id+"'><div class='aui-col-xs-2' style='width: auto;'>";
						html+="<img src='"+obj.member[i].head_image+"' class='aui-img-round photo'/>";
						html+="</div></a>";
						$("#sports_join_people_list").append(html);
					}
					if(obj.member.length>=6){/////////超出6个  显示更多链接
						html+="<a target='_blank href='../../../2_function/23_function_sports/2321_jian_more_people.html'><div class='aui-col-xs-2'style='width: auto;'>";
						html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/1_home/more.png' style='width:0.6rem;height:0.8rem;margin: 0.3rem;margin-right: 0;margin-top: 0.8rem;' />";
						html+="</div></a>";
						$("#sports_join_people_list").append(html);
					}
					$("#sports_tuijian_list").text("");
					//相关活动推荐
					for(var j=0;j<obj.activity_recommend.length&&j<3;j++){
						var htm="<div class='aui-col-xs-4 aui-row aui-padded-l-15 aui-padded-r-10'>";
						htm+="<a target='_blank href='../../../2_function/23_function_sports/232_function_sports_concret.html?activity_id="+obj.activity_recommend[j].activity_id+"'><div class='aui-col-xs-12'>";
						htm+="<img src='"+obj.activity_recommend[j].album_picture+"' class='book_photo'/>";
						htm+="</div></a><div class='aui-col-xs-12 tex'>"+obj.activity_recommend[j].activity_name+"</div></div>";
						$("#sports_tuijian_list").append(htm);
					}
					
					document.getElementById("sports_zan_number").innerHTML=obj.good_num;
					//if(obj.sports_info.is_zan==0){///////////0未赞 1已赞
						document.getElementById("sports_zan_index").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
					/*}else if(obj.sports_info.is_zan==1){
						document.getElementById("sports_zan").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/yizan.png";
					}*/
					
					/*if(obj.is_collect==0){///////////0未收藏 1已收藏
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_like.png";
					}
					else if(obj.is_collect==1){
						document.getElementById("sports_shoucang").src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/2_function/23_function_sports/ic_liked.png";
					}*/
					
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