let navber = document.querySelector('.navber');

document.querySelector('#menu-btn').onclick = () =>{
    navber.classList.toggle('active')
    searchform.classList.remove('active')
    cartItem.classList.remove('active')
}
let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active')
    navber.classList.remove('active')
    cartItem.classList.remove('active')
}
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active') 
    navber.classList.remove('active')
    searchform.classList.remove('active')
   
}
window.onscroll = () =>{
    navber.classList.remove('active')
    searchform.classList.remove('active')
    cartItem.classList.remove('active')
}


