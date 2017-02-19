$(document).ready(function(){
	//获取url参数中的user_id
	club_id = getQueryString("club_id");

	//==============================社团详情显示==================================
	$.ajax({
		type:"post",
		url:"http://qj_api.qdmedia.cc/index.php/home/club/clubDetails",
		data:{
			"id":club_id,
	    },
	    success:function(data){
	    	var obj=eval(data);
	    	console.dir(obj);
	    	if(obj.status==200){
	    		
	    		document.getElementById("top_touxiang1").src = obj.image;
	            
	            document.getElementById("club_name1").innerHTML = obj.name;
	    			
	    		document.getElementById("club_number1").innerHTML="（"+obj.member_num+"人已加入）";
	    		
	    		document.getElementById("club_sign1").innerHTML=obj.intro;  
	    		
	    	};
	    },
	    error:function(data)
	    {
	    	alert("获取数据失败！");
	    }
	    
	});
	//============================判断是否已加入社团==============================
	$.ajax({
		type:"post",
		url:"http://qj_api.qdmedia.cc/index.php/home/club/isClubMember",
		data:{
			"club_id":club_id,
	    },
	    success:function(data){
	    	var obj=eval(data);
	    	console.dir(obj);
	    	if(obj.status==200){
	    		document.getElementById("club_join").innerHTML = "已加入";	
	    		document.getElementById("club_join").className = "join_after";
	    	}else if (obj.status==2) {
	    		document.getElementById("club_join").className = "join_after";
	    		document.getElementById("club_join").innerHTML = "审核中";
	    	}
	    },
	    error:function(data)
	    {
	    	alert("获取数据失败！");
	    }
	    
	});
	


	



});

//================================点击报名加入社团=============================
window.onload=function(){
	
	var join=document.getElementById("club_join");
	join.addEventListener("touchstart",function(e){
		e.preventDefault();	
		if(this.className=="join_before"){
			joinClub();
			this.className="join_after";
			document.getElementById("club_join").innerHTML = "审核中";
		}else{
			//this.className="join_before";
		}			
		
			
	},false);
}



//==============================报名加入社团=====================================
function joinClub(){
	alert(club_id);
	if (club_id) {
		$.ajax({
			type:"post",
			url:"http://qj_api.qdmedia.cc/index.php/home/club/joinClub",
			data:{
				"club_id":club_id,
		    },
		    success:function(data){
		    	var obj=eval(data);
		    	console.dir(obj);
		    	if(obj.status==200){
		    		return 1;
		    	}
		    },
		    error:function(data){
		    	return 0;
		    }
		    
		});
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