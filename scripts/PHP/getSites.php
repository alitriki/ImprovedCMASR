<?php
/**
 * Created by PhpStorm.
 * User: richard
 * Date: 9/1/16
 * Time: 3:06 PM
 */
require 'connect.php';
session_start();

if(!$connection)
{
    die("Connection failed ".mysqli_connect_error());
}else{
    $query = "SELECT site_title as title, url, number as id FROM websites";

    $count = 1;
    $result = mysqli_query($connection, $query);

    $row_count = mysqli_num_rows($result);

    $rows = array();

    if($row_count>=1)
    {
        while( $row = mysqli_fetch_assoc($result))
        {
            $rows[] = $row;
        }
        print json_encode($rows);
    }else {
            echo "No website to show ".$connection->error;
    }
}