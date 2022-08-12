$(function() {

	$('.slider').slick({
	  prevArrow: '<div class="button slick-btn slick-prev" name="button"><img src="img/back.svg" alt="button"></div>',
	  nextArrow: '<div class="button slick-btn slick-next" name="button"><img src="img/next.svg" alt="button"></div>',
		autoplay: true,
	});

});


let getNavbarMenu = document.getElementById("navbar_menu")
getNavbarMenu.style.top = "-100px";
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        getNavbarMenu.style.top = "0px";
    } else {
        getNavbarMenu.style.top = "-100px";
    }
}

let getMenu = document.querySelector('.menu')
let getBody = document.querySelector('body')
let getBurgerMenu = document.querySelector('.burger_menu')
let getLi = document.querySelectorAll('.menu__item')
let getLiIcon = document.querySelectorAll('.menu__item-s')

getLi.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})
getLiIcon.forEach((item) => {
		item.addEventListener('click', function(ev){
			Rotate(item)
	})
})


function Rotate(click){
    getBurgerMenu.classList.toggle('rotate')
		getMenu.classList.toggle('active')
		getBody.classList.toggle('hidden')


}
