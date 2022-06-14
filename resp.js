burger =document.querySelector('.burger')
navbar = document.querySelector('.navbar-bottom')
navList = document.querySelector('.menu-right')

burger.addEventListener ('click',()=>{
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
})