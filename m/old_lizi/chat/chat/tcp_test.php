<?php
use Workerman\Worker;
use Workerman\Lib\Timer;
require_once './Workerman/Autoloader.php';

// ´´½¨һ¸öker¼à2347¶˿ڣ¬²»ʹÓÈºÎ¦Ó²ãÒ
$tcp_worker = new Worker("tcp://0.0.0.0:10001");

// Æ¶¯4¸ö̶Ôâ¹©·þÎ
$tcp_worker->count = 4;

// µ±¿ͻ§¶˷¢4Ê¾Ý±
$tcp_worker->onMessage = function($connection, $data)
{
    // Ï¿ͻ§¶˷¢Ëhello $data
    $connection->send('11222222222222' . $data);
   echo "come here.";
};


$tcp_worker->onWorkerStart = function($tcp_worker)
{

   Timer::add(10,function()use($tcp_worker)
    {
       foreach($tcp_worker->connections as $connection)     
       {
            $connection->send(time());
       }
    });    
   
};





// ÔÐworker
Worker::runAll();
