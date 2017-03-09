<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("../util/utf8size.php");


	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT * FROM usuarios LIMIT $start,  $limit";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$users = array();
	while($user = mysql_fetch_assoc($query)) {
	    $users[] = $user;
	}

	//echo $users;

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM usuarios') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	$status = array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"users" => $users
	);

	echo json_encode(utf8size($status));

	$mysqli->close();
?>