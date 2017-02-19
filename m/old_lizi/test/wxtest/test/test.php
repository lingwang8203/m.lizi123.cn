<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx2e0779fc5b8d4454", "1609838f5fae1774a3f1dc78a21f65c3");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>图片测试</title>
		<script type="text/javascript" src="__STATIC__/jquery-2.0.3.min.js"></script>
    <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<form action="{:U('doJoin')}"  method="post">
<h3 class="title">参赛人员照片：</h3>
                <div>   
                   <img class="preview" src="{$vote.vote_pic|get_cover='thumb'}" alt="">
                   <if condition="!$vote['status']" ><button class="uploadImage" type="button" id="vote_pic">点击上传（建议上传800*600的png,jpg,或者gif格式图片）</button></if>
                   <input type="hidden" name="vote_pic">                   
                </div>
<button class="bbon" type="submit" id="submit">提交</button>
</form>
<script>  
 wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
    // 所有要调用的 API 都要加到这个列表中
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage'
    ]
  });
  wx.ready(function () {
// 5.1 拍照、本地选图
      var images = {
        localId: [],
        serverId: []
      };

// 5.3 上传图片
$(".uploadImage").click(function(){
        var that =$(this);
        images.localId = [];
        wx.chooseImage({
          success: function (res) {
            images.localId = res.localIds;
            if (images.localId.length == 0) {
                alert('请先使用 chooseImage 接口选择图片');
                return;
            }
            if(images.localId.length > 1) {
                alert('目前仅支持单张图片上传,请重新上传');
                images.localId = [];
                return;
            }
            var i = 0, length = images.localId.length;
            images.serverId = [];
            function upload() {
                         wx.uploadImage({
                                    localId: images.localId[i],
                                    success: function (res) {
                                        i++;                             
                                       that.siblings('img.preview').attr('src',images.localId[0]);
                                        // alert('已上传：' + i + '/' + length);                                       
                                        images.serverId.push(res.serverId);
                                        that.siblings('input[type=hidden]').val(images.serverId[0]);
                                        // alert( that.siblings('input[type=hidden]').val());
                                        if (i < length) {
                                                upload();
                                        }
                                    },
                                    fail: function (res) {
                                                alert(JSON.stringify(res));
                                     }
                          });
            }
            upload();
          }
        });
});
        

$("#submit").click(function(){
    $.ajax({
            type: 'post',
            url: $("form").attr('action')  ,
            data : $("form").serialize(),
            dataType: 'json',
            success : function(data){
                    if(data.status){
                                       alert(data.info);
                                       window.location.href = data.url;      
                    }else{                      
                    }
                    
                                            
            }
        });
    return false;
})     
  });
</script>
	</head>
	<body>
		
	</body>
</html>
