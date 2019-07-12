<?php
$f = fopen("Formulario.csv", "r");
$localidade = $_REQUEST["localidade"];
$dados = fgetcsv($f);
$soma = 0;
$confirmacao = 0;
while($dados){

  if($dados[0] == $localidade){
$soma = $dados[1]+$dados[2]+$dados[3];
$confirmacao = 1;
    echo "<th>
         <td>Localidade: $dados[0]</td>  <br>
         <td>2016: $dados[1]</td> <br>
         <td>2017: $dados[2]</td> <br>
         <td>2018: $dados[3]</td> <br>
         <td>Total: $soma</td> <br>
         </th>";

         break;
  }
  $dados = fgetcsv($f);
}
if($confirmacao == 0){
  echo "localidade não encontrada no formulario.";
}


?>
