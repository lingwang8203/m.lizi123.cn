
var iframe = 0;//用于判断当前iframe为哪个页面，0为为详情页面�?为投票页�?
window.onload=function(){
document.getElementById("toupiao").addEventListener("touchstart",function(e){
			e.preventDefault();
			this.className="nav_on";
			document.getElementById("dongtai").className="nav_off";
			document.getElementById("bottom").src="xiangqing.html";
		},false);
		document.getElementById("dongtai").addEventListener("touchstart",function(e){
			e.preventDefault();
			this.className="nav_on";
			iframe = 1;
			document.getElementById("toupiao").className="nav_off";
			document.getElementById("bottom").src="toupiao.html";
//			var iframe=$("#bottom")[0];
//			iframe.onload=function(){
//			 var tabs=document.getElementById("bottom").contentWindow.toupiao_tabs;
//			 alert(tabs);
//			};
		},false)
	
}


//点击完成
var tagImage = document.getElementById("pic1").src;//标签�?
document.getElementsByClassName("toupiao_head1_right")[0].addEventListener("touchstart",function(e){
			e.preventDefault();
			var voteNUm = document.getElementById("bottom").contentWindow.toupiao_tabs;
			var id = getQueryString("activity_id");//获取url参数
			var title = document.getElementById("input1").value;//标题
			var image = new Array();//详情图片
			if (iframe==0) {
				var content = document.getElementById("bottom").contentWindow.document.getElementById("input2").value;//详情内容
				if (title && content) {
					var file_head = document.getElementById("bottom").contentWindow.document.getElementById("upload_class_miaoshu_img");
					for (var i = 0; i < file_head.files.length; i++) {
						// 获取文件对象
						var formData = new FormData();
						formData.append("file",file_head.files[i]);
						$.ajax({  
					        url:"http://api.lizi123.cn/index.php/home/index/uploads",
					        type: 'POST',  
					        data: formData,  
					        async: false,  
					        cache: false,  
					        contentType: false,  
					        processData: false,  
					        success: function (data) {  
					        	var obj = eval(data);
					        	//console.dir(obj);
					            if (obj.status==200) {
					            	image.push(obj.msg);
					            } 
					        },  
					        error: function (data) {  
					            alert(returndata);  
					        }  
					    });
					}
					//console.dir(image);
					$.param(image);
		    		$.ajax({  
				        url:"http://api.lizi123.cn/index.php/home/activity/publishProgress",
				        type: 'POST',  
				        data:{
				        	"activity_id":id,
				        	"title":title,
				        	"image":image,
				        	"content":content,
				        	"tagImage":tagImage,
				        },
				        success: function (data) {  
				        	var obj = eval(data);
				        	console.dir(obj);
				            if (obj.status==200) {
				            	window.location.href="concret_activities.html?activity_id="+id;
				            }else if (obj.status==199) {
				            	window.location.href = "http://m.lizi123.cn/LiZi/login/";
				            } 
				        },  
				        error: function (data) {  
				             alert("发布失败，请重试�?);
				        }  
				    });
				}else{
					alert("信息不能为空�?);
				}
			}else if (iframe==1) {
				//投票
				var content = document.getElementById("bottom").contentWindow.document.getElementById("input2").value;//详情内容
				var dateTest = /^(\d{4})-(\d{2})-(\d{2})$/; 
				var year = document.getElementById("bottom").contentWindow.document.getElementById("year").value;
				var month = document.getElementById("bottom").contentWindow.document.getElementById("month").value;
				var day = document.getElementById("bottom").contentWindow.document.getElementById("day").value;
				var date = year+"-"+month+"-"+day;
				var voteImage = new Array;
				var voteContent = new Array;
				if(!dateTest.test(date) || parseInt(month)>12 || parseInt(month)<1 || parseInt(day)<1 || parseInt(day)>31 ){
					alert("年月日格式错误！,正确格式�?016�?9�?8�?);
				}else if(!content || voteNUm<2){
					alert("内容不能为空�?);
				}else{
					for (var i = 0; i < voteNUm; i++) {
						i++;
						var fileId = "upload_toupiao_img"+i;
						var contentId = "voteContent"+i; 
						i--;
						var file_head = document.getElementById("bottom").contentWindow.document.getElementById(fileId);
						voteContent[i] = document.getElementById("bottom").contentWindow.document.getElementById(contentId).value;
						// 获取文件对象
						var formData = new FormData();
						formData.append("file",file_head.files[0]);
						$.ajax({  
					        url:"http://api.lizi123.cn/index.php/home/index/uploads",
					        type: 'POST',  
					        data: formData,  
					        async: false,  
					        cache: false,  
					        contentType: false,  
					        processData: false,  
					        success: function (data) {  
					        	var obj = eval(data);
					            if (obj.status==200) {
					            	voteImage.push(obj.msg);
					            } 
					        },  
					        error: function (data) {  
					            alert(returndata);  
					        }  
					    });	
					}
					$.param(voteImage);
					$.param(voteContent);
					console.dir(voteImage);
					console.dir(voteContent);
					$.ajax({  
				        url:"http://api.lizi123.cn/index.php/home/activity/publishVote",
				        type: 'POST',  
				        data:{
				        	"activity_id":id,
				        	"title":title,
				        	"content":content,
				        	"tagImage":tagImage,
				        	"date":date,
				        	"voteImage":voteImage,
				        	"voteContent":voteContent,
				        },
				        success: function (data) {  
				        	var obj = eval(data);
				        	console.dir(obj);
				        	
				            if (obj.status==200) {
				            	window.location.href="concret_activities.html?activity_id="+id;
				            }else if (obj.status==199) {
				            	window.location.href = "http://m.lizi123.cn/LiZi/login/";
				            } 
				        },  
				        error: function (data) {  
				             alert("发布失败，请重试�?);
				        }  
				    });
				}
			}
			
			
			
},false)

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

//function kuochong(){
//	var tabs=document.getElementById("bottom").contentWindow.toupiao_tabs-1;
//	var newheight=49+tabs*15;
////	document.getElementById("bottom").style.height=newheight+"vh";
//}
///////////////////标题显示
var biaoti=document.getElementById("biaoti");
function header(){
	setInterval(function(){
		biaoti.innerHTML=document.getElementById("input1").value;
	},1000);
}

///////////////////////////自适应iframe大小
///////////////////////////////////////////////////////////////////////////换图�?
var header_img=document.getElementById("header_img");
var p1=document.getElementById("pic1");
var p2=document.getElementById("pic2");
var p3=document.getElementById("pic3");
var p4=document.getElementById("pic4");
var p5=document.getElementById("pic5");
var p6=document.getElementById("pic6");
var p7=document.getElementById("pic7");
var p8=document.getElementById("pic8");
var p9=document.getElementById("pic9");
var p10=document.getElementById("pic10");
var p11=document.getElementById("pic11");
var p12=document.getElementById("pic12");
var p13=document.getElementById("pic13");
var p14=document.getElementById("pic14");
var p15=document.getElementById("pic15");
var p16=document.getElementById("pic16");
var p17=document.getElementById("pic17");
var p18=document.getElementById("pic18");
var index1=0,index2=0,index3=0,index4=0,index5=0,index6=0,index7=0,index8=0,index9=0,index10=0,index11=0;
var index12=0,index13=0,index14=0,index15=0,index16=0,index17=0,index18=0;
function huanyuan(){
	p1.src="img/concret/tubiao1.png";
	p2.src="img/concret/tubiao2.png";
	p3.src="img/concret/tubiao3.png";
	p4.src="img/concret/tubiao4.png";
	p5.src="img/concret/tubiao5.png";
	p6.src="img/concret/tubiao6.png";
	p7.src="img/concret/tubiao7.png";
	p8.src="img/concret/tubiao8.png";
	p9.src="img/concret/tubiao9.png";
	p10.src="img/concret/tubiao10.png";
	p11.src="img/concret/tubiao11.png";
	p12.src="img/concret/tubiao12.png";
	p13.src="img/concret/tubiao13.png";
	p14.src="img/concret/tubiao14.png";
	p15.src="img/concret/tubiao15.png";
	p16.src="img/concret/tubiao16.png";
	p17.src="img/concret/tubiao17.png";
	p18.src="img/concret/tubiao18.png";
}

	p1.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index1==0){
			huanyuan();
			tagImage = p1.src;
			p1.src="img/concret/1-1.png";
			header_img.src="img/concret/1-1.png";
			index1=1;
			
		}
		else{
			huanyuan();
			index1=0;
		}
	},false);
	
p2.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index2==0){
			huanyuan();
			tagImage = p2.src;
			p2.src="img/concret/1-2.png";
			header_img.src="img/concret/1-2.png";
			index2=1;
		}
		else{
			huanyuan();
			index2=0;
		}
	},false);
	
