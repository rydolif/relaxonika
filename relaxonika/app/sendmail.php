<?php
	$SITE_TITLE = 'MIRMIKA';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$mail = htmlspecialchars(trim($_POST['mail']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$textarea = htmlspecialchars(trim($_POST['textarea']));
		$subject = isset($_POST['subject']) ? htmlspecialchars(trim($_POST['subject'])) : '';

		// $to = 'Mariya.serguta@yandex.ru';
		// $to = 'rudolifrudolif@gmail.com';
		$to = 'mirmika.dv@gmail.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		if ($name != '') {
			$data .= 'Имя: '.$name."<br>";
		}
		if ($mail != '') {
			$data .= 'Почта: '.$mail."<br>";
		}
		if ($phone != '') {
			$data .= 'Телефон: '.$phone."<br>";
		}
		if ($textarea != '') {
			$data .= 'Вопрос: '.$textarea."<br>";
		}


		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>