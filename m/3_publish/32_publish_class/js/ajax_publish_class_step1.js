//选择标签打开
//window.page = 1;
$(document).ready(function(){
		var add_label=document.getElementById("add_label");
		var back=document.getElementById("frame_back");
		var change_module=document.getElementById("change_module");
		var cancel=document.getElementById("cancel_change_module");
		var confirm=document.getElementById("confirm_change_module");
		var index=0;
		add_label.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(index==0){
				back.style.display="block";
				change_module.style.display="block";
				index=1;
			}
		},false);
		cancel.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(index==1){
				back.style.display="none";
				change_module.style.display="none";
				index--;
			}
		},false);
		confirm.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(index==1){
				back.style.display="none";
				change_module.style.display="none";
				index--;
			}
		},false);
		//获取标签名和id
//		var pay_way = document.getElementsByName("pay");
		
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/index/getAllTags",
		    xhrFields:{
			    withCredentials: true
			},
		    data:{
		    	"client_type":0,
//		    	"page":page,
		    },
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        if (obj.status==200) {
			        var tag = document.getElementsByName("change_label");
			        for (var i = 0; i < obj.tag_num; i++) {
			        	tag[i].innerHTML = obj[i].tag_name;
			        	tag[i].value = obj[i].id;
//			        	alert("obj[i].tag_name="+obj[i].tag_name+" obj[i].id="+obj[i].id);
			        };
		        }else if(obj.status==199){
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
		    },
		    error:function(data){
		        //alert("获取标签失败!");
		    }, 
		});
		
		//选择标签
		var change_label=new Array;
		var label_num = 0;
		var selectTag = new Array;
		change_label=document.getElementsByName("change_label");
			for(var k=0;k<change_label.length;k++){
				
				change_label[k].addEventListener("touchstart",function(e){
					
					document.getElementById("label").style.display="block";
					e.preventDefault();
					if(this.className=="change_module_label label_back"&&label_num<1){
						this.className="change_module_label label_back_hover";
						document.getElementById("label"+label_num).style.display="inline";
						document.getElementById("label"+label_num).innerHTML=this.innerHTML;
						selectTag.push(this.value);//将选中的值压入selectTag数组中
						label_num++;						
					}else if(this.className=="change_module_label label_back"&&label_num>=1){
						alert("只能选择一个标签哦");						
					}else if (this.className=="change_module_label label_back_hover") {						
						for(var i=0;i<3;i++){
							if(document.getElementById("label"+i).innerHTML==this.innerHTML){
								document.getElementById("label"+i).style.display="none";
								selectTag.splice(k,1);//将取消的值从selectTag数组中删除
							}
						}
						this.className="change_module_label label_back";
						label_num--;
					};
					
				},false);
			}
		

		//换另一批标签
		
		var refresh_label=document.getElementById("refresh_label");
		var lable_index=1;
		var selected_label1=document.getElementById("selected_label1");
		var selected_label2=document.getElementById("selected_label2");
		var selected_label3=document.getElementById("selected_label3");
		var selected_label4=document.getElementById("selected_label4");
		refresh_label.addEventListener("touchstart",function(e){
			e.preventDefault();
			
			if(lable_index==4){
				selected_label1.style.display="block";
				selected_label2.style.display="none";
				selected_label3.style.display="none";
				selected_label4.style.display="none";
				lable_index=1;
			}else if(lable_index==3){
				selected_label4.style.display="block";
				selected_label2.style.display="none";
				selected_label3.style.display="none";
				selected_label1.style.display="none";
				lable_index++;
			}else if(lable_index==2){
				selected_label3.style.display="block";
				selected_label2.style.display="none";
				selected_label4.style.display="none";
				selected_label1.style.display="none";
				lable_index++;
			}else if(lable_index==1){
				selected_label2.style.display="block";
				selected_label4.style.display="none";
				selected_label3.style.display="none";
				selected_label1.style.display="none";
				lable_index++;
			}
		},false)
