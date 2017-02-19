$(document).ready(function(){
	//获取url参数
    var id = getQueryString("activity_id");
	//alert(id);
	$.ajax({
		type:"post",
		url:"http://api.lizi123.cn/index.php/home/activity/actBrief",
		data:{
			"id":id,
	      },
	    success:function(data){
	    	var obj=eval(data);
	    	console.dir(obj);
	    	if(obj.status==200){
	    		document.getElementById("touxiang").src = obj.image;
	            document.getElementById("fabu_name").innerHTML = obj.name;
	    		document.getElementById("intro").innerHTML = obj.intro;
	    		document.getElementById("fabu_time").innerHTML = obj.timelength;
	    		document.getElementById("date").innerHTML = obj.date;
	    		document.getElementById("address").innerHTML=obj.address;
	    		document.getElementById("requirements").innerHTML = obj.requirements;
	    		document.getElementById("act_intro").innerHTML = obj.act_intro;	
	    	};
	    },
	    error:function(data)
	    {
	    	alert("actBrief获取数据失败�?);
	    }
	    
	});

});


 
//获取url参数
function getQueryString(name){ 
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r != null) {
		return unescape(r[2]); 
	}else{
		return null; 
	}
}; 
