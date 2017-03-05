//交换标签打开
var zoom = document.getElementById("zoom_preview");
var change_module1 = document.getElementById("change_module1");
var cancel1 = document.getElementById("cancel_change_module1");
var confirm1 = document.getElementById("confirm_change_module1");
var refresh_label1 = document.getElementById("refresh_label1");

var change_module2 = document.getElementById("change_module2");
var cancel2 = document.getElementById("cancel_change_module2");
var confirm2 = document.getElementById("confirm_change_module2");
var refresh_label2 = document.getElementById("refresh_label2");

var change_module3 = document.getElementById("change_module3");
var cancel3 = document.getElementById("cancel_change_module3");
var confirm3 = document.getElementById("confirm_change_module3");
var refresh_label3 = document.getElementById("refresh_label3");
var index = 0;

var shanchang = document.getElementById("shanchang");
var xiangxue = document.getElementById("xiangxue");
var xingqu = document.getElementById("xingqu");

var shangchang_label_num = 0;
var xingqu_label_num = 0;
var xiangxue_label_num = 0;

var change_label = new Array;
var label = new Array;
var choosed_label = new Array;
label = document.getElementsByClassName("label");
choosed_label = document.getElementsByClassName("choosed_label");
change_label = document.getElementsByName("change_label");

var shanchang_span = new Array;
var xingqu_span = new Array;
var xiangxue_span = new Array;
//擅长标签
var masterTag = new Array;var master_num=0;
//兴趣标签
var hobbyTag = new Array;var hobby_num=0;
//想学标签
var learnTag = new Array;var learn_num=0;

shanchang_span = document.getElementsByClassName("shanchang_label");
xingqu_span = document.getElementsByClassName("xingqu_label");
xiangxue_span = document.getElementsByClassName("xiangxue_label");
var recent = 0; //0表示未打开标签  1表示打开擅长标签 2表示打开感兴趣标 3表示打开想学标签

var tag = document.getElementsByClassName("change_module_label label_back");
tag_length=tag.length;
var tg_length=tag_length/3;
////////////擅长标签
document.getElementById("shanchang_module").addEventListener("touchstart", function() {
	if(index == 0) {
		zoom.style.display = "block";
		recent = 1;
		change_module1.style.display = "block";
		index++;
		$.ajax({
			type: "post",
			url: "http://api.lizi123.cn/index.php/home/index/getAllTags",
			xhrFields: {
				withCredentials: true
			},
			data: {
				"client_type": 0,
				
			},
			success: function(data) {
				var obj = eval(data);
				console.dir(obj);						
				for(var i = 0; i < tag_length/3; i++) {
					tag[i].innerHTML = obj[i].tag_name;
					tag[i].value = obj[i].id;
				};
			},
			error: function(data) {
//				   alert("获取标签失败!");
			},
		});
	}
}, false);

/////////////////////////////感兴趣标签
document.getElementById("xingqu_module").addEventListener("touchstart", function() {
	if(index == 0) {
		zoom.style.display = "block";
		recent = 2;
		change_module2.style.display = "block";
		index++;
//		page = 1;
		$.ajax({
			type: "post",
			url: "http://api.lizi123.cn/index.php/home/index/getAllTags",
			xhrFields: {
				withCredentials: true
			},
			data: {
				"client_type": 0,
//				"page": page,
			},
			success: function(data) {
				var obj = eval(data);
				console.dir(obj);
//				var tag = document.getElementsByClassName("change_module_label label_back");
//				var tag_length=(tag.length*2)/3;
				for(var i = tag_length/3; i < (tag_length*2)/3; i++){
					tag[i].innerHTML = obj[i%tg_length].tag_name;
					tag[i].value = obj[i%tg_length].id;
				};
			},
			error: function(data) {
				//    alert("获取标签失败!");
			},
		});
	}
}, false);

/////////////////////////想学标签
document.getElementById("xiangxue_module").addEventListener("touchstart", function() {
	if(index == 0) {
		zoom.style.display = "block";
		change_module3.style.display = "block";
		recent = 3;
		index++;
//		page = 1;
		$.ajax({
			type: "post",
			url: "http://api.lizi123.cn/index.php/home/index/getAllTags",
			xhrFields: {
				withCredentials: true
			},
			data: {
				"client_type": 0,
				
			},
			success: function(data) {
				var obj = eval(data);
				console.dir(obj);

				for(var i = (tag_length*2)/3; i < tag_length; i++){
//					alert("i%tag_lrnenght="+(i % tag_length));
					tag[i].innerHTML = obj[i%tg_length].tag_name;
					tag[i].value = obj[i%tg_length].id;
				};
			},
			error: function(data) {
				//     alert("获取标签失败!");
			},
		});
	}
}, false);

