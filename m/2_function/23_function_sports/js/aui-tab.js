
(function( window, undefined ) {
    "use strict";
    var auiTab = function(params,callback) {
    	this.extend(this.params, params);
        this._init(callback);
    };
    var tabItems;
    auiTab.prototype = {
        params: {
            element: false,
            index: 1, //默认选中
            repeatClick: false //是否允许重复点击
        },
        _init: function(callback) {
        	var self = this;
        	if(!self.params.element || self.params.element.nodeType!=1){
        		return;
        	}
        	tabItems = self.params.element.children;
        	if(tabItems){
        		self.setActive();
        		for(var i=0; i<tabItems.length; i++){
        			tabItems[i].setAttribute("tapmode","");
        			tabItems[i].setAttribute("data-item-order",i);
        			tabItems[i].onclick = function(e){
                        if(!self.params.repeatClick){
                            if(this.className.indexOf("aui-active") > -1)return;
                        }
        				if(callback){
                            callback({
                                index: parseInt(this.getAttribute("data-item-order"))+1,
                                dom:this
                            })
                        };
        			this.parentNode.querySelector(".aui-active").classList.remove("aui-active");
            			this.classList.add("aui-active");
            			if(this.id=="frame1")
            			{document.getElementById("ifram").src="2321_function_sports_concret_frame1.html?activity_id="+activity_id;
            			document.getElementById("publish_sport_huaxu").style.display="none";}
            			else if(this.id=="frame2")
            			{document.getElementById("ifram").src="2322_function_sports_concret_frame2.html?activity_id="+activity_id;
            			document.getElementById("publish_sport_huaxu").style.display="block";}
            			else if(this.id=="frame3")
            			{document.getElementById("ifram").src="2323_function_sports_concret_frame3.html?activity_id="+activity_id;
            			document.getElementById("publish_sport_huaxu").style.display="none";}
        			}
        		}
        	}
        },
        setRepeat:function(value){
            var self = this;
            self.params.repeatClick = value ? value : false;
        },
        setActive: function(index){
        	var self = this;
        	index = index ? index : self.params.index;
        	var _tab = tabItems[index-1];
        	if(_tab.parentNode.querySelector(".aui-active"))_tab.parentNode.querySelector(".aui-active").classList.remove("aui-active");
        	_tab.classList.add("aui-active");
        },
        extend: function(a, b) {
			for (var key in b) {
			  	if (b.hasOwnProperty(key)) {
			  		a[key] = b[key];
			  	}
		  	}
		  	return a;
		}
    };
	window.auiTab = auiTab;
})(window);