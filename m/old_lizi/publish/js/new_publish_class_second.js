//选择时间
var choose_time=new Array;
//上课时间
var class_time = new Array;
//教学方式
var method;
//教学对象
var is_online;

choose_time=document.getElementsByName("choose_time");
//alert(choose_time.length);
for(var i=0;i<choose_time.length;i++){
	choose_time[i].addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.className=="class_time_off"){
			this.className="class_time_on";
			class_time.push(this.innerHTML);
		}
		else{
			this.className="class_time_off";
			class_time.splice($.inArray(this.value,class_time),1);
		}
	},false);
}

//授课方式重写单选框
var class_way=new Array;
class_way=document.getElementsByName("give_class_way");
var way=0;
class_way[0].addEventListener("touchstart",function(){
	if(way==0){
		class_way[0].className="checked";
		way++;
		is_online=1;
	}
	else if(way==1){
		if(class_way[0].className=="checked"){
			class_way[0].className="unchecked";
			way=0;
			is_online=2;
		}
		else{
			class_way[0].className="checked";
			class_way[1].className="unchecked";
			is_online=1;
		}
	}
	},false);
class_way[1].addEventListener("touchstart",function(){
	if(way==0){
		class_way[1].className="checked";
		way++;
		is_online=0;
	}
	else if(way==1){
		if(class_way[1].className=="checked"){
			class_way[1].className="unchecked";
			way=0;
			is_online=2;
		}
		else{
			class_way[1].className="checked";
			class_way[0].className="unchecked";
			is_online=0;
		}
	}
	},false);
	
//授课  线上  线下
var class_address=new Array;
class_address=document.getElementsByName("give_class_address");
var address=0;
class_address[0].addEventListener("touchstart",function(){
	if(address==0){
		class_address[0].className="checked";
		address++;
		method = 0;
	}
	else if(address==1){
		if(class_address[0].className=="checked"){
			class_address[0].className="unchecked";
			address=0;
			method = 2;
		}
		else{
			class_address[0].className="checked";
			class_address[1].className="unchecked";
			method = 0;
		}
	}
	},false);
class_address[1].addEventListener("touchstart",function(){
	if(address==0){
		class_address[1].className="checked";
		address++;
		method = 1;
	}
	else if(address==1){
		if(class_address[1].className=="checked"){
			class_address[1].className="unchecked";
			address=0;
			method = 2;
		}
		else{
			class_address[1].className="checked";
			class_address[0].className="unchecked";
			method = 1;
		}
	}
	},false);
	
//支付方式选择
var pay_way=new Array;
pay_way=document.getElementsByName("pay");
var pay=0;
pay_way[0].addEventListener("touchstart",function(){
	if(pay==0){
		pay_way[0].className="checked";
		pay++;
	}
	else if(pay==1){
		if(pay_way[0].className=="checked"){
			pay_way[0].className="unchecked";
			pay=0;
		}
		else{
			pay_way[0].className="checked";
			pay_way[1].className="unchecked";
		}
	}
	},false);
pay_way[1].addEventListener("touchstart",function(){
	if(pay==0){
		pay_way[1].className="checked";
		document.getElementById("charge_money").readOnly=false;
		pay++;
	}
	else if(pay==1){
		if(pay_way[1].className=="checked"){
			pay_way[1].className="unchecked";
			document.getElementById("charge_money").readOnly=true;
			pay=0;
		}
		else{
			pay_way[1].className="checked";
			document.getElementById("charge_money").readOnly=false;
			pay_way[0].className="unchecked";
		}
	}
	},false);

