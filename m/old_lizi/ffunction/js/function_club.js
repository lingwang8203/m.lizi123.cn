$(document).ready(function(){
    //alert(0);
    /***************************获取标签***************************/
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/clubTag",
        data:{
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                var choose_but=new Array;
                choose_but = document.getElementsByName("but");
                for (var i=0;i<choose_but.length;i++) {
                    choose_but[i].innerHTML = obj[i].tag_name;
                    choose_but[i].value = obj[i].id;
                }
            };
        },
        error:function(data){
            alert("获取标签失败!");
        },
            
    });

    //hot();
    //guess();
    /***************************点击标签*************************/
    var choose_but=new Array;
    var select = new Array;
    choose_but=document.getElementsByName("but");
    for (var i=0;i<choose_but.length;i++) {
        choose_but[i].addEventListener("touchstart",function(e){
            e.preventDefault();
            if(this.className=="not_choose"){
                this.className="choose"; 
                select.push(this.value);
                selectRes(select);   
            }else{         
                this.className="not_choose";
                select.splice($.inArray(this.value,select),1);
                selectRes(select);
            }
        },false);
    }
});



//---------------------筛选结果展�?------------------------------------
function selectResShow(obj){
    //未进行参数检�?
    for (var i = 0; i < obj.length; i++) {
        var html = "<a href='../page_club/page_club.html?club_id="+obj[0][i].id+"' target='_black'><div class='club'>";
        html += "<div class='club_top'>";        
        html += "<img src='"+obj[0][i].image+"' class='user_photo' />";       
        html += "<div class='text'>";
        html += "<p class='club_name'>"+obj[0][i].name+"</p>";         
        html += "<p class='club_number'>已有<span>"+obj[0][i].member_num+"</span>人加�?/p>";           
        html += "<p class='summary'>社团简介："+obj[0][i].intro+"</p>"; 
        html += "</div>";      
        html += "<button class='join_button' style='background-image: url(img/club/joined.png);'/>";       
        html += "</div>;"      
        html += "<div class='photo'>";
        if (obj[0][i].poster1) {
            html += "<img src='"+obj[0][i].poster1+"' />";
        };       
        if (obj[0][i].poster2) {
            html += "<img src='"+obj[0][i].poster2+"' />";
        }; 
        if (obj[0][i].poster3) {
            html += "<img src='"+obj[0][i].poster3+"' />";
        };     
        html += "</div>";      
        html += "</div></a>"; 
        $(".in_html").append(html);
    }

}

//---------------------------------热门内容----------------------------
function hot(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/hot",
        data:{
            //"select":,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
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
/*
//----------------------------猜你喜欢--------------------------------
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

*/
//-----------------------获取筛选结果列�?---------------------------
function selectRes(select){
    console.dir(select);
    if (select.length!=0) {
        $.param(select,true);
        $.ajax({
            type:"post",
            //traditional:true,//传参为数�?
            url:"http://api.lizi123.cn/index.php/home/club/selectRes",
            data:{
                "select":select,
            },
            success:function(data){
                var obj = eval(data);
                console.dir(obj);
                if (obj.status==200) {
                    $(".in_html").text("");
                    selectResShow(obj);
                    hot();
                    //guess();
                }else{
                    $(".in_html").text("");
                    var nullRes = "<div class='hotRe'>";
                    nullRes += "<p class='title'style='width: 80%;'>无筛选结�?</p>";
                    nullRes += "</div>";
                    $(".in_html").append(nullRes);
                    hot();
                    //guess();
                }
            },
            error:function(data){
                alert("error!");
            },
            
        });
    }else{
        $(".in_html").text("");
        hot();
        //guess();
    }
    
}




    

