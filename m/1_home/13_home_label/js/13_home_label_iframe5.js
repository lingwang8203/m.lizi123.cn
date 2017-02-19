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
    }
