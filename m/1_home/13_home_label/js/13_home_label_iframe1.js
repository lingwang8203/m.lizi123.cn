$(document).ready(function(){
	
	$.ajax({
				type:"post",
				url:"",
				xhrFields:{
               		withCredentials: true
           		},
				data:{
//					"sports_id":sports_id,
				},
				success:function(data){
					var obj = eval(data);
 	  				if (obj.status==200) {
 	  					$("#todayReCommend").text("");
		            	for(var i=0;i<obj.length;i++){
		            		var html;
		            		if(obj[i].area==4){//秀秀
		            			html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
								html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
								html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
								html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
								html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
								html+="<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>"+obj[i].user_info.intro+"</div></div>";
								html+="<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
								html+="<div class='aui-pull-right aui-padded-r-5'>"+obj[i].time+"</div></div></div>";
								html+="<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
								if(obj[i].image.length==1){
									html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
									html+="<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
									html+="<img src='"+obj[i].image[0]+"' style='height:9rem;width: 100%;' /> ";
									html+="</div>";
								}else if(obj[i].image.length==2){
									html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
									html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
									html+="<div class='aui-col-xs-4 aui-text-center'>";
									html+="<img src='"+obj[i].image[0]+"'class='showphoto3'/></div>";
									html+="<div class='aui-col-xs-4 aui-text-center'>";
									html+="<img src='"+obj[i].image[1]+"'class='showphoto3'/></div></div>";
								}else if(obj[i].image.length>=3){
									html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
									html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
									for(var j=0;j<obj[i].image.length;j++){
										html+="<div class='aui-col-xs-4 aui-text-center'>";
										html+="<img src='"+obj[i].image[j]+"'class='showphoto3'/>";
										html+="</div>";
									}
									html+="</div>";
								}else{
									html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
								}
								
								html+="</a><div class='aui-row aui-col-xs-12'>";
								html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
								html+="<i class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
								html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].good_num+"</span>";
								html+="</div>";
								html+="<a target='_blank' href='../../2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
								html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
								html+="<i class='aui-iconfont aui-icon-comment'></i>";
								html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].comment_num+"</span></div></a></div></li>";
								html+="<div class='aui-hr'></div>";
		                        $("#todayReCommend").append(html);
		            		}
		            		else if(obj[i].area==2){//课程
		            			html="<li class='aui-row aui-padded-t-5 aui-padded-b-5'style='width:100%;background: white;'>";
		            			html+="<div class='aui-col-xs-2 aui-text-center'style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
		            			html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"' style='width: 2rem !important;height:auto;'target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;' /></a>";
		            			html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
		            			html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>  ";
		            			html+="<div class='aui-col-12 aui-font-size-12'>"+obj[i].user_info.intro+"</div></div> ";
		            			html+="<div class='aui-col-xs-4'style='margin-top: 0.3rem;'>";
		            			html+="<a href='http://m.lizi123.cn/1_home/13_home_label/13_home_label.html?tag_id="+obj[i].tag_id+"'target='_blank'><div class='aui-label aui-pull-right aui-font-size-12 tap'>"+obj[i].tag_name+"</div></a>";
		            			html+="</div><a href='../../2_function/21_function_class/212_function_class_concret.html?class_id="+obj[i].id+"' style='color: #212121 !important;'target='_blank'>";
		            			html+="<div class='aui-row aui-col-xs-12'> <div class='aui-col-xs-5 aui-pull-left'style='height: 8.4rem;	padding: 0.5rem !important;padding-top: 0 !important;'>";
		            			html+="<img src='"+obj[i].image+"'style='height:8.4rem;width: 100%;' /> </div>";
		            			html+="<div class='aui-col-xs-7 aui-row aui-pull-left'><div class='aui-row aui-col-12 '>";
		            			html+="<div class='aui-col-12 aui-font-size-18 '>"+obj[i].name+"</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课方式</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>";
		            			switch(obj[i].way){
						            case "0":
						                html += "一对多";
						                break;
						            case "1":
						                html += "一对一";
						                break;
						            case "2":
						                html += "不限";
						                break;
						        }
						        html+="·";
						        switch(obj[i].method){
						            case "0":
						                html += "线上";
						                break;
						            case "1":
						                html += "线下";
						                break;
						            case "2":
						                html += "不限";
						                break;
						        }
		            			html+="</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>课程简介</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].intro+"</div></div>";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课地点</div>";
		            			html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].address+"</div></div>	";
		            			html+="<div class='aui-row aui-col-12 '><div class='aui-col-xs-4  aui-font-size-12'>上课时间</div>";
		
		            			html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >周";
		            			html+=obj[i].week_time;
		            			html+="</div><div class='aui-col-12'>共 <span style='color: #ffac0d;'>"+obj[i].week_hour+"</span>学时</div>";
		            			html+="</div></div></div></div></a><div class='aui-row aui-col-xs-12'>";
		            			html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
		            			html+="<i class='aui-iconfont aui-icon-like' name='class_dianzan'></i>";
		            			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].good_num+"</span>";
		            			html+="</div><a href='../../2_function/21_function_class/212_function_class_concret.html?class_id="+obj[i].id+"' target='_blank'>";
		            			html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
		            			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].evaluate_num+"</span></div> </a>";
		            			html+="<div class='aui-col-xs-4 aui-pull-right'>";
		            			html+="<a href='http://m.lizi123.cn/2_function/21_function_class/2121_function_class_concret_fillMessage.html?class_id="+obj[i].id+"' target='_blank'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on'style='margin-top: 0;'>报名参加</div></a></div></div></li>";
		            			html+="<div class='hr'></div>";
		                        $("#todayReCommend").append(html);
		            		}
		            		else if(obj[i].area==1){//活动
		            			html="<li  class='aui-row aui-padded-b-5 ' style='width:100%;height: auto;position: relative;'>";
		            			html+="<div class='aui-col-xs-12' style='padding: 0;margin: 0;height:auto;'>";
		            			html+="<img src='"+obj[i].image+"' style='height:16rem;width:100%;'/></div>";
		            			html+="<a target='_blank' href='http://m.lizi123.cn/1_home/13_home_label/13_home_label.html?tag_id="+obj[i].tag_id+"'><div class='aui-label aui-pull-right aui-font-size-12 tap' style='position: absolute;top: 0.5rem;right: 0;'>"+obj[i].tag_name+"</div></a>";
		            			html+="<div class='sportcontect' style='width:100%;height: auto;position: absolute;bottom:1.8rem;'>";
		            			html+="<div style='width: 100%;height: auto;'><div class='aui-col-xs-12 out'><div class='aui-col-xs-12 in_opacity'></div>";
		            			html+="<div class='aui-col-xs-2 join_title aui-text-center aui-row aui-margin-t-10'><div class='aui-font-size-16 aui-col-12'>";
		            			switch(obj[i].activity_status){
		            				case "1":html+="投票";break;
		            				case "2":html+="活动";break;
		            				case "3":html+="报名";break;
		            			}
		            			html+="</div>";
		            			html+="<div class='aui-font-size-12 aui-col-12'>进行中</div></div><div class='aui-row aui-col-xs-7 aui-padded-t-5'>";
		            			html+="<div class='aui-font-size-16 aui-col-xs-12' style='color: white;max-height: 1.2rem;overflow: hidden;'>"+obj[i].name+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;max-height:1.7rem !important;overflow:auto;'>"+obj[i].intro+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;'>主办方:"+obj[i].sponsor+"</div>";
		            			html+="</div><div class='aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5' style='width:auto;'>";
		            			switch(obj[i].activity_status){
		            				case "1":html+="<a href='"+obj[i].sport_vote_id+"' target='_blank'>";break;
		            				case "2":html+="<a href='"+obj[i].sport_id+"' target='_blank'>";break;
		            				case "3":html+="<a href='http://m.lizi123.cn/2_function/23_function_sports/2321_function_sports_concret_fillMessage.html?activty_id="+obj[i].sport_join_id+"' target='_blank'>";break;
		            			}
		            			html+="<div class='aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-12' style='width: auto; color:white ;text-align: center;border-radius: 0.4rem;padding:0.1rem 0.3rem;'>参与";
		            			switch(obj[i].activity_status){
		            				case "1":html+="投票";break;
		            				case "2":html+="活动";break;
		            				case "3":html+="报名";break;
		            			}
		            			html+="</div></a>";
		            			html+="<a href='../../2_function/23_function_sports/232_function_sports_concret.html?sports_id="+obj[i].id+"'target='_blank'><div class='aui-col-xs-12 aui-font-size-12'style='color: white;'>";
		            			html+="<div class='aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10'style='width: auto;'>活动详情></div></div></a>  "
		            			html+="</div></div></div></div><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
		            			html+="<i class='aui-iconfont aui-icon-like' name='sport_dianzan'></i>";
		            			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].good_num+"</span>";
		            			html+="</div><a href='../../2_function/23_function_sports/232_function_sports_concret.html?sports_id="+obj[i].id+"' target='_blank'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i><span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].comment_num+"</span>";
		            			html+="</div></a></li><div class='aui-hr'></div>";
		                        $("#todayReCommend").append(html);
		            		}else if(obj[i].area==3){///////////////////社团
		            			html="<li class='aui-row aui-padded-b-5  aui-padded-t-5'style='border-top: 0.05rem solid  #f5f5f5;border-bottom: 0.05rem solid  #f5f5f5;background: white;'>";
		            			html+="<div class='aui-col-xs-2 aui-text-center'>";
		            			html+="<img src='"+obj[i].image+"'class='aui-img-round club_photo_suit'/></div>";
		            			html+="<div class='aui-col-xs-8'>";
		            			html+="<div class='aui-col-xs-12 aui-font-size-16'>"+obj[i].name+"</div>";
		            			html+="<div class='aui-col-xs-12 aui-font-size-12'style='color:#666666;'>"+obj[i].sign+"</div>";
		            			html+="<div class='aui-col-xs-12'>";
		            			html+="<i class='aui-icon-my aui-iconfont aui-pull-left'></i>";
		            			html+="<div class='aui-font-size-12 aui-pull-left  aui-padded-l-5'style='padding-top: 0.1rem;color:#666666;'><span style='color:#ffcb53;'> "+obj[i].member_num+"人 </span>已加入</div>";
		            			html+="</div></div> <div class='aui-col-xs-2 aui-pull-right'>";
		            			if(obj[i].is_join==1){
		            				html+="<div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on aui-bg-base aui-text-white'>已加入</div>";
		            			}else{
		            				html+="<div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on'>申请加入</div>";
		            			}
		            			html+="	<a href='../../2_function/22_function_club/222_function_club_concret.html?club_id="+obj[i].id+"' target='_blank'><div class='aui-bar-ligh-col-xs-12'>";
		            			html+="<i class='aui-iconfont aui-icon-right aui-pull-right aui-padded-r-15'></i>";
		            			html+="</div></a></div></li>";
		                        $("#todayReCommend").append(html);
		            		}
		            		
		            	}
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
//					alert("失败！");
				},
			});
	
})

