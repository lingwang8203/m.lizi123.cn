$(document).ready(function(){
	//alert("nihao ");
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/activity/activityTag",
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
    return select;
}
/*************************筛选结果展�?**********************/
function selectResShow(obj){
    for (var i = 0; i < obj.length; i++) {
     
        var  html="<a href='concret_activities.html?activity_id="+obj[i].id+"' target='_black'><div class='sports'>";
             html+="<img src='"+obj[i].picture+"' class='sport_photo'/>";
             if(obj[i].progress){
               html+="<div class='laste'>";
               html+="<p>"+obj[i].progress+"</p>";
               html+="</div>";
            }
             html+="<div class='text'>";
             html+="<p class='sports_title'>"+obj[i].name+"</p>";
             html+="<p class='club_number'>已有<span>"+obj[i].apply_num+"</span>人参�?/p>";
             html+="</div>";
             html+="<div class='summary'>";
             html+="<img src='img/sports/time.png' /><p>"+obj[i].time+"</p>";
             html+="<img src='img/sports/place.png' /><p>"+obj[i].address+"</p>";
             html+="<div  class='num'>";
             html+="<img src='img/sports/like.png' /><p>"+obj[i].good_num+"</p>";
             html+="<img src='img/sports/comment.png' /><p>"+obj[i].comment_num+"</p>";
             html+="</div>";
             html+="</div>";
             html+="</div></a>";      

        $(".in_html").append(html);
    }

}

/***************************热门内容*************************/
function hot(){
    $.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/activity/hot",
        data:{
            //"select":,
        },
        success:function(data){
            var obj = eval(data);
            var hotTitle = "<div class='hotRe'>";
            hotTitle += "<p class='title'style='width: 80%;'>热门内容</p>";
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
        url:"http://api.lizi123.cn/index.php/home/activity/guess",
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
    /*for($a=0;$a<select.length;$a++)
        alert(select[$a]);*/
    
    if (select) {
        $.param(select,true);
        $.ajax({
            type:"post",
            //traditional:true,//传参为数�?
            url:"http://api.lizi123.cn/index.php/home/activity/selectRes",
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
	/*
  $(".activity").click(function(){
    var  activity_name=$_POST['name'];
    var activity_address=$_POST['address'];
    var activity_starting=$_POST['act_starting'];
  	var activity_personnum=$_POST['apply_num'];
  	$.ajax({

  		type:"post";
  		url:"http://api.lizi123.cn/index.php/home/activity/actDetails",
  		data:{
  			"name":activity_name,
  			"address":activity_address,
  			"act_starting":activity_starting,
  			"apply_num":activity_personnum,

  		},
  		success:function(data){
  			var obj=eval(data);
            if(obj.status==200){
            	window.location.href="http://m.lizi123.cn/";
            }else {
            	alert("暂无信息");
            }
  		},
  		error:function(data){
           alert("error!");
  		},
  	}) 
  })
*/
