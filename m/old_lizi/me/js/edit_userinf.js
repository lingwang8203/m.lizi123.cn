$(document).ready(function(){
    //用户头像
    var user_image = document.getElementById("Club_logo");
    //用户昵称
    var user_nickname = document.getElementsByClassName("nickname")[0];
    //用户简�?
    var user_intro = document.getElementById("pageclub_jianjie");
    //用户学校
    var user_school = document.getElementsByClassName("school")[0];

    //================================用户信息显示==============================
	$.ajax({
        type:"post",
        url:"http://api.lizi123.cn/index.php/home/user/userInfo",
        data:{
        },
        success:function(data){
            var obj = eval(data);
            console.dir(obj);
            if(obj.status==200){
                document.getElementById("add_Club_logo").style.backgroundImage="none";
                user_image.width="26vw";
                user_image.height="15vh";
                user_image.style.display="inline-block";
                user_image.style.width="100%";
                user_image.style.height="100%";
                user_image.src = obj.user_image;
                user_nickname.value = obj.user_nickname;
                user_intro.value = obj.user_intro;
                user_school.value = obj.school_name;  
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
            var image = document.getElementById("Club_logo").src;
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
                        image = obj.msg;
                    } 
                },  
                error: function (data) {  
                    alert(returndata);  
                }  
            });
            
            if (user_nickname.value) {
                $.ajax({
                    type:"post",
                    url:"http://api.lizi123.cn/index.php/home/user/editUserInfo",
                    data:{
                        "user_image":image,
                        "user_nickname":user_nickname.value,
                        "user_intro":user_intro.value,
                        "user_school":user_school.value,
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
            }else{
                alert("昵称不能为空�?);
            }
            
    },false);




});




