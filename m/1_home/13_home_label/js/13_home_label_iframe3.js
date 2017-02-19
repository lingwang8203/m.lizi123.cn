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


    window.onload=function(){ 
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