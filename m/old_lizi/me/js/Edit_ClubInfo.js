$(document).ready(function(){
    //获取url参数中的user_id
    var club_id = getQueryString("club_id");
    
    //社团头像
    var club_image = document.getElementById("Club_logo");
    //社团昵称
    var club_name = document.getElementsByClassName("club_name")[0];
    //社团简�?
    var club_intro = document.getElementById("pageclub_jianjie");
    //社团所属学�?
    var club_school = document.getElementsByClassName("club_school")[0];
    //社团类型
    var club_type = document.getElementById("pageclub_leixing");
    //================================社团信息显示==============================
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/club/clubDetails",
        data:{
            "id":club_id,
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementById("add_Club_logo").style.backgroundImage="none";
                club_image.width="26vw";
                club_image.height="15vh";
                club_image.style.display="inline-block";
                club_image.style.width="100%";
                club_image.style.height="100%";
                club_image.src = obj.image; 
                club_name.value = obj.name;
                club_intro.value = obj.intro;
                club_school.value = obj.school.school_name; 
                club_type.innerHTML = obj.tag.tag_name; 
            }else if(obj.status==199){
                window.location.href = "http://m.lizi123.cn/LiZi/login";
            }
        },
        error:function(data){
            alert("error!");
        },
            
    });
    
    

    //============================修改信息==============================

    document.getElementById("furnish").addEventListener("touchstart",function(e){
            e.preventDefault();
            //alert(document.getElementById("pageclub_leixing").innerHTML);
            //社团头像
            var headImage = document.getElementById("Club_logo").src;
            //社团详情图片
            var image = new Array;
            // 获取文件对象
            var formData = new FormData();
            var file_head = document.getElementById("upload_Club_logo");
            formData.append("file",file_head.files[0]);
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
                    if (obj.status==200) {
                        headImage = obj.msg;
                    } 
                },  
                error: function (data) {  
                    alert(returndata);  
                }  
            });
            //alert(headImage);
            for (var i = 1; i < 9; i++) {
                // 获取文件对象
                var formData = new FormData();
                var fileId = "upload_pageclub_photo"+i;
                var file_head = document.getElementById(fileId);
                formData.append("file",file_head.files[0]);
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
                        if (obj.status==200) {
                            image.push(obj.msg);
                        } 
                    },  
                    error: function (data) {  
                        alert(returndata);  
                    }  
                });
            };
            $.param(image);
            $.ajax({
                type:"post",
                url:"http://api.lizi123.cn/index.php/home/club/editClubInfo",
                data:{
                    "club_id":club_id,
                    "club_image":headImage,
                    "club_name":club_name.value,
                    "club_intro":club_intro.value,
                    "club_school":club_school.value,
                    "club_type":club_type.innerHTML,
                    "image":image,
                },
                success:function(data){
                    var obj = eval(data);
                    console.dir(obj);
                    if (obj.status==200) {
                        window.location.href = "http://m.lizi123.cn/LiZi/footer/footer.html?plg_nld=1&plg_uin=1&plg_auth=1&plg_nld=1&plg_usr=1&plg_vkey=1&plg_dev=1&from=singlemessage&isappinstalled=1";
                    };
                },
                error:function(data){
                    alert("error!");
                },
                    
            });
            
            
    },false);




});




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