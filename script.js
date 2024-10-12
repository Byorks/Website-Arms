// Open Close Menu
let menu = document.getElementById('menu');
let iconBars = document.getElementById('icon-bars');
let iconX = document.getElementById('icon-x');

function openCloseMenu(){
    // Menu fechado - tem a classe menu-fechado
    // Menu aberto - não tem a classe menu-fechado

    // Alterna a classe "menu-fechado" no menu
    // menu.classList.toggle()

    // Se o menu contem a classe menu-fechado
    if ( menu.classList.contains("menu-closed") ){
        // Abrir o menu - tirar a classe menu-fechado
        menu.classList.remove("menu-closed");

        // Mostrar icone barras | inLine é o padrão para mostrar o svg
        iconBars.style.display = "none";

        // Esconder o icone do X
        iconX.style.display = "inLine";

    }
    else {
        // Fechar o menu - adicionar a classe menu-fechado
        menu.classList.add("menu-closed");

        // Mostrar o icone do X
        iconX.style.display = "none";

        // Esconder o icone do barras
        iconBars.style.display = "inLine";
    }
}

const menuResponsive = () => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    if (mediaQuery.matches) {
        menu.classList.add("menu-closed");
        iconX.style.display = "none";
        iconBars.style.display = "inLine";
    }else {
        if(menu.classList.contains("menu-closed")){
            menu.classList.remove("menu-closed");
            iconX.style.display = "none";
            iconBars.style.display = "inLine";
        }
    }
}

// Tab Section
const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        // Ao acionar o click
        // Remove de todas as tabs a classe active
        tabs.forEach(tab=>{tab.classList.remove('active')});
        // Adiciona na tab clicada a classe "ativa"
        tab.classList.add('active');

        let line = document.querySelector('.line');
        let tabActive = document.querySelector('.tab-btn:nth-child(2)');

        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        // Removendo de todos os conteúdos o status de ativo
        allContent.forEach(content =>{content.classList.remove('active')});
        // Adicionando apenas a um que foi o clicado a classe "ativa"
        allContent[index].classList.add('active');

        // let photoCategory = document.querySelectorAll('photo-category');

        if( index == 1) {
            line.style.background = "#5371B3";
            tabActive.style.color = "#5371B3";

            // photoCategory.forEach(photo => {
            //     photo.style.borderBottom = "5px solid #5371B3";

            // });
        }
        else {
            line.style.background = "#9F3D56";
            tabActive.style.color = "#FFB1C5";
        }
    })
})

// Header
window.addEventListener('scroll', function(){
    let categorySection = this.document.getElementById('category');
    let header = this.document.getElementById('header');

    let categoryPosition = categorySection.getBoundingClientRect().top;

    if(categoryPosition <= 0) {
        header.classList.add('fixed');
        header.classList.remove('container-grid')
    } else {
        header.classList.remove('fixed');
        header.classList.add('container-grid')
    }
});

// Banner Carrossel
let listBanner = document.querySelector('main .slider .list');
let itemsBanner = document.querySelectorAll('main .slider .list .item');
let dotsBanner= document.querySelectorAll('main .dots li');

let activeBanner = 0;
let lengthItemsBanner = itemsBanner.length - 1;

// let refreshSlider = setInterval(()=> {next.click()}, 3000)

const reloadSliderBanner = () => {
    let checkLeft = itemsBanner[active].offsetLeft;
    listBanner.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('main .slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dotsBanner[active].classList.add('active');
    // clearInterval(refreshSlider);
    // refreshSlider = setInterval(()=> {next.click()}, 3000)
}

dotsBanner.forEach ((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSliderBanner();
    })
})


// Slider Models
/* Precisa corrigir o next */
const sliderModels = () => {

    let list = document.querySelector('.models .slider .list');
    let items = document.querySelectorAll('.models .slider .list .item');
    let dots = document.querySelectorAll('.models .dots li');

    let active = 0;
    let lengthItems = items.length - 1;

    // let refreshSlider = setInterval(()=> {next.click()}, 3000)

    const reloadSlider = () => {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.models .dots li.active');
        lastActiveDot.classList.remove('active');
        dots[active].classList.add('active');
        // clearInterval(refreshSlider);
        // refreshSlider = setInterval(()=> {next.click()}, 3000)
    }

    dots.forEach ((li,key) => {
        li.addEventListener('click', function(){
            active = key;
            reloadSlider();
        })
    })
}

sliderModels();

