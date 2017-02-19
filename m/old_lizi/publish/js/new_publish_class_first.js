////多图片上传预�?
// function setImagePreview() {  
//          var preview, img_txt, localImag, file_head = document.getElementById("upload_class_miaoshu_img");  
////          picture = file_head.value; 
//          var filelists=file_head.files;
//          img_index=filelists.length;
//          if(img_index<1||img_index>3)
//          return alert("做多允许上传3张图�?请重新选择�?);
//          var picture=new Array;
//          for(var i=0;i<img_index;i++){
//          	picture[i] = file_head.value;
//          if (!picture[i].match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?);  
////          if(img_index>=1&&img_index<=3){
////          	document.getElementById("cancel_img").style.display="inline-block";
//          if (preview = document.getElementById("preview"+(i+1)), file_head.files && file_head.files[i]) 
//              preview.style.display = "block",
//              preview.style.width = "20vw",  
//              preview.style.height = "15vw",  
//              preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[i]) : window.URL.createObjectURL(file_head.files[i]);  
//          else {  
//              file_head.select(),  
//              file_head.blur(),  
//              img_txt = document.selection[i].createRange().text,  
//              localImag = document.getElementById("show_class_miaoshu_img"+(i+1)),  
//              localImag.style.width = "20vw",  
//              localImag.style.height = "15vw";  
//              try {  
//                  localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
//                  localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
//              } catch(f) {  
//                  return alert("您上传的图片格式不正确，请重新选择�?); 
//              }  
//              preview.style.display = "none",  
//              document.selection.empty() ; 
//          } 
//      }
//  }
        //撤销图片
//      document.getElementById("cancel_img").addEventListener("touchstart",function(e){
//      	e.preventDefault();
//      	document.getElementById("preview1").style.display="none";
//      	document.getElementById("preview2").style.display="none";
//      	document.getElementById("preview3").style.display="none";
//      	img_index=1;
//      	document.getElementById("cancel_img").style.display="none";
//      },false)
      window.onload=function(){  
        //放大预览图片
//      document.getElementById("preview1").addEventListener("touchstart",function(e){
//      	e.preventDefault();
//      	document.getElementById("zoom_preview").style.display="block";
//      	document.getElementById("zoom_img").src=this.src;
//      },false);
//      document.getElementById("preview2").addEventListener("touchstart",function(e){
//      	e.preventDefault();
//      	document.getElementById("zoom_preview").style.display="block";
//      	document.getElementById("zoom_img").src=this.src;
//      },false);
//      document.getElementById("preview3").addEventListener("touchstart",function(e){
//      	e.preventDefault();
//      	document.getElementById("zoom_preview").style.display="block";
//      	document.getElementById("zoom_img").src=this.src;
//      },false);
        
        document.getElementById("zoom_preview").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	this.style.display="none";
        },false)
        

		//交换标签打开
		var add_label=document.getElementById("add_label");
		var back=document.getElementById("frame_back");
		var change_module=document.getElementById("change_module");
		var cancel=document.getElementById("cancel_change_module");
		var confirm=document.getElementById("confirm_change_module");
		var index=0;
		add_label.addEventListener("touchstart",function(){
			if(index==0){
				back.style.display="block";
				change_module.style.display="block";
				index++;
			}
		},false);
		cancel.addEventListener("touchstart",function(){
			if(index==1){
				back.style.display="none";
				change_module.style.display="none";
				index--;
			}
		},false);
		confirm.addEventListener("touchstart",function(){
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
		
		//选择标签
		var change_label=new Array;
		var label_num = 0;
		change_label=document.getElementsByName("change_label");
			for(var k=0;k<change_label.length;k++){
				change_label[k].addEventListener("touchstart",function(e){
					document.getElementById("label").style.display="block";
					e.preventDefault();
					if(this.className=="change_module_label label_back"&&label_num<3){
						this.className="change_module_label label_back_hover";
						document.getElementById("label"+label_num).style.display="inline";
						document.getElementById("label"+label_num).innerHTML=this.innerHTML;
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
		
		//换一批标�?
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
			exchangeTag(page);
		},false);
		
		//
		function label_index(){
			for(i=0;i<3;i++){
				if(document.getElementById("label"+i).style.display=="inline")
				return true;
			}
			return false;
		}
		document.getElementById("furnish").addEventListener("touchstart",function(){
			if(document.getElementById("class_header").value==""||label_index()==false)
					alert("信息未填写完善，请重新填�?);
			else{
				window.location.href="new_publish_class_second.html";
			}
		},false);
		
		}
//		/********************************************************/
//	$.ajax({
//      type:"post",
//      url:"",
//      data:{
//      },
//      success:function(data){
//          var obj = eval(data);
//          if(obj.status==200){
//          	obj.=document.getElementById("class_header").value;
//          	obj.=document.getElementById("class_miaoshu").value;  
//			}
//      },
//      error:function(data){
//          alert("error!");
//      },
//   });