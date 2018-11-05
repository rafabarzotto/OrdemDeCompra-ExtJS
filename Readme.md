# Sistema de Emissão de Ordens de Compra baseado em processos licitatórios



Sistema Web desenvolvido com o Framework ExtJS 4.2.1 (883) para emissão de Ordens de Compra baseado em processos licitatórios.


![](http://imagizer.imageshack.us/v2/640x480q90/901/PjgNkk.jpg)

![](http://imagizer.imageshack.us/v2/640x480q90/673/KNg112.jpg)


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

Copyright (c) 2014 Rafael Barzotto

GPL (http://opensource.org/licenses/glp-license.php) license.

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
