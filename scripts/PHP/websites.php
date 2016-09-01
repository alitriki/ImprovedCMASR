<?php
require 'connect.php';
session_start();

if(!$connection)
{
    die("Connection failed ".mysqli_connect_error());
}else{
    //echo "Successfully connected to the database!!!";

    //get data from the json side
    $post_data = file_get_contents("php://input");
    $data = json_decode($post_data);

    //var_dump($data);
    $query = "INSERT INTO `websites` VALUES ('".$data->url."','".$data->sitetitle."');";

    //echo $query;
    $result = mysqli_query($connection,$query);

    if($result===TRUE)
    {
        echo "Site Successfully Added!";
    }else{
        echo "Error: ".$connection->error;
    }
        //close the connetion
    $connection->close();
}