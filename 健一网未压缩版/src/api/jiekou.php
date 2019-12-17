<?php
    /*
        接口功能：
            $branch == 'checkname'  验证该用户名是否已存在于数据库
            $branch == 'reg'        注册功能，插入到数据库
            $branch == 'login'      登陆功能，匹配数据库信息
    */
    include 'conn.php';
    //isset() 是否接收到了参数，返回真假
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : ''; //用户名
    $password = isset($_REQUEST['password']) ? $_REQUEST['password'] : ''; //登陆密码
    $branch = isset($_REQUEST['branch']) ? $_REQUEST['branch'] : 'login'; //需要的接口类型
    // echo $branch;
    if($branch == 'checkname' ){ //验证该用户名是否已存在
        //sql语句
        $sql = "SELECT * FROM j1_reg WHERE username = '$name'";
        //执行语句
        $res = $conn->query($sql);
        //var_dump($res); //函数 num_rows() 返回结果集中行的数目，此命令仅对 SELECT 语句有效。
        //var_dump()在当前文件打印

        //判断是否存在该用户名
        if($res -> num_rows){ //查找到，不能注册
            echo 'no';
        }else{
            echo 'yes';
        }

    }else if($branch == 'reg'){ //注册功能
        
        //sql语句
        $sql = "INSERT INTO j1_reg(username,password,userphone) VALUES('$name','$password','$name')";
        $res = $conn->query($sql); 
        // var_dump($res); //bool(true)
        if($res){
            echo 'yes'; //插入成功
        }else{
            echo 'no'; //插入失败
        }
    }else if($branch == 'login'){ //登陆功能
        $sql = "SELECT * FROM j1_reg WHERE username = '$name' AND password = '$password'";
        $res = $conn -> query($sql); //执行sql
        
        //var_dump($res); //["num_rows"]=> int(1) 查到数据库有该数据
        if($res->num_rows){ //登陆成功
            echo 'yes'; 
        }else{
            echo 'no'; //登陆失败
        }
    }
    //关闭数据库
    // $res -> close(); 
    // $conn -> close();
?>