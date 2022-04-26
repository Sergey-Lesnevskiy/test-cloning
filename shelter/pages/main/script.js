const burger = document.querySelector('.menu__btn')
const burgr_Menu = document.querySelector('.burger_center')
const body = document.querySelector('.body')
const menuBox= document.querySelector('.menu__box')


const popu_links=document.querySelectorAll('.popub_link')
const popub=document.querySelector('.popub')
const popub_content=document.querySelector('.popub_content')
const close_popub= document.querySelector('.popub_conteiner_close')
const popub_img=document.querySelector('.popub_img')
const popub_body = document.querySelector('.popub_body')


 //start попаб



if(popu_links.length > 0){
  for (let index = 0; index < popu_links.length; index++) {
     const popubLink=popu_links[index];
     popubLink.addEventListener('click',()=>{
popub.classList.toggle('open')
body.classList.toggle('lock')

 const src=popubLink.children[0].children[0].getAttribute('src') 
        popub_img.src = src
     }) 
  }
}
// popub_body.addEventListener('click',()=>{
//     popub.classList.remove('open')
// })
close_popub.addEventListener('click',(e)=>{
    body.classList.remove('lock')
    popub.classList.remove('open')
    popub_img.src = ''
    e.preventDefault()
})
popub.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(popub_content);
 
	if ( ! withinBoundaries ) {
        body.classList.remove('lock')
        popub.classList.remove('open')
        popub_img.src = ''
        e.preventDefault()

        // скрываем элемент т к клик был за его пределами
	}
})
//end  попаб
//меню
menuBox.addEventListener('click',()=>{
    burger.classList.remove('active')
    burgr_Menu.classList.remove('active')
    body.classList.remove('lock')
  
})

//это через перебор 
// const links =document.querySelectorAll('.menu__item')

// for (i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function() {
//       this.style.backgroundColor = 'red';
//     });
//   }


burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    burgr_Menu.classList.toggle('active')
    body.classList.toggle('lock')
   
})   
//меню