CREATE DATABASE OC CHARACTER SET utf8 COLLATE utf8_general_ci;

use OC;

CREATE TABLE credores (
i_credores float,
nome char(50),
endereco char(40),
bairro char(20),
cidade char(20),
unidade_federacao char(2),
cgc char(14));

CREATE TABLE itens_processo (
i_ano_proc float,
i_processo float,
i_item float,
i_material float,
qtde_item decimal(16, 3),
preco_max decimal(16, 5));

CREATE TABLE material (
i_material float,
nome_mat char(60),
un_codi char(5));

CREATE TABLE participantes (
i_ano_proc float,
i_processo float,
i_credores float,
i_item float,
preco_unit_part decimal(16, 5),
preco_total decimal(16, 2),
qtde_cotada decimal(16, 3),
nome_marca char(20),
vlr_descto decimal(16, 4),
situacao float);

CREATE TABLE processos (
i_ano_proc float,
i_processo float,
modalidade float,
sigla_modal char(5),
data_homolog date,
vigencia char(60));

CREATE TABLE departamento (id serial, descricao varchar(40)) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE entidades (id serial, nome varchar(255), cnpj varchar(20), bairro varchar(255), cidade varchar(255), estado varchar(255), cep varchar(15), email varchar(255)) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE itens_ordem (id serial, ano int, id_ordem int, i_material int, nome_mat varchar(255), nome_marca varchar(255), un_codi varchar(20), preco_unit_part float, qtde_comprar float, subtotal float) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE ordem (id serial, dataPedido varchar(12), ano int, i_processo int, i_credores int, id_entidade int, solicitante varchar(255), departamento varchar(255), aplicacao varchar(255), prazo varchar(12), nome varchar(40),situacao int) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE usuarios (iduser serial, nome varchar(40), login varchar(40), senha varchar(50), email varchar(100)) CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE veiculos (id serial, placa varchar(20), renavam varchar(40), ano_modelo varchar(20), descricao varchar(100), id_departamento int(10)) CHARACTER SET utf8 COLLATE utf8_general_ci;
#user:admin
#pass:qwe123
INSERT INTO usuarios (nome, login, senha, email) VALUES ( 'Administrador', 'admin', '200820e3227815ed1756a6b531e7e0d2', 'admin@admin.com');