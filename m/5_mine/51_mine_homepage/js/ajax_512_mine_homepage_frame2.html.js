$(document).ready(function(){
		id=getQueryString('user_id');
	var data = new Object();
	data.client_type = 0;
	if (id) {
		data.user_id = id;
	}
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/taShowList",
            xhrFields: {
                withCredentials: true
            },
	        data:data,
			async:false,
			success:function(data){
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				for(var i=obj.show_num-1;i>=0;i--){
 	  					/*var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;'>";
 	  					html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
 	  					html+="<a href='../50_mine_homepage_self/50_mine_homepage_self.html?user_id="+obj[i].user_id+"' target='_blank'><img src='"+obj[i].user_headImg+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a></div>";
 	  					html+="<div class='aui-col-xs-8 aui-row aui-padded-t-5'>";
 	  					html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].name+"</div>";
 	  					html+="<div class='aui-col-xs-12'>";
 	  					html+="<div class='aui-col-xs-3 aui-font-size-12'style='color: #9E9E9E;'>"+obj[i].time+"</div>	</div></div>";
 	  					html+="<div class='aui-col-xs-2' style='margin-top: 0.3rem;'>";
 	  					html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete'/></div>";
 	  					html+="<div class='aui-col-xs-12 aui-pull-left' style='padding: 0;margin: 0;height:9rem;'>";
 	  					html+="<a href='' target='_blank'><img src='"+obj[i].xiu_img+"' style='height:9rem;width: 100%;' /></a></div>";
 	  					html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].xiu_content+"</div>	";
 	  					html+="<div class='aui-row aui-col-xs-12'>";
 	  					html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
 	  					if(obj[i].is_zan==0){///0未赞 1赞
 	  					html+="<i class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
 	  					}else{
 	  						html+="<i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
 	  					}
 	  					html+="<span class='aui-font-size-12'>"+obj[i].zan_number+"</span></div>";
 	  					html+="<a href='#' target='_blank' style='color: #212121 !important;'>";
 	  					html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
 	  					html+="<i class='aui-iconfont aui-icon-comment'></i>";
 	  					html+="<span class='aui-font-size-12'>"+obj[i].critic_number+"</span>";
 	  					html+="</div></a></div></li><div class='aui-hr'></div>";
 	  					$("#mine_dynamic").append(html);
 	  				}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
	
})*/
 html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
						html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
						html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_id+"' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
						html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
						html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
						html+="<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>"+obj[i].time+"</div></div>";
						html+="<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
						html+="<div class='aui-pull-right aui-padded-r-5'><img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete'/></div></div></div>";
						html+="<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
						if(obj[i].images.length==1){
							html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
							html+="<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
							html+="<img src='"+obj[i].images[0].album_picture+"' style='height:9rem;width: 100%;' /> ";
							html+="</div>";
						}else if(obj[i].images.length==2){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[0].album_picture+"'class='showphoto3'/></div>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[1].album_picture+"'class='showphoto3'/></div></div>";
						}else if(obj[i].images.length>=3){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							for(var j=0;j<obj[i].images.length;j++){
								html+="<div class='aui-col-xs-4 aui-text-center'>";
								html+="<img src='"+obj[i].images[j].album_picture+"'class='showphoto3'/>";
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
						html+="<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
						html+="<i class='aui-iconfont aui-icon-comment'></i>";
						html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].comment_num+"</span></div></a></div></li>";
						html+="<div class='aui-hr'></div>";
 	  					$("#mine_dynamic").append(html);
 	  				}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
	
})
 html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
						html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
						html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_id+"' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
						html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
						html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
						html+="<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>"+obj[i].time+"</div></div>";
						html+="<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
						html+="<div class='aui-pull-right aui-padded-r-5'><img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete'/></div></div></div>";
						html+="<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
						if(obj[i].images.length==1){
							html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
							html+="<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
							html+="<img src='"+obj[i].images[0].album_picture+"' style='height:9rem;width: 100%;' /> ";
							html+="</div>";
						}else if(obj[i].images.length==2){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[0].album_picture+"'class='showphoto3'/></div>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[1].album_picture+"'class='showphoto3'/></div></div>";
						}else if(obj[i].images.length>=3){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							for(var j=0;j<obj[i].images.length;j++){
								html+="<div class='aui-col-xs-4 aui-text-center'>";
								html+="<img src='"+obj[i].images[j].album_picture+"'class='showphoto3'/>";
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
						html+="<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
						html+="<i class='aui-iconfont aui-icon-comment'></i>";
						html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].comment_num+"</span></div></a></div></li>";
						html+="<div class='aui-hr'></div>";
 	  					$("#mine_dynamic").append(html);
 	  				}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		//alert("失败!");
	     	}
	
		});
	
})

window.onload=function(){
	
	/////////////////更改点赞状态
	var xiuxiu_dianzan=document.getElementsByName("xiuxiu_dianzan");
	//console.dir(ganwu_dianzan);
	for(var i=0;i<xiuxiu_dianzan.length;i++){
    	xiuxiu_dianzan[i].addEventListener("touchstart",function(e){
    		e.preventDefault();
    		var show_id = this.id;
    		//alert(show_id);
    		if(this.className=="aui-iconfont aui-icon-like"){
    			this.className="iconfont_like icon-xin";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
    			$.ajax({
    				type:"post",
					url:"http://api.lizi123.cn/index.php/home/index/showGood",
					async:true,
					data:{
						"client_type":0,
						"show_id":show_id,
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
    		else{
    			this.className="aui-iconfont aui-icon-like";
    			this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
    			$.ajax({
    				type:"post",
					url:"http://api.lizi123.cn/index.php/home/index/deleteShowGood",
					async:true,
					data:{
						"client_type":0,
						"show_id":show_id,
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
    	},false);
    }
	
	
	////删除休休
	var ic_delete=document.getElementsByClassName("ic_delete");
	for(var j=0;j<ic_delete.length;j++){
		ic_delete[j].index=j;
		ic_delete[j].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(window.confirm("确定要删除吗？")){
				//alert(this.index);
				document.getElementById("mine_dynamic").removeChild(document.getElementById("mine_dynamic").children[this.index]);
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
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
					//alert("失败！");
				},
			});
			}
		},false)
	}
	
}
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 