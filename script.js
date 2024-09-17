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


// Slider Models

let list = document.querySelector('.models .slider .list');
let items = document.querySelectorAll('.models .slider .list .item');
let dots = document.querySelectorAll('.models .dots li');

let active = 0;
let lengthItems = items.length - 1;

let refreshSlider = setInterval(()=> {next.click()}, 3000)

const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.models .slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 3000)
}

dots.forEach ((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

// Slider Clothes

let listClothes = document.querySelector('.carrossel-products .slider .list');
let itemsClothes = document.querySelectorAll('.carrossel-products .slider .list .item');
let dotsClothes = document.querySelectorAll('.carrossel-products .dots li');

let activeClothes = 0;
let lengthItemsClothes = itemsClothes.length - 1;


const reloadSliderClothes = () => {
    let checkLeftClothes = itemsClothes[active].offsetLeft;
    listClothes.style.left = -checkLeftClothes + 'px';

    let lastActiveDotClothes = document.querySelector('.carrossel-products .slider .dots li.active');
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