//////////////取消标签/////////////////////////////////////////
cancel1.addEventListener("touchstart", function() {
	if(index == 1) {
		zoom.style.display = "none";
		change_module1.style.display = "none";
		index--;
		recent = 0;		
//		alert("tag_length="+tag_length);
//		for(var i = 0; i < tag_length/3; i++) {
//		   if(change_label[i].className == "change_module_label label_back_hover"){
//		   	  change_label[i].className = "change_module_label label_back";
//		   }
//		};
	}
}, false);
cancel2.addEventListener("touchstart", function() {
	if(index == 1) {
		zoom.style.display = "none";
		change_module2.style.display = "none";
		index--;
		recent = 0;		
	}
}, false);
cancel3.addEventListener("touchstart", function() {
	if(index == 1) {
		zoom.style.display = "none";
		change_module3.style.display = "none";
		index--;
		recent = 0;		
	}
}, false);

//////////////好（确认）标签/////////////////////////////////////////
confirm1.addEventListener("touchstart", function() {
	recent = 1;
	if(index == 1) {
		zoom.style.display = "none";
		change_module1.style.display = "none";
//		for(var i = 0; i < tag_length/3; i++) {
//			if(change_label[i].className == "change_module_label label_back_hover") {
						if(shangchang_label_num > 0) {
							shanchang.style.display = "none";
							choosed_label[recent - 1].style.display = "inline-block";
                       }				
//			}
//		}
		index--;
		recent = 0;
	}
}, false);
confirm2.addEventListener("touchstart", function() {
	recent = 2;
	if(index == 1) {
		zoom.style.display = "none";
		change_module2.style.display = "none";
//		for(var i = tag_length/3; i < (tag_length*2)/3; i++) {
//			if(change_label[i].className == "change_module_label label_back_hover") {
						if(xingqu_label_num > 0) {
							xingqu.style.display = "none";
							choosed_label[recent - 1].style.display = "inline-block";
						}
				
//		    }
//		}
		index--;
		recent = 0;
	}
}, false);
confirm3.addEventListener("touchstart", function() {
	recent = 3;
	if(index == 1) {
		zoom.style.display = "none";
		change_module3.style.display = "none";
//		alert(tag_length);
//		for(var i = (tag_length*2)/3; i < tag_length; i++) {
//			//alert(i+"--"+change_label[i].className);//position_95
//			if(change_label[i].className == "change_module_label label_back_hover") {
						if(xiangxue_label_num > 0) {
							xiangxue.style.display = "none";
							choosed_label[recent - 1].style.display = "inline-block";
						}	
//			}
//	}
		index--;
		recent = 0;
	}
}, false);
//////////////换一批标签/////////////////////////////////////////

//-------------------我擅长的标签换一批标签--------------------------------------//
		var lable_index1=1;
		var selected_label1=document.getElementById("selected_label1");
		var selected_label2=document.getElementById("selected_label2");
		var selected_label3=document.getElementById("selected_label3");
		var selected_label4=document.getElementById("selected_label4");
		refresh_label1.addEventListener("touchstart",function(e){
			e.preventDefault();
			
			if(lable_index1==4){
				selected_label1.style.display="block";
				selected_label2.style.display="none";
				selected_label3.style.display="none";
				selected_label4.style.display="none";
				lable_index1=1;
			}else if(lable_index1==3){
				selected_label4.style.display="block";
				selected_label2.style.display="none";
				selected_label3.style.display="none";
				selected_label1.style.display="none";
				lable_index1++;
			}else if(lable_index1==2){
				selected_label3.style.display="block";
				selected_label2.style.display="none";
				selected_label4.style.display="none";
				selected_label1.style.display="none";
				lable_index1++;
			}else if(lable_index1==1){
				selected_label2.style.display="block";
				selected_label4.style.display="none";
				selected_label3.style.display="none";
				selected_label1.style.display="none";
				lable_index1++;
			}
		},false)

//-------------------我感兴趣的标签换一批标签--------------------------------------//
		var lable_index2=1;
		var selected_label5=document.getElementById("selected_label5");
		var selected_label6=document.getElementById("selected_label6");
		var selected_label7=document.getElementById("selected_label7");
		var selected_label8=document.getElementById("selected_label8");
		refresh_label2.addEventListener("touchstart",function(e){
			e.preventDefault();
			
			if(lable_index2==4){
				selected_label5.style.display="block";
				selected_label6.style.display="none";
				selected_label7.style.display="none";
				selected_label8.style.display="none";
				lable_index2=1;
			}else if(lable_index2==3){
				selected_label8.style.display="block";
				selected_label6.style.display="none";
				selected_label7.style.display="none";
				selected_label5.style.display="none";
				lable_index2++;
			}else if(lable_index2==2){
				selected_label7.style.display="block";
				selected_label5.style.display="none";
				selected_label6.style.display="none";
				selected_label8.style.display="none";
				lable_index2++;
			}else if(lable_index2==1){
				selected_label6.style.display="block";
				selected_label5.style.display="none";
				selected_label7.style.display="none";
				selected_label8.style.display="none";
				lable_index2++;
			}
		},false)

