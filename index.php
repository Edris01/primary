<?php
  if(!isset($_SESSION['username'])) {
    $_SESSION['msg'] = "You have to first log in";
    header('location: login.html');
  }
?>


