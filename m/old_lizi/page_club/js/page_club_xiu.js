$(document).ready(function(){
   
   //获取url参数中的user_id
    var id = getQueryString("club_id");
    //alert(id);
   $.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/club/clubShow",
        data:{
        	"club_id":id,
        },
        success:function(data){
           
            var obj = eval(data);
            if (obj.status==200) {
                
                show(obj);   
                

                
            };
        },
        error:function(data){
            alert("获取标签失败!");
        },
            
    });
});


function   show(obj)
{

  for (var i = 0; i < obj.length; i++) {

        
  var html="<div class='xiu'>";
      html+="<div class='top'>";
			html+="<img class='touxiang' src='"+obj[i].user_image+"' />";
			html+="<div class='top_text'>";
			html+="<p class='name'>"+obj[i].user_name+"</p>";
			html+="<p class='sign'>"+obj[i].user_intro+"</p>";
			html+="</div>";
			html+="<a><img class='btn more' src='img/more.png' /> </a>";
			html+="</div>";
			html+="<img class='xiu_photo' src='"+obj[i].picture+"' />";
			html+="<div>";
			html+="<p class='say'>"+obj[i].intro+"</p>"
			html+="<div class='rukou'>";
			html+="<a><img class='btn like' src='img/like.png'/><span>"+obj[i].good_num+"</span></a>";
			html+="<a><img class='btn comment' src='img/comment.png' /><span>"+obj[i].comment_num+"</span></a>";
			html+="</div>";
			html+="</div>";
		  html+="</div>";

     $(".in_html").append(html);
  }

}




//=================================获取url参数===================================
function getQueryString(name){ 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) {
        return unescape(r[2]); 
    }else{
        return null; 
    }
};