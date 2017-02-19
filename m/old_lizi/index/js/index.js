$(document).ready(function(){
    var school_id = 1;//调试默认为1
    
    $.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/index/bannerTabs",
        data:{
            "school_id":school_id,
        },
        success:function(data){
            var obj = eval(data);
            if (obj.status==200) {/*
                var url = "background: url(indexUrl) no-repeat center;";
                document.getElementById("banner").style = url.replace(/indexUrl/,obj[0].image);
                document.getElementById("banner1").style = url.replace(/indexUrl/,obj[1].image);
                document.getElementById("banner2").style = url.replace(/indexUrl/,obj[2].image); */
                $(".swipe-wrap").text("");
                for (var i = 0; i < 5; i++) {
                    var html = "<div><a href='javascript:;''><img class='img-responsive' src='"+obj[i].image+"'/></a></div>";
                    $(".swipe-wrap").append(html);
                };             
            };
        },
        error:function(data){
            alert("error!");
        },
        
    });

});