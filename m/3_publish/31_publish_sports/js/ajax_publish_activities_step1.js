//交换标签打开
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
		page = 1;
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/index/getTagList",
		    xhrFields:{
			    withCredentials: true
			},
		    data:{
		    	"client_type":0,
		    	"page":page,
		    },
		    success:function(data){
		        var obj = eval(data);
		        console.dir(obj);
		        if (obj.status==200) {
			        var tag = document.getElementsByName("change_label");
			        for (var i = 0; i < tag.length; i++) {
			        	tag[i].innerHTML = obj[i].tag_name;
			        	tag[i].value = obj[i].id;
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
					if(this.className=="change_module_label label_back"&&label_num<3){
						this.className="change_module_label label_back_hover";
						document.getElementById("label"+label_num).style.display="inline";
						document.getElementById("label"+label_num).innerHTML=this.innerHTML;
						selectTag.push(this.value);
						label_num++;
					}else if (this.className=="change_module_label label_back_hover") {
						for(var i=0;i<3;i++){
							if(document.getElementById("label"+i).innerHTML==this.innerHTML){
								document.getElementById("label"+i).style.display="none";
							}
						}
						this.className="change_module_label label_back";
						label_num--;
					};
				},false);
			}
		
		//换一批标
		function exchangeTag(page){
			//alert("page"+page);
			$.ajax({
			    type:"post",
			    url:"http://api.lizi123.cn/index.php/home/index/getTagList",
			    data:{
			    	"client_type":0,
		    		"page":page,
			    },
			    xhrFields:{
			        withCredentials: true
			    },
			    success:function(data){
			        var obj = eval(data);
			        if (obj.status==200) {
			        	var tag = document.getElementsByName("change_label");
				        for (var i = 0; i < tag.length; i++) {
				        	tag[i].innerHTML = obj[i].tag_name;
				        	tag[i].value = obj[i].id;
				        };
			        }else{
			        	page = 1;
			        	exchangeTag(page);
			        }
			        
			    },
			    error:function(data){
			        //alert("获取标签失败!");
			    }, 
			});
		};
		
		var refresh_label=document.getElementById("refresh_label");
		refresh_label.addEventListener("touchstart",function(){
			page += 1;
			exchangeTag(page);
		},false);
		
		function label_index(){
			for(i=0;i<3;i++){
				if(document.getElementById("label"+i).style.display=="none")
				return false;
			}
			return true;
		}
		
		///////////////////////选择类型
		var choose_type=0;///1打开弹窗  0未打开弹窗
		document.getElementById("sports_type").addEventListener("touchstart",function(e){
			e.preventDefault();
			if(choose_type==0){
				document.getElementById("frame_back").style.display="block";
				document.getElementById("choose_module").style.display="block";
				choose_type=1;
			}
		},false)
		
		var sports_type=document.getElementsByClassName("sports_type");
		var choosed_type;
		var type_index;
		for(var i=0;i<sports_type.length;i++){
			sports_type[i].index=i;
			sports_type[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				for(var j=0;j<sports_type.length;j++){
					sports_type[j].children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choose.png";
				}
				this.children[0].src="http://lizi-img.oss-cn-shenzhen.aliyuncs.com/new_lizi/3_publish/31_publish_sports/circle_choosed.png";
				choosed_type="已选择分类:"+this.children[1].innerHTML;
				type_index=this.index+1;//类型id从1开始
			},false)
		}
		
		document.getElementById("choose_type_confirm").addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("sports_type").value=choosed_type;
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
			if(label_index()==false||document.getElementById("header").value==""||document.getElementById("preview").style.display=="none"||document.getElementById("content").value==""||document.getElementById("sports_type").value==""){
				alert("信息未填写完善，或填写错误");
			}
			else{
                  
                
                /*****************************活动信息上传*******************************/

                 //console.dir(selectTag);
				//console.dir(imagePath);
				
				//$.param(images.serverId,true);//传参为数组
				//alert("活动信息上传");
				var activityTitle = document.getElementById("header").value;
				var activityIntro = document.getElementById("content").value;
				//alert(activityTitle);
				//alert(type_index);
				//alert(activityIntro);
				//alert(selectTag);
				$.ajax({
		            type:"POST",
		            url:"http://api.lizi123.cn/index.php/home/activity/publishAct",
		            xhrFields: {
		                withCredentials: true
		            },
		            data:{
		            	"client_type":0,
		            	"tag_id":selectTag[0],
		               	"activity_name":activityTitle,
		                "activity_intro":activityIntro,
		                "image":images.serverId[0],
		                "type_id":type_index
		            },
		            success:function(data){
		                var obj = eval(data);
		                console.dir(obj);
		                if (obj.status==200) {
		                	//转到发布页面第二步
		                	window.location.href="http://m.lizi123.cn/3_publish/31_publish_sports/313_publish_sports_step2.html?activity_id="+obj.activity_id;
		                	//alert("发布成功");
		                }else if(obj.status==199){
		                	window.location.href = "http://m.lizi123.cn/7_login/7_login.html";
	                
		                }else{
		                	alert("活动发布失败");
		                }
		            },
		            error:function(data){
		                //alert("error!");
		            },
			    });

			}
		},false);
		});