//多图片上传预览
 function setImagePreview(){
	document.getElementById("show_logo").style.display="inline-block";
	var preview, img_txt, localImag, file_head = document.getElementById("upload_logo"),
            picture = file_head.value; 
            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
            !1;  
            if (preview = document.getElementById("preview"), file_head.files && file_head.files[0]) preview.style.display = "block",  
                preview.style.width = "100%",  
                preview.style.height = "100%",
                document.getElementById("add_logo").style.backgroundImage="none",
                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
            else {  
                file_head.select(),  
                file_head.blur(),  
                img_txt = document.selection.createRange().text,  
                localImag = document.getElementById("show_logo"),  
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
		document.getElementById("label0").innerHTML=this.innerHTML;
	},false);
}
document.getElementById("confirm").addEventListener("touchstart",function(e){
	e.preventDefault();
	document.getElementById("choose_fenlei").style.display="none";
	document.getElementById("back").style.display="none";
},false);