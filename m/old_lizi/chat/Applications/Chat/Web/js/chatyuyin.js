
  wx.hideAllNonBaseMenuItem();
  wx.ready(function () {
    // 在这里调用 API
      var voice = {
        localId: '',
        serverId: ''
    };
    var isPlaying = false;
      document.querySelector('#startRecord').ontouchstart = function () {
       event.preventDefault();
    wx.startRecord({
      cancel: function () {
        alert('用户拒绝授权录音');
      }
    });
  };
  document.querySelector('#startRecord').ontouchend = function () {
  	
    wx.stopRecord({
      success: function (res) {
        voice.localId = res.localId;
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
  };
      // 上传语音
  document.querySelector('#uploadVoice').ontouchend = function () {
  	 event.preventDefault();
  	 wx.uploadVoice({
      localId: voice.localId,
      success: function (res) {
        alert('上传语音成功，serverId 为' + res.serverId);
        voice.serverId = res.serverId;
      }
    });
  };
  // 下载语音
  document.querySelector('#downloadVoice').onclick = function () {
  	alert(voice.localId);
    if (voice.serverId == '') {
      alert('请先使用 uploadVoice 上传声音');
      return;
    }
    wx.downloadVoice({
      serverId: voice.serverId,
      success: function (res) {
        alert('下载语音成功，localId 为' + res.localId);
        voice.localId = res.localId;
      }
    });
  };
  
   //单击一次播放音频，第二次停止播放
  document.querySelector('#playVoice').onclick = function () {
    if(isPlaying){
    	    wx.stopVoice({
      localId: voice.localId
    });
      isPlaying = false;
    }else{
    	  
    	    wx.playVoice({
      localId: voice.localId
    });
  	isPlaying = true;
  	}
  }; 
  });