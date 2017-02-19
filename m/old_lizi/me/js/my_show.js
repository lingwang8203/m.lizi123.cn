$(document).ready(function(){
    huaxu();
});

//---------------------------筛选结果展�?------------------------
function ResShow(obj){
    //未进行参数检�?
    for (var i = 0; i < obj.length; i++) {
        var html = "<div class='huaxu'>";
        html += "<div class='user'>";
        html += "<img src='"+obj[i].user_info.user_image+"'>";
        html += "<div class='user_formation'>";
        html += "<h3>"+obj[i].user_info.user_nickname+"</h3>";
        html += "<p>"+obj[i].user_info.user_intro+"</p>";
        html += "</div>";
        html += "<img src='../ffunction/img/sports/yifenxiang.png' class='fenxiang'/>";
        html += "<span class='fabu_time'>"+obj[i].time+"</span>";
        html += "</div>";
        if(obj[i].album.length==1){
            html += "<img src='"+obj[i].album[0].album_picture+"' class='one_picture'/>";
        }else if (obj[i].album.length==2) {
            html += "<div style='position: relative;''>";
            html += "<img src='"+obj[i].album[0].album_picture+"' class='second_picture'/>";
            html += "<img src='"+obj[i].album[1].album_picture+"' class='second_picture'/>";
            html += "</div>";
        }else if (obj[i].album.length==3) {
            html += "<div class='image'>";
            html += "<img src='"+obj[i].album[0].album_picture+"' class='three_one_picture'/>";    
            html += "<div style='position: relative;' class='two_picture'>";   
            html += "<img src='"+obj[i].album[1].album_picture+"' class='three_two_picture'/>";        
            html += "<img src='"+obj[i].album[2].album_picture+"'class='three_two_picture' style='margin-top: 2vh;'/>";        
            html += "</div>";
            html += "</div>";    
        }else if (obj[i].album.length>3) {
            html += "<div class='image'>";
            html += "<img src='"+obj[i].album[0].album_picture+"' class='three_one_picture'/>";    
            html += "<div style='position: relative;' class='two_picture'>";   
            html += "<img src='"+obj[i].album[1].album_picture+"' class='three_two_picture'/>";        
            html += "<img src='"+obj[i].album[2].album_picture+"'class='three_two_picture' style='margin-top: 2vh;'/>";
            html += "<div class='duotu'></div>";
            var morePicture = obj[i].album.length-3;
            html += "<span class='duotu_number'>+"+morePicture+"</span>";        
            html += "</div>";
            html += "</div>"; 
        }
        html += "<div class='shuoshuo'>";
        html += "<p class='user_miaoshu'>"+obj[i].intro+"</p>";
        html += "</div>";
        html += "<div class='dilan'>";
        html += "<img src='../ffunction/img/concret/zan.png'  class='zan'/>";
        html += " <p class='zan_number'>"+obj[i].good_num+"</p>";
        html += "<img src='../ffunction/img/concret/ping.png' class='pinglun'/>";
        html += "<p class='pinglun_number'>"+obj[i].comment_num+"</p>";
        html += "</div>";
        html += "<div class='yinying'></div>";
        html += "</div>";

        $("#showList").append(html);
    }showList

}yinying


//----------------------------------获取筛选结果列�?------------------------
function huaxu(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/show/myShow",
        data:{
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                $("#showList").text("");
                ResShow(obj);
            }else{
                $("#showList").text("");
                var nullRes = "<div class='user_formation'>";
                nullRes += "<h3>未发布过秀秀!</h3>";
                nullRes += "</div>";
                $("#showList").append(nullRes);

            }
        },
        error:function(data){
            alert("获取花絮失败!");
        },
        
    });
    
}








    

