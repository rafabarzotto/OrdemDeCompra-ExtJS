<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");

	$nOrdem = $_REQUEST['nOrdem'];

	//consulta sql
	$query = sprintf("UPDATE participantes, itens_processo, itens_ordem, ordem
SET ordem.situacao = 1, participantes.qtde_cotada = (participantes.qtde_cotada + itens_ordem.qtde_comprar),
participantes.preco_total = ((participantes.qtde_cotada + itens_ordem.qtde_comprar) * participantes.preco_unit_part)
WHERE (itens_ordem.id_ordem = ordem.id) and
(ordem.i_processo = participantes.i_processo)and
(ordem.ano = participantes.i_ano_proc) and
(ordem.ano = itens_processo.i_ano_proc) and
(ordem.i_entidades = participantes.i_entidades) and
(itens_ordem.i_material = itens_processo.i_material) and
(participantes.i_item = itens_processo.i_item) and
(ordem.situacao = 0) and
(ordem.id = '$nOrdem');",
	mysql_real_escape_string($nOrdem));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"afetados" => mysql_affected_rows() != 0
	));

	$mysqli->close();

?>