<?php

session_start();

echo $_SESSION['nome'];


session_unset(); // apaga todas variaveis de sessão

session_destroy(); // limp aa variavel e kicka o usuario