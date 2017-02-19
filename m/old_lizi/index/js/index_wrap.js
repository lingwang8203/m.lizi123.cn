$(document).ready(function(){
    //获取url参数
    //============================获取学校id===================================
	var school_id = 1;
    //=============================首页轮播=========================================
	$.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/index/bannerTabs",
        data:{
        	"school_id":school_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                var bannerTabs = document.getElementsByClassName("banner");
                var bannerLink = document.getElementsByClassName("bannerLink");
                for (var i = 0; i < bannerTabs.length; i++) {
                    bannerTabs[i].src = obj[i].image;
                    if (obj[i].image_area_id==1) {
                        //课程
                        bannerLink[i].href = "http://qj_wa.qdmedia.cc/LiZi/ffunction/concret_class.html?skill_id="+obj[i].image_content_id;     
                    }else if (obj[i].image_area_id==2) {
                        //圈子
                    }else if (obj[i].image_area_id==3) {
                        //活动
                        bannerLink[i].href = "http://qj_wa.qdmedia.cc/LiZi/ffunction/concret_activities.html?activity_id="+obj[i].image_content_id;     
                    }else if (obj[i].image_area_id==5) {
                        //社团
                        bannerLink[i].href = "http://qj_wa.qdmedia.cc/LiZi/page_club/page_club.html?club_id="+obj[i].image_content_id;
                    }
                };
			}
        },
        error:function(data){
            //alert("");
        },
            
    });
    /************************获取今日精选********************************/
    $.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/index/todayReCommend",
        data:{
            "school_id":school_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                for (var i = 0 ;i < obj.length; i++) {
                    var html;
                    if (obj[i].area_id==1) {
                        //课程
                        html = "<a href='http://qj_wa.qdmedia.cc/LiZi/ffunction/concret_class.html?skill_id="+obj[i].content_id+"'>";     
                    }else if (obj[i].area_id==2) {
                        //圈子
                        var html = "<a href='' >";
                    }else if (obj[i].area_id==3) {
                        //活动
                        html = "<a href='' >";
                    }else if (obj[i].area_id==7) {
                        //秀秀
                        var html = "<a href='' >";
                    }
                    html += "<div class='today_content'>";
                    html += "<img src='"+obj[i].headImg+"' class='touxiang'/>";
                    html += "<span class='user_name'>"+obj[i].nickname+"</span>";
                    html += "<span class='user_title'>"+obj[i].name+"</span>";
                    html += "<a href='../ffunction/area.html'><span class='tap'>"+obj[i].tag_name+"</span></a>";
                    html += "<img src='"+obj[i].image+"' class='tuisong'/>";
                    html += "</div>";
                    html += "</a>";
                    $("#todayReCommend").append(html);

                }
                
            }
        },
        error:function(data){
            alert("获取今日精选失败！");
        },
            
    });
    


});



//=====================================获取url参数==================================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
};
