<?php

session_start(); //starta a session

echo session_id(); // exibe o ID da sessao. Se recarregar a page o ID NÃO muda.  Se abrir uma guia anonima ou reconectar, o ID muda. Mas d apra recuperar isso e quando o usuario volta no site os produtos ainda estao no carrinho, mesmo sem logar.

session_regenerate_id(); // Gera um novo ID de sessao. É bom dar esse gerenerate na tela de loguin ou index. Pq alguem pode pegar o ID de um user autenticado

var_dump($_SESSION); // Vizualizar o que tem no array superglobal da sessao

session_id('78687whjgwh(Ex de ID'); // atribui os dados de uma session previamento criada no sevidor