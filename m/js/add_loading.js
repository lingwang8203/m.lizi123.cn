		var _LoadingHtml = '<div id="loadimg" style="position: fixed; z-index: 200;top: 0; left:0;background:#f3f8ff;opacity:0.8;filter:alpha(opacity=80);width: 100%;height: 100%;"><div style="width: 120px;height: 120px;margin: 50% auto;"><img src="http://img.lizi123.cn/new_lizi/2_function/loadimg.gif" style="width: 120px;height: 120px;"></div></div>';
			//呈现loading效果
		document.write(_LoadingHtml);
		//window.onload = function () {
		//  var loadingMask = document.getElementById('loadingDiv');
		//  loadingMask.parentNode.removeChild(loadingMask);
		//};
		//监听加载状态改变
		document.onreadystatechange = completeLoading;
		//加载状态为complete时移除loading效果
		function completeLoading() {
			if(document.readyState == "complete") {
				var loadingMask = document.getElementById('loadimg');
				loadingMask.parentNode.removeChild(loadimg);
			}
		}
