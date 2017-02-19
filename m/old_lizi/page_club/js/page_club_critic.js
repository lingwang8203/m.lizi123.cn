var preview="";
var index=0;
var user_name;
window.onload=function(){
	var box=document.getElementById("pinglunbox");
	var pinglun=document.getElementById("comment");
	var fasong=document.getElementById("fasong");
	var critic=document.getElementsByClassName("critic");
	//////////////评论栏打开
		pinglun.index=0;
		pinglun.addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				box.style.display="block";
				this.index=1;
			}
			else{
				box.style.display="none";
				this.index=0;
			}
		},false);
	
	//////////////////////评论回复
	for(var i=0;i<critic.length;i++){
		critic[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			box.style.display="block";
			user_name=this.children[1].children[0].children[0].innerHTML;
			pinglun.index=0;
		},false);
	}
	
	fasong.addEventListener("touchstart",function(e){
		e.preventDefault();
		if(pinglun.index==1){
		var critic=document.getElementById("critic").value;
		if(critic.length<=0&&index==0)
			return alert("输入字数不足");
		else{
			if(index==1){
			var html="<div class='critic'><img src='../ffunction/img/concret/toupiao4.png'><div class='critic_right'><div class='top'><p>吃货小魔女</p><span>520</span><img src='../ffunction/img/concret/dianzan1.png' /><span style='margin-right: 3vw;'>24分钟前</span></div><div class='bottom'><p>"+critic+"</p><img src='"+preview+"'></div></div></div>";
			$(".pinglunlist").eq(0).append(html);
			}else{
				var html="<div class='critic'><img src='../ffunction/img/concret/toupiao4.png'><div class='critic_right'><div class='top'><p>吃货小魔女</p><span>520</span><img src='../ffunction/img/concret/dianzan1.png' /><span style='margin-right: 3vw;'>24分钟前</span></div><div class='bottom'><p>"+critic+"</p></div></div></div>";
				$(".pinglunlist").eq(0).append(html);
			}
		}
		}
		else if(pinglun.index==0){
			var critic=document.getElementById("critic").value;
			if(critic.length<=0&&index==0)
			return alert("输入字数不足");
			else{
				if(index==1){
					var html="<div class='critic'><img src='../ffunction/img/concret/toupiao4.png'><div class='critic_right'><div class='top'><p>吃货小魔女</p><span>520</span><img src='../ffunction/img/concret/dianzan1.png' /><span style='margin-right: 3vw;'>24分钟前</span></div><div class='bottom'><p><b>@"+user_name+"</b>"+critic+"</p><img src='"+preview+"'></div></div></div>";
					$(".pinglunlist").eq(0).append(html);
				}else{
					var html="<div class='critic'><img src='../ffunction/img/concret/toupiao4.png'><div class='critic_right'><div class='top'><p>吃货小魔女</p><span>520</span><img src='../ffunction/img/concret/dianzan1.png' /><span style='margin-right: 3vw;'>24分钟前</span></div><div class='bottom'><p><b>@"+user_name+"</b>"+critic+"</p></div></div></div>";
					$(".pinglunlist").eq(0).append(html);
				}
			}
		}
		document.getElementById("critic").value="";
		var h = document.documentElement.scrollHeight || document.body.scrollHeight;
		window.scrollTo(h,h);
		index=0;
		box.style.display="none";
		pinglun.index=0;
	},false);
	
	////////////////点赞数
	var zan=document.getElementsByName("zan");
	for(var i=0;i<zan.length;i++){
		zan[i].index=0;
		zan[i].addEventListener("touchstart",function(e){
			e.preventDefault();
			if(this.index==0){
				this.src="../ffunction/img/concret/dianzan.png";
				this.index=1;
				var zan_num=this.previousElementSibling.innerHTML;
				this.previousElementSibling.innerHTML=parseInt(zan_num)+1;
			}
			else{
				this.src="../ffunction/img/concret/dianzan1.png";
				this.index=0;
				var zan_num=this.previousElementSibling.innerHTML;
				this.previousElementSibling.innerHTML=parseInt(zan_num)-1;
			}
		},false)
	}
	
	
}


function setImage(){
	var img_txt, localImag, file_head = document.getElementById("upload_img"),
            picture = file_head.value; 
            if (!picture.match(/.jpg|.gif|.png|.bmp/i)) return alert("您上传的图片格式不正确，请重新选择！"),  
            !1;  
            index=1;
            preview= window.navigator.userAgent.indexOf("Chrome") >= 1 || window.navigator.userAgent.indexOf("Safari") >= 1 ? window.webkitURL.createObjectURL(file_head.files[0]) : window.URL.createObjectURL(file_head.files[0]);  

}