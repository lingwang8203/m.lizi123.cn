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
		            		///////////////////社团
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
					}else if(obj.status==199){
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error:function(data){
//					alert("失败！");
				},
			});
	
})