// Slider Clothes
const sliderClothes = () => {
    let listClothes = document.querySelector('.carrossel-products .slider .list');
    let itemsClothes = document.querySelectorAll('.carrossel-products .slider .list .item');
    let dotsClothes = document.querySelectorAll('.carrossel-products .dots li');

    let activeClothes = 0;
    let lengthItemsClothes = itemsClothes.length - 1;


    const reloadSliderClothes = () => {
        let checkLeftClothes = itemsClothes[active].offsetLeft;
        listClothes.style.left = -checkLeftClothes + 'px';

        let lastActiveDotClothes = document.querySelector('.carrossel-products .dots li.active');
        lastActiveDotClothes.classList.remove('active');
        dotsClothes[active].classList.add('active');
        clearInterval(refreshSlider);
        refreshSlider = setInterval(()=> {next.click()}, 3000)
    }

    dotsClothes.forEach ((li,key) => {
        li.addEventListener('click', function(){
            active = key;
            reloadSliderClothes();
        })
    })
}

sliderClothes();

// Render questions
const loadFaq = (faqList) => {
    let containerFaq = document.querySelector(".perguntas");

    let template = `<h2>Ficou Alguma Dúvida?</h2>`

    faqList.forEach( faq => {
        template += `
            <div class="faq">
                <div class="question">
                    <h3>${ faq.question }</h3>

                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" fill="white"/>
                        <path d="M9.5 7.5L16 16L22.5 7.5" stroke="#9F3D56"/>
                        <path d="M9.5 16L16 24.5L22.5 16" stroke="#9F3D56"/>
                    </svg>


                </div>
                <div class="answer">
                    <p>
                        ${ faq.answer}
                    </p>
                </div>
            </div>
        `
    })

    containerFaq.innerHTML = template;
}

// Loading question from API
const importQuestionAnswer = () => {
    fetch("faq.json")
    .then ((resposta) => resposta.json())
    .then ((dadosTratados) => {
        let faqList = dadosTratados;
        loadFaq(faqList);
        loadAccordion();
    })
}

importQuestionAnswer();

// Accordion FAQ

const loadAccordion = () => {
    const faqs = document.querySelectorAll('.faq');

    console.log(faqs)

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        })
    });
}

// Reponsivo
let originalStructure = [];

const saveOriginalStructure = () => {
    let photoSlidesModels = document.querySelectorAll('.models .photo-slide');
    originalStructure = [];

    photoSlidesModels.forEach (photoSlide => {
        originalStructure.push(photoSlide.parentNode.outerHTML);
    });
}

const restoreOriginalStructure = () => {
    if (originalStructure.length > 0) {
        let sliderList= document.querySelector('.models .slider .list');

        sliderList.innerHTML = '';

        originalStructure.forEach((structure) => {
            sliderList.insertAdjacentHTML('beforeend', structure);
        });

        // let dotList = document.querySelector('.models .dots');
        // let dotLi = dotList.querySelectorAll('li');
        let dotLi = document.querySelectorAll('.models .dots li');
        for (i = 0; i < 6; i++) {
            if (dotLi.length > 3) {
                dotLi[i].remove();
            }
        }
        let lastActiveDot = document.querySelector('.models .dots li.active');
        if (lastActiveDot === null) {
            dotLi[0].classList.add("active");
        }

    }
}

const moveImagesForSmallScreens = () => {
    const mediaQuery = window.matchMedia('(max-width: 765px)');

    if (mediaQuery.matches) {
        let photoSlidesModels = document.querySelectorAll('.models .photo-slide');
        const dotsModels = document.querySelector('.models .dots');

        photoSlidesModels.forEach(photoSlide => {
            // const parentOfParent = photoSlide.parentNode.parentNode;
            const images = photoSlide.querySelectorAll('img');

            // Criando dots
            for (i = 1; i < images.length; i++) {
                console.log('criei li')
                let newLi = document.createElement('li');
                dotsModels.appendChild(newLi);
            }

            images.forEach(image => {
                const newDiv = document.createElement('div');
                newDiv.classList.add('item');
                newDiv.appendChild(image);
                // Primeiro parametro quem vamos ínserir, segundo é onde vamos ínserir
                photoSlide.parentNode.parentNode.insertBefore(newDiv, photoSlide.parentNode);
            });

            photoSlide.parentNode.remove();

        });

        sliderModels();
    } else {
        restoreOriginalStructure();
        sliderModels();
    }
}

function addingPattern() {
    const width = window.innerWidth;
    const items = document.querySelectorAll('.item-desc');

    items.forEach(item => {
        const patternExists = item.querySelector('.pattern');

        if (width <= 650 && !patternExists) {
            const newPattern = document.createElement('div');
            newPattern.classList.add('pattern');
            item.appendChild(newPattern);
        } else if (width > 650 && patternExists) {
            patternExists.remove();
        }
    });
}

// Carrossel Products
 // Função para reorganizar os photo-slides com dois slides e duas imagens em cada
