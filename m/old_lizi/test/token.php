<?php

function getToken($appid,$n)
{
	//$filename = $appid."_file.txt";
 	$appid = "wxcda8cccadc7b71b8";


   $con = mysql_connect("localhost","root","tokushimazg"); 
   mysql_select_db("simple_study", $con);
		 
   $sql = "select * from tp_weixin_wp where appid='".$appid."'";
   $re = mysql_query($sql,$con); 
   $row = mysql_fetch_array($re);

   $token = $row['token'];
   $take_time = $row['take_time'];
    $appsecret = $row['appsecret'];

   $now = time();
   $dt = $now - $take_time;
   if( ( $dt > 300 ) || ($n==1))
   {
      $apptoken = requestToken($appid,$appsecret); 
	  $sql = "update tp_weixin_wp set token ='".$apptoken."',take_time='".$now."' where appid='".$appid."'";
	  mysql_query($sql);
	  return $apptoken;
   } 
    else
   {
     return $token;
   } 
	
}
 

function requestToken($appid,$appSerect){
  
	$get_token_url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={$appid}&secret={$appSerect}";
                       
	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL,$get_token_url);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);

	$result = curl_exec($ch); 
	 
	$str = json_decode($result); 
	
	$apptoken = $str->access_token;
	curl_close($ch);
	return $apptoken;
} 