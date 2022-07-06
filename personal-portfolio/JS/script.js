
const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

navToggle.addEventListener('click', showMenu);
navClose.addEventListener('click', closeMenu);

function showMenu() {
    const dashVisible = document.querySelector('[data-visible]');
    if ( dashVisible === "true"){
        navMenu.classList.remove('show-menu');
        navToggle.setAttribute('data-visible', false);
    } else{
        navMenu.classList.add('show-menu');
        navToggle.setAttribute('data-visible', true);
    }

}


function closeMenu(){
    const dashVisible = document.querySelector('[data-visible]');
        navMenu.classList.remove('show-menu');
        navToggle.setAttribute('data-visible', false);
    }

// if (navClose){
//     navClose.addEventListener('click', () => {
//         navMenu.classList.remove('show-menu');
//         // navToggle.style.transform = 'translateY(0)'
//     })
// }

// Remove menu mobile 

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show-menu');
    navToggle.setAttribute('data-visible', false);
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SKILLS 


const skillsHeaders = document.querySelectorAll('#skillsHeader');
const activeToggle = document.getElementById('skillsActiveToggle');
const skillsArrows = document.querySelectorAll('#skillsArrow');
const skillsContents = document.querySelectorAll('.skills__list');

console.log(skillsContents)
skillsHeaders.forEach(skillsHeader =>{
    skillsHeader.addEventListener('click', toggleActive)
})


function toggleActive() {
        skillsArrows.forEach(skillsArrow =>{
            skillsArrow.classList.toggle('skills__arrow-active');
        })
       
        skillsContents.forEach( skillsContent => {
            skillsContent.classList.toggle('skills__list-active');
        });
}



// function toggleSkills() {
//     let itemsClass = this.parentNode.ClassName

//     for(i = 0 ; i < skillsContent.length; i++){
//         skillsContent[i].className = 'skills__content skills__close'
//     }

//     if(itemsClass === 'skills__content skills__close'){
//         this.parentNode.className = 'skills__content skills__open'
//     }
    
// }
 
// skillsHeader.addEventListener('click' , toggleSkills);

// SERVICES MODAL 
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const modalClose = document.getElementById('closeModal')

openModal.addEventListener('click', () => {
    modal.classList.remove('modal-inactive');
    modal.classList.add('modal-active');
})
modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-active');
    modal.classList.add('modal-inactive');
})

window.addEventListener('click' , (out) => {
    if(out.target == modal){
        modal.classList.remove('modal-active');
        modal.classList.add('modal-inactive');
    }
})


const sections = document.querySelectorAll('section[id]');


function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionsId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionsId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionsId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

// ----------------- SHOW SCROLL TOP  
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    // when the scroll is higher than 560 viewport height, add the show-scroll class
    
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

// ------------ CHANGE BACKGROUND HEADER 

function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater tan 200 viewport height, add the scroll header to the header tag 
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else  nav.classList.remove('scroll-header');
 }

 window.addEventListener('scroll' , scrollHeader);


// -------------------------------  DARK LIGHT THEME 

const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';
const iconTheme = 'assets/icons8-sun-96.png';

// PREVIOUSLY SELECTED TOPIC (if user selected) 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// WE OBTAIN THE CURRENT THEME THAT THE INTERFACE HAS BY VALIDATING TH DARK_THEME CLASS 

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light" ;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx-moon" : 'assets/icons8-sun-96.png'; ;

// WE VALIDATE IF A USER PREVIOUSLY CHOSE A TOPIC

if (selectedTheme) {
    // if the validation is fulfilled , we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// ACTIVATE / DEACTIVATE THE THEME MANULLY WITH THE BUTTON 
themeButton.addEventListener('click', () => {
    // ADD OR REMOVE THE DARK / ICON THEME
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme)
    // WE SAVE THE THEME AND TE CURRENT ITM THAT THE USE CHOSE
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
// SPLIDE SLIDER
var splide = new Splide( '.splide' );
  var bar    = splide.root.querySelector( '.my-slider-progress-bar' );
  
  // Update the bar width:
  splide.on( 'mounted move', function () {
    var end = splide.Components.Controller.getEnd() + 1;
    bar.style.width = String( 100 * ( splide.index + 1 ) / end ) + '%';
  } );
  
  splide.mount();

//   TEXT ANIMATION
// Wrap every letter in a span
let textWrapper = document.querySelector('.home__title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home__title .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.home__title',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
let subtitleWrapper = document.querySelector('.home__subtitle');
subtitleWrapper.innerHTML = subtitleWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.home__subtitle .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.home__subtitle',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
  });