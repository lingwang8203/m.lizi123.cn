<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<!-- <meta content="user-scalable=0;" name="viewport" />	 -->
		<meta name=”viewport” content=”width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;” />
		<title>新的进展</title>
		<link rel="stylesheet" type="text/css" href="css/toupiao.css">
		<script type="text/javascript" src="js/jquery-2.2.3.min.js"></script>	
	</head>
	<body class="toupiao_body">
	    <div >
			<a id="return"><div class="toupiao_head1_left"><</div></a>
			<div class="toupiao_head1_center" id="biaoti">创新科技大赛</div>
			<div class="toupiao_head1_right" id="furnish">完成</div>		
		</div>
		<div class="toupiao_head2">
			<div class="toupiao_head2_left"><img src="img/concret/yinyue.png" id="header_img"></div>	
			<div class="toupiao_head2_right"><input type="text" id="input1"  maxlength="10" onchange="javascript:header()"></div>
			<p>请输入标题</p>
		</div>
		<div class="toupiao_middle1">
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao1.png" id="pic1"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao2.png" id="pic2"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao3.png" id="pic3"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao4.png" id="pic4"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao5.png" id="pic5"></div>
			<div class="toupiao_middle1_img" style="padding-right: 0;"><img src="img/concret/tubiao6.png" id="pic6"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao7.png" id="pic7"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao8.png" id="pic8"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao9.png" id="pic9"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao10.png" id="pic10"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao11.png" id="pic11"></div>
			<div class="toupiao_middle1_img" style="padding-right: 0;"><img src="img/concret/tubiao12.png" id="pic12"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao13.png" id="pic13"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao14.png" id="pic14"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao15.png" id="pic15"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao16.png" id="pic16"></div>
			<div class="toupiao_middle1_img"><img src="img/concret/tubiao17.png" id="pic17"></div>
			<div class="toupiao_middle1_img" style="padding-right: 0;"><img src="img/concret/tubiao18.png" id="pic18"></div>
		</div>
		<div class="toupiao_geli">
		</div>
		<div id="navigation">
			<ul>
				<li><a id="toupiao" class="nav_on">详情</a></li>
				<li><a id="dongtai" class="nav_off">投票</a></li>
			</ul>
		</div>
		<iframe src="xiangqing.php" id="bottom" name="bottom"></iframe>
	</body>
	<script src="js/newjinzhan.js"></script>
	<script>
		var url_index="jinzhan";
		document.getElementById("return").addEventListener("touchstart",function(e){
			e.preventDefault();
			var myurl="concret_activities.html"+"?"+"url_index="+url_index;
			window.location.assign(myurl);
		},false);
	</script>
</html>
