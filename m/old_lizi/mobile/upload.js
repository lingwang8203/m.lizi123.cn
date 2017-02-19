wx.ready(function(){
	$("#chooseImage").click(function()
        {
                        wx.chooseImage({
                            count: 9, // 默认9
                            success: function (res) {
                                images.localId = res.localIds;

                                //upload
                                var i = 0, length = images.localId.length;
                                images.serverId = [];

                                var time = new Date().getTime();
                                var tag = time + "_" + Math.random();

                                upload();

                                function upload()
                                {
                                    wx.uploadImage({
                                        localId: images.localId[i],
                                        success: function (res) {
                                            i++;

                                            $.get("download_img.php?MediaID="+res.serverId+"&tag=" + tag,function(data,status){

                                                if (i == length)
                                                {
                                                    setTimeout(function () {
                                                        var msg2server = '{"tag":"'+tag+'"}';
                                                        var str1 = '{"type": "send_msg", "client_type": "html","app_name":"'+app_name+'","mid":"'+mid+'","msg":'+msg2server+'}';

                                                        ws.send( str1 );

                                                         $(".main1").addClass('main1-end');
                                                         $(".main2-begin").addClass('main2-end');

                                                       // mySwiper.slideNext(false,1000);		//页面滚动到下一页

                                                    });//延迟两秒
                                                }
                                            });


                                            images.serverId.push(res.serverId);

                                            if (i < length)
                                            {
                                                upload();
                                            }

                                        },
                                        fail: function (res)
                                        {
                                            alert(JSON.stringify(res));
                                        }
                                    });
                                }
                                //end of upload
                            }
                        });
                    }
                });
           }
      });
      
    //语音
	var voice = {
    	localId: '',
        serverId: ''
    };
    document.querySelector('#yuyin').ontouchstart = function () {
       event.preventDefault();
    wx.startRecord({
      cancel: function () {
        alert('用户拒绝授权录音');
      }
    });
  };
  document.querySelector('#yuyin').ontouchend = function () {
  	
    wx.stopRecord({
      success: function (res) {
        voice.localId = res.localId;
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
    wx.uploadVoice({
      localId: voice.localId,
      success: function (res) {
        alert('上传语音成功，serverId 为' + res.serverId);
        voice.serverId = res.serverId;
         $.get("download_voice.php?MediaID="+res.serverId+"&tag=" + tag,function(data,status){

         if (i == length)
         {
         setTimeout(function () {
          var msg2server = '{"tag":"'+tag+'"}';
          var str1 = '{"type": "send_msg", "client_type": "html","app_name":"'+app_name+'","mid":"'+mid+'","msg":'+msg2server+'}';

          ws.send( str1 );

          $(".main1").addClass('main1-end');
          $(".main2-begin").addClass('main2-end');

          // mySwiper.slideNext(false,1000);		//页面滚动到下一页

            });//延迟两秒
            }
            });


           voice.serverId.push(res.serverId);

           if (i < length)
           {
            upload();
           }        
      }
    });
   //把录音在微信服务器上的id（res.serverId）发送到自己的服务器供下载。(2)
   //         $.ajax({
   //             url: 'http://file.api.weixin.qq.com/cgi-bin/media/upload?access_token=<?php{$access_token}?>&type=voice',
   //             type: 'post',
   //             data: JSON.stringify(res),
   //             dataType: "json",
   //             success: function (data) {
   //                 alert('文件已经保存到阿里云服务器');
   //             },
   //             error: function (xhr, errorType, error) {
   //                 console.log(error);
   //             }
   //         });
});
