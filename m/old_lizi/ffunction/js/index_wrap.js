$(document).ready(function(){
	var school_id = 1;

	$.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/index/bannerTabs",
        data:{
        	"school_id":school_id,
        },
        success:function(data){
            var obj = eval(data);
            if(obj.status==200){
                $(".slides").text("");
                for (var i = 0; i < obj.length; i++) {
                    var html = "<li>";
                    html += "<img width='100%' height='100%' alt='' src='"+obj[i].image+"' >";
                    html += "</li>";
                    $(".slides").append(html);
                };
                
			}
        },
        error:function(data){
            alert("获取标签失败!");
        },
            
    });


});
