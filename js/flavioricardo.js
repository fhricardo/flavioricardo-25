

// Mostra ano no Copyright do Footer
const thisYear = new Date();
const copyYear = document.querySelector('.thisYear');
onload = function footerYear() {
    copyYear.innerHTML = thisYear.getFullYear();
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
// Carrossel Drag & Drop

document.querySelectorAll(".slider-container").forEach((sliderContainer) => {
    const contents = sliderContainer.querySelector(".slider-contents");
    const cards = sliderContainer.querySelectorAll(".slider-card");
    const sliderNav = sliderContainer.nextElementSibling; // A navegação vem logo depois do container
    const cardWidth = 65 + 1; // 40rem + 1rem gap
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let deltaX = 0;
    let autoScrollActive = false;
    let autoScrollInterval;

    // Criando os dots da navegação
    cards.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("nav-dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        sliderNav.appendChild(dot);
    });

    const navDots = sliderNav.querySelectorAll(".nav-dot");

    function updateSliderPosition() {
        contents.style.transform = `translateX(${-currentIndex * cardWidth}rem)`;
        updateNav();
    }

    function updateNav() {
        navDots.forEach(dot => dot.classList.remove("active"));
        navDots[currentIndex].classList.add("active");
    }

    function startAutoScroll() {
        if (autoScrollActive) return;
        autoScrollActive = true;
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateSliderPosition();
        }, 5000);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollActive = false;
    }

    contents.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        contents.style.cursor = "grabbing";
        stopAutoScroll();
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        deltaX = e.clientX - startX;
    });

    document.addEventListener("mouseup", () => {
        if (!isDragging) return;
        isDragging = false;
        contents.style.cursor = "grab";

        if (deltaX < -50 && currentIndex < cards.length - 1) {
            currentIndex++;
        } else if (deltaX > 50 && currentIndex > 0) {
            currentIndex--;
        }

        updateSliderPosition();
        deltaX = 0;
        setTimeout(startAutoScroll, 3000);
    });

    // Clique nos dots para mudar o slide
    navDots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateSliderPosition();
            stopAutoScroll();
            setTimeout(startAutoScroll, 3000);
        });
    });

    // Observador de interseção para detectar quando o slider entra na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAutoScroll();
            } else {
                stopAutoScroll();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(sliderContainer);
});
