$(document).ready(function(){
	var activity_id = getQueryString('activity_id');
	//alert("2:"+activity_id);
	//活动秀秀
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actShowList",
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
			$("#sports_xiuxiu_content").text("");
			if (obj.status==200) {

				for(var i=0;i<obj.length;i++){
//					var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;'>";
//					html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
//					html+="<a href='../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
//					html+="</div><div class='aui-col-xs-8 aui-row'><div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
//					html+="<div class='aui-col-xs-12'><div class='aui-col-xs-3 aui-font-size-12' style='color: #9E9E9E;'>"+obj[i].time+"</div>";
//					html+="<div class='aui-col-xs-9 aui-font-size-12'>"+obj[i].user_info.intro+"</div></div></div>";
//					html+="<div class='aui-col-xs-2' style='margin-top: 0.3rem;'>";
//					html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete' name='sports_huaxu_delete'/>";
//					html+="</div>";
//					html+="<div class='aui-col-xs-12 aui-pull-left' style='padding: 0;margin: 0;height:9rem;'>";
//					html+="<a href=''><img src='"+obj[i].image[0].album_picture+"' style='height:9rem;width: 100%;' /></a></div>";
//					html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>	";
//					html+="<div class='aui-row aui-col-xs-12'>";
//					//if(obj[i].sports_xiu_zan_index==0){//0未点赞 1已点赞
//						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'><i value='"+obj[i].id+"'class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
//					/*}else{
//						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'><i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
//					}*/
//					html+="<span class='aui-font-size-12'>"+obj[i].good_num+"</span></div>";
//					html+="<a href='#'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
//					html+="<span class='aui-font-size-12'>"+obj[i].comment_num+"</span></div></a></div></li>";
//					html+="<div class='aui-hr'></div>";
					html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
						html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
						html+="<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
						html+="</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
						html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
						html+="<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>"+obj[i].user_info.intro+"</div></div>";
						html+="<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
						html+="<div class='aui-pull-right aui-padded-r-5'>"+obj[i].time+"</div></div></div>";
						html+="<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=?show_id="+obj[i].id+"'>";
						if(obj[i].images.length==1){
							html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
							html+="<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
							html+="<img src='"+obj[i].images[0]+"' style='height:9rem;width: 100%;' /> ";
							html+="</div>";
						}else if(obj[i].images.length==2){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[0]+"'class='showphoto3'/></div>";
							html+="<div class='aui-col-xs-4 aui-text-center'>";
							html+="<img src='"+obj[i].images[1]+"'class='showphoto3'/></div></div>";
						}else if(obj[i].images.length>=3){
							html+="<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>"+obj[i].intro+"</div>";
							html+="<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
							for(var j=0;j<obj[i].images.length;j++){
								html+="<div class='aui-col-xs-4 aui-text-center'>";
								html+="<img src='"+obj[i].images[j]+"'class='showphoto3'/>";
								html+="</div>";
							}
							html+="</div>";
						}else{
							html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>";
						}
						
						html+="</a><div class='aui-row aui-col-xs-12'>";
						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
						html+="<i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
						html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].good_num+"</span>";
						html+="</div>";
						html+="<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id="+obj[i].id+"'>";
						html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
						html+="<i class='aui-iconfont aui-icon-comment'></i>";
						html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj[i].comment_num+"</span></div></a></div></li>";
						html+="<div class='aui-hr'></div>";
					$("#sports_xiuxiu_content").append(html);
				}
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			//alert("失败！");
		},
	});
	
})

	window.onload=function(){
	////更新点赞状态
	var xiu_zan=document.getElementsByName("xiuxiu_dianzan");
	for(var j=0;j<xiu_zan.length;j++){
		xiu_zan[j].addEventListener("touchstart",function(e){
			e.preventDefault();
			//alert(this.value);
			if(this.className=="aui-iconfont aui-icon-like"){
				this.className="iconfont_like icon-xin";
		 	  	this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)+1;
				$.ajax({
					type:"post",
					url:"",
		            xhrFields: {
		                withCredentials: true
		            },
					data:{
						"client_type":0,
						"show_id":0,
					},	
					success:function(data){
						var obj = eval(data);
		 	  			if (obj.status==200) {
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
		    		},
			     	error:function(data)
			     	{
			     		//alert("失败!");
			     	}
				});
			}else{
				this.className="aui-iconfont aui-icon-like";
		 	  	this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
				$.ajax({
					type:"post",
					url:"",
		            xhrFields: {
		                withCredentials: true
		            },
					data:{
		//	         "club_id":club_id,
//					 "user_id":user_id
					},	
					success:function(data){
						var obj = eval(data);
		 	  			if (obj.status==200) {
						}else if(obj.status==199){
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
		    		},
			     	error:function(data)
			     	{
			     		//alert("失败!");
			     	}
				});
			}
		},false)
	}
	
	/////////////////删除秀秀
	var xiu_delete=document.getElementsByName("sports_huaxu_delete");
	for(var i=0;i<xiu_delete.length;i++){
		xiu_delete[i].index=i;
		xiu_delete[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(window.confirm("你确定要删除这条秀秀吗")){
				//alert(this.index);
				document.getElementById("sports_xiuxiu_content").removeChild(document.getElementById("sports_xiuxiu_content").children[this.index]);
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