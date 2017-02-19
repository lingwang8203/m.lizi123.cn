<?php
/**
 * Created by PhpStorm.
 * User: zg
 * Date: 2016-07-18
 * Time: 14:42
 */


$con = mysql_connect("localhost","root","tokushimazg");
mysql_select_db("jty", $con);



$code =addslashes( $_GET["code"] );
$sql = "select * from tp_sell_machine where rand_code='$code'";

$res=mysql_query($sql,$con);

$row = mysql_fetch_array($res);


if( $row !=null )
{
    echo 1;
}
else
{
    echo 0;
}


?>