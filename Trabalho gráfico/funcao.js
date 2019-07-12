function res()
{
    let a = document.getElementById("a");

    let b = document.getElementById("b");

    let c = document.getElementById("c");

    let resultado = document.getElementById("resultado");

    let resultado1 = document.getElementById("resultado1");

    let va = parseInt(a.value);

    let vb = parseInt(b.value);

    let vc = parseInt(c.value);

    let quadradob = vb*vb;

    let delta = quadradob -(4 * va *vc);

    let raizdelta = Math.sqrt(delta);

    if(delta === 0){
/* Terá 2 raizes iguais*/

   let delta_igual = (-vb + raizdelta);

   let x1 = (delta_igual / 2 * va );

   resultado.textContent = x1;
   resultado1.textContent = x1;


    }else

    if(delta > 0){
/* Terá 2 raizes diferentes*/

  let delta_igual1 = (-vb + raizdelta);

  let x1 = (delta_igual1 / 2 * va);

  let delta_igual2 = (-vb - raizdelta);

  let x2 = (delta_igual2 / 2 * va);

   resultado.textContent = x1;

   resultado1.textContent = x2

}else

    if(delta < 0){
 /* Não terá raizes*/

    resultado.textContent = "não terá raizes reais";
    resultado1.textContent = "não terá raizes reais";

}
}
function f(x)
{
  var a = parseInt(document.getElementById("a").value);

  var b = parseInt(document.getElementById("b").value);

  var c = parseInt(document.getElementById("c").value);

  var p   = (((a * (x**2)) + (b * x) + c));
return yt(p);
}


function yt(y)
{
return -25*y; // ((h/(xf-x0))*y)
}

function xt(x)
{
return 25*x; // (w/(xf-x0))*x
}


    function main()
    {
    var canvas, ctx;

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

var x0 = -10;
var xf = 10;
var x = x0;
var dx = 0.1;
ctx.save();
ctx.translate(250,250);
ctx.beginPath();
ctx.moveTo(xt(-10),yt(0));
ctx.lineTo(xt(10),yt(0));
ctx.moveTo(xt(0),yt(-100));
ctx.lineTo(xt(0),yt(100));
ctx.stroke();
ctx.beginPath();
ctx.moveTo(xt(x0),f(x0));
x+= dx;
while(x<xf)
{
  ctx.lineTo(xt(x),f(x))
  x+= dx;
}
ctx.stroke();
ctx.restore();
}
}
