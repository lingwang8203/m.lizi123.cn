$(document).ready(function(){
	 id=1;//用于测试
	 alert("666");
	//id=getQueryString('user_id');
	$.ajax({
			type:"post",
			url:"http://api.lizi123.cn/index.php/home/user/selfShowList",
            xhrFields: {
                withCredentials: true
            },
			data:{
//	         "sports_id":sports_id,
               "client_type":0,
               "user_id":id,
			},	

			success:function(data){
				
				var obj = eval(data);
 	  			if (obj.status==200) {
 	  				alert("777");
 	  				for(var i=0;i<obj.show_num;i++){
 	  					alert("888")
 	  					// var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;'>";
 	  					// html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
 	  					// html+="<a href='../50_mine_homepage_self/50_mine_homepage_self.html?user_id="+obj[i].user_info.id+"' target='_blank'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a></div>";
 	  					// html+="<div class='aui-col-xs-8 aui-row aui-padded-t-5'>";
 	  					// html+="<div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
 	  					// html+="<div class='aui-col-xs-12'>";
 	  					// html+="<div class='aui-col-xs-3 aui-font-size-12'style='color: #9E9E9E;'>"+obj[i].time+"</div>	</div></div>";
 	  					// html+="<div class='aui-col-xs-2' style='margin-top: 0.3rem;'>";
 	  					// html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete'/></div>";
 	  					// html+="<div class='aui-col-xs-12 aui-pull-left' style='padding: 0;margin: 0;height:9rem;'>";
 	  					// html+="<a href='' target='_blank'><img src='"+obj[i].images+"' style='height:9rem;width: 100%;' /></a></div>";
 	  					// html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].intro+"</div>	";
 	  					// html+="<div class='aui-row aui-col-xs-12'>";
 	  					// html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
 	  					// if(obj[i].good_num==0){///0未赞 1赞
 	  					// html+="<i class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
 	  					// }else{
 	  					// 	html+="<i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
 	  					// }
 	  					// html+="<span class='aui-font-size-12'>"+obj[i].good_num+"</span></div>";
 	  					// html+="<a href='#' target='_blank' style='color: #212121 !important;'>";
 	  					// html+="<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
 	  					// html+="<i class='aui-iconfont aui-icon-comment'></i>";
 	  					// html+="<span class='aui-font-size-12'>"+obj[i].comment_num+"</span>";
 	  					// html+="</div></a></div></li><div class='aui-hr'></div>";
 	  		var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;' >";
			html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
			html+="<a href='../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.user_id+"'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
			html+="</div><div class='aui-col-xs-8 aui-row aui-padded-t-5'><div class='aui-col-12 aui-font-size-14'>"+obj[i].user_info.user_name+"</div>";
			html+="<div class='aui-col-xs-12'><div class='aui-col-xs-3 aui-font-size-12' style='color: #9E9E9E;'>"+obj[i].user_info.time+"</div>";
			html+="<div class='aui-col-xs-2' style='margin-top: 0.3rem;'>";
			html+="<img src='http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/ic_delete.png' class='ic_delete'/>";
			html+="</div>";

			// html+="<div class='aui-col-xs-9 aui-font-size-12'>"+obj[i].user_info.intro+"</div></div></div>";
			html+="<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>"+obj[i].user_info.intro+"</div>	";
			if (obj[i].user_info.images.length!=0) {
				
				html+="<div class='aui-col-xs-12 aui-pull-left' style='padding: 0;margin: 0;height:9rem;'>";
				html+="<a href=''><img src='"+obj[i].user_info.images[0].album_picture+"' style='height:9rem;width: 100%;' /></a></div>";
			
			};
			
			
			html+="<div class='aui-row aui-col-xs-12'>";
			//if(obj[i].sports_xiu_zan_index==0){//0未点赞 1已点赞
				html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'><i class='aui-iconfont aui-icon-like' name='xiuxiu_dianzan'></i>";
			/*}else{
				html+="<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'><i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
			}*/
			html+="<span class='aui-font-size-12'>"+obj[i].user_info.good_num+"</span></div>";
			html+="<a href='#'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
			html+="<span class='aui-font-size-12'>"+obj[i].user_info.comment_num+"</span></div></a></div></li>";
			html+="<div class='aui-hr'></div>";
 	  					$("#mine_dynamic").append(html);
 	  				}
				}else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
    		},
	     	error:function(data)
	     	{
	     		alert("失败!");
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
						alert("更新失败");
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
						alert("更新失败");
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
				alert(this.index);
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
					alert("失败！");
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
