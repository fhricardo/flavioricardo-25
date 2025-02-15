const currentDate = new Date();
let theMonth = currentDate.getMonth();
let theDay = currentDate.getDate();
var w = window.innerWidth;
let size = Math.floor(w / 180);
const stripes = document.getElementsByClassName('black-friday');
const logoDP = document.getElementById('dpImg');
const bannerBG = document.getElementById('banner-dp');
const slogan = document.getElementById('slogan');

if (theMonth == 10 || (theMonth == 11 && theDay <= 10)) {
    for (let b = 0; b < 3; b++) {
        console.log(b)
        for (let i = 0; i < size; i++) {
            const item = document.createElement("p");
            stripes[b].appendChild(item);
        }
    }

} else {
    for (let b = 0; b < 3; b++) {
        stripes[b].style.visibility = 'hidden';
    }
    logoDP.src = "../assets/design-politico-360-h.png";
    bannerBG.style.backgroundImage = "url(../assets/dp-bg.png)";
    bannerBG.style.backgroundColor = "var(--fr-lighter)";
    slogan.style.color = "var(--blue)";
}
function refresh() {
    location.reload();
}