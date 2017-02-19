$(document).ready(function(){
//获取url参数中的user_id
	var id = getQueryString("club_id");
//alert(id);
$.ajax({
		type:"post",
		url:"http://qj_api.qdmedia.cc/index.php/home/club/clubImpress",
		data:{
			"id":id,
	      },
	    success:function(data){
	    	
	    	
	    	var obj=eval(data);
	    	if(obj.status==200){
	    		
	    		document.getElementById("haibao_same1").src = obj.poster1;
	    		document.getElementById("haibao_same2").src = obj.poster2;
	    		document.getElementById("haibao_same3").src = obj.poster3;


	            
	            document.getElementById("touxiang1").src = obj['0'];//obj['0'];
	            document.getElementById("touxiang2").src = obj['1'];//obj['1'];
	            document.getElementById("touxiang3").src = obj['2'];//obj['2'];
	            document.getElementById("touxiang4").src = obj['3'];//obj['3'];
	            document.getElementById("touxiang5").src = obj['4'];//obj['4'];

	            document.getElementById("club_intro").innerHTML = obj.intro;
	    			
	    		document.getElementById("club_feature").innerHTML=obj.feature;
	    		
	    		document.getElementById("t1").innerHTML=obj.tag_name;  
	    		
	    	   };
	    },
	    error:function(data)
	    {
	    	alert("获取数据失败！");
	    }
	    
	});





});


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