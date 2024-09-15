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

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');

let active = 0;
let lengthItems = items.length - 1;

const reloadSlider = () => {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach ((li,key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

