<?php
/**
 * Created by PhpStorm.
 * User: zg
 * Date: 2016-07-21
 * Time: 17:13
 */
$con = mysql_connect("localhost","root","tokushimazg");
mysql_select_db("jty", $con);

mysql_query('SET NAMES UTF8');

$sell_id = $_GET["sell_id"];
$pay_result = $_GET["pay_result"];

$sql = "update tp_sell set pay_result=$pay_result where sell_id=$sell_id";
$re = mysql_query($sql);
echo $re;

?>