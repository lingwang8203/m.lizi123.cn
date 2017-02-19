alert(0);
//多图片上传预�?
//var xuhao=document.getElementById("position").children;
//alert(xuhao.length);
	var index=0;
    var xuhao=document.getElementById("position").children;
    //获取url参数
    var club_id = getQueryString("club_id");
    for(var i=0;i<=3;i++){
	  	xuhao[i].style.display="none";
	   }
 function setImagePreview() {  
 			document.getElementById("show_video").style.display="none";
 			document.getElementById("addwrap").style.display="block";
 			var xuhao=document.getElementById("position").children;
            var preview, img_txt, localImag, file_head = document.getElementById("upload_class_miaoshu_img");  
//          picture = file_head.value; 
            var filelists=file_head.files;
            img_index=filelists.length;
            if(img_index<1||img_index>20)
            return alert("最多允许上�?0张图�?请重新选择�?);
            var picture=new Array;
            index=1;
            if(img_index>5&&img_index<=10){
            	xuhao[0].style.display="inline-block";
            	xuhao[1].style.display="inline-block";
            }
            else if(img_index>10&&img_index<=15){
            	xuhao[0].style.display="inline-block";
            	xuhao[1].style.display="inline-block";
            	xuhao[2].style.display="inline-block";
            }
            else if(img_index>15&&img_index<=20){
            	xuhao[0].style.display="inline-block";
            	xuhao[1].style.display="inline-block";
            	xuhao[2].style.display="inline-block";
            	xuhao[3].style.display="inline-block";
            }
            for(var i=0;i<img_index;i++){
            	picture[i] = file_head.value;
            if (!picture[i].match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?);  
//          if(img_index>=1&&img_index<=3){
//          	document.getElementById("cancel_img").style.display="inline-block";
            if (preview = document.getElementById("picture"+(i+1)), file_head.files && file_head.files[i]) 
                preview.style.display = "block",
                preview.style.width = "16.5vw",  
                preview.style.height = "17vw",  
                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[i]) : window.URL.createObjectURL(file_head.files[i]);  
            else {  
                file_head.select(),  
                file_head.blur(),  
                img_txt = document.selection[i].createRange().text,  
                localImag = document.getElementById("show_picture"+(i+1)),  
                localImag.style.width = "16.5vw",  
                localImag.style.height = "17vw";  
                try {  
                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
                } catch(f) {  
                    return alert("您上传的图片格式不正确，请重新选择�?); 
                }  
                preview.style.display = "none",  
                document.selection.empty() ; 
            } 
        }
    }
 
	document.getElementById("delete_tabs").addEventListener("touchstart",function(e){
		e.preventDefault();
		if(confirm("确定放弃编辑吗？")){
			window.location.href="http://m.lizi123.cn/LiZi/page_club/page_club.html?http://m.lizi123.cn/LiZi/page_club/page_club.html?club_id="+club_id;
		}
	},false)
	

	//视频上传预览
 function setVideoPreview(){
 	document.getElementById("addwrap").style.display="none";
 	document.getElementById("show_video").style.display="block";
	document.getElementById("shipin").style.display="inline-block";
	var preview, img_txt, localImag, file_head = document.getElementById("upload_video"),
            picture = file_head.value; 
//		            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?),  
//		            !1;  
            if (preview = document.getElementById("source"), file_head.files && file_head.files[0]) preview.style.display = "block",  
                preview.style.width = "100%",  
                preview.style.height = "100%",
                index=2,
                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
            else {  
                file_head.select(),  
                file_head.blur(),  
                img_txt = document.selection.createRange().text,  
                localImag = document.getElementById("add_class_miaoshu_img_3"),  
                localImag.style.width = "100%",  
                localImag.style.height = "100%";  
                try {  
                    localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
                    localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
                } catch(f) {  
                    return alert("您上传的图片格式不正确，请重新选择�?),  
                    !1  
                }  
                preview.style.display = "none",  
                document.selection.empty()  
            }   
            !0  
}

//----------------------------------------点击发布---------------------------------------------
document.getElementById("publish").addEventListener("touchstart",function(e){
        e.preventDefault();
        //alert(200);
        var content = document.getElementsByClassName("content")[0].value;
        var image = new Array;
        var file_head = document.getElementById("upload_class_miaoshu_img");//图片
        if (!file_head.files[0]) {
            file_head = document.getElementById("upload_class_miaoshu_img_2");//照相�?
        }
        if (content) {
            if (file_head.files.length>0 && file_head.files.length<21) {
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
            }
            alert(club_id);
            $.param(image);
            $.ajax({  
                url:"http://api.lizi123.cn/index.php/home/club/publishShow",
                type: 'POST',  
                data:{
                    "club_id":club_id,
                    "image":image,
                    "content":content,
                },
                success: function (data) {  
                    var obj = eval(data);
                    console.dir(obj);
                    if (obj.status==200) {
                        window.location.href="http://m.lizi123.cn/LiZi/page_club/page_club.html?club_id="+club_id;
                    }else if (obj.status==199) {
                        window.location.href = "http://m.lizi123.cn/LiZi/login/";
                    } 
                },  
                error: function (data) {  
                    alert("发布秀秀失败，请重试�?);
                }  
            });
        }else{
            alert("信息不能为空�?);
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