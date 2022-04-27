const burger = document.querySelector('.menu__btn')
const burgr_Menu = document.querySelector('.burger_center')
const body = document.querySelector('.body')
const menuBox= document.querySelector('.menu__box')
const test_blackout=document.querySelector('.test_blackout')

const BTN_LEFT= document.querySelector('#btn_left')
const BTN_RIGHT= document.querySelector('#btn_right')
const CAROUSEL =document.querySelector('#carousel')
const ITEM_LEFT =document.querySelector('#item_left')
const ITEM_RIGHT =document.querySelector('#item_right')

const popub_links=document.querySelectorAll('.card')
const popub=document.querySelector('.popub')
const popub_content=document.querySelector('.popub_content')
const close_popub= document.querySelector('.popub_conteiner_close')
const popub_img=document.querySelector('.popub_img')
const popub_body = document.querySelector('.popub_body')



//start caorusel

//движение карусели
const move_left =()=>{
    CAROUSEL.classList.add('transition_left')
 //на время анимации отключить кнопки бдля этого содаём функцию 
 BTN_RIGHT.removeEventListener('click',move_right)
 BTN_LEFT.removeEventListener('click',move_left)
}
const move_right =()=>{
    CAROUSEL.classList.add('transition_right')
 //на время анимации отключить кнопки для этого содаём функцию 
 BTN_LEFT.removeEventListener('click',move_left)
    BTN_RIGHT.removeEventListener('click',move_right)
}

BTN_LEFT.addEventListener('click',move_left)
BTN_RIGHT.addEventListener('click',move_right)

//слушаем конец анимации
CAROUSEL.addEventListener('animationend',(animationEvent)=>{//добавляем в функцию аргумент событие

    let changedItem; //переменная меняется в зависимости от направления
        if(animationEvent.animationName === 'move-left'){
            CAROUSEL.classList.remove('transition_left')
    //полючаем элементы слево три карточки будут сохранены под названием leftItems
    // console.log(document.querySelector('#item_left').innerHTML)
    changedItem=ITEM_LEFT.innerHTML;
      
    //добавляем элементы в центр
    document.querySelector('#item_active').innerHTML = ITEM_LEFT.innerHTML
        }else{
            CAROUSEL.classList.remove('transition_right')
            //полючаем элементы слево три карточки будут сохранены под названием leftItems
            // console.log(document.querySelector('#item_left').innerHTML)
            changedItem=ITEM_RIGHT
            
            const rightItems = ITEM_RIGHT.innerHTML;
            //добавляем элементы в центр
             document.querySelector('#item_active').innerHTML = rightItems
            
        }
       
    //возвращаем слушание события для кнопок
    BTN_RIGHT.addEventListener('click',move_right)
    BTN_LEFT.addEventListener('click',move_left)
    })
//end caorusel

 //start попаб


if(popub_links.length > 0){
  for (let index = 0; index < popub_links.length; index++) {
     const popubLink=popub_links[index];
     
     popubLink.addEventListener('click',()=>{
      
    popub.classList.toggle('open')
    body.classList.toggle('lock')

 const src=popubLink.children[0].children[0].getAttribute('src') 
        popub_img.src = src
     }) 
  }
}
close_popub.addEventListener('click',(e)=>{
    body.classList.remove('lock')
    popub.classList.remove('open')
    popub_img.src = ''
    e.preventDefault()
})
popub.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(popub_content);
  // скрываем элемент т к клик был за его пределами
	if ( ! withinBoundaries ) {
        body.classList.remove('lock')
        popub.classList.remove('open')
        popub_img.src = ''
        e.preventDefault()
    
	}
})
popub.addEventListener('mousemove', (e) => {
	const withinBoundaries = e.composedPath().includes(popub_content);
  // скрываем элемент т к клик был за его пределами
	if (!withinBoundaries ) {
    popub_content.style.cursor = 'default'  
        
    
	}
})

//end  попаб
// меню
menuBox.addEventListener('click',()=>{
    burger.classList.remove('active')
    burgr_Menu.classList.remove('active')
    body.classList.remove('lock')
    test_blackout.classList.remove('active')
})
test_blackout.addEventListener( 'click', () => {
	
      burger.classList.remove('active')
      burgr_Menu.classList.remove('active')
      body.classList.remove('lock')
      test_blackout.classList.remove('active')

})
burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    burgr_Menu.classList.toggle('active')
    body.classList.toggle('lock')
    test_blackout.classList.toggle('active')
})   
//меню