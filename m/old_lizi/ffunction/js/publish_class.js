//授课方式重写单选框
var class_way=new Array;
class_way=document.getElementsByName("give_class_way");
var way=0;
class_way[0].addEventListener("touchstart",function(){
	if(way==0){
		class_way[0].className="checked";
		way++;
	}
	else if(way==1){
		if(class_way[0].className=="checked"){
			class_way[0].className="unchecked";
			way=0;
		}
		else{
			class_way[0].className="checked";
			class_way[1].className="unchecked";
		}
	}
	},false);
class_way[1].addEventListener("touchstart",function(){
	if(way==0){
		class_way[1].className="checked";
		way++;
	}
	else if(way==1){
		if(class_way[1].className=="checked"){
			class_way[1].className="unchecked";
			way=0;
		}
		else{
			class_way[1].className="checked";
			class_way[0].className="unchecked";
		}
	}
	},false);
	
//授课  线上  线下
var class_address=new Array;
class_address=document.getElementsByName("give_class_address");
var address=0;
class_address[0].addEventListener("touchstart",function(){
	if(address==0){
		class_address[0].className="checked";
		address++;
	}
	else if(address==1){
		if(class_address[0].className=="checked"){
			class_address[0].className="unchecked";
			address=0;
		}
		else{
			class_address[0].className="checked";
			class_address[1].className="unchecked";
		}
	}
	},false);
class_address[1].addEventListener("touchstart",function(){
	if(address==0){
		class_address[1].className="checked";
		address++;
	}
	else if(address==1){
		if(class_address[1].className=="checked"){
			class_address[1].className="unchecked";
			address=0;
		}
		else{
			class_address[1].className="checked";
			class_address[0].className="unchecked";
		}
	}
	},false);
	
//支付方式选择
var pay_way=new Array;
pay_way=document.getElementsByName("pay");
var pay1=0,pay2=0;
pay_way[0].addEventListener("touchstart",function(){//免费
	if(pay1==0){
		pay_way[0].className="checked";
		pay1++;
	}
	else if(pay1==1){
		if(pay_way[0].className=="checked"){
			pay_way[0].className="unchecked";
			pay1--;
		}
		else{
			pay_way[0].className="checked";
			pay_way[2].className="unchecked";
		}
	}
},false);

pay_way[1].addEventListener("touchstart",function(){//交换
	if(pay2==0){
		pay_way[1].className="checked";
		pay2++;
	}
	else{
		pay_way[1].className="unchecked";
		pay2=0;
	}
},false);

pay_way[2].addEventListener("touchstart",function(){//付费
	if(pay1==0){
		pay_way[2].className="checked";
		pay1++;
	}
	else if(pay1==1){
		if(pay_way[2].className=="checked"){
			pay_way[2].className="unchecked";
			pay1--;
		}
		else{
			pay_way[2].className="checked";
			pay_way[0].className="unchecked";
		}
	}
},false);

//选择时间
var choose_time=new Array;
choose_time=document.getElementsByName("choose_time");
for(var i=0;i<choose_time.length;i++){
	choose_time[i].addEventListener("touchstart",function(e){
		e.preventDefault();
		if(this.className=="class_time_off"){
			this.className="class_time_on";
		}
		else{
			this.className="class_time_off";
		}
	},false);
}


//交换标签打开
var add_label=document.getElementById("open_change_module");
var back=document.getElementById("frame_back");
var change_module=document.getElementById("change_module");
var cancel=document.getElementById("cancel_change_module");
var confirm=document.getElementById("confirm_change_module");
var index=0;
add_label.addEventListener("touchstart",function(){
	if(index==0&&pay2==1){
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
var pay_way = document.getElementsByName("pay");
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
			e.preventDefault();
			if(this.className=="change_module_label label_back"&&label_num<3){
				this.className="change_module_label label_back_hover";
				label_num++;
			}else if (this.className=="change_module_label label_back_hover") {
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

//var img_index=1;
////预览课程图片
//      function setImagePreview() {  
//          var preview, img_txt, localImag, file_head = document.getElementById("upload_class_detais_file1"),  
//          picture = file_head.value;  
//          if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?),  
//          !1;  
//          if(img_index>=1&&img_index<=3){
//          	document.getElementById("cancel_img").style.display="inline-block";
//          if (preview = document.getElementById("preview"+img_index), file_head.files && file_head.files[0]) preview.style.display = "block",  
//              preview.style.width = "20vw",  
//              preview.style.height = "15vw",  
//              preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
//          else {  
//              file_head.select(),  
//              file_head.blur(),  
//              img_txt = document.selection.createRange().text,  
//              localImag = document.getElementById("show_class_detais_img"+img_index),  
//              localImag.style.width = "20vw",  
//              localImag.style.height = "15vw";  
//              try {  
//                  localImag.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)",  
//                  localImag.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = img_txt  
//              } catch(f) {  
//                  return alert("您上传的图片格式不正确，请重新选择�?),  
//                  !1  
//              }  
//              preview.style.display = "none",  
//              document.selection.empty() ; 
//          }  
//          img_index++;
//          if(img_index>3) img_index=1;
//      }
//  }
//      多文件上传图�?
         function setImagePreview() {  
            var preview, img_txt, localImag, file_head = document.getElementById("upload_class_detais_file1");  
//          picture = file_head.value; 
            var filelists=file_head.files;
            img_index=filelists.length;
            if(img_index<1||img_index>3)
            return alert("做多允许上传3张图�?请重新选择�?);
            var picture=new Array;
            for(var i=0;i<img_index;i++){
            	picture[i] = file_head.value;
            if (!picture[i].match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?);  
//          if(img_index>=1&&img_index<=3){
            	document.getElementById("cancel_img").style.display="inline-block";
            if (preview = document.getElementById("preview"+(i+1)), file_head.files && file_head.files[i]) 
                preview.style.display = "block",
                preview.style.width = "20vw",  
                preview.style.height = "15vw",  
                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[i]) : window.URL.createObjectURL(file_head.files[i]);  
            else {  
                file_head.select(),  
                file_head.blur(),  
                img_txt = document.selection[i].createRange().text,  
                localImag = document.getElementById("show_class_detais_img"+(i+1)),  
                localImag.style.width = "20vw",  
                localImag.style.height = "15vw";  
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
        //撤销图片
        document.getElementById("cancel_img").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	document.getElementById("preview1").style.display="none";
        	document.getElementById("preview2").style.display="none";
        	document.getElementById("preview3").style.display="none";
        	img_index=1;
        	document.getElementById("cancel_img").style.display="none";
        },false)
        
        //放大预览图片
        document.getElementById("preview1").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	document.getElementById("zoom_preview").style.display="block";
        	document.getElementById("zoom_img").src=this.src;
        },false);
        document.getElementById("preview2").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	document.getElementById("zoom_preview").style.display="block";
        	document.getElementById("zoom_img").src=this.src;
        },false);
        document.getElementById("preview3").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	document.getElementById("zoom_preview").style.display="block";
        	document.getElementById("zoom_img").src=this.src;
        },false);
        document.getElementById("cover_img").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	document.getElementById("zoom_preview").style.display="block";
        	document.getElementById("zoom_img").src=this.src;
        },false);
        
        document.getElementById("zoom_preview").addEventListener("touchstart",function(e){
        	e.preventDefault();
        	this.style.display="none";
        },false)
        
        
        