function reorganizarSlides() {
    const slider = document.querySelector('.carrossel-products .slider .list');
    const items = slider.querySelectorAll('.carrossel-products .item');
    const dotsContainer = document.querySelector('.carrossel-products .dots');
    
    let allImages = [];

    // Coleta todas as imagens de todos os slides
    items.forEach(item => {
        const images = item.querySelectorAll('.carrossel-products .photo-category');
        images.forEach(img => allImages.push(img));
    });

    // Limpa os itens e os dots antigos
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Cria novos itens com dois photo-slides, cada um contendo duas imagens
    for (let i = 0; i < allImages.length && i / 4 < 6; i += 4) { // Limita a 6 dots (6 items no máximo)
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        if (i === 0) newItem.classList.add('active');  // Marca o primeiro item como ativo

        for (let j = 0; j < 2; j++) {
            const newSlide = document.createElement('div');
            newSlide.classList.add('photo-slide');

            // Adiciona até duas imagens por slide
            for (let k = 0; k < 2; k++) {
                const imgIndex = i + j * 2 + k;
                if (allImages[imgIndex]) {
                    newSlide.appendChild(allImages[imgIndex]);
                }
            }
            newItem.appendChild(newSlide);
        }
        // Adiciona o novo item ao slider
        slider.appendChild(newItem);

        // Adiciona um novo dot para cada item criado
        const newDot = document.createElement('li');
        if (i === 0) newDot.classList.add('active');  // Marca o primeiro dot como ativo
        dotsContainer.appendChild(newDot);
    }
     // Garante que os dots permaneçam no container correto
    if (dotsContainer.parentElement !== document.querySelector('.carrossel-products .container-grid')) {
        document.querySelector('.carrossel-products .container-grid').appendChild(dotsContainer);
    }
}

const reorganizarSlidesOne = () => {
    const slider = document.querySelector('.carrossel-products .slider .list');
    const items = slider.querySelectorAll('.carrossel-products .item');
    const dotsContainer = document.querySelector('.carrossel-products .dots');
    
    let allImages = [];
    
    // Coleta todas as imagens de todos os slides
    items.forEach(item => {
        const images = item.querySelectorAll('.carrossel-products .photo-category');
        images.forEach(img => allImages.push(img));
    });
    
    // Limpa os itens e os dots antigos
    slider.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Cria novos itens com dois photo-slides, cada um contendo uma imagem
    for (let i = 0; i < allImages.length && i / 2 < 12; i += 2) { // Limita a 12 dots (12 items no máximo)
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        if (i === 0) newItem.classList.add('active');  // Marca o primeiro item como ativo
    
        for (let j = 0; j < 2; j++) { // Cria 2 photo-slides por item
            const newSlide = document.createElement('div');
            newSlide.classList.add('photo-slide');
    
            // Adiciona apenas uma imagem por slide
            const imgIndex = i + j;
            if (allImages[imgIndex]) {
                newSlide.appendChild(allImages[imgIndex]);
            }
    
            newItem.appendChild(newSlide);
        }
    
        // Adiciona o novo item ao slider
        slider.appendChild(newItem);
    
        // Adiciona um novo dot para cada item criado
        const newDot = document.createElement('li');
        if (i === 0) newDot.classList.add('active');  // Marca o primeiro dot como ativo
        dotsContainer.appendChild(newDot);
    }
     // Garante que os dots permaneçam no container correto
    if (dotsContainer.parentElement !== document.querySelector('.carrossel-products .container-grid')) {
        document.querySelector('.carrossel-products .container-grid').appendChild(dotsContainer);
    }
}

// Função para restaurar o layout original
function restaurarLayoutOriginal() {
    const slider = document.querySelector('.carrossel-products .slider .list');
    const dotsContainer = document.querySelector('.carrossel-products .dots');

    // Layout original dos itens (sem reorganização)
    slider.innerHTML = `
        <div class="item active">
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-01.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-02.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-03.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-04.jpg" alt="">
            </div>
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-05.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-06.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-07.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-08.jpg" alt="">
            </div>
        </div>
        <div class="item">
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-09.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-10.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-11.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-12.jpg" alt="">
                </div>
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-13.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-14.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-15.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-16.jpg" alt="">
            </div>
        </div>
        <div class="item">
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-17.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-18.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-19.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-20.jpg" alt="">
            </div>
            <div class="photo-slide">
                <img class="photo-category" src="images/carousel/products/conjunto-01.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-02.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-03.jpg" alt="">
                <img class="photo-category" src="images/carousel/products/conjunto-21.jpg" alt="">
            </div>
        </div>
    `;

    dotsContainer.innerHTML = `
        <li class="active"></li>
        <li></li>
        <li></li>
    `;
}

// Função para alternar entre as versões do carrossel
function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 650 ) {
        restaurarLayoutOriginal()
    }
    else if (screenWidth <= 450) {
        reorganizarSlidesOne();
    }
    else {
        reorganizarSlides();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    checkScreenSize();
    sliderClothes();
    menuResponsive();
    saveOriginalStructure();
    moveImagesForSmallScreens();
    addingPattern();
});


window.addEventListener('resize', () => {
    checkScreenSize(); 
    sliderClothes();
    moveImagesForSmallScreens();
    addingPattern();
    menuResponsive();
});
