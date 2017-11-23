<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("../util/utf8size.php");

	$queryString = "SELECT veiculos.id, veiculos.placa, veiculos.renavam, veiculos.ano_modelo, veiculos.descricao, departamento.descricao AS departamento FROM veiculos, departamento WHERE (departamento.id = veiculos.id_departamento)";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$datas = array();
	while($data = mysql_fetch_assoc($query)) {
	    $datas[] = $data;
	}

	//echo $datas;

	//encoda para formato JSON
	$status = array(
		"success" => mysql_errno() == 0,
		"data" => $datas
	);

	echo json_encode(utf8size($status));

	$mysqli->close();

?>