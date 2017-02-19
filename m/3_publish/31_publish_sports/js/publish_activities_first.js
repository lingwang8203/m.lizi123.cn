//预览封面图片

//交换标签打开
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
				index++;
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
		page = 0;
		$.ajax({
		    type:"post",
		    url:"http://api.lizi123.cn/index.php/home/activity/exchangeTag",
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
//		        alert("获取标签失败!");
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
						selectTag.splice($.inArray(this.value,selectTag),1);
						this.className="change_module_label label_back";
						label_num--;
					};
				},false);
			}
		
		//换一批标
		function exchangeTag(page){
			$.ajax({
			    type:"post",
			    url:"http://api.lizi123.cn/index.php/home/activity/exchangeTag",
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
			        //alert("获取标签失败!");
			    }, 
			});
		};
		
		var refresh_label=document.getElementById("refresh_label");
		refresh_label.addEventListener("touchstart",function(){
			page += 8;
			exchangeTag(page);
		},false);
		
		function label_index(){
			for(i=0;i<3;i++){
				if(document.getElementById("label"+i).style.display=="inline")
				return true;
			}
			return false;
		}
		//完成
		document.getElementById("furnish").addEventListener("touchstart",function(){
			if(label_index()==false||document.getElementById("header").value==""||document.getElementById("preview").style.display=="none"){
				alert("信息未填写完善，或填写错误");
			}
			else{

                  /**************************上传图片*****************************/
                  var imagePath = new Array;//活动海报地址
				var file_head = $("#upload_poster_img");
				for (var i = 0; i < file_head[0].files.length; i++) {
					var formData = new FormData();
					formData.append("file",file_head[0].files[i]);
				    $.ajax({  
				        url:"http://api.lizi123.cn/index.php/home/index/uploads",
				        type: 'POST',  
				        data: formData,  
				        async: false,  
				        cache: false,  
				        contentType: false,  
				        processData: false,  
				        success: function (data) { 
				           alert("选择成功"); 
				        	var obj = eval(data);
				            //alert(obj.msg); 
				            imagePath.push(obj.msg);
				        },  
				        error: function (data) {  
				            //alert(returndata);  
				        }  
				    });
				}
                
                /*****************************活动信息上传*******************************/

                 //console.dir(selectTag);
				//console.dir(imagePath);
				
				$.param(selectTag,true);//传参为数�?
				//alert("活动信息上传");
				$.param(imagePath,true);//传参为数�?
				
				var user_id = 12;//测试数据
				var activityTitle = document.getElementById("header").value;
				var activityIntro = document.getElementById("miaoshu").value;
				$.ajax({
			            type:"POST",
			           	//dataType:"json",
			            //traditional:true,
			            url:"http://api.lizi123.cn/index.php/home/activity/addActivityFirst",
			            data:{
			            	"user_id":user_id,
			            	"selectTag":selectTag,
			               	"activityTitle":activityTitle,
			                "activityIntro":activityIntro,
			                "imagePath":imagePath,
			            },
			            success:function(data){
			            	//alert("你好");
			                var obj = eval(data);
			                //alert(obj.id);
			                console.dir(obj);
			                //转到发布页面第二�?
							window.location.href="publish_activities_second.html?activity_id="+obj.id;
			            },
			            error:function(data){
			                //alert("error!");
			            },
			    });

			}
		},false);