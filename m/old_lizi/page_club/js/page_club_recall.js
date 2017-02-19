$(document).ready(function(){
   
   //获取url参数中的user_id
  var id = getQueryString("club_id");
  //alert(id);
   $.ajax({
        type:"post",
        url:"http://qj_api.qdmedia.cc/index.php/home/club/clubRecall",
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
        
      if(i+1==1){
     
      var    html="<div class='L_same first'>";
             html+="<div class='im'>";
             html+="<p class='time'>"+obj[i].event_time+"</p>";        
             html+="<img src='"+obj[i].event_image+"' class='photo'/>";
             html+="</div>";
             html+="<p class='title'>"+obj[i].topic+"</p>";
             html+="<p class='content'>"+obj[i].intro+"</p>";
             html+="</div>";
            $(".in_html1").append(html);
      }else if((i+1)%2==0)
      {
      
      var    html="<div class='R_same'>";
             html+="<div class='im'>";
             html+="<p class='time'>"+obj[i].event_time+"</p>";        
             html+="<img src='"+obj[i].event_image+"' class='photo'/>";
             html+="</div>";
             html+="<p class='title'>"+obj[i].topic+"</p>";
             html+="<p class='content'>"+obj[i].intro+"</p>";
             html+="</div>";
            $(".in_html3").append(html);

      }else if((i+1)!=1&&(i+1)%2==1)
      {
       var    html="<div class='L_same'>";
             html+="<div class='im'>";
             html+="<p class='time'>"+obj[i].event_time+"</p>";        
             html+="<img src='"+obj[i].event_image+"' class='photo'/>";
             html+="</div>";
             html+="<p class='title'>"+obj[i].topic+"</p>";
             html+="<p class='content'>"+obj[i].intro+"</p>";
             html+="</div>";
            $(".in_html2").append(html);
   
 
      }else
      {
        alert("获取数据失败！");
      }
 

            
     

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