p3.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index3==0){
			huanyuan();
			tagImage = p3.src;
			p3.src="img/concret/1-3.png";
			header_img.src="img/concret/1-3.png";
			index3=1;
		}
		else{
			huanyuan();
			index3=0;
		}
	},false);
	
p4.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index4==0){
			huanyuan();
			tagImage = p4.src;
			p4.src="img/concret/1-4.png";
			header_img.src="img/concret/1-4.png";
			index4=1;
		}
		else{
			huanyuan();
			index4=0;
		}
	},false);
	
p5.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index5==0){
			huanyuan();
			tagImage = p5.src;
			p5.src="img/concret/1-5.png";
			header_img.src="img/concret/1-5.png";
			index5=1;
		}
		else{
			huanyuan();
			index5=0;
		}
	},false);

p6.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index6==0){
			huanyuan();
			tagImage = p6.src;
			p6.src="img/concret/1-6.png";
			header_img.src="img/concret/1-6.png";
			index6=1;
		}
		else{
			huanyuan();
			index6=0;
		}
	},false);
	
p7.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index7==0){
			huanyuan();
			tagImage = p7.src;
			p7.src="img/concret/2-1.png";
			header_img.src="img/concret/2-1.png";
			index7=1;
		}
		else{
			huanyuan();
			index7=0;
		}
	},false);
	
