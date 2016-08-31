<?php
require 'connect.php';
session_start();

if(!$connection)
{
    die("Connection failed ".mysqli_connect_error());
}else{
    //echo "Connected successfully to the database!\n";
    $post_data = file_get_contents("php://input");
    $data = json_decode($post_data);
    //var_dump($data);

     $query = "SELECT picture_id, level, firstname, lastname FROM userlogin WHERE username='".$data->username."' AND password='".$data->password."' ";

    //$query = "SELECT picture as pic, level as lev FROM logins WHERE username='".$data->username."' AND password='".$data->password."' ";
    //$query = "SELECT * FROM logins WHERE username='admin' AND password='a' ";
    //echo ($query);
    $result = mysqli_query($connection,$query);

    //var_dump($result);
    $row = mysqli_fetch_assoc($result);

    $row_count =  mysqli_num_rows($result);

    //echo ($row_count);
    if($row_count==1)
    {
        //var_dump($result);
        // echo base64_encode($row['picture']);
        echo ("{\"picture_id\" : ".$row['picture_id'].", \"level\" :".$row['level']."
                , \"firstname\" : \"".$row['firstname']."\", \"lastname\" : \"".$row['lastname']."\"}");
        //echo ("{\"picture\" : ".$row['pic'].", \"level\" :".$row['lev']."}");
        //echo ("{\"picture\" : \" ".base64_encode($row['pic'])." \" , \"level\" :".$row['lev']." }");

    }else
    {
        echo ("Wrong username or password");
    }
}

header('Content-Type: image/jpg');