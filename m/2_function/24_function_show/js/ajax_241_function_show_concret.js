$(document).ready(function() {
	show_id = getQueryString('show_id');
	showInfo(show_id);
	showComments(show_id);
})

function showInfo(show_id) {
	$.ajax({
		type: "post",
		url: "http://api.lizi123.cn/index.php/home/index/showInfo",
		xhrFields: {
			withCredentials: true
		},
		data: {
			"client_type": 0,
			"show_id": show_id
		},
		success: function(data) {
			var obj = eval(data);
			console.dir(obj);
			if(obj.status == 200) {
				online_user_name = obj.online_user_info.user_name;
				online_user_image = obj.online_user_info.head_image;
				document.getElementById("headImg").src = obj.user_info.head_image;
				document.getElementById("name").innerHTML = obj.user_info.user_name;
				document.getElementById("time").innerHTML = obj.time;
				document.getElementById("text").innerHTML = obj.intro;
				document.getElementById("intro").innerHTML = obj.user_info.intro;
				document.getElementById("critic_number").innerHTML = obj.comment_num;
				document.getElementById("zan_number").innerHTML = obj.good_num;
				//if(obj.zan_index==0){////////0未赞  1已赞
				document.getElementById("zan_index").src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_big_good.png";
				/*}else{
					document.getElementById("zan_index").src="http://img.lizi123.cn/new_lizi/2_function/23_function_sports/yizan.png";
				}
				http://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg?x-oss-process=image/crop,x_100,y_50*/
				if(obj.is_collect == 0) {
					document.getElementById("shoucang_index").src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_like.png";
				} else {
					document.getElementById("shoucang_index").src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_liked.png";
				}
				$("#photo_box").text("");
				var html = "";
				var pos_crop_w = new Array();
				var pos_crop_h = new Array();
				var image_H = new Array;
				var image_W = new Array;
				var img_h = new Array;
				var img_w = new Array;
				var w_count = new Array;
				var h_count = new Array;
				
				var img_linklist="image_length="+obj.image.length+"&";
				for(var i=0;i<obj.image.length;i++){
					
					if(i==obj.image.length-1){
					img_linklist+=i+"="+obj.image[i];
					}
					else{
						img_linklist+=i+"="+obj.image[i]+"&";
					}
					
				}
				
				//alert(img_linklist);
				
				if(obj.image.length == 1) {

					var img_h = 9 * 20;
					var image_W = getQueryString('W');
					var image_H = getQueryString('H');
					var img_w = image_W * img_h / image_H;

					html += "<a href='http://m.lizi123.cn/2_function/24_function_show/photo_slide.html?first_img=0&" + img_linklist + "' style='height:9rem;width: 100%;'><img src='" + obj.image[0] + "' style='height:9rem;border-radius:0.5rem;' width='" + img_w + "' id='show_img' /></a>";

				} else if(obj.image.length == 2) {

					for(var j = 0; j < obj.image.length; j++) {
						var browser_w = document.documentElement.clientWidth;
						browser_w = browser_w * 0.33333;
						pos_crop_w[j] = 0;
						pos_crop_h[j] = 0;

						image_H[j] = obj.image[j].match(/H=(\S*)&/)[1];
						image_W[j] = obj.image[j].match(/&W=(\S*)/)[1];

						w_count[j] = image_W[j] / browser_w;
						h_count[j] = image_H[j] / browser_w;

						//img_w[j] = img_h[j] * img_W[j] / img_H[j];
						img_w[j] = image_W[j];
						img_h[j] = image_H[j];
						if(w_count[j] >= h_count[j]) {
							img_w[j] = browser_w * h_count[j];
							pos_crop_w[j] = (image_W[j] - img_w[j]) / 2;
							//img_h[j] = img_w[j] * img_H[j] / img_W[j];
						} else {
							img_h[j] = browser_w * w_count[j];
							pos_crop_h[j] = (image_H[j] - img_h[j]) / 2;

						}

						pos_crop_w[j] = parseInt(pos_crop_w[j]);
						pos_crop_h[j] = parseInt(pos_crop_h[j]);
						img_w[j] = parseInt(img_w[j]);
						img_h[j] = parseInt(img_h[j]);
						obj.image[j] = obj.image[j].split('?')[0]; //图片地址

						html += "<div class='aui-col-xs-4 aui-text-center'>";
						html += "<a href='http://m.lizi123.cn/2_function/24_function_show/photo_slide.html?first_img="+j+"&" + img_linklist + "' style='height:9rem;width: 100%;'><img style='margin-bottom: 0.2rem;border-radius:0.5rem;' src='" + obj.image[j] + "?x-oss-process=image/crop,x_" + pos_crop_w[j] + " ,y_" + pos_crop_h[j] + ",w_" + img_w[j] + ",h_" + img_h[j] + " ' width='95%' height=";
						html += 0.95 * browser_w +"/></a>";
						html += "</div>";
                    }
					html += "</div>";

				} else if(obj.image.length >= 3) {

					for(var j = 0; j < obj.image.length; j++) {
						var browser_w = document.documentElement.clientWidth;
						browser_w = browser_w * 0.33333;
						pos_crop_w[j] = 0;
						pos_crop_h[j] = 0;

						image_H[j] = obj.image[j].match(/H=(\S*)&/)[1];
						image_W[j] = obj.image[j].match(/&W=(\S*)/)[1];

						w_count[j] = image_W[j] / browser_w;
						h_count[j] = image_H[j] / browser_w;

						//img_w[j] = img_h[j] * img_W[j] / img_H[j];
						img_w[j] = image_W[j];
						img_h[j] = image_H[j];
						if(w_count[j] >= h_count[j]) {
							img_w[j] = browser_w * h_count[j];
							pos_crop_w[j] = (image_W[j] - img_w[j]) / 2;
							//img_h[j] = img_w[j] * img_H[j] / img_W[j];
						} else {
							img_h[j] = browser_w * w_count[j];
							pos_crop_h[j] = (image_H[j] - img_h[j]) / 2;

						}

						pos_crop_w[j] = parseInt(pos_crop_w[j]);
						pos_crop_h[j] = parseInt(pos_crop_h[j]);
						img_w[j] = parseInt(img_w[j]);
						img_h[j] = parseInt(img_h[j]);
						obj.image[j] = obj.image[j].split('?')[0]; //图片地址

						html += "<div class='aui-col-xs-4 aui-text-center'>";//imgurl=" + obj.image[j] + "'
						html += "<a href='http://m.lizi123.cn/2_function/24_function_show/photo_slide.html?first_img="+j+"&" + img_linklist + "' style='height:9rem;width: 100%;'>";
						html += "<img style='margin-bottom: 0.2rem;border-radius:0.5rem;' src='" + obj.image[j] + "?x-oss-process=image/crop,x_" + pos_crop_w[j] + " ,y_" + pos_crop_h[j] + ",w_" + img_w[j] + ",h_" + img_h[j] + " ' width=";
						html += browser_w*0.95 + " height=";
						html += browser_w*0.95 +"/>"; 
						html += "</a></div>";
                    }
					html += "</div>";

				}
				$("#photo_box").append(html);
			} else if(obj.status == 199) {
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error: function(data) {
			//alert("失败！");
		},
	});

}

function showComments(show_id) {
	$.ajax({
		type: "post",
		url: "http://api.lizi123.cn/index.php/home/index/showComments",
		xhrFields: {
			withCredentials: true
		},
		data: {
			"client_type": 0,
			"show_id": show_id
		},
		success: function(data) {
			var obj = eval(data);
			console.dir(obj);
			if(obj.status == 200) {
				//加载评论
				$("#critic_list").text("");
				for(var j = 0; j < obj.length; j++) {
					var length1 = $(".answer_critic").length;
					var htm = "<li>";
					htm += "<div class='aui-col-xs-12 aui-row aui-padded-t-5 aui-padded-b-5'>";
					htm += "<div class='aui-col-xs-2 aui-text-center' style='margin-top: 0.1rem;'>";
					htm += "<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id=" + obj[j].user_info.id + "'target='_blank'><img src='" + obj[j].user_info.head_image + "' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a></div>";
					htm += "<div class='aui-row aui-col-xs-10'><div class='aui-col-xs-12 aui-row aui-padded-t-5'>";
					htm += "<div class='aui-col-xs-10 aui-font-size-14'>" + obj[j].user_info.user_name + "</div>	";
					htm += "<div class='aui-col-xs-2 aui-font-size-14' id='time'>" + obj[j].time + "</div></div>";
					htm += "<div name='critic_text'>";
					htm += "<div class='aui-col-xs-12 aui-font-size-14'style='display: inline-block !important;'>" + obj[j].content + "</div></div>";
					htm += "<div class='aui-row aui-col-xs-12'><div class='aui-col-xs-2 aui-row aui-pull-left'>";
					htm += "<img id=" + obj[j].id + " src='http://img.lizi123.cn/new_lizi/2_function/24_function_show/ic_small_good.png' class='small_good' name='critic_zan'/>";
					htm += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj[j].good_num + "</span></div>";
					htm += "<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left' tapmode onclick='openCriticDialog(\"input\"," + length1 + "," + obj[j].id + ")'>";
					htm += "<i class='aui-iconfont aui-icon-comment'></i>";
					htm += "<span class='aui-font-size-12' style='padding-left:4px !important;' >" + obj[j].comment_num + "</span></div></div>";
					/////////////////加载评论的回复
					htm += '<div class="aui-padded-t-5 answer_critic">';
					for(var k = 0; k < obj[j].reply.length; k++) {
						htm += '<div tapmode onclick="openReplyCriticDialog(\'input\',' + j + ',' + m + ',' + obj[j].reply[k].id + ')" class="aui-col-xs-12 aui-font-size-14"><span style="color: blue;">' + obj[j].reply[k].user_name + ':</span>';
						htm += "<span style='color: blue;'></span>";
						htm += '<span style="word-break: break-all;">' + obj[j].reply[k].content + '</span>';
						htm += "</div>";
					}
					for(var k = 0; k < obj[j].reply.length; k++) {
						//////////评论的评论回复
						for(var m = 0; m < obj[j].reply[k].reply_reply.length; m++) {
							htm += '<div class="aui-col-xs-12 aui-font-size-14" tapmode onclick="openReplyCriticDialog(\'input\',' + j + ',' + m + ',' + obj[j].reply[k].reply_reply[m].id + ')">';
							htm += '<span style="color: blue;">' + obj[j].reply[k].reply_reply[m].user_name + ':@</span>';
							htm += "<span style='color: blue;padding-left:3px;'>" + obj[j].reply[k].user_name + "</span>";
							htm += '<span style="word-break: break-all;padding-left:3px;">' + obj[j].reply[k].reply_reply[m].content + '</span>';
							htm += "</div>";
						}
					}
					htm += "</div></div></div><div class='aui-hr'></div></li>";
					$("#critic_list").append(htm);
				}

			} else if(obj.status == 199) {
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error: function(data) {
			//alert("失败！");
		},
	});
}
window.onload = function(e) {
	/*document.getElementById("headImg").addEventListener("touchstart",function(e){
		e.preventDefault();
		window.location.href="../../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id"+user_id;
	},false)*/

	
		/////////////////////////更改收藏状态
	document.getElementById("shoucang_index").addEventListener("touchstart", function(e) {
		e.preventDefault();
		if(this.src == "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_like.png") {
			this.src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_liked.png";

			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/index/showCollect",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"show_id": show_id
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {} else if(obj.status == 199) {
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error: function(data) {
					//alert("失败！");
				},
			});
		} else {
			this.src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_like.png";
			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/index/deleteShowCollect",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"show_id": show_id
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {} else if(obj.status == 199) {
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error: function(data) {
					//alert("失败！");
				},
			});
		}
	}, false)

	///////////////更改点赞状态

	document.getElementById("zan_index").addEventListener("touchstart", function(e) {
		e.preventDefault();
		if(this.src == "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_big_good.png") {
			this.src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/yizan.png";
			this.parentElement.nextElementSibling.innerHTML = parseInt(this.parentElement.nextElementSibling.innerHTML) + 1;
			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/index/showGood",
				async: false,
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"show_id": show_id
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {} else if(obj.status == 199) {
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error: function(data) {
					//alert("失败！");
				},
			});
		} else {
			this.src = "http://img.lizi123.cn/new_lizi/2_function/23_function_sports/ic_big_good.png";
			this.parentElement.nextElementSibling.innerHTML = parseInt(this.parentElement.nextElementSibling.innerHTML) - 1;
			$.ajax({
				type: "post",
				url: "http://api.lizi123.cn/index.php/home/index/deleteShowGood",
				xhrFields: {
					withCredentials: true
				},
				data: {
					"client_type": 0,
					"show_id": show_id
				},
				success: function(data) {
					var obj = eval(data);
					if(obj.status == 200) {} else if(obj.status == 199) {
						window.open("http://m.lizi123.cn/7_login/7_login.html");
					}
				},
				error: function(data) {
					//alert("失败！");
				},
			});
		}

	}, false)

	/////////////////////评论点赞
	var critic_zan = document.getElementsByName("critic_zan");
	for(var i = 0; i < critic_zan.length; i++) {
		critic_zan[i].addEventListener("touchstart", function(e) {
			e.preventDefault();
			var comment_id = this.id;
			if(this.src == "http://img.lizi123.cn/new_lizi/2_function/24_function_show/ic_small_good.png") {
				this.src = "http://img.lizi123.cn/new_lizi/2_function/24_function_show/ic_small_good_over.png";
				$.ajax({
					type: "post",
					url: "http://api.lizi123.cn/index.php/home/index/showCommentGood",
					async: false,
					xhrFields: {
						withCredentials: true
					},
					data: {
						"client_type": 0,
						"comment_id": comment_id
					},
					success: function(data) {
						var obj = eval(data);
						if(obj.status == 200) {} else if(obj.status == 199) {
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
					},
					error: function(data) {
						//alert("失败！");
					},
				});
			} else {
				this.src = "http://img.lizi123.cn/new_lizi/2_function/24_function_show/ic_small_good.png";
				$.ajax({
					type: "post",
					url: "http://api.lizi123.cn/index.php/home/index/deleteShowCommentGood",
					async: false,
					xhrFields: {
						withCredentials: true
					},
					data: {
						"client_type": 0,
						"comment_id": comment_id
					},
					success: function(data) {
						var obj = eval(data);
						if(obj.status == 200) {} else if(obj.status == 199) {
							window.open("http://m.lizi123.cn/7_login/7_login.html");
						}
					},
					error: function(data) {
						//alert("失败！");
					},
				});
			}
		}, false)
	}

}

//=================================获取url参数=====================
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) {
		return unescape(r[2]);
	} else {
		return null;
	}
};

function showComment(content, comment_id) {
	if(content) {
		var data = new Object();
		data.content = content;
		data.client_type = 0;
		data.show_id = show_id;
		if(comment_id) {
			data.comment_id = comment_id;
		}
		$.ajax({
			type: "post",
			url: "http://api.lizi123.cn/index.php/home/index/showComment",
			xhrFields: {
				withCredentials: true
			},
			data: data,
			success: function(data) {
				var obj = eval(data);
				//alert(obj.status);
				if(obj.status == 200) {
					return;
				} else if(obj.status == 199) {
					window.open("http://m.lizi123.cn/7_login/7_login.html");
				}
			},
			error: function(data) {
				//alert("失败！");
			},
		});
	} else {
		return;
	}
}