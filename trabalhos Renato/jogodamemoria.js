function randomInt(min, max){
    return min + (~~(Math.random()*(max - min)));
}

function Emabaralhar(a){
    for(var i = 0; i < a.length; i++){
        var index = randomInt(0, a.length);
        var aux = a[i];
        a[i] = a[index];
        a[index] = aux;
    }
}

var openCards = [];

function configureImage(imgs, i, baralho){
    imgs[i].setAttribute("src", "img0.png");
    imgs[i].setAttribute("width", "80");
    imgs[i].addEventListener("click", function(e){
        var src = imgs[i].getAttribute("src");
        if(src != "img0.png"){
            return;
        }
        if(openCards.length < 2){
            openCards.push(imgs[i]);
            imgs[i].setAttribute("src", baralho[i]);
            if(openCards.length == 2){
                var src0 = openCards[0].getAttribute("src");
                var src1 = openCards[1].getAttribute("src");
                if(src0 == src1){
                    console.log('Acertou!');
                    openCards = [];
                }
                else{
                    console.log('Errou!');
                    setTimeout(function(){
                        openCards[0].setAttribute("src", "img0.png");
                        openCards[1].setAttribute("src", "img0.png");
                        openCards = [];
                    }, 1000);
                }
            }
        }
    });
}

function geraBaralho(){
    var baralho = [];
    for(var i = 1; i <= 10; i++){
        baralho.push("img" + i + ".png");
        baralho.push("img" + i + ".png");
    }
    Embaralha(baralho);
    var imgs = document.querySelectorAll("img");
    for(var i = 0; i < baralho.length; i++){
        configureImage(imgs, i, baralho);
    }
}s
