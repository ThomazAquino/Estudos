<?php
// para ser uma função precisa retornar um valor, se não retornar é uma subrotina, apenas.

function ola() {
   return "olá mundo<br />";  // podia dar echo aqui, mas eu posso querer fazer outra coisa com esses dados, alem do echo
}

echo ola();

/* ========================================== */


function salario() {
    return 946.00;
}

echo "jose recebeu 3 salarios ".(salario()*3); // parenteses porque concatena 2 tipos de dados