//		refresh_label.addEventListener("touchstart",function(){
//			page += 1;
//			console.dir(page);
//			if(page==4){
//				page=1;
//			}
//			// exchangeTag(page);
//			$.ajax({
//			    type:"post",
//			    url:"http://api.lizi123.cn/index.php/home/index/getTagList",
//			    data:{
//			    	"client_type":0,
//		    		"page":page,
//			    },
//			    xhrFields:{
//			        withCredentials: true
//			    },
//			    success:function(data){
//			        var obj = eval(data);
//			        console.dir(obj);
//			        if (obj.status==200) {
//			        	var tag = document.getElementsByName("change_label");
//				        for (var i = 0; i < obj.tag_num; i++) {
//				        	//alert(obj[i].tag_name);
//				        	tag[i].innerHTML = obj[i].tag_name;
//				        	tag[i].value = obj[i].id;
//				        };}
//			        // }else{
//			        // 	page = 1;
//			        // 	// exchangeTag(page);
//			        // }
//			        console.dir(page);
//			    },
//			    error:function(data){
//			        alert("获取标签失败!");
//			    }, 
//			});
//		},false);
		
		
//		function label_index(){
//			for(i=0;i<3;i++){
//				if(document.getElementById("label"+i).style.display=="none")
//				return false;
//			}
//			return true;
//		}
		
		///////////////////////选择类型
		var choose_type=0;///1打开弹窗  0未打开弹窗
		document.getElementById("class_type").addEventListener("touchstart",function(e){
			e.preventDefault();
			if(choose_type==0){
				document.getElementById("frame_back").style.display="block";
				document.getElementById("choose_module").style.display="block";
				choose_type=1;
			}
		},false)
		
		var class_type=document.getElementsByClassName("class_type");
		var choosed_type;
		var type_index;
		for(var i=0;i<class_type.length;i++){
			class_type[i].index=i;
			class_type[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				for(var j=0;j<class_type.length;j++){
					class_type[j].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
				}
				this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				choosed_type="已选择分类:"+this.children[1].innerHTML;
				type_index=this.index+1;
			},false)
		}
		
		document.getElementById("choose_type_confirm").addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("class_type").value=choosed_type;
			document.getElementById("frame_back").style.display="none";
			document.getElementById("choose_module").style.display="none";
			choose_type=0;
			
		},false)
		
		document.getElementById("choose_type_cancel").addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("frame_back").style.display="none";
			document.getElementById("choose_module").style.display="none";
			choose_type=0;
		},false)
		
		//完成
		document.getElementById("furnish").addEventListener("touchstart",function(){
			if(document.getElementById("header").value==""||document.getElementById("preview").style.display=="none"||document.getElementById("content").value==""||document.getElementById("class_type").value==""){
				alert("信息未填写完善，或填写错误");
			}
			else{
                //======================活动信息上传======================

				//$.param(selectTag,true);//传参为数组
				var classTitle = document.getElementById("header").value;
				var classIntro = document.getElementById("content").value;
				$.ajax({
		            type:"POST",
		            url:"http://api.lizi123.cn/index.php/home/class/publishClass",
		            xhrFields: {
		                withCredentials: true
		            },
		            data:{
		            	"client_type":0,
		            	"tag_id":selectTag[0],
		               	"class_name":classTitle,
		                "class_intro":classIntro,
		                "image":images.serverId[0],
		                "type_id":type_index
		            },
		            success:function(data){
		                var obj = eval(data);
		                if (obj.status==200) {
		                	window.location.href="http://m.lizi123.cn/3_publish/32_publish_class/323_publish_class_step2.html?class_id="+obj.class_id;
		                	//window.location.href="http://m.lizi123.cn/3_publish/32_publish_class/323_publish_class_step2.html?class_id="+obj.class_id;
		                	//转到发布页面第二步
		                }else if(obj.status==199){
		                	window.location.href = "http://m.lizi123.cn/7_login/7_login.html";
		                }else{
		                	alert("课程发布失败");
		                }
		                
		            },
		            error:function(data){
		                //alert("error!");
		            },
			    });

			}
		},false);
		});