/*20091205 Design By Marcho,ryeen.com*/	
	var faceUrl="gif_file/gif_picture/" //头像路径
	var faceLeft=450 //定义距离输入框的相对左边距
	var faceNums=39  //定义表情数量
I();
C();
G(fileID);

//窗口改变时自动调整位置
$(window).resize(function(){
G(fileID,faceLeft);
});

//将表情标题及内容写入BODY
function I() {	
	msg="<style>#faceContent{width:364px; position:absolute;border:1px solid #aaa;border-top:none;display:none;z-index:9999; text-align:center;padding:3px;padding-bottom:6px;background:#fff;} #faceContent a img{float:left;cursor:pointer;margin:1px 1px; border:#cacaca 1px solid}  #faceContent a:hover img{border:1px solid #f51d69}   #faceTitle{height:22px; width:36px; position:absolute; background:url(../img/bq.png) no-repeat center center #fff;border-bottom:none;'}</style>"
	msg=msg+"<div id='faceTitle' title='表情' style='cursor:pointer'></div>"
	msg=msg+"<div id='faceContent'></div>"
	$("body").append(msg);
}

//将表情循环插入页面中
function IF() {	
	$("#faceContent").html("");
	for(var i=1;i<=faceNums;i++){
		str=faceUrl+"F_"+i+".gif";
		$("#faceContent").append("<a href='javascript:'><img src="+str+" fn=[@F_"+i+"@] /></a>");
	}
}

//控制表情区位置
function G(obj) {	
	var O=$("#"+obj).offset();
	var top=O.top;
	var left=O.left;
	$("#faceTitle").css("top",top+"px");
	$("#faceTitle").css("left",left-40+"px");
	$("#faceContent").css("top",top+"px");
	$("#faceContent").css("left",left+"px");
}


//表情点击显示效果
function C(){
	$("#faceTitle").click(
	function(event){
	$("#faceContent").toggle();
	IF();
	$("#faceContent img").click(function(){
	$("#"+textId).append($(this).attr("fn"))	
	})
	event.stopPropagation();
	});
	$("body").click(
	function(){
	$("#faceContent").hide();
	});
}