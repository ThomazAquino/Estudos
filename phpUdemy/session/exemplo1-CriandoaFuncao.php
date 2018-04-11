<?php
// por padrão as sessoes estao desativadas no php
// cada vez que voce conecta no servidor voce ganha um ID de sessão
session_start(); // agora estao funcionando (Nesta pagina)
// é bom criar um arquivo php com essas funções e dar include ou require

$_SESSION[nome] = "Thomaz"; // como se fosse um array superglobal


?>