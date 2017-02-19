$(document).ready(function(){
    selectRes(1);
    getType();
    $("#club_label_push").text("");
    /***************************点击标签*************************/
    var club_label=new Array;
    var select;

    club_label=document.getElementsByName("function_club_label");
    for (var i=0;i<club_label.length;i++) {
        club_label[i].addEventListener("touchstart",function(e){
            e.preventDefault();
            if(this.className=="aui-label tap_nor aui-font-size-12 aui-col-xs-12"){
            	for(var m=0;m<club_label.length;m++){
            		club_label[m].className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
            	}
                this.className="aui-label tapp aui-font-size-12 aui-col-xs-12"; 
                select=this.value;
            }else{         
                this.className="aui-label tap_nor aui-font-size-12 aui-col-xs-12";
                select="";
            }
            selectRes(select);
        },false);
    }
    
    
});
    

/***************************获取标签***************************/
function getType(){
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/clubType",
        data:{
        	"client_type":0
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if (obj.status==200) {
                var club_label=new Array;
                club_label = document.getElementsByName("function_club_label");
                for (var i=0;i<club_label.length;i++) {
                    club_label[i].innerHTML = obj[i].type_name;
                    club_label[i].value = obj[i].id;
                }
            };
        },
        error:function(data){
        	getType();
        },
            
    });

}

	
//===========================获取筛选结果列表=================================
function selectRes(type_id){
    if (type_id) {
        $.ajax({
            type:"post",
	        url:"http://api.lizi123.cn/index.php/home/club/clubSelectRes",
	        data:{
	        	"client_type":0,
	        	"type_id":type_id
	        },
	        xhrFields: {
	            withCredentials: true
	        },
	        success:function(data){
	            var obj = eval(data);
	            console.dir(obj);
                if (obj.status==200) {
                    $("#club_label_push").text("");
                    selectResShow(obj);
                }else{
                    $("#club_label_push").text("");
                    var nullRes = "<div class='hotRe'>";
                    nullRes += "<p class='title'style='width: 80%;'>无筛选结果!</p>";
                    nullRes += "</div>";
                    $("#club_label_push").append(nullRes);
                }
            },
            error:function(data){
                //alert("error!");
            },
            
        });
    }else{
        $("#club_label_push").text("");
        var nullRes = "<div class='hotRe'>";
        nullRes += "<p class='title'style='width: 80%;'>无筛选结果!</p>";
        nullRes += "</div>";
    	$("#club_label_push").append(nullRes);
    }
    
}



//---------------------筛选结果展示------------------------------------
function selectResShow(obj){
    //未进行参数检查
    for (var i = 0; i < obj.length; i++) {
        var html="<li class='aui-row' style='border: 0.05rem solid #D9D9D9;border-radius:0.5rem;margin: 0.5rem 0.3rem;padding: 0.3rem 0.2rem;'>";
   		html+="<a href='http://m.lizi123.cn/2_function/22_function_club/222_function_club_concret.html?club_id="+obj[i].id+"' target='_blank'>";
        html+="<div class='aui-col-xs-2 aui-text-center'>";
        html+="<img src='"+obj[i].image+"' class='aui-img-round club_photo_suit' /></div>";
   		html+="<div class='aui-col-xs-8 aui-padded-l-5'>";
   		html+="<div class='aui-col-xs-12 aui-font-size-16'>"+obj[i].name+"</div>";
   		html+="<div class='aui-col-xs-12 aui-font-size-12' style='color:#666666;'>"+obj[i].sign+"</div>";
   		html+="<div class='aui-col-xs-12'>";
   		html+="<i class='aui-icon-my aui-iconfont aui-pull-left'></i>";
   		html+="<div class='aui-font-size-12 aui-pull-left aui-padded-l-5' style='padding-top: 0.1rem;color:#666666;'><span style='color:#ffcb53;'> "+obj[i].member_num+"人 </span>已加入</div>";
   		html+="</div></div> <div class='aui-col-xs-2 aui-pull-right'>";
   		html+="<div class='aui-pull-right aui-label lab aui-font-size-12 aui-label-outlined tap_on' style='margin-top: 0.1rem;'>申请加入</div></a>";
   		html+="<div class='aui-bar-ligh-col-xs-12'>";
   		html+="<i class='aui-iconfont aui-icon-right aui-pull-right aui-padded-r-10'></i>";
   		html+="</div></div></a></li>";
       	$("#club_label_push").append(html);
    }

}