/////////////////////////////////////////////秀秀点赞
    window.onload=function(){
    var xiu_zan=document.getElementsByName("xiuxiu_dianzan");
    for(var i=0;i<xiu_zan.length;i++){
    	xiu_zan[i].addEventListener("touchstart",function(e){
    		e.preventDefault();
    		if(this.className=="aui-iconfont aui-icon-like"){
    			$.ajax({
    			type:"post",
				url:"",
				data:{
		         "xiu_id":xiu_id,
		
				},
				success:function(data){
    			this.className="iconfont_like icon-xin";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			},
		        error:function(data)
		        {
//		        	alert("点赞活动失败!");
		        }
				});
		    	}
    		else{
    			$.ajax({
				type:"post",
				url:"",
				data:{
		         "xiu_id":xiu_id,
		
				},	
				success:function(data){
    			this.className="aui-iconfont aui-icon-like";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
    			},
		     	error:function(data)
		     	{
//		     		alert("取消点赞失败!");
		     	}
		
				});
    		}
    	},false);
    }
    
    
     //////////////////课程点赞

    var class_zan=document.getElementsByName("class_dianzan");
    for(var i=0;i<class_zan.length;i++){
    	class_zan[i].addEventListener("touchstart",function(e){
    		e.preventDefault();
    		if(this.className=="aui-iconfont aui-icon-like"){
    			$.ajax({
    			type:"post",
				url:"",
				data:{
		         "class_id":class_id,
		
				},
				success:function(data){
    			this.className="iconfont_like icon-xin";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			},
		        error:function(data)
		        {
//		        	alert("点赞活动失败!");
		        }
				});
		    	}
    		else{
    			$.ajax({
				type:"post",
				url:"",
				data:{
		         "class_id":class_id,
		
				},	
				success:function(data){
    			this.className="aui-iconfont aui-icon-like";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			},
		     	error:function(data)
		     	{
//		     		alert("取消点赞失败!");
		     	}
		
				});
    		}
    	},false);
    }
    
    
     //////////////////活动点赞
    var sport_zan=document.getElementsByName("sport_dianzan");
    for(var i=0;i<sport_zan.length;i++){
    	sport_zan[i].addEventListener("touchstart",function(e){
    		e.preventDefault();
    		if(this.className=="aui-iconfont aui-icon-like"){
    			$.ajax({
    			type:"post",
				url:"",
				data:{
		         "sport_id":sport_id,
		
				},
				success:function(data){
    			this.className="iconfont_like icon-xin";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			},
		        error:function(data)
		        {
//		        	alert("点赞活动失败!");
		        }
				});
		    	}
    		else{
    			$.ajax({
				type:"post",
				url:"",
				data:{
		         "sport_id":sport_id,
		
				},	
				success:function(data){
    			sport.className="aui-iconfont aui-icon-like";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
    			},
		     	error:function(data)
		     	{
//		     		alert("取消点赞失败!");
		     	}
		
				});
    		}
    	},false);
    }
    }