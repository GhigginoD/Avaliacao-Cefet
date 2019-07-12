1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34

function divisor() {

var a = document.getElementById('a');
var b = document.getElementById('b');
var resultado = document.getElementById('mdc');
var divisores = document.getElementById('divisores')

var cont = 0

var va = parseInt(a.value);
var vb = parseInt(b.value);

if(va > vb){
for (var i = 0; i <= vb; i++) {
  if((vb % i === 0) && (va % i === 0)){
    cont++;
    mdc = i;

resultado.textContent = mdc;
}
divisores.textContent = cont;
                                    }
            }
else {
  for (var i = 0; i <= va; i++) {
    if((vb % i === 0) && (va % i === 0)){
      cont++;
      var mdc = i;
      resultado.textContent = mdc;
}
}
divisores.textContent = cont;
}
}
