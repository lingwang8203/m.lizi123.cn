//多图片上传预览
		 function setImagePreview(i){
			document.getElementById("show_toupiao_img"+i).style.display="inline-block";
			var preview, img_txt, localImag, file_head = document.getElementById("upload_toupiao_img"+i),
		            picture = file_head.value; 
		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
		            !1;  
		            if (preview = document.getElementById("toupiao"+i), file_head.files && file_head.files[0]) preview.style.display = "block",  
		                preview.style.width = "100%",  
		                preview.style.height = "100%",
		                document.getElementById("add_toupiao_img"+i).style.backgroundImage="none",
		                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
		            else {  
		                file_head.select(),  
		                file_head.blur(),  
		                img_txt = document.selection.createRange().text,  
		                localImag = document.getElementById("show_toupiao_img"+i),  
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
		 
var toupiao_tabs=1;
document.getElementById("add_new_toupiao").addEventListener("touchstart",function(e){
	e.preventDefault();
	toupiao_tabs++;
//	window.parent.kuochong();
//	alert(document.getElementById("set").value);
	var html="<div class='xiangqing'>";
	html+="<div class='xiangqing_box'>"+toupiao_tabs+"</div>";
	html+="<div class='xiangqing_img'>";
	html+="<a id='add_toupiao_img"+toupiao_tabs+"' href='#' class='add_toupiao_img'>";
	html+="<input type='file' name='file' id='upload_toupiao_img"+toupiao_tabs+"' class='upload_toupiao_img' onchange='javascript:setImagePreview("+toupiao_tabs+");'/>";
	html+="</a>";
	html+="<div id='show_toupiao_img"+toupiao_tabs+"' class='show_toupiao_img'>";
	html+="<img id='toupiao"+toupiao_tabs+"' width='-1' height='-1' style='display: none' class='toupiao'/> ";
	html+="</div></div>";
	html+="<div class='xiangqing_right'>";
	html+="<textarea type='text' class='input3' id='voteContent"+toupiao_tabs+"'placeholder='请输入详情......' maxlength='50'></textarea>";
	html+="</div></div>";
	$("#toupiao_middle").append(html);
},false);

