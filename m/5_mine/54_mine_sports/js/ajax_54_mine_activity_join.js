$(document).ready(function(){
	//alert(54);
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/joinActList",
        xhrFields: {
            withCredentials: true
        },
		data:{
			"client_type":0,
		},	
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			$("#join_act_list").text("");
  			if (obj.status==200) {
  				for(var i=0;i<obj.length;i++){
  					var html = '<li class="aui-col-xs-12 aui-row aui-padded-b-5">';
					html += '<div class="aui-col-xs-12"style="position: relative;height: auto;">';					
					/*html += '<a>';
					html += '<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/delete1.png" class="ic_delete11 ic_top"/>';						
					html += '</a>';
					//html += '<a>';
					//html += '<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/icc_pepole.png" class="ic_people ic_top"/>';						
					//html += '</a>';*/	
	        		html += '<a href=""target="_blank"><div class="aui-label aui-pull-right aui-font-size-12 tap"style="position: absolute;top: 0.5rem;right: 0;">取消报名</div></a>'; 					
					html += '<img src="'+obj[i].image+'" class="sport_cover"/>';
					html += '</div><div class="aui-col-xs-12 aui-row  aui-font-size-14">';
					html += '<div class="aui-col-xs-12 aui-row">';
					html += '<div class="aui-col-xs-9 aui-padded-l-5">'+obj[i].name+'</div>';
					html += '<a href="http://m.lizi123.cn/2_function/23_function_sports/232_function_sports_concret.html?activity_id='+obj[i].id+'" class="aui-col-xs-3 aui-font-size-12"style="text-decoration: underline;color: #ffbf2b;">查看活动详情</a>';
					html += '</div>';
					html += '<div class="aui-col-xs-12 aui-row"style="color: #666666;">';
					html += '	<div class="aui-col-xs-1 aui-text-center">';
					html += '		<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/ic_time.png" class="icc_bottom"/>';
					html += '	</div><div class="aui-col-xs-11">'+obj[i].time+'</div></div>';
					html += '<div class="aui-col-xs-12 aui-row"style="color: #666666;">';
					html += '	<div class="aui-col-xs-1 aui-text-center">';
					html += '		<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/ic_location.png" class="icc_bottom iic_location"/>';
					html += '	</div>';
					html += '	<div class="aui-col-xs-11">'+obj[i].address+'</div>';
					html += '</div>';
					html += '<div class="aui-col-xs-12 aui-row" style="color: #666666;">';
					html += '	<div class="aui-col-xs-1 aui-text-center">';
					html += '		<img src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/34_publish_club/ic_more.png" class="icc_bottom"/>';
					html += '	</div>';
					html += '	<div class="aui-col-xs-11">'+obj[i].requirements+'</div></div></div></li>';
  					$("#join_act_list").append(html);
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
