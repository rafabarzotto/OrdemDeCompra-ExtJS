<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
	include("../util/utf8size.php");

	$queryString = 'SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, count(ordem.id) AS Qtd, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (itens_ordem.id_ordem = ordem.id) and (ordem.ano = YEAR(curdate())) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))';

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