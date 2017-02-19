/////////////最新
$(document).ready(function(){
	page = 0;
	getSpecial();
	$("#ground").text("");
})

/*window.onload=function(){
	document.getElementById("moreSpecial").addEventListener("touchstart",function(e){
		e.preventDefault();
		page++;
		getSpecial(page);
	},false)
}*/
//====================================获取最新============================================
function getSpecial(){
	if (page<0) {
		page = 0;
	}else{
		page++;
	}
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/ground/groundSpecialCare",
		xhrFields:{
       		withCredentials: true
   		},
		data:{
			"client_type":0,
			"page":page,
		},
		success:function(data){
			var obj = eval(data);
			console.dir(obj);
			if (obj.status==200) {
				$("#ground").text("");
				resShow(obj);
			}else if(obj.status==199){
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error:function(data){
			//alert("失败！");
		},
	});
	
}



function resShow(obj){
	if (obj) {
		for(var i=0;i<obj.class.length;i++){
			var html;
	        html="<li name='time' id='"+obj.class[i].time+"' class='aui-row aui-padded-t-5' style='width:100%;'>";
	        html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
	        html+="<a href='../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj.class[i].user_info.id+"' style='width: 2rem !important;height:auto;' target='_blank'><img src='"+obj.class[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;' /></a>";
	        html+="</div><div class='aui-col-xs-6 aui-row'><div class='aui-col-12'>"+obj.class[i].user_info.user_name+"</div><div class='aui-col-12 aui-font-size-12'>"+obj.class[i].time+"</div>";
	        html+="</div><div class='aui-col-xs-4' style='margin-top: 0.3rem;'>";
	        if (obj.class[i].tag.tag_id) {
	        	html+="<a href='13_home_label/13_home_label.html?tag_id="+obj.class[i].tag.tag_id+"'><div class='aui-label aui-pull-right aui-font-size-12 tap'>"+obj.class[i].tag.tag_name+"</div></a></div>";
	        }else{
	        	html+="<a href='#'><div class='aui-label aui-pull-right aui-font-size-12 tap'></div></a></div>";
	        
	        }
	        html+="<a href='http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+obj.class[i].id+"' target='_blank' style='color: #212121 !important;'><div class='aui-row aui-col-xs-12'>";
	        html+="<div class='aui-col-xs-5 aui-pull-left' style='height: 8.4rem;padding: 0.5rem !important;padding-top: 0 !important;'>";
	        html+="<img src='"+obj.class[i].image+"' style='height:8.4rem;width: 100%;'/></div>";
	        html+="<div class='aui-col-xs-7 aui-row aui-pull-left'><div class='aui-row aui-col-12'><div class='aui-col-12 aui-font-size-18'>"+obj.class[i].name+"</div>";
	        html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课方式</div>";
	        html+="<div class='aui-col-xs-8 aui-font-size-12'>";
	        switch(obj.class[i].way){
	            case "0":
	                html += "一对多";
	                break;
	            case "1":
	                html += "一对一";
	                break;
	            default:
	                html += "不限";
	                break;
	        }
	        html+="·";
	        switch(obj.class[i].method){
	            case "0":
	                html += "线上";
	                break;
	            case "1":
	                html += "线下";
	                break;
	            default:
	                html += "不限";
	                break;
	        }
	        html+="</div></div><div class='aui-row aui-col-12'>";
	        html+="<div class='aui-col-xs-4  aui-font-size-12'>课程简介</div><div class='aui-col-xs-8 aui-font-size-12'>"+obj.class[i].intro+"</div>";
	        html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课地点</div>";
	        html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj.class[i].address+"</div></div>";
	        html+="<div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课时间</div>";
	        if (obj.class[i].week_time) {
	        	html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >周";
	        	html+=obj.class[i].week_time;
	        }else{
	        	html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >不限";
	        }
	        html+="</div><div class='aui-col-12'>共 <span style='color: #ffac0d;'>"+obj.class[i].week_hour+"</span>学时</div>";
	        html+="</div></div></div></div></a><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
	        html+="<i class='aui-iconfont aui-icon-like' name='class_dianzan'></i><span class='aui-font-size-12'>"+obj.class[i].good_num+"</span></div>";
	        html+="<a href='"+obj.class[i].id+"' style='color: #212121 !important;'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
	        html+="<span class='aui-font-size-12'>"+obj.class[i].evaluate_num+"</span></div></a><div class='aui-col-xs-4 aui-pull-right'>";
	        html+="<a href='"+obj.class[i].id+"'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on' style='margin-top: 0;'>报名参加</div></a>";
	        html+="</div></div></li><div class='aui-hr'></div>";
			$("#ground").append(html);//divLocation(html,obj.class[i].time);
		}



		for (var j = 0; j<obj.activity.length; j++) {
			var html="<li  class='aui-row aui-padded-b-5 ' style='width:100%;height: auto;position: relative;'>";
			html+="<div class='aui-col-xs-12' style='padding: 0;margin: 0;height:auto;'>";
			html+="<img src='"+obj.activity[j].image+"' style='height:16rem;width:100%;'/></div>";
			html+="<a target='_blank' href='13_home_label/13_home_label.html?tag_id="+obj.activity[j].tag_id+"'><div class='aui-label aui-pull-right aui-font-size-12 tap' style='position: absolute;top: 0.5rem;right: 0;'>"+obj.activity[j].tag_name+"</div></a>";
			html+="<div class='sportcontect' style='width:100%;height: auto;position: absolute;bottom:1.8rem;'>";
			html+="<div style='width: 100%;height: auto;'><div class='aui-col-xs-12 out'><div class='aui-col-xs-12 in_opacity'></div>";
			html+="<div class='aui-col-xs-2 join_title aui-text-center aui-row aui-margin-t-10'><div class='aui-font-size-16 aui-col-12'>";
			switch(obj.activity[j].activity_status){
				case "1":html+="投票";break;
				case "2":html+="活动";break;
				case "3":html+="报名";break;
			}
			html+="</div>";
			html+="<div class='aui-font-size-12 aui-col-12'>进行中</div></div><div class='aui-row aui-col-xs-7 aui-padded-t-5'>";
			html+="<div class='aui-font-size-16 aui-col-xs-12' style='color: white;max-height: 1.2rem;overflow: hidden;'>"+obj.activity[j].name+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;max-height:1.7rem !important;overflow:auto;'>"+obj.activity[j].intro+"</div><div class='aui-font-size-12 aui-col-xs-12' style='color: white;'>主办方:"+obj.activity[j].sponsor+"</div>";
			html+="</div><div class='aui-row aui-col-xs-3 aui-pull-right aui-padded-t-10 aui-padded-r-5' style='width:auto;'>";
			switch(obj.activity[j].activity_status){
				case "1":html+="<a href='"+obj.activity[j].sport_vote_id+"' target='_blank'>";break;
				case "2":html+="<a href='"+obj.activity[j].sport_id+"' target='_blank'>";break;
				case "3":html+="<a href='"+obj.activity[j].sport_join_id+"' target='_blank'>";break;
			}
			html+="<div class='aui-label lab_join aui-pull-right aui-font-size-14 aui-col-xs-12' style='width: auto; color:white ;text-align: center;border-radius: 0.4rem;padding:0.1rem 0.3rem;'>参与";
			switch(obj.activity[j].activity_status){
				case "1":html+="投票";break;
				case "2":html+="活动";break;
				case "3":html+="报名";break;
			}
			html+="</div></a>";
			html+="<a href='../2_function/23_function_sports/232_function_sports_concret.html?activity_id="+obj.activity[j].id+"'target='_blank'><div class='aui-col-xs-12 aui-font-size-12'style='color: white;'>";
			html+="<div class='aui-col-xs-3 aui-font-size-12 aui-pull-right aui-padded-r-5 aui-padded-t-10'style='width: auto;'>活动详情></div></div></a>  "
			html+="</div></div></div></div><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
			html+="<i class='aui-iconfont aui-icon-like' name='sport_dianzan'></i>";
			html+="<span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj.activity[j].good_num+"</span>";
			html+="</div><a href='../2_function/23_function_sports/232_function_sports_concret.html?activity_id="+obj.activity[j].id+"' target='_blank'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i><span class='aui-font-size-12' style='padding-left:4px !important;'>"+obj.activity[j].comment_num+"</span>";
			html+="</div></a></li><div class='aui-hr'></div>";
			$("#ground").append(html);//divLocation(html,obj.activity[j].time);
		}


		for (var k = 0 ; k< obj.show.length; k++) {
			var html="<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
			html += "<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
			html += "<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id=" + obj.show[k].user_info.id + "' target='_blank'><img src='" + obj.show[k].user_info.head_image + "' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
			html += "</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
			html += "<div class='aui-col-12 aui-font-size-14'>" + obj.show[k].user_info.user_name + "</div>";
			html += "<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>" + obj.show[k].user_info.intro + "</div></div>";
			html += "<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
			html += "<div class='aui-pull-right aui-padded-r-5'>" + obj.show[k].time + "</div></div></div>";
			html += "<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=" + obj.show[k].id + "'>";
			if(obj.show[k].images.length == 1) {
				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj.show[k].intro + "</div>";
				html += "<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
				html += "<img src='" + obj.show[k].images[0] + "' style='height:9rem;width: 100%;' /> ";
				html += "</div>";
			} else if(obj.show[k].images.length == 2) {
				html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj.show[k].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
				html += "<div class='aui-col-xs-4 aui-text-center'>";
				html += "<img src='" + obj.show[k].images[0] + "'class='showphoto3'/></div>";
				html += "<div class='aui-col-xs-4 aui-text-center'>";
				html += "<img src='" + obj.show[k].images[1] + "'class='showphoto3'/></div></div>";
			} else if(obj.show[k].images.length >= 3) {
				html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj.show[k].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
				for(var m = 0; m < obj.show[k].images.length; m++) {
					html += "<div class='aui-col-xs-4 aui-text-center'>";
					html += "<img src='" + obj.show[k].images[m] + "'class='showphoto3'/>";
					html += "</div>";
				}
				html += "</div>";
			} else {
				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj.show[k].intro + "</div>";
			}
			
			html += "</a><div class='aui-row aui-col-xs-12'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
			html += "<i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj.show[k].good_num + "</span>";
			html += "</div>";
			html += "<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id=" + obj.show[k].id + "'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
			html += "<i class='aui-iconfont aui-icon-comment'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj.show[k].comment_num + "</span></div></a></div></li>";
			html += "<div class='aui-hr'></div>";
			$("#ground").append(html);//divLocation(html,obj.show[k].time);
		}
	}
}



