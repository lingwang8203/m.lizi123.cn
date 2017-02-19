//LOGO上传预览
		 function setImagePreview(){
			document.getElementById("show_Club_logo").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_Club_logo"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("Club_logo"), file_head.files && file_head.files[0]) preview.style.display = "block",  
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                document.getElementById("add_Club_logo").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_Club_logo"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

	//图片上传预览
		var cancel_photo=document.getElementsByClassName("cancel_pageclub_photo");
		
		
		
		 function setPhotoPreview1(){
			document.getElementById("show_pageclub_photo1").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo1"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo1"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                document.getElementById("add_pageclub_photo1").style.backgroundImage="none",
		                cancel_photo[0].style.display="inline-block",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo1"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}
		 
function setPhotoPreview2(){
			document.getElementById("show_pageclub_photo2").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo2"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo2"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[1].style.display="inline-block",
		                document.getElementById("add_pageclub_photo2").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo2"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

function setPhotoPreview3(){
			document.getElementById("show_pageclub_photo3").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo3"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo3"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[2].style.display="inline-block",
		                document.getElementById("add_pageclub_photo3").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo3"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}


function setPhotoPreview4(){
			document.getElementById("show_pageclub_photo4").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo4"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo4"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[3].style.display="inline-block",
		                document.getElementById("add_pageclub_photo4").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo4"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

function setPhotoPreview5(){
			document.getElementById("show_pageclub_photo5").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo5"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo5"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[4].style.display="inline-block",
		                document.getElementById("add_pageclub_photo5").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo5"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

function setPhotoPreview6(){
			document.getElementById("show_pageclub_photo6").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo6"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo6"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[5].style.display="inline-block",
		                document.getElementById("add_pageclub_photo6").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo6"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

function setPhotoPreview7(){
			document.getElementById("show_pageclub_photo7").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo7"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo7"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[6].style.display="inline-block",
		                document.getElementById("add_pageclub_photo7").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo7"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}

function setPhotoPreview8(){
			document.getElementById("show_pageclub_photo8").style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_pageclub_photo8"),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("photo8"), file_head.files && file_head.files[0]) 
		            	preview.style.display = "block",
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                cancel_photo[7].style.display="inline-block",
		                document.getElementById("add_pageclub_photo8").style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_pageclub_photo8"),  
		                localImag.style.width = "100%",  
		                localImag.style.height = "100%";  
		                try {  
		                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
		                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
		                } catch(f) {  
		                    return alert("您上传的图片格式不正确，请重新选择！"),  
		                    !1  
		                }  
		                preview.style.display = "none",  
		                document.selection.empty()  
		            }   
		            !0  
		}
		window.onload=function(){
		cancel_photo[0].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo1").style.display="none";
			document.getElementById("add_pageclub_photo1").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[1].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo2").style.display="none";
			document.getElementById("add_pageclub_photo2").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[2].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo3").style.display="none";
			document.getElementById("add_pageclub_photo3").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[3].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo4").style.display="none";
			document.getElementById("add_pageclub_photo4").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[4].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo5").style.display="none";
			document.getElementById("add_pageclub_photo5").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[5].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo6").style.display="none";
			document.getElementById("add_pageclub_photo6").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[6].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo7").style.display="none";
			document.getElementById("add_pageclub_photo7").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		cancel_photo[7].addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("photo8").style.display="none";
			document.getElementById("add_pageclub_photo8").style.backgroundImage="url(../publish/img/add_class_details1.png)";
			this.style.display="none";
		},false);
		
		
		document.getElementById("pageclub_leixing").addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("back").style.display="block";
			document.getElementById("choose_fenlei").style.display="block";
		},false)
		
		var leibie=new Array;
		leibie=document.getElementsByName("leibie");
		for(var i=0;i<leibie.length;i++){
			leibie[i].addEventListener("touchstart",function(e){
				e.preventDefault();
				for(var j=0;j<leibie.length;j++){
					if(j!=i){
						leibie[j].className="unchecked";
					}
					else{
						leibie[j].className="checked";
					}
				}
				this.className="checked";
				document.getElementById("pageclub_leixing").innerHTML=this.innerHTML;
			},false);
		}
		document.getElementById("confirm").addEventListener("touchstart",function(e){
			e.preventDefault();
			document.getElementById("choose_fenlei").style.display="none";
			document.getElementById("back").style.display="none";
		},false);
	}