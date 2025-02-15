// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Get Modal Contents
const jobImage = document.getElementById('job-img');
const jobTitle = document.getElementById('job-title');
const jobClient = document.getElementById('job-client');
const jobDesc = document.getElementById('job-desc');
const jobLink = document.getElementById('job-link');

//Jobs
const Jobs = [
    ['Naturae Gin London Dry', 'Naturae Gin - Itália', 'Manipulação, composição e retoque criativo de imagem publicitária.', 'https://naturaegin.it/'],
    ['Land Rover Camel Trophy', 'Projeto Pessoal', 'Manipulação, composição e retoque criativo de imagem publicitária.', 'https://www.behance.net/gallery/138189055/Land-Rover-Defender-110-Camel-Trophy'],
    ['Archie Rose Sunrise Lime', 'Archie Rose - Austrália', 'Renderização 3D, Manipulação, composição e retoque criativo de imagem publicitária.', ''],
    ['Microworlds - Sydney', 'Projeto Pessoal', 'Estudo de manipulação de imagens, reproduzindo um microworld da cidade de Sydney, NSW, Austrália.', ''],
    ['The Time Portal', 'Projeto Pessoal', 'Manipulação, composição, retoque e color grading de imagem publicitária.', 'https://www.youtube.com/watch?v=cR5834aCNLw'],
    ['Natural One Suco de Laranja', 'Natural One', 'Fotografia, manipulação, composição, retoque criativo e pós-produção de imagem publicitária.', ''],
    ['Book - Oferta Integrada', 'Raízen', 'Apresentação interativa online, incluindo multimídia. Desenvolvida com Adobe InDesign.', ''],
    ['Guia de Boas Práticas', 'Janssen/J&J', 'Apresentação interativa online. Desenvolvida com Adobe InDesign.', ''],
    ['Apresentação Institucional', 'We Movve', 'Apresentação interativa online. Desenvolvida com Adobe InDesign.', 'https://indd.adobe.com/view/1186b187-f12f-4734-9e4e-96c4609ea124'],
    ['Apresentação Institucional', 'C Cargo', 'Apresentação interativa online. Desenvolvida com Adobe InDesign.', 'https://indd.adobe.com/view/735d0af2-1056-44d4-813a-f3244d5af493'],
    ['Catálogo Interativo', 'Projeto Pessoal', 'Projeto pessoal para demonstração de catálogo interativo online. Desenvolvido com Adobe InDesign', 'https://indd.adobe.com/view/2453ba25-58c5-4812-b417-234453ab97ff'],
    ['Website', 'C Cargo', 'Desenvolvimento de Website para a C Cargo. HTML5, CSS3, JavaScript, WordPress.', 'https://ccargo.com.br']
];

// When the user clicks the button, open the modal 
function ShowModal(item) {
    jobLink.href = "";
    jobLink.innerHTML = "";

    modal.style.display = "block";

    jobImage.src = `assets/jobs/job-${item}.avif`;
    let theDesc = Jobs[item];
    jobTitle.innerHTML = theDesc[0];
    jobClient.innerHTML = theDesc[1];
    jobDesc.innerHTML = theDesc[2];
    console.log(theDesc[3])
    if (theDesc[3] != '') {
        jobLink.href = theDesc[3];
        jobLink.innerHTML = "Veja online";
        jobLink.setAttribute('aria-label', theDesc[0]);
    }
    if (theDesc[3] == '') {
        jobLink.removeAttribute('href')
    }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}