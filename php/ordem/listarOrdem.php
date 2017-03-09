<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("../util/utf8size.php");

	$start = $_REQUEST['start'];
	$limit = $_REQUEST['limit'];

	$queryString = "SELECT ordem.id, credores.nome, ordem.situacao FROM ordem, credores WHERE (ordem.i_credores = credores.i_credores) AND (ordem.i_entidades = credores.i_entidades) ORDER BY ordem.id DESC LIMIT $start,  $limit";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$datas = array();
	while($data = mysql_fetch_assoc($query)) {
	    $datas[] = $data;
	}

	//echo $users;

	//consulta total de linhas na tabela
	$queryTotal = mysql_query('SELECT count(*) as num FROM ordem') or die(mysql_error());
	$row = mysql_fetch_assoc($queryTotal);
	$total = $row['num'];

	//encoda para formato JSON
	$status = array(
		"success" => mysql_errno() == 0,
		"total" => $total,
		"data" => $datas
	);

	echo json_encode(utf8size($status));

	$mysqli->close();

?>