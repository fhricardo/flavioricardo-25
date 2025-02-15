const d = new Date();

// Mostra ano no Copyright do Footer
const copyYear = document.querySelector('.thisYear');
onload = function footerYear() {
    copyYear.innerHTML = d.getFullYear();
}
// Mostra Idade na Seção Sobre
const idade = document.getElementById('age');
if (idade != null) {
    console.log(idade);
    onload = function showAge() {
        let myAge = d.getFullYear() - 1981;
        idade.innerHTML = myAge;
        copyYear.innerHTML = d.getFullYear();
    }
}
