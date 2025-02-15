const countDate = new Date('Dec 10, 2023 23:59:59').getTime();
function newYear() {

    const now = new Date().getTime();
    const gap = countDate - now;

    const segundos = 1000;
    const minutos = segundos * 60;
    const hora = minutos * 60;
    const dia = hora * 24;

    const cta1 = document.getElementById('cta1');
    const cta2 = document.getElementById('cta2');
    const cta3 = document.getElementById('cta3');
    const cta = document.getElementById('cta');

    const listlink = "https://chat.whatsapp.com/Gg94tVQBoBvHVA6RYvoz8s";
    const buylink = "link-to-buy";

    const expires = document.getElementById('expires');
    const d = Math.floor(gap / (dia));
    const h = Math.floor((gap % (dia)) / (hora));
    const m = Math.floor((gap % (hora)) / (minutos));
    const s = Math.floor((gap % (minutos)) / (segundos));
    const limitDay = document.getElementById('dia');
    const limitHours = document.getElementById('hora');
    const limitMinutes = document.getElementById('min');
    const limitSeconds = document.getElementById('sec');
    if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        limitDay.innerText = "0";
        limitHours.innerText = "0";
        limitMinutes.innerText = "0";
        limitSeconds.innerText = "0";
        expires.innerText = "Que pena! Essa oferta expirou!";
        cta.innerText = "Quero entrar para a lista de espera";
        cta1.innerText = "Entre para lista de espera";
        cta2.innerText = "Quero entrar para lista de espera";
        cta3.innerText = "Me avise quando a abrir a próxima turma!";
        cta.setAttribute('href', listlink);
        cta1.setAttribute('href', listlink);
        cta2.setAttribute('href', listlink);
        cta3.setAttribute('href', listlink);
    }
    else {
        limitDay.innerText = d;
        limitHours.innerText = h;
        limitMinutes.innerText = m;
        limitSeconds.innerText = s;
        expires.innerText = "Essa oferta expira em:";
        cta.innerText = "Quero garantir minha vaga agora!";
        cta1.innerText = "Garanta a sua vaga!";
        cta2.innerText = "Quero minha vaga com 40% OFF!";
        cta3.innerText = "Quero minha vaga com todos os bônus!";
        cta.setAttribute('href', buylink);
        cta1.setAttribute('href', buylink);
        cta2.setAttribute('href', buylink);
        cta3.setAttribute('href', buylink);
    }


}

setInterval(function () {
    newYear();
}, 1000);

// Newsletter
function newsToggle() {
    var newsletter = document.querySelector('.newsletter');
    newsletter.classList.toggle('active');
}