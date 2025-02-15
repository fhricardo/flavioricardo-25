document.onload = changeLang();
function changeLang(theLang) {
    const mylink = document.getElementsByClassName('mylink');
    var lang = theLang;
    const theLinks = ["https://flavioricardo.com.br/",
        "https://behance.net/flavioricardo",
        "https://www.instagram.com/flavioricardodesign/",
        "https://www.youtube.com/flavioricardodesign",
        "https://github.com/flavio-ricardo",
        "https://www.facebook.com/flavioricardodesign",
        "https://www.artstation.com/flavioricardo",
        "mailto:contact@flavioricardo.com.br",
        "https://wa.me/5511940353144"];
    const icons = [
        "<i class='fa-solid fa-earth-oceania'></i>",
        "<i class='fa-brands fa-behance-square'></i>",
        "<i class='fa-brands fa-instagram'></i>",
        "<i class='fa-brands fa-youtube'></i>",
        "<i class='fa-brands fa-github'></i>",
        "<i class='fa-brands fa-facebook-square'></i>",
        "<i class='fa-brands fa-artstation'></i>",
        "<i class='fa-regular fa-envelope'></i>",
        "<i class='fa-brands fa-whatsapp'></i>",
    ];
    switch (lang) {
        case "en":
            var aboutMe = "Pro retoucher &<br>Designer &<br>Web Developer &<br>Instructor";
            var textLinks = [
                "visit the Website",
                "on Behance",
                "follow on Instagram",
                "subscribe on my Channel",
                "follow on GitHub",
                "like on Facebook",
                "view on ArtStation",
                "contact to Hire me",
                "let's Talk!"
            ];
            break;
        case "pt":
            var aboutMe = "Retocador &<br>Designer &<br>Desenvolvedor Web &<br>Instrutor";
            var textLinks = [
                "visite o Site",
                "no Behance",
                "siga no Instagram",
                "inscreva-se no Canal",
                "siga no GitHub",
                "curta no Facebook",
                "veja no ArtStation",
                "Contrate-me",
                "vamos Conversar!",
            ];
            break;
        default:
            var aboutMe = "Pro retoucher &<br>Designer &<br>Web Developer &<br>Instructor";
            var textLinks = [
                "visit the Website",
                "on Behance",
                "follow on Instagram",
                "subscribe on my Channel",
                "follow on GitHub",
                "like on Facebook",
                "view on ArtStation",
                "contact to Hire me",
                "let's Talk!"
            ];
    }
    for (let i = 0; i < textLinks.length; i++) {
        mylink[i].innerHTML = icons[i] + " " + textLinks[i];
        console.log(icons[i]);
        mylink[i].setAttribute('href', theLinks[i]);
        mylink[i].setAttribute('target', '_blank');
    }
    const textAbout = document.getElementById('aboutMe');
    textAbout.innerHTML = aboutMe;
}