<?php

$db = mysqli_connect('localhost', 'root', '', 'test1');
    if(!$db) {
        die('database is not connected');
    }

session_start();
if(!isset($_SESSION['username'])) {
  $_SESSION['msg'] = "You have to first log in";
  header('location: login.html');
}



if(isset($_POST['login'])) {
    
    header('location: index.html');

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($db, $sql);


}

