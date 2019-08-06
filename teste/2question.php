
<?php
$f = fopen("violencia-domestica-df.csv", "r");
$ano = $_GET["ano"];
$dados = fgetcsv($f);
$cont = 0;

while ($dados){
  if(($ano== 2016) && ($cont!=0)){
    echo "<th>Localidade: $dados[0]<br>
          <td>Casos em 2016: $dados[1]</td>
          </th><br><p>";
  }
  if(($ano== 2017) && ($cont!=0)){
    echo "<th>Localidade: $dados[0]<br>
          <td>Casos em 2017: $dados[2]</td>
          </th><br><p>";
  }
  if(($ano == 2018) && ($cont!=0)){
    echo "<td>Localidade: $dados[0]<br>
          <td>Casos em 2018: $dados[3]</td>
          </td><br><p>";
  }

  $cont++;
  $dados = fgetcsv($f);
}
fclose($f);


?>
