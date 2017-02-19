document.getElementById("ok").addEventListener("touchstart",function(e){
	e.preventDefault();
	if(this.className=="unchecked")
		this.className="checked";
	else
		this.className="unchecked";
},false)

var reg = /.*\..*/;
var myDate = new Date();
//myDate.getFullYear();
var month=document.getElementById("month").value;
var day=document.getElementById("day").value;
var activities_address=document.getElementById("activities_address").value;
var yaoqiu=document.getElementById("yaoqiu").value;

function isLeapYear(year) {
    var cond1 = year % 4 == 0;  //条件1：年份必须要能被4整除
    var cond2 = year % 100 != 0;  //条件2：年份不能是整百�?
    var cond3 = year % 400 ==0;  //条件3：年份是400的倍数
    //当条�?和条�?同时成立时，就肯定是闰年，所以条�?和条�?之间为“与”的关系�?
    //如果条件1和条�?不能同时成立，但如果条件3能成立，则仍然是闰年。所以条�?与前2项为“或”的关系�?
    //所以得出判断闰年的表达式：
    var cond = cond1 && cond2 || cond3;
    if(cond) {
        return true;
    } else {
        return false;
    }
}

function check(month,day){
	if(month==""||day=="")
		return false;
	else if(reg.test(day)==true||reg.test(month)==true)
		return false;
	else if(parseInt(month)>12||parseInt(month)<1||parseInt(day)>31||parseInt(day)<1)
		return false;
	else if(parseInt(month)==4||parseInt(month)==6||parseInt(month)==9||parseInt(month)==11){
		if(parseInt(day)==31){
			return false;
		}
		else{
			return true;
		}
	}
	else if(parseInt(month)==2){
		if(isLeapYear(myDate.getFullYear())==true){
			if(parseInt(day)<29)
				return true;
			else
				return false;
		}
		else{
			if(parseInt(day)<=29)
				return true;
			else
				return false;
		}
	}
}


document.getElementById("furnish").addEventListener("touchstart",function(){
	/*if(check(month,day)==false||activities_address==""||yaoqiu==""){
		alert("信息未填写完�?);
		return false;
	}*/
	//else{
	   var activity_id = getQueryString("activity_id");
       var month1 = document.getElementById("month").value;
       var day1 = document.getElementById("day").value;
       var activities_address1=document.getElementById("activities_address").value;
       var yaoqiu1=document.getElementById("yaoqiu").value;

 	$.ajax({
            type:"POST",
           	//dataType:"json",
            //traditional:true,
            url:"http://api.lizi123.cn/index.php/home/activity/addActivitySecond",
            data:{
            	"activity_id":activity_id,
            	"month":month1,
            	"day":day1,
            	"activities_address":activities_address1,
            	"yaoqiu":yaoqiu1,
            	
            },
            success:function(data){
            	alert("成功�?);
                var obj = eval(data);
                console.dir(obj);
                window.location.href="../ffunction/concret_activities.html?activity_id="+activity_id;
            },
            error:function(data){
                alert("error!");
            },
    	});

		
	//}
},false);

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