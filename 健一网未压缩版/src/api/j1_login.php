<?php
    include 'conn.php';
    header("Access-Control-Allow-Origin：http://服务器ip");
    //登陆功能
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : '';
    //sql语句
    $sql = "SELECT * FROM j1_reg WHERE username = '$name' AND password = '$password'";
    $res = $conn -> query($sql); //执行sql
    
    //var_dump($res); //["num_rows"]=> int(1) 查到数据库有该数据
    if($res->num_rows){ //登陆成功
        echo 'yes'; 
    }else{
        echo 'no'; //登陆失败
    }
?>