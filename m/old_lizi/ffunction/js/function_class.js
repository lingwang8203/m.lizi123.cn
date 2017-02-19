$(document).ready(function(){
    //alert(0);
    /***************************获取标签***************************/
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/skill/skillTag",
        data:{
        },
        success:function(data){
            var obj = eval(data);
            if (obj.status==200) {
                var choose_but=new Array;
                choose_but = document.getElementsByName("but");
                for (var i=0;i<choose_but.length;i++) {
                    choose_but[i].innerHTML = obj[i].tag_name;
                    choose_but[i].value = obj[i].id;
                    //alert(choose_but[i].value);
                }
            };
        },
        error:function(data){
            alert("获取标签失败!");
        },
            
    });

    hot();
    guess();
    /***************************点击标签*************************/
    var choose_but=new Array;
    choose_but=document.getElementsByName("but");
    for (var i=0;i<choose_but.length;i++) {
        choose_but[i].addEventListener("touchstart",function(e){
            e.preventDefault();
            if(this.className=="not_choose")
                this.className="choose";                
            else            
                this.className="not_choose";

            selectRes(select());
        },false);
    }
});

/**************************获取筛选范�?********************/
function select(){
    var choose_but=new Array;
    choose_but=document.getElementsByName("but");
    var select = new Array;
    for (var i=0;i<choose_but.length;i++) {
        if (choose_but[i].className=="choose") {
            select.push(choose_but[i].value);
        };
    }
    if (!select.length) {
        $(".in_html").text("");
        hot();
        guess();
        return;
    };
    //alert(select);
    return select;
}

/*************************筛选结果展�?**********************/
function selectResShow(obj){
    //未进行参数检�?
    for (var i = 0; i < obj.length; i++) {
        var html = "<a href='concret_class.html?skill_id="+obj[i].id+"' target='_black'>";
        html += "<div class='keCheng'>";
        html += "<img src='"+obj[i].main_image+"' class='fenmian'/>";
        html += "<div class='concret'>";
        html += "<span class='tap'>"+obj[i].tag_1+"</span>";
        html += "<p class='class_name'>"+obj[i].name+"?/p>";                  
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
        html += "<span class='_numer'><img src='img/same/comment.png' /><p>"+obj[i].comment_num+"</p></span>";
        html += "<span class='_numer'><img src='img/same/good.png' /><p>66</p></span>";
        html += "<span class='_Star'>";
        for (var j = 0; j < obj[i].starlevel; j++) {
            html += "<img src='img/same/star.png' class='star'/>";
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
/***************************热门内容*************************/
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
                selectResShow(obj);
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });
}
/***************************猜你喜欢*************************/
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
                selectResShow(obj);
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });
}


/***********************获取筛选结果列�?********************/
function selectRes(select){

    if (select) {
        $.param(select,true);
        $.ajax({
            type:"post",
            //traditional:true,//传参为数�?
            url:"http://api.lizi123.cn/index.php/home/skill/selectRes",
            data:{
                "select":select,
            },
            success:function(data){
                var obj = eval(data);
		console.dir(obj);
                if (obj.status==200) {
                    $(".in_html").text("");
                    selectResShow(obj);
                }else{
                    $(".in_html").text("");
                    var nullRes = "<div class='hotRe'>";
                    nullRes += "<p class='title'style='width: 80%;'>无筛选结�?</p>";
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
    };
    
}




    

