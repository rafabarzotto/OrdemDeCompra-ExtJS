<?php
	//chama o arquivo de conexão com o bd
	include("../conectar.php");
   include("../util/utf8size.php");

   function soNumero($str) {
      return preg_replace("/[^0-9]/", "", $str);
   }

   session_start();

   $start = $_REQUEST['start'];
   $limit = $_REQUEST['limit'];

   if (isset($_REQUEST['ent'])) {
      $_SESSION['url'] = $_SERVER['QUERY_STRING'];
      $ent = $_REQUEST['ent'];
      $ano = $_REQUEST['ano'];
      $processo = $_REQUEST['processo'];
      $nome_mat = $_REQUEST['nome_mat'];
   }

   else {
      $url = explode("&", $_SESSION['url']);
      $ent = soNumero($url[1]);
      $ano = soNumero($url[2]);
      $processo = soNumero($url[3]);
      $nome_mat = '';
   }

   // echo $processo;

   // if (strpos($url[1], 'page') !== false){

   // }


	$queryString = "SELECT credores.nome,
         participantes.i_credores,   
         participantes.i_item,  
         material.nome_mat, 
         participantes.qtde_cotada,  
         participantes.vlr_descto,
         participantes.preco_unit_part,    
         participantes.preco_total,   
         itens_processo.i_material,   
    participantes.nome_marca
    FROM participantes,   
         itens_processo,   
         material,   
         credores  
   WHERE   
         ( itens_processo.i_item = participantes.i_item ) and    
         ( material.i_material = itens_processo.i_material ) and    
         ( credores.i_credores = participantes.i_credores ) and
         ( credores.i_entidades = participantes.i_entidades) and
         ( material.i_entidades = participantes.i_entidades) and
         ( itens_processo.i_entidades = participantes.i_entidades) and
         (participantes.i_ano_proc = '$ano') AND    
         (participantes.i_processo = '$processo') AND
         (participantes.situacao = 2 ) AND
         (participantes.i_entidades = '$ent') AND   
         (itens_processo.i_ano_proc = '$ano') AND
         (itens_processo.i_processo = '$processo') AND
         (itens_processo.i_entidades = '$ent') AND 
         (nome_mat LIKE '%$nome_mat%')LIMIT $start, $limit";

	//consulta sql
	$query = mysql_query($queryString) or die(mysql_error());

	//faz um looping e cria um array com os campos da consulta
	$datas = array();
	while($data = mysql_fetch_assoc($query)) {
	    $datas[] = $data;
	}

	//consulta total de linhas na tabela
	$queryTotal = mysql_query("SELECT count(*) as num FROM participantes,   
         itens_processo,
         material,   
         credores  
   WHERE   
         (itens_processo.i_item = participantes.i_item) and    
         (material.i_material = itens_processo.i_material) and    
         (credores.i_credores = participantes.i_credores) and
         ( credores.i_entidades = participantes.i_entidades) and
         ( material.i_entidades = participantes.i_entidades) and
         (participantes.i_ano_proc = '$ano') AND    
         (participantes.i_processo = '$processo') AND  
         (participantes.situacao = 2 ) AND
         (participantes.i_entidades = '$ent') AND 
         (itens_processo.i_ano_proc = '$ano') AND
         (itens_processo.i_processo = '$processo') AND
         (itens_processo.i_entidades = '$ent')");
        
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