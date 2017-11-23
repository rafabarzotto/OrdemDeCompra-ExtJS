
#TOTAL DE ORDENS NOS EM TODOS OS ANOS
SELECT year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Ano, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE (itens_ordem.id_ordem = ordem.id) and (ordem.situacao = 0) GROUP BY year(str_to_date(ordem.dataPedido, "%d/%m/%Y"))

#qtd
SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, count(ordem.id) AS Qtd FROM ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))

#valor
SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (itens_ordem.id_ordem = ordem.id) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))