//预览封面图片
function setCoverImage(){
	document.getElementById("show_img").style.display="inline-block";
	var preview, img_txt, localImag, file_head = document.getElementById("pub_img"),
            picture = file_head.value; 
            document.getElementById("cancel_cover_img").style.display="inline-block";
            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择�?),  
            !1;  
            if (preview = document.getElementById("cover_img"), file_head.files && file_head.files[0]) preview.style.display = "block",  
                preview.style.width = "30vw",  
                preview.style.height = "24vh",  
                preview.src = window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  
            else {  
                file_head.select(),  
                file_head.blur(),  
                img_txt = document.selection.createRange().text,  
                localImag = document.getElementById("show_img"),  
                localImag.style.width = "30vw",  
                localImag.style.height = "24vh";  
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


//撤销封面图片
document.getElementById("cancel_cover_img").addEventListener("touchstart",function(e){
	e.preventDefault();
	document.getElementById("show_img").style.display="none";
	document.getElementById("cancel_cover_img").style.display="none";
},false);



//完成
$("#furnish").click(function(){
	alert("js");

	/*
	//用户id
	var user_id = 1; 
	//课程�?
	var name = document.getElementById("pub_class_header").value; 
	//课程简�?
	var intro = document.getElementById("intro").value; 
	if (intro.length>200) {
		alert("描述字数超过限制!");
		return;
	};
	//授课方式
	var class_way=document.getElementsByName("give_class_way"); 
	if (class_way[0].className=="checked") {
		var way = 1;//一对一
	}else{
		var way = 0;//一对多
	}
	
	var give_class_address = document.getElementsByName("give_class_address"); 
	if (give_class_address[0].className=="checked") {
		var method = 0;//线上
	}else{
		var method = 1;//线下
	}
	//付费方式
	var pay_way = document.getElementsByName("pay");
	if (pay_way[0].className=="checked") {
		var sale_type = 0;//免费
	}else if (pay_way[1].className=="checked") {
		var sale_type = 2;//交换
		var choose_tag = new Array;//存储选择交换的课程id
		var change_label = document.getElementsByName("change_label");
		for (var i = 0; i < change_label.length; i++) {
			if (change_label[i].className=="change_module_label label_back_hover") {
				choose_tag.push(change_label[i].value);
			};
		};
	}else{
		var sale_type = 1;//付费
	}
	//上课时间
	var time = new Array;
	var choose_time=document.getElementsByName("choose_time");
	for(var i=0;i<choose_time.length;i++){
		//alert(choose_time[i].className);
		if(choose_time[i].className=="class_time_on"){
			time.push(i);
		}
	}
	time = time.toString();
	//每周课时
	var class_hours = document.getElementById("class_hours").value;
	//持续周数
	var class_weeks = document.getElementById("class_weeks").value;
	//上课地点
	var class_address = document.getElementById("class_address").value;
	/*
	$.ajax({
            type:"post",
            traditional:true,//传参为数�?
            url:"http://api.lizi123.cn/index.php/home/skill/selectRes",
            data:{
                "user_id":,
            },
            success:function(data){
                var obj = eval(data);
            },
            error:function(data){
                alert("error!");
            },
            
    });*/


	//封面上传
	// 获取文件对象
	//var formData = new FormData($( "#form_img" )[0]);  
	var formData = new FormData();
	var file_head = $("#pub_img");
	formData.append("file",file_head[0].files[1]);
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
            alert(obj.status);  
        },  
        error: function (data) {  
            alert(returndata);  
        }  
    });


});