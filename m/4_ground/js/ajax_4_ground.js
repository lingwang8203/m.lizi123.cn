$(document).ready(function() {
	var current_url = location.href;
	var select_id = document.getElementById("select-native-2");


	if(current_url == "http://m.lizi123.cn/4_ground/4_ground_iframe2.php") {
		console.log(current_url);
		select_id.options[1].selected = true;
	} else if(current_url == "http://m.lizi123.cn/4_ground/4_ground_iframe3.php") {
		select_id.options[2].selected = true;

	} else if(current_url == "http://m.lizi123.cn/4_ground/4_ground_iframe4.php") {
		select_id.options[3].selected = true;

	} else if(current_url == "http://m.lizi123.cn/4_ground/4_ground_iframe5.php") {
		select_id.options[4].selected = true;

	}
})

function changeIframeSrc() {
	var seleted_value = document.getElementById("select-native-2").value;
	if(seleted_value == "1") {
		location.href = "4_ground.php";
		//				document.getElementById("ifram").height=
	} else if(seleted_value == "2") {
		location.href = "4_ground_iframe2.php";
	} else if(seleted_value == "3") {
		location.href = "4_ground_iframe3.php";
	} else if(seleted_value == "4") {
		location.href = "4_ground_iframe4.php";
	} else if(seleted_value == "5") {
		location.href = "4_ground_iframe5.php";
	}
}