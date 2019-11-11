<?php
    include 'conn.php';

    //1.写查询语句
    $sql = "SELECT * FROM j1_list";
    //2、执行语句，获取结果集
    $res = $conn->query($sql);
    // var_dump($res);
    
    //3.提取数据，数组形式
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);

    //4.将数组转成字符串(只能传字符串给前端)
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
    $conn->set_charset('utf8'); 
    //5.关闭数据库
    $res -> close();
    $conn -> close();
?>