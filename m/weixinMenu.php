<?php

$appid = "wxc9322355d54f2074";
$appsecret = "7990e5325f20cc13aaec08d0a3e8ed04";
$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";

$output = https_request($url);
$jsoninfo = json_decode($output, true);
$access_token = $jsoninfo["access_token"];


$jsonmenu = '{
    "button": [
        {
            "type": "view",
            "name": "举个栗子",
            "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc9322355d54f2074&redirect_uri=http://api.lizi123.cn/index.php/home/user/weixinUser&response_type=code&scope=snsapi_base&state=1#wechat_redirect"
        },
        {
            "name": "APP",
            "sub_button": [
                {
                    "type": "click",
                    "name": "iOS",
                    "key": "ios"
                },
                {
                    "type": "click",
                    "name": "Android",
                    "key": "Android"
                }
            ]
        },
        {
            "type": "click",
            "name": "关于我们",
            "key": "栗子校园"
        }
    ]
}';


$url = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token;
$result = https_request($url, $jsonmenu);
var_dump($result);

function https_request($url,$data = null){
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
    if (!empty($data)){
        curl_setopt($curl, CURLOPT_POST, 1);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

?>