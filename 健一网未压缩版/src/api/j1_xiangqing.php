<?php
    include 'conn.php';
    $sid = isset($_REQUEST['sid']) ? $_REQUEST['sid'] : ''; //获取从前端传来的商品id
    //1.写查询语句
    $sql = "SELECT * FROM j1_list WHERE id=$sid";
    // var_dump($sql);

    //2.执行语句
    $res = $conn->query($sql);
    // var_dump($res);
    
    //3.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);
    
    //4.把数组转成字符串，echo给前端
    echo json_encode($arr);
    
    //5.关闭数据库
    $res->close();
    $conn->close();
?>