function check_classway(){
	for(i=0;i<class_way.length;i++){
		if(class_way[i].className=="checked")
		return true;
	}
	return false;
}
function check_address(){
	for(i=0;i<class_address.length;i++){
		if(class_address[i].className=="checked")
		return true;
	}
	return false;
}
function isPriceNumber(_keyword){  
    if(_keyword == "0" || _keyword == "0." || _keyword == "0.0" || _keyword == "0.00"){  
        _keyword = "0"; return true;  
    }else{  
        var index = _keyword.indexOf("0");  
        var length = _keyword.length;  
        if(index == 0 && length>1){/*0开头�?�数字串*/  
            var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;  
            if(!reg.test(_keyword)){  
                return false;  
            }else{  
                return true;  
            }  
        }else{/*�?开头的数字*/  
            var reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;  
            if(!reg.test(_keyword)){  
                return false;  
            }else{  
                return true;  
            }  
        }             
        return false;  
    }  
}  
function check_payway(){
	if(pay_way[0].className=="checked")
	return true;
	else if(pay_way[1].className=="checked"&&document.getElementById("charge_money").value!=""){
		if(isPriceNumber(document.getElementById("charge_money").value)==true)
			//sale_money = document.getElementById("charge_money").value;
			return true;
		else{
			alert("你输入的金额格式错误,请重新输�?);
			return false;
		}
	}
//	&&isPriceNumber(document.getElementById("charge_money").value)==true)
	else
	return false;
}
//function check_classtime(){
//	for(i=0;i<choose_time.length;i++){
//		if(choose_time[i].className=="class_time_on")
//		return true;
//	}
//	return false;
//}
//完成
var reg = /.*\..*/;
var xiaoyan=true;
//alert (reg.test(num));
document.getElementById("over").addEventListener("touchstart",function(){
	//alert(0);
	
	var keshi=document.getElementById("class_hours").value;
	var zhou=document.getElementById("class_weeks").value;
	var dizhi=document.getElementById("class_address").value;
	if(check_classway()==false||check_address()==false||check_payway()==false){
		alert("信息未填写完善或格式不正确，请重新填�?);
		xiaoyan=false;
	}
	if(parseInt(keshi)<=0||parseInt(keshi)>=100){
		alert("课时的范围在1-99�?); 
		xiaoyan=false;
	}
	if(reg.test(keshi)==true&&keshi.toString().split(".")[1].length!=-1){
		alert("课时不允许小�?);
		xiaoyan=false;
	}
	if(parseInt(zhou)<=0||parseInt(zhou)>=100){
		alert("上课周数?��范围�?-99�?); 
		xiaoyan=false;
	}
	if(reg.test(zhou)==true&&zhou.toString().split(".")[1].length>1){
		alert("上课周数最多允许一位小�?);
		xiaoyan=false;
	}
//	else if(keshi!=""){
//		if(parseInt(keshi)<=0||parseInt(keshi)>=100)
//			alert("课时的范围在1-99�?); 
//		else if(reg.test(keshi)==true){
//			if(keshi.toString().split(".")[1].length!=-1)
//			alert("课时不允许小�?);
//		}
//		else if(parseInt(zhou)<=0||parseInt(zhou)>=100){
//			alert("上课周数的范围在1-99�?); 
//		}
//		else if(reg.test(zhou)==true){
//			if(zhou.toString().split(".")[1].length>1)
//				alert("上课周数最多允许一位小�?);
//			else
//				window.location.href="../../ffunction/concret_class.html";
//		}
//	else if(dizhi.length>10){
//		alert("地址须在15个字符以�?);
//	}
	if(xiaoyan==true){
		//获取url参数
    	var skill_id = getQueryString("skill_id");
    	//付费金额,默认�?
		var sale_money = document.getElementById("charge_money").value;
		$.param(class_time);
    	//console.dir(skill_id);
    	/*console.dir(class_time);
    	console.dir(keshi);
    	console.dir(zhou);
		console.dir(dizhi);
		console.dir(is_online);
		console.dir(method);
		console.dir(sale_money);*/
		$.ajax({
            type:"POST",
           	//dataType:"json",
            //traditional:true,
            url:"http://api.lizi123.cn/index.php/home/skill/addSkillSecond",
            data:{
            	"skill_id":skill_id,
            	"sale_money":sale_money,
            	"method":method,
            	"is_online":is_online,
            	"class_time":class_time,
            	"week_hour":keshi,
            	"week_num":zhou,
            	"address":dizhi,
            },
            success:function(data){
                var obj = eval(data);
                //console.dir(obj);
                window.location.href="../ffunction/concret_class.html?skill_id="+skill_id;
            },
            error:function(data){
                alert("error!");
            },
    	});
		
		
	}   
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