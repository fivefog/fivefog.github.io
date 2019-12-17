<?php
   //====== 连接数据库==============
   $severname = 'localhost'; //主机
   $username = 'root';//登陆数据库的用户名
   $password = 'root'; //登陆数据库的密码
   $dbname = '1909'; //数据库名

 
   $conn = new mysqli($severname,$username,$password,$dbname);
   // var_dump($conn); //相当于console.log()
   /*php里面获取对象属性和方法：$conn->属性名 $conn->方法名();
       js的写法：arr.length  arr.push()
   */
   if($conn->connect_error){ //证明连接失败
       die("数据库连接失败：".$conn->connect_error);
   }else{
       // echo '连接成功';
   }
?>