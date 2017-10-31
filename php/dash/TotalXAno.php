<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("../util/utf8size.php");

	$queryString = "SELECT ordem.ano AS Ano, count(ordem.id) AS Qtd, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE (itens_ordem.id_ordem = ordem.id) and (ordem.situacao = 0) GROUP BY ordem.ano";

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