const LinksPage = document.getElementById('linksPage');
console.log(LinksPage)
let imageNumber = Math.floor(Math.random() * 6);
console.log(imageNumber)
let bgImage;
document.onload = changeBackground();
function changeBackground() {
    switch (imageNumber) {
        case 0: LinksPage.setAttribute('class', 'berlin');
            break;
        case 1: LinksPage.setAttribute('class', 'myall');
            break;
        case 2: LinksPage.setAttribute('class', 'new-york');
            break;
        case 3: LinksPage.setAttribute('class', 'san-francisco');
            break;
        case 4: LinksPage.setAttribute('class', 'sao-paulo');
            break;
        case 5: LinksPage.setAttribute('class', 'sydney');
            break;
    }
};

