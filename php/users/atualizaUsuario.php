<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$info = $_POST['users'];

	$data = json_decode($info);

	$nome = $data->nome;
	$login = $data->login;
	$senha = $data->senha;
	$email = $data->email;
	$iduser = $data->iduser;

	//consulta sql
	$query = sprintf("UPDATE usuarios SET nome = '%s', login = '%s', senha = '%s', email = '%s' WHERE iduser=%d",
		mysql_real_escape_string($nome),
		mysql_real_escape_string($login),
		mysql_real_escape_string($senha),
		mysql_real_escape_string($email),
		mysql_real_escape_string($iduser));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"usuarios" => array(
			"iduser" => $id,
			"nome" => $nome,
			"login" => $login,
			"senha" => $senha,
			"email" => $email
		)
	));

	$mysqli->close();
?>