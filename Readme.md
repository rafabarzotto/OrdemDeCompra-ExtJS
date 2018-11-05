# Sistema de Emissão de Ordens de Compra baseado em processos licitatórios



Sistema Web desenvolvido com o Framework ExtJS 4.2.1 (883) para emissão de Ordens de Compra baseado em processos licitatórios.

Em desenvolvimento um modulo de controle de frotas onde é possível saber todas as informações necessarias sobre um veículo visando controlar os vencimentos de documentação dos mesmos, com link direto ao site do detran/sc para realizar consultas com maior agilidade.


## Instalação

O Sistema foi desenvolvido utilizando as seguintes versões:
 - PHP 5.6.24
 - Apache 2.4.23 ou superior
 - MariaDB 10.1.16 ou superior

Estes 3 componetes podem ser encontrados na distribuição 5.6.24 do XAMPP.

Para utilização dos componentes em suas versões atuais são necessarias alterações nos codigos fontes.

Para instalação:
 - Clonar esse repositório em sua pasta htdocs ou www
 - Fazer o download do Framework EXTJS 4.2.1 GLP (http://cdn.sencha.com/ext/gpl/ext-4.2.1-gpl.zip)
 - Extrair a pasta ext do Framework EXTJS 4.2.1 para dentro do repositório antes clonado.
 - Rodar todos os scripts SQL disponíveis na pasta SQL/tabelas dentro de seu SGDB
 - Inserir o primeiro usuário manualmente diretamente no banco
 - Configurar o arquivo php/conectar.php fornecendo o host/ip/porta/nome do banco
 - Por fim entrar na URL de acordo com a pasta Clonada (http://localhost/OrdemDeCompras-ExtJS)
 - Pronto para o uso.


----
## License

Copyright (c) 2018 Rafael Barzotto

GPL (https://opensource.org/licenses/gpl-license) license.

Sobre a Licença: GNU General Public License (GPL)

A GPL é a licença para software livre com maior utilização. Ela se baseia em 4 liberdades: (1) a liberdade de executar o programa, para qualquer propósito; (2) a liberdade de estudar como o programa funciona e adaptá-lo às suas necessidades; (3) a liberdade de redistribuir cópias de modo que você possa ajudar ao seu próximo; e (4) a liberdade de aperfeiçoar o programa, e liberar suas modificações, de modo que toda a comunidade se beneficie delas.
O acesso ao código-fonte é um pré-requisito para seus objetivos serem atingidos. Com a garantia destas liberdades, a GPL permite que os programas sejam distribuídos e reaproveitados, **mantendo, porém, os direitos do autor.**

Texto da licença: http://www.gnu.org/licenses/gpl.html

----



## app/controller

  - This folder contains the controllers

## app/model

  - This folder contains the models

## app/view

  - This folder contains the views

## app/store

  - This folder contains the stores

## /php

  - This folder contains the back-ends archives

## /sql

  - This folder contains the sql scripts
  
----
## Imagens do Sistema  
  
![](https://i.imgur.com/dIthPTn.jpg)

![](https://i.imgur.com/Mzo8o3V.jpg)

![](https://i.imgur.com/JomrYsE.jpg)

![](https://i.imgur.com/xDiKsK1.jpg)

![](https://i.imgur.com/XZAEg0I.jpg)
