$(document).ready(function(){
    myManageSkill();
});

//=========================筛选结果展�?==========================
function resShow(obj){
    //未进行参数检�?
    for (var i = 0; i < obj.length; i++) {
        var html = "<a href='concret_class.html?skill_id="+obj[i].id+"' target='_black'>";
        html += "<div class='keCheng'>";
        html += "<img src='"+obj[i].image_1+"' class='fenmian'/>";
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
	var tap=document.getElementsByClassName("tap");
			for(var i=0;i<tap.length;i++){
				tap[i].addEventListener("touchstart",function(e){
					e.preventDefault();
					window.location.href="../ffunction/area.html";
				},false);
			}
}

//===============================热门内容================================
function hot(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/hot",
        data:{
            //"select":,
        },
        success:function(data){
            var obj = eval(data);
            var hotTitle = "<div class='hotRe'>";
            hotTitle += "<p class='title'style='width: 80%;'>热门推荐</p>";
            hotTitle += "</div>";
            $(".in_html").append(hotTitle);
            if (obj.status==200) {
                resShow(obj);
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });
}

//==================================猜你喜欢===================================
function guess(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/guess",
        data:{
            //"select":,
        },
        success:function(data){
            var obj = eval(data);
            var guessTitle = "<div class='guess'>";
            guessTitle += "<p class='title'style='width: 80%;'>猜你喜欢</p>";
            guessTitle += "</div>";
            $(".in_html").append(guessTitle);
            if (obj.status==200) {
                resShow(obj);
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });
}


//===============================获取管理列表==============================
function myManageSkill(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/mySkill",
        data:{
        },
        success:function(data){
            var obj = eval(data);
	        console.dir(obj);
            if (obj.status==200) {
                resShow(obj);
            }else{
                var nullRes = "<div class='hotRe'>";
                nullRes += "<p class='title'style='width: 80%;'>无结�?</p>";
                nullRes += "</div>";
                $(".in_html").append(nullRes);
                hot();
                guess();
            }
        },
        error:function(data){
            alert("error!");
        },
        
    });
    
}




    

