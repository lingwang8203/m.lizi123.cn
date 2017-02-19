$(document).ready(function(){
	var type_id = getQueryString("type_id");
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/class/classSelectRes",
        data:{
            "client_type":0,
            "type_id":type_id,
        },
        xhrFields: {
            withCredentials: true
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                $("#class_push_content").text("");
                selectResShow(obj);
            }else{
                $("#class_push_content").text("");
                var nullRes = "<div class='hotRe'>";
                nullRes += "<p class='title'style='width: 80%;'>无更多推荐</p>";
                nullRes += "</div>";
                $("#class_push_content").append(nullRes);
            }
        },
        error:function(data){
            //alert("error!");
        },
        
    });
	
	var url=location.href;  
  	var tmp1=url.split("?")[1];  
    var tmp3=tmp1.split("=")[2];  
    var parm1=tmp3;  
//  alert(tmp3);
	document.getElementById("return").href="/232_function_sports_concret.html?activity_id="+tmp3;	
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

//=========================筛选结果展示=============================
function selectResShow(obj){

    //未进行参数检查
    for (var i = 0; i < obj.length; i++) {
        var html="<li name='time' id='"+obj[i].time+"' class='aui-row aui-padded-t-5' style='width:100%;'>";
	        html+="<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
	        html+="<a href='../5_mine/51_mine_homepage/51_mine_homepage.html?user_id="+obj[i].user_info.id+"' style='width: 2rem !important;height:auto;'><img src='"+obj[i].user_info.head_image+"' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;' /></a>";
	        html+="</div><div class='aui-col-xs-6 aui-row'><div class='aui-col-12'>"+obj[i].user_info.user_name+"</div><div class='aui-col-12 aui-font-size-12'>"+obj[i].time+"</div>";
	        html+="</div><div class='aui-col-xs-4' style='margin-top: 0.3rem;'>";
	        if (obj[i].tag) {
	        	html+="<a href='13_home_label/13_home_label.html?tag_id="+obj[i].tag.id+"'><div class='aui-label aui-pull-right aui-font-size-12 tap'>"+obj[i].tag.tag_name+"</div></a></div>";
	        }else{
	        	html+="<a href='#'><div class='aui-label aui-pull-right aui-font-size-12 tap'></div></a></div>";
	        
	        }
	        html+="<a href='http://m.lizi123.cn/2_function/21_function_class/212_function_class_concret.html?class_id="+obj[i].id+"' target='_blank' style='color: #212121 !important;'><div class='aui-row aui-col-xs-12'>";
	        html+="<div class='aui-col-xs-5 aui-pull-left' style='height: 8.4rem;padding: 0.5rem !important;padding-top: 0 !important;'>";
	        html+="<img src='"+obj[i].image+"' style='height:8.4rem;width: 100%;'/></div>";
	        html+="<div class='aui-col-xs-7 aui-row aui-pull-left'><div class='aui-row aui-col-12'><div class='aui-col-12 aui-font-size-18'>"+obj[i].name+"</div>";
	        html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课方式</div>";
	        html+="<div class='aui-col-xs-8 aui-font-size-12'>";
	        switch(obj[i].way){
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
	        switch(obj[i].method){
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
	        html+="<div class='aui-col-xs-4  aui-font-size-12'>课程简介</div><div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].intro+"</div>";
	        html+="</div><div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课地点</div>";
	        html+="<div class='aui-col-xs-8 aui-font-size-12'>"+obj[i].address+"</div></div>";
	        html+="<div class='aui-row aui-col-12'><div class='aui-col-xs-4  aui-font-size-12'>上课时间</div>";
	        if (obj[i].week_time) {
	        	html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >周";
	        	html+=obj[i].week_time;
	        }else{
	        	html+="<div class='aui-col-xs-8  aui-row aui-font-size-12'><div class='aui-col-12' >不限";
	        }
	        html+="</div><div class='aui-col-12'>共 <span style='color: #ffac0d;'>"+obj[i].week_hour+"</span>学时</div>";
	        html+="</div></div></div></div></a><div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
	        html+="<i class='aui-iconfont aui-icon-like' name='class_dianzan'></i><span class='aui-font-size-12'>"+obj[i].good_num+"</span></div>";
	        html+="<a href='"+obj[i].id+"' style='color: #212121 !important;'><div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'><i class='aui-iconfont aui-icon-comment'></i>";
	        html+="<span class='aui-font-size-12'>"+obj[i].evaluate_num+"</span></div></a><div class='aui-col-xs-4 aui-pull-right'>";
	        html+="<a href='"+obj[i].id+"'><div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on' style='margin-top: 0;'>报名参加</div></a>";
	        html+="</div></div></li><div class='aui-hr'></div>";
		
        $("#class_push_content").append(html);
    }
}
