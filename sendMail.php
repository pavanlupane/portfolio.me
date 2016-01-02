<?php
if(isset($_POST['your_name'],$_POST['your_email'],$_POST['your_message'])){
    $name = $_POST['your_name'];
    $email = $_POST['your_email'];
    $message = $_POST['your_message'];
    $to = "pavanlupane@gmail.com";
    $subject = "Portfolio: Message from " . $name;
    $headers = "MIME-Version: 1.0" . "\r\n" . "Content-type:text/html;charset=UTF-8" . "\r\n" . "From:" . $email;
    
    //echo 'Name is:: '. $name . 'Email is:: '. $email . 'Message is:: '. $message;
    mail($to,$subject,$message,$headers);
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<html lang="en">
	<head>
        <meta charset="utf-8">
        <meta name="description" content="This is the Thanks page for portfolio">
        <title>Thank You</title>
        <style>
            body{
                background-color: #404040;
            }
            .mainDiv{
                height: 250px;
                width: 350px;
                background :rgba(0,0,0,0.3);
                margin: auto;
                color: white;
                font-family: 'PT Sans', Arial, sans-serif;
                text-align: center;
                padding-top: 150px;
                font-size: 20px;
                border: 1px solid white;
            }
            #backButton{
                height: 50px;
                width: 150px;
                margin-top: 30px;
            }
        </style>
        
    </head>
    <body>
        <div class="mainDiv">
            <p>Thank you for your message.</p>
            <p><a href="portfolioHome.html"><button id="backButton" name="back" formaction="portfolioHome.html">Back to the Website</button></a></p>
            
        </div>
    </body>
</html>