p8.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index8==0){
			huanyuan();
			tagImage = p8.src;
			p8.src="img/concret/2-2.png";
			header_img.src="img/concret/2-2.png";
			index8=1;
		}
		else{
			huanyuan();
			index8=0;
		}
	},false);
	
p9.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index9==0){
			huanyuan();
			tagImage = p9.src;
			p9.src="img/concret/2-3.png";
			header_img.src="img/concret/2-3.png";
			index9=1;
		}
		else{
			huanyuan();
			index9=0;
		}
	},false);
	
p10.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index10==0){
			huanyuan();
			tagImage = p10.src;
			p10.src="img/concret/2-4.png";
			header_img.src="img/concret/2-4.png";
			index10=1;
		}
		else{
			huanyuan();
			index10=0;
		}
	},false);
	
p11.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index11==0){
			huanyuan();
			tagImage = p11.src;
			p11.src="img/concret/2-5.png";
			header_img.src="img/concret/2-5.png";
			index11=1;
		}
		else{
			huanyuan();
			index11=0;
		}
	},false);

p12.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index12==0){
			huanyuan();
			tagImage = p12.src;
			p12.src="img/concret/2-6.png";
			header_img.src="img/concret/2-6.png";
			index12=1;
		}
		else{
			huanyuan();
			index12=0;
		}
	},false);
	
p13.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index13==0){
			huanyuan();
			tagImage = p13.src;
			p13.src="img/concret/3-1.png";
			header_img.src="img/concret/3-1.png";
			index13=1;
		}
		else{
			huanyuan();
			index13=0;
		}
	},false);
	
p14.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index14==0){
			huanyuan();
			tagImage = p14.src;
			p14.src="img/concret/3-2.png";
			header_img.src="img/concret/3-2.png";
			index14=1;
		}
		else{
			huanyuan();
			index14=0;
		}
	},false);
	
p15.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index15==0){
			huanyuan();
			tagImage = p15.src;
			p15.src="img/concret/3-3.png";
			header_img.src="img/concret/3-3.png";
			index15=1;
		}
		else{
			huanyuan();
			index15=0;
		}
	},false);
	
p16.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index16==0){
			huanyuan();
			tagImage = p16.src;
			p16.src="img/concret/3-4.png";
			header_img.src="img/concret/3-4.png";
			index16=1;
		}
		else{
			huanyuan();
			index16=0;
		}
	},false);
	
p17.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index17==0){
			huanyuan();
			tagImage = p17.src;
			p17.src="img/concret/3-5.png";
			header_img.src="img/concret/3-5.png";
			index17=1;
		}
		else{
			huanyuan();
			index17=0;
		}
	},false);
	
p18.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(index18==0){
			huanyuan();
			tagImage = p18.src;
			p18.src="img/concret/3-6.png";
			header_img.src="img/concret/3-6.png";
			index18=1;
		}
		else{
			huanyuan();
			index18=0;
		}
	},false);