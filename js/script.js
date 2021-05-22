window.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll('.product');
    let buttons = document.querySelectorAll('button');
    let openBtn = document.querySelector('.open');

    function createCard(){
        let card = document.createElement('div');
        let field = document.createElement('div');
        let heading = document.createElement('h2');
        let closeBtn = document.createElement('button');

        card.classList.add('card')
        field.classList.add('card-field')
        closeBtn.classList.add('close')


        heading.textContent = 'В нашей корзине';
        closeBtn.textContent = 'Закрыть';

        document.body.appendChild(card);
        card.appendChild(heading);
        card.append(field);
        card.appendChild(closeBtn)
    }
    
    createCard()

    let card = document.querySelector('.card');
    let closeBtn = document.querySelector('.close');
    let field = document.querySelector('.card-field')

    openBtn.addEventListener('click', function(){
        card.style.display = 'block'
    })

    closeBtn.addEventListener('click', function(){
        card.style.display = 'none'
    })

    buttons.forEach(function(value, index){
        value.addEventListener('click', function(){
            let cloneItem = products[index].cloneNode(true);
            let btn = cloneItem.querySelector('button');

            btn.remove()
            field.appendChild(cloneItem);
            products[index].remove()
        })
    })
})
