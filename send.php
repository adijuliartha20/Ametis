<?php 

if(validate_capcha()){
	require 'PHPMailer/PHPMailerAutoload.php';
	
	$mail = new PHPMailer;
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];	
	
	//$mail->SMTPDebug = 1;                               // Enable verbose debug output
	
	$host = 'mail.adijuliartha.com';
	$user_name = 'sender@adijuliartha.com';
	$pass = 'sender123';
	$port = 26;
	
	$mail->isSMTP();                                      // Set mailer to use SMTP
	$mail->Host = $host;  // Specify main and backup SMTP servers
	$mail->SMTPAuth = true;                               // Enable SMTP authentication
	$mail->Username = $user_name;                 // SMTP username
	$mail->Password = $pass;                           // SMTP password
	//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
	$mail->Port = $port;                                    // TCP port to connect to
	
	$mail->setFrom('sender@adijuliartha.com', 'Mailer');
	$mail->addAddress('adijuliartha@gmail.com', 'Joe User');     // Add a recipient
	$mail->addReplyTo($email, $name);
	
	$mail->isHTML(true);                                  // Set email format to HTML
	$body = "<table>
								<tr>
									<td width=\"100px\">Name</td>
									<td width=\"20px\">:</td>
									<td>$name</td>
								</tr>
								<tr>
									<td width=\"100px\">Email</td>
									<td width=\"20px\">:</td>
									<td>$email</td>
								</tr>
								<tr>
									<td width=\"100px\">Phone</td>
									<td width=\"20px\">:</td>
									<td>$phone</td>
								</tr>
								<tr>
									<td width=\"100px\">Message</td>
									<td width=\"20px\">:</td>
									<td>$message</td>
								</tr>
						</table>";
	
	$mail->Subject = $subject;
	$mail->Body    = $body;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	$return  = array();
	if(!$mail->send()) {
		$return['status'] = 'failed';
		$return['message'] = 'Somethings wrong, please try again!';
		//echo 'Message could not be sent.';//echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {//echo 'Message has been sent';
		$return['status'] = 'success';
		$return['message'] = 'Your email is successfully sent, thank you.';
	}
	
	echo json_encode($return);
}else{
	echo json_encode(array('status'=>'failed','message'=>'Failed capcha.'));
}





function validate_capcha(){return true;
	if(isset($_POST['g_recaptcha_response'])){
		$secret_key = '6Lf_5BITAAAAANWhFXEGgt8yb3d3UepkpBzqZ6Xj';
		$url = 'https://www.google.com/recaptcha/api/siteverify';
	
		$params = array();
		$params['remoteip'] = $_SERVER['REMOTE_ADDR'];
		$params['secret']   = $secret_key;
		$params['response'] = $_POST['g_recaptcha_response'];
		
		$prm_string = http_build_query($params);
		$requestURL = 'https://www.google.com/recaptcha/api/siteverify?'.$prm_string;
		
		$curl = curl_init();
		curl_setopt_array($curl, array(
			CURLOPT_RETURNTRANSFER => 1,
			CURLOPT_URL => $requestURL,
			CURLOPT_SSL_VERIFYPEER => false
		));
		
		$data = curl_exec($curl);
		curl_close($curl);
		
		$response = json_decode($data);
		if($response->success)return true;			
		else return false;
	}
}



?>