document.addEventListener('DOMContentLoaded', function () {
    init()    
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

const init = () => {
    fetch('https://njhmmh5qr9.execute-api.us-east-1.amazonaws.com/prod/parameterLists/api/v1/lists/13')
    .then(res => res.json())
    .then(data => {
        const response = data.input
        response.sort(function(a, b) {
            const keyA = parseInt(a.idValue), keyB = parseInt(b.idValue)
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        if(data.message==='SUCCESS') {
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
            renderMenu(response)

            BtnMenuIcon.addEventListener('click', ()=> {
                handleToogleMenu()
            })
        }
        
    })
}


const renderMenu = (data) => {
    BtnMenuIcon.classList.remove('fade_out')
    let itemsHtml = ''
    data.sort(function(a, b){return b - a});
    if (data.length > 0) {
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
}


const handleToogleMenu = () => {
    MenuForm.classList.toggle('fade_out')
    BtnMenuIcon.classList.toggle('menu_active')
}
