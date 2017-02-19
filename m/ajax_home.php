<?php
 header('Content-Type:text/html;charset:utf-8');
  /*$conn=mysql_connect('localhost','root','root');
  if(!$conn)
  {
	die("连接数据库失败".mysql_error());
  }	
  
  mysql_select_db('myip',$conn) or die("连接数据库失败".mysql_error());
 
   mysql_query('set names utf8');
   
   $getip='1.0.0.255';  //$_POST['findip'];  //  //
   echo $getip;
   echo "<script> alert($getip); </script>";
   if($getip=="0.0.0.0")
   {
	   $json['ip_address']="IANA 保留地址重庆";
	   $json['status'] = 911;
	   echo $json;
	   exit;
   }
   //比较IP1中的地址
   $sql1=mysql_query("select * from `ipmap` where ip1='$getip'",$conn);
   $city1=mysql_fetch_assoc($sql1);
   //比较IP2中的地址
   $sql2=mysql_query("select * from `ipmap` where ip2='$getip'",$conn); 
   $city2=mysql_fetch_assoc($sql2);
   if($city1)
   {	   
	   $json['ip_address']=$city1['address'].$city1['city'];//"it works well" + "     ok";//$city1['address']+" "+$city1['city'];
	   $json['status'] = 1011;
   }
   else if($city2)
   {	  
	   $json['ip_address']=$city2['address'].$city2['city'];
	   $json['status'] = 1111;
   }
  else{
	  $json['ip_address']=false;
	  $json['status'] = 1211;
  }*/
   $json['ip_address']=false;
	  $json['status'] = 1211;

  echo json_encode($json);
  //var_dump($json);
  mysql_close();
?>