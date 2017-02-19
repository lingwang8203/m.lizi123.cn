$(document).ready(function(){
    selectRes();
});

//=============================获取筛选结果列�?====================================
function selectRes(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/mySkill",
        data:{

        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                $(".in_html").text("");
                ResShow(obj);
            }else{
                $(".in_html").text("");
                var nullRes = "<div class='hotRe'>";
                nullRes += "<p class='title'style='width: 80%;'>无发布课�?</p>";
                nullRes += "</div>";
                $(".in_html").append(nullRes);
            }
        },
        error:function(data){
            alert("error!");
        },
        
    });
    
}


//===============================筛选结果展�?=========================
function ResShow(obj){
    //未进行参数检�?
    for (var i = 0; i < obj.length; i++) {
        var html = "<a href='../ffunction/concret_class.html?skill_id="+obj[i].id+"' target='_black'>";
        html += "<div class='keCheng'>";
        html += "<img src='"+obj[i].main_image+"' class='fenmian'/>";
        html += "<div class='concret'>";
        html += "<a><span class='tap'>"+obj[i].tag_1+"</span></a>";
        html += "<p class='class_name'>�?+obj[i].name+"�?/p>";                  
        html += "<p class='class_characteristics'> "+obj[i].tag_2+" · "+obj[i].tag_3+"</p>";
        html += "<p class='class_way'> 线下 · 一对多</p>";
        html += "<p class='class_time'> 开课时间："+obj[i].time+"</p>";
        if (obj[i].sale_money) {
            html += "<p class='jiFen'> "+obj[i].sale_money+"�?/p>";
        }
        if (obj[i].sale_score) {
            html += "<p class='jiFen'> "+obj[i].sale_score+"积分</p>";
        }
        html += "<div class='show'>";
        html += "<span class='_numer'><img src='../ffunction/img/same/comment.png' /><p>"+obj[i].comment_num+"</p></span>";
        html += "<span class='_numer'><img src='../ffunction/img/same/good.png' /><p>66</p></span>";
        html += "<span class='_Star'>";
        for (var j = 0; j < obj[i].starlevel; j++) {
            html += "<img src='../ffunction/img/same/star.png' class='star'/>";
        }
        html += "<p>"+obj[i].starlevel+"</p>";
        html += "</span>";
        html += "</div>";
        html += "<p class='by' style='color: #b9bcc3;float: right;width: 100%;font-size: 0.9em;'><span style='float: right;'>by "+obj[i].user_name+"</span></p>";
        html += "</div>";
        html += "</div>";
        html += "</a>";
        $(".in_html").append(html);
    }

}








    