//-------------------我想学的标签换一批标签--------------------------------------//
		var lable_index3=1;
		var selected_label9=document.getElementById("selected_label9");
		var selected_label10=document.getElementById("selected_label10");
		var selected_label11=document.getElementById("selected_label11");
		var selected_label12=document.getElementById("selected_label12");
		refresh_label3.addEventListener("touchstart",function(e){
			e.preventDefault();
			
			if(lable_index3==4){
				selected_label9.style.display="block";
				selected_label10.style.display="none";
				selected_label11.style.display="none";
				selected_label12.style.display="none";
				lable_index3=1;
			}else if(lable_index3==3){
				selected_label12.style.display="block";
				selected_label10.style.display="none";
				selected_label11.style.display="none";
				selected_label9.style.display="none";
				lable_index3++;
			}else if(lable_index3==2){
				selected_label11.style.display="block";
				selected_label10.style.display="none";
				selected_label9.style.display="none";
				selected_label12.style.display="none";
				lable_index3++;
			}else if(lable_index3==1){
				selected_label10.style.display="block";
				selected_label9.style.display="none";
				selected_label11.style.display="none";
				selected_label12.style.display="none";
				lable_index3++;
			}
		},false)

//选择标签
for(var k = 0; k < change_label.length; k++) {
	change_label[k].addEventListener("touchstart", function(e) {
		e.preventDefault();
		if(recent == 1) {
			if(this.className == "change_module_label label_back" && shangchang_label_num < 4) {
				this.className = "change_module_label label_back_hover";
//				alert(this.value);
				masterTag[master_num++]=this.value;
				var span = document.createElement("span");
				span.className = "shanchang_label";
				span.innerHTML = this.innerHTML;
				choosed_label[recent - 1].appendChild(span);
				label[recent - 1].style.marginTop = "10vh";
				shangchang_label_num++;
			} else if(this.className == "change_module_label label_back_hover") {
				for(var m = 0; m < shanchang_span.length; m++) {
					if(shanchang_span[m].innerHTML == this.innerHTML) {
						choosed_label[recent - 1].removeChild(shanchang_span[m]);						
					}
				}
				masterTag.splice($.inArray(this.value, masterTag), 1);//inArray获取下标,splice删除这个下标的元素
				this.className = "change_module_label label_back";
				shangchang_label_num--;
			};
		}
		if(recent == 2) {
			if(this.className == "change_module_label label_back" && xingqu_label_num < 4) {
				this.className = "change_module_label label_back_hover";
				hobbyTag[hobby_num++]=this.value;
				var span = document.createElement("span");
				span.className = "xingqu_label";
				span.innerHTML = this.innerHTML;
				choosed_label[recent - 1].appendChild(span);
				label[recent - 1].style.marginTop = "10vh";
				xingqu_label_num++;
			} else if(this.className == "change_module_label label_back_hover") {
				for(var m = 0; m < xingqu_span.length; m++) {
					if(xingqu_span[m].innerHTML == this.innerHTML) {
						choosed_label[recent - 1].removeChild(xingqu_span[m]);
					}
				}
				hobbyTag.splice($.inArray(this.value, hobbyTag), 1);
				this.className = "change_module_label label_back";
				xingqu_label_num--;
			};
		}
		if(recent == 3) {
			if(this.className == "change_module_label label_back" && xiangxue_label_num < 4) {
				this.className = "change_module_label label_back_hover";
				learnTag[learn_num++]=this.value;
				var span = document.createElement("span");
				span.className = "xiangxue_label";
				span.innerHTML = this.innerHTML;
				choosed_label[recent - 1].appendChild(span);
				label[recent - 1].style.marginTop = "10vh";
				xiangxue_label_num++;
			} else if(this.className == "change_module_label label_back_hover") {
				for(var m = 0; m < xiangxue_span.length; m++) {
					if(xiangxue_span[m].innerHTML == this.innerHTML) {
						choosed_label[recent - 1].removeChild(xiangxue_span[m]);
					}
				}
				learnTag.splice($.inArray(this.value, learnTag), 1);
				this.className = "change_module_label label_back";
				xiangxue_label_num--;
			};
		}
	}, false);
}
//-------------------------------------提交数据------------------------//
document.getElementById("next").addEventListener("touchstart", function(){
			alert("masterTag="+masterTag+"  hobbyTag="+hobbyTag+"  learnTag="+learnTag);
			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/user/userTag",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"masterTag": masterTag,
					"hobbyTag": hobbyTag,
					"learnTag": learnTag,
				},
				success: function(data) {
					var obj = eval(data);
					console.dir(obj);
					if(obj.status == 200) {
						window.open("http://m.lizi123.cn/5_mine/50_mine_homepage_self/50_mine_homepage_self.html");
					}
				},
				error: function(data) {
					    alert("失败!");
					    var obj = eval(data);
						console.dir(obj);
						alert(obj.status);
						alert(obj.msg);
				},
			});
},false)
