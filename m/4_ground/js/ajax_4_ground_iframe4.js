/////////////最新
$(document).ready(function() {

	$.ajax({
		type: "post",
		url: "http://api.lizi123.cn/index.php/home/ground/groundShow",
		xhrFields: {
			withCredentials: true
		},
		data: {
			"client_type": 0,
			"page": 1,
		},
		success: function(data) {
			var obj = eval(data);
			console.dir(obj);
			if(obj.status == 200) {
				$("#ground").text("");
				resShow(obj);
			} else if(obj.status == 199) {
				window.open("http://m.lizi123.cn/7_login/7_login.html");
			}
		},
		error: function(data) {
			alert("失败！");
		},
	});
})

function resShow(obj) {
	var pos_crop_w = new Array();
	var pos_crop_h = new Array();
	
	if(obj) {
		for(var i = 0; i < obj.length; i++) {
			var html = "<li class='aui-row aui-padded-b-5 aui-padded-t-5' style='width:100%;background: white;'><div class='aui-col-xs-12 aui-row'>";
			html += "<div class='aui-col-xs-2 aui-text-center' style='margin: 0;padding: 0;margin-top: 0.1rem;'>";
			html += "<a href='../../5_mine/51_mine_homepage/51_mine_homepage.html?user_id=" + obj[i].user_info.id + "' target='_blank'><img src='" + obj[i].user_info.head_image + "' class='aui-img-round' style='width:2rem;height:2rem;margin-top: 0.1rem;'/></a>";
			html += "</div><div class='aui-col-xs-6 aui-row aui-padded-t-5'>";
			html += "<div class='aui-col-12 aui-font-size-14'>" + obj[i].user_info.user_name + "</div>";
			html += "<div class='aui-col-12 aui-font-size-12'style='color: #414141;'>" + obj[i].user_info.intro + "</div></div>";
			html += "<div class='aui-col-xs-4 aui-font-size-12' style='margin-top: 0.3rem;color: #9E9E9E;'>";
			html += "<div class='aui-pull-right aui-padded-r-5'>" + obj[i].time + "</div></div></div>";
			html += "<a target='_blank' href='http://m.lizi123.cn/2_function/24_function_show/241_function_show_concret.html?show_id=" + obj[i].id + "'>";
			
			 var image_H = new Array;
				var image_W = new Array;
				var img_h = new Array;
				var img_w = new Array;
				var w_count = new Array;
				var h_count = new Array;
			
			if(obj[i].images.length == 1) {
				var img_h = 9 * 20;
				//正则表达式，截取字符串，宽度，高度 //str.match(/aaa(\S*)fff/)[1]; 
				var image_H = obj[i].images[0].match(/H=(\S*)&/)[1];
				var image_W = obj[i].images[0].match(/&W=(\S*)/)[1];

				//alert(obj[i].images[0]);
				// alert("width="+image_W+"  height="+ image_H);
				var img_w = image_W * img_h / image_H;
				//?x-oss-process=image/crop,x_100,y_100,w_"+img_w+",h_"+img_h+"
				//    html+="<a href='http://m.lizi123.cn/2_function/24_function_show/show_picture.html?imgurl="+obj.image[0]+"' style='height:9rem;width: 100%;'><img src='"+obj.image[0]+"' style='height:9rem;' width='"+img_w+"' id='show_img' /></a>";                 
				//                  var img=new Image();

				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj[i].intro + "</div>";
				html += "<div class='aui-col-xs-12 aui-pull-left' style='padding:0 0.4rem;margin: 0;height:9rem;'>";
				html += "<img src='" + obj[i].images[0] + "' style='height:9rem;' width='" + img_w + "' id='show_img' /> ";
				html += "</div>";
			} else if(obj[i].images.length == 2) {
                html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj[i].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
                
				for(var j = 0; j < 2; j++) {
					var browser_w = document.documentElement.clientWidth;
					browser_w = browser_w * 0.5*0.95;
                    pos_crop_w[j]=0; pos_crop_h[j]=0;
					
					image_H[j] = obj[i].images[j].match(/H=(\S*)&/)[1];
					image_W[j] = obj[i].images[j].match(/&W=(\S*)/)[1];
             
					w_count[j] = image_W[j] / browser_w;
					h_count[j] = image_H[j] / img_h[j];

					//img_w[j] = img_h[j] * img_W[j] / img_H[j];
					img_w[j] = image_W[j];
                    img_h[j] = image_H[j];
					if(w_count[j] >= h_count[j]) {
						img_w[j] = browser_w * h_count[j];
						pos_crop_w[j] = (image_W[j] - img_w[j]) / 2;
						//img_h[j] = img_w[j] * img_H[j] / img_W[j];
					} else {
						img_h[j] = 80 * w_count[j];
						pos_crop_h[j] = (image_H[j] - img_h[j]) / 2;

					}

					pos_crop_w[j] = parseInt(pos_crop_w[j]);
					pos_crop_h[j] = parseInt(pos_crop_h[j]);
					img_w[j] = parseInt(img_w[j]);
					img_h[j] = parseInt(img_h[j]);
					obj[i].images[j] = obj[i].images[j].split('?')[0]; //图片地址
					//alert("the width="+img_w[j]+"\n"+"the height="+img_h[j]);
					// width='" + img_w[j] + "' height='" + img_h[j] + "'
					html += "<div class='aui-col-xs-6 aui-text-center'>";
					html += "<img style='margin-bottom: 0.2rem;' src='" + obj[i].images[j] + "?x-oss-process=image/crop,x_" + pos_crop_w[j] + " ,y_" + pos_crop_h[j] + ",w_" + img_w[j] + ",h_" + img_h[j] + " ' width='95%'  height='80'/>";
					html += "</div>";
				}
				html += "</div>";

			} else if(obj[i].images.length >= 3) {
				html += "<div class='aui-font-size-14 aui-col-xs-12  aui-padded-l-10 aui-padded-r-5'>" + obj[i].intro + "</div>";
				html += "<div class='aui-row aui-col-xs-12 'style='padding: 0.2rem;padding-bottom: 0;'>";
                
				for(var j = 0; j < obj[i].images.length; j++) {
					var browser_w = document.documentElement.clientWidth;
					browser_w = browser_w * 0.33333 * 0.95;
                    pos_crop_w[j]=0; pos_crop_h[j]=0;
					
					image_H[j] = obj[i].images[j].match(/H=(\S*)&/)[1];
					image_W[j] = obj[i].images[j].match(/&W=(\S*)/)[1];
             
					w_count[j] = image_W[j] / browser_w;
					h_count[j] = image_H[j] / img_h[j];

					//img_w[j] = img_h[j] * img_W[j] / img_H[j];
					img_w[j] = image_W[j];
                    img_h[j] = image_H[j];
					if(w_count[j] >= h_count[j]) {
						img_w[j] = browser_w * h_count[j];
						pos_crop_w[j] = (image_W[j] - img_w[j]) / 2;
						//img_h[j] = img_w[j] * img_H[j] / img_W[j];
					} else {
						img_h[j] = 80 * w_count[j];
						pos_crop_h[j] = (image_H[j] - img_h[j]) / 2;

					}

					pos_crop_w[j] = parseInt(pos_crop_w[j]);
					pos_crop_h[j] = parseInt(pos_crop_h[j]);
					img_w[j] = parseInt(img_w[j]);
					img_h[j] = parseInt(img_h[j]);
					obj[i].images[j] = obj[i].images[j].split('?')[0]; //图片地址
					//alert("the width="+img_w[j]+"\n"+"the height="+img_h[j]);
					// width='" + img_w[j] + "' height='" + img_h[j] + "'
					html += "<div class='aui-col-xs-4 aui-text-center'>";
					html += "<img style='margin-bottom: 0.2rem;' src='" + obj[i].images[j] + "?x-oss-process=image/crop,x_" + pos_crop_w[j] + " ,y_" + pos_crop_h[j] + ",w_" + img_w[j] + ",h_" + img_h[j] + " ' width='95%'  height='80'/>";
					html += "</div>";
				}
				html += "</div>";
			} else {
				html += "<div class='aui-col-xs-12 aui-font-size-14  aui-pull-left aui-padded-l-10'>" + obj[i].intro + "</div>";
			}

			html += "</a><div class='aui-row aui-col-xs-12'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-15 aui-pull-left'>";
			html += "<i class='iconfont_like icon-xin' name='xiuxiu_dianzan'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj[i].good_num + "</span>";
			html += "</div>";
			html += "<a target='_blank' href='../2_function/24_function_show/241_function_show_concret.html?show_id=" + obj[i].id + "'>";
			html += "<div class='aui-col-xs-2 aui-row aui-margin-l-5 aui-pull-left'>";
			html += "<i class='aui-iconfont aui-icon-comment'></i>";
			html += "<span class='aui-font-size-12' style='padding-left:4px !important;'>" + obj[i].comment_num + "</span></div></a></div></li>";
			html += "<div class='aui-hr'></div>";
			$("#ground").append(html); //divLocation(html,obj.show[k].time);
		}
	}
}