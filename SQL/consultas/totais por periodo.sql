#TOTAL DE ORDENS VALIDAS POR ANO
SELECT ordem.ano, sum(itens_ordem.qtde_comprar*itens_ordem.preco_unit_part) AS Total FROM itens_ordem, ordem WHERE (itens_ordem.id_ordem = ordem.id) and (ordem.ano = 2017) and (ordem.situacao = 0)
SELECT ordem.ano, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE (itens_ordem.id_ordem = ordem.id) and (ordem.ano = 2017) and (ordem.situacao = 0)

#TOTAL DE ORDENS NOS EM TODOS OS ANOS
SELECT ordem.ano AS Ano, count(ordem.id) AS Qtd, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE (itens_ordem.id_ordem = ordem.id) and (ordem.situacao = 0) GROUP BY ordem.ano

#TOTAL X MES
SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (itens_ordem.id_ordem = ordem.id) and (ordem.ano = YEAR(curdate())) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))

#TOTAL DE ORDENS X MES
SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, count(ordem.id) AS Total FROM itens_ordem, ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (itens_ordem.id_ordem = ordem.id) and (ordem.ano = YEAR(curdate())) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))


#TOTAL DE VALOR E ORDENS X MES
SELECT month(str_to_date(ordem.dataPedido, "%d/%m/%Y")) AS Mes, count(ordem.id) AS Qtd, sum(subtotal) AS Total FROM itens_ordem, ordem WHERE year(str_to_date(ordem.dataPedido, "%d/%m/%Y")) = YEAR(curdate()) and (itens_ordem.id_ordem = ordem.id) and (ordem.ano = YEAR(curdate())) and (ordem.situacao = 0) GROUP BY month(str_to_date(ordem.dataPedido, "%d/%m/%Y"))
