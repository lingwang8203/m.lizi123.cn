//交换标签打开
		var zoom=document.getElementById("zoom_preview");
		var change_module=document.getElementById("change_module");
		var cancel=document.getElementById("cancel_change_module");
		var confirm=document.getElementById("confirm_change_module");
		var index=0;
		var shanchang=document.getElementById("shanchang");
		var xiangxue=document.getElementById("xiangxue");
		var xingqu=document.getElementById("xingqu");
		var refresh_label=document.getElementById("refresh_label");
		var change_label=new Array;
		var shangchang_label_num = 0;
		var xingqu_label_num = 0;
		var xiangxue_label_num = 0;
		var label=new Array;
		var choosed_label=new Array;
		label=document.getElementsByClassName("label");
		choosed_label=document.getElementsByClassName("choosed_label");
		change_label=document.getElementsByName("change_label");
		var shanchang_span=new Array;
		var xingqu_span=new Array;
		var xiangxue_span=new Array;
		//擅长标签
		var masterTag = new Array;
		//兴趣标签
		var hobbyTag = new Array;
		//想学标签
		var learnTag = new Array;
		shanchang_span=document.getElementsByClassName("shanchang_label");
		xingqu_span=document.getElementsByClassName("xingqu_label");
		xiangxue_span=document.getElementsByClassName("xiangxue_label");
		var recent=0;//0表示未打开标签  1表示打开擅长标签 2表示打开感兴趣标�?3表示打开想学标签
		////////////擅长标签
		document.getElementById("shanchang_module").addEventListener("touchstart",function(){
			if(index==0){
				zoom.style.display="block";
				recent=1;
				change_module.style.display="block";
				index++;
				page = 0;
				$.ajax({
				    type:"post",
				    url:"http://api.lizi123.cn/index.php/home/skill/exchangeTag",
				    data:{
				    	"p":page,
				    },
				    success:function(data){
				        var obj = eval(data);
				        var tag = document.getElementsByClassName("change_module_label label_back");
				        for (var i = 0; i < tag.length; i++) {
				        	tag[i].innerHTML = obj[i].tag_name;
				        	tag[i].value = obj[i].id;
				        };
				    },
				    error:function(data){
				        alert("获取标签失败!");
				    }, 
				});
			}
		},false);
		
		/////////////////////////////感兴趣标�?
		document.getElementById("xingqu_module").addEventListener("touchstart",function(){
			if(index==0){
				zoom.style.display="block";
				recent=2;
				change_module.style.display="block";
				index++;
				page = 0;
				$.ajax({
				    type:"post",
				    url:"http://api.lizi123.cn/index.php/home/skill/exchangeTag",
				    data:{
				    	"p":page,
				    },
				    success:function(data){
				        var obj = eval(data);
				        var tag = document.getElementsByClassName("change_module_label label_back");
				        for (var i = 0; i < tag.length; i++) {
				        	tag[i].innerHTML = obj[i].tag_name;
				        	tag[i].value = obj[i].id;
				        };
				    },
				    error:function(data){
				        alert("获取标签失败!");
				    }, 
				});
			}
		},false);
		
		
		
		/////////////////////////想学标签
		document.getElementById("xiangxue_module").addEventListener("touchstart",function(){
			if(index==0){
				zoom.style.display="block";
				change_module.style.display="block";
				recent=3;
				index++;
				page = 0;
				$.ajax({
				    type:"post",
				    url:"http://api.lizi123.cn/index.php/home/skill/exchangeTag",
				    data:{
				    	"p":page,
				    },
				    success:function(data){
				        var obj = eval(data);
				        var tag = document.getElementsByClassName("change_module_label label_back");
				        for (var i = 0; i < tag.length; i++) {
				        	tag[i].innerHTML = obj[i].tag_name;
				        	tag[i].value = obj[i].id;
				        };
				    },
				    error:function(data){
				        alert("获取标签失败!");
				    }, 
				});
			}
		},false);
		
		cancel.addEventListener("touchstart",function(){
			if(index==1){
				zoom.style.display="none";
				change_module.style.display="none";
				index--;
				recent=0;
			}
		},false);
		confirm.addEventListener("touchstart",function(){
			if(index==1){
				zoom.style.display="none";
				change_module.style.display="none";
				for(var i=0;i<change_label.length;i++){
					if(change_label[i].className=="change_module_label label_back_hover"){
						switch(recent){
							case 1:if(shangchang_label_num>0){
									shanchang.style.display="none";
									choosed_label[recent-1].style.display="inline-block";
									}
									break;
							case 2:if(xingqu_label_num>0){
									xingqu.style.display="none";
									choosed_label[recent-1].style.display="inline-block";
									}
									break;
							case 3:if(xiangxue_label_num>0){
									xiangxue.style.display="none";
									choosed_label[recent-1].style.display="inline-block";
									}
									break;
							default:alert("错误");
						}
					}
				}
				index--;
				recent=0;
			}
		},false);
		//////////////换一批标�?
		function exchangeTag(page){
			$.ajax({
			    type:"post",
			    url:"http://api.lizi123.cn/index.php/home/skill/exchangeTag",
			    data:{
			    	"p":page,
			    },
			    success:function(data){
			        var obj = eval(data);
			        if (obj.status==200) {
			        	var tag = document.getElementsByClassName("change_module_label label_back");
				        for (var i = 0; i < tag.length; i++) {
				        	tag[i].innerHTML = obj[i].tag_name;
				        	tag[i].value = obj[i].id;
				        };
			        }else{
			        	page = 0;
			        	exchangeTag(page);
			        }
			        
			    },
			    error:function(data){
			        alert("获取标签失败!");
			    }, 
			});
		};
		
		var refresh_label=document.getElementById("refresh_label");
		refresh_label.addEventListener("touchstart",function(){
			page += 8;
			//alert(recent);
			exchangeTag(page);
		},false);

		//选择标签
			for(var k=0;k<change_label.length;k++){
				change_label[k].addEventListener("touchstart",function(e){
					e.preventDefault();
					if(recent==1){
						if(this.className=="change_module_label label_back"&&shangchang_label_num<12){
							this.className="change_module_label label_back_hover";
							masterTag.push(this.value);
							var span=document.createElement("span");
							span.className="shanchang_label";
							span.innerHTML=this.innerHTML;
							choosed_label[recent-1].appendChild(span);
							label[recent-1].style.marginTop="10vh";
							shangchang_label_num++;
						}else if (this.className=="change_module_label label_back_hover") {
							for(var m=0;m<shanchang_span.length;m++){
								if(shanchang_span[m].innerHTML==this.innerHTML){
									choosed_label[recent-1].removeChild(shanchang_span[m]);
								}
							}
							masterTag.splice($.inArray(this.value,masterTag),1);
							this.className="change_module_label label_back";
							shangchang_label_num--;
						};
					}
					if(recent==2){
						if(this.className=="change_module_label label_back"&&xingqu_label_num<12){
							this.className="change_module_label label_back_hover";
							hobbyTag.push(this.value);
							var span=document.createElement("span");
							span.className="xingqu_label";
							span.innerHTML=this.innerHTML;
							choosed_label[recent-1].appendChild(span);
							label[recent-1].style.marginTop="10vh";
							xingqu_label_num++;
						}else if (this.className=="change_module_label label_back_hover") {
							for(var m=0;m<xingqu_span.length;m++){
								if(xingqu_span[m].innerHTML==this.innerHTML){
									choosed_label[recent-1].removeChild(xingqu_span[m]);
								}
							}
							hobbyTag.splice($.inArray(this.value,hobbyTag),1);
							this.className="change_module_label label_back";
							xingqu_label_num--;
						};
					}
					if(recent==3){
						if(this.className=="change_module_label label_back"&&xiangxue_label_num<12){
							this.className="change_module_label label_back_hover";
							learnTag.push(this.value);
							var span=document.createElement("span");
							span.className="xiangxue_label";
							span.innerHTML=this.innerHTML;
							choosed_label[recent-1].appendChild(span);
							label[recent-1].style.marginTop="10vh";
							xiangxue_label_num++;
						}else if (this.className=="change_module_label label_back_hover") {
							for(var m=0;m<xiangxue_span.length;m++){
								if(xiangxue_span[m].innerHTML==this.innerHTML){
									choosed_label[recent-1].removeChild(xiangxue_span[m]);
								}
							}
							learnTag.splice($.inArray(this.value,learnTag),1);
							this.className="change_module_label label_back";
							xiangxue_label_num--;
						};
					}
				},false);
			}


document.getElementById("next").addEventListener("touchstart",function(){
	console.dir(masterTag);
	console.dir(hobbyTag);
	console.dir(learnTag);
	$.param(masterTag);
	$.param(hobbyTag);
	$.param(learnTag);
	$.ajax({
	    type:"post",
	    url:"http://api.lizi123.cn/index.php/home/user/userTag",
	    data:{
	    	"masterTag":masterTag,
	    	"hobbyTag":hobbyTag,
	    	"learnTag":learnTag,
	    },
	    success:function(data){
	        var obj = eval(data);
	        console.dir(obj);
	        if (obj.status==200) {
	        	window.location.href = "http://m.lizi123.cn/LiZi/login/choose_school.html#";
	        }
	    },
	    error:function(data){
	        alert("失败!");
	    }, 
	});
},false);