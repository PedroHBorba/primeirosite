
function validaBusca() {
    if (document.querySelector('#q').value == '') {
    alert('Não podia ter deixado em branco a busca!');
    return false;
    }
    }
document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["./img/lgo.png", "./img/lupa.png"];
var bannerAtual = 0;

function trocaBanner() {
bannerAtual = (bannerAtual + 1) % 2;
document.querySelector('.destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 4000);

var controle = document.querySelector('.pause');
controle.onclick = function() { if (controle.className == 'pause') { clearInterval(timer);
controle.className = 'play'; } else { timer = setInterval(trocaBanner, 4000);
controle.className = 'pause'; } return false; }; 
