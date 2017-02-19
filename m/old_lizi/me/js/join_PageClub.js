// JavaScript Document$(document).ready(function(){
    //alert("js");
    
	//获取url参数中的user_id
    var user_id = getQueryString("user_id");
    console.dir(user_id);
    var obj;
    //*****************************用户动�?**************************
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/joinPageClub",
        data:{
        	//"user_id":user_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
			$(".progress").text("");
            if(obj.status==200){	
                for (var i = 0; i < obj.length; i++) {
					
                    var html = "";
					
                    html += "<div class='yinying'></div>";
                    html += "<a href='../page_club/page_club.html'>";
					html += "<div class='manage_pageclub_list'>";
					html += "<img src="+obj[i].image+" class='logo'/>";
					html += "<div>";
					html += "<h3 class='Club_name'>"+obj[i].club_name+"</h3>";
					html += "<p class='Club_miaoshu'>"+obj[i].intro+"</p>";
					html += "<div class='details'>";
					html += "<img src= img/location.png />";
					html += "<p>"+ obj[i].school_name +"</p>";
					html += "<img src= img/people.png style='margin-left: 4vw;'/>";
					html += "<p><span>"+ obj[i].member_num +"</span>�?已加�?/p>";
					html += "</div>";
					html += "<a href='../page_club/page_club.html'><span class='juti'>></span></a>";
					html += "</div>";
					html += "</div>";
					html += "</a>";
                    $(".Manage_PageClub").append(html);
                }
                
			}else if(obj.status==1){
				var html = "<br><br><br>";
				html += "<p>您尚未管理任何社�?/p>";
			}
		
        },
		
        error:function(data){
            alert("error!");
        },
            
    });


//获取url参数
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
}; 

