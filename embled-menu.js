document.addEventListener('DOMContentLoaded', function () {
    init()
    BtnMenuIcon.addEventListener('click', ()=> {
        handleToogleMenu()
    })
    
    //funcion para cualquier clic en el documento
    document.addEventListener("click", function(e){
        var clic = e.target;
        if( !MenuForm.classList.contains("fade_out") && clic != MenuForm && clic != BtnMenuIcon){
            handleToogleMenu()
        }
    }, false);
});

// Init - instance element 
let MenuElement = ''
let BtnMenuIcon = ''
let MenuForm = ''
const baseUrl = 'https://larreahena0.github.io'

const init = () => {
    let  position = 'right-middle'
    MenuElement = document.querySelector('.menu_float')
    if(!MenuElement) {
        elementScript = document.querySelector("#menu-transversal")
        if(elementScript){
            position = elementScript.getAttribute('position')
        }

        const MenuElement = document.createElement('div')
        MenuElement.classList.add('menu_float')
        MenuElement.classList.add(position)
        
        MenuElement.innerHTML = `
        <ul class="menu_float__menu fade_out"></ul>
        <div class="menu_float__icon fade_out"></div>
        `
        document.querySelector('body').append(MenuElement)   
    }
    
    MenuElement = document.querySelector('.menu_float')
    BtnMenuIcon = MenuElement.querySelector('.menu_float__icon')
    MenuForm = MenuElement.querySelector('.menu_float__menu')
    renderMenu()
}


const renderMenu = () => {
    BtnMenuIcon.classList.remove('fade_out')
    let itemsHtml = ''
    fetch
    data.forEach(item => {
        itemsHtml += `
        <a href="${item.url}" target="_blank">
            <li>
            <img src="${item.img}" alt="Icono ${item.label}" />
            <span>${item.label}</span>
            </li>
        </a>
        `
        MenuForm.innerHTML = itemsHtml
    })
}

const handleToogleMenu = () => {
    MenuForm.classList.toggle('fade_out')
    BtnMenuIcon.classList.toggle('menu_active')
}

const data = [
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Dia a dia',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Dia a dia',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Dia a dia',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Dia a dia',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Ruta de aprendizaje',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Ruta de aprendizaje',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Ruta de aprendizaje',
        url: 'https://www.pragma.com.co/es'
    },
    {
        img: `${baseUrl}/img/google.svg`,
        label: 'Ruta de aprendizaje',
        url: 'https://www.pragma.com.co/es'
    }
]