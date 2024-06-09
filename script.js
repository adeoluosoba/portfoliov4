// To fix give the nav bar color white on scroll down
let navbar = document.querySelector('nav');

window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = 'inherit';
    }else {
        navbar.style.background = 'transparent'
    }
}


//Hamurger Scripts
var action = document.querySelector('.action');
var mobileMenu = document.querySelector(".mobile_menu");
var hamburger = document.querySelector('.hamburger');
var cancel = document.querySelector('.cancel')
action.addEventListener("click", function(){
    mobileMenu.classList.toggle('reset');
    if(mobileMenu.classList.contains('reset')){
        hamburger.style.display = 'none';
        cancel.style.display ='block';
    }else {
        hamburger.style.display = 'block';
        cancel.style.display ='none';
    }
})

// the dark and light mode toggle

var ball = document.querySelector('.ball'); //This selects the ball
var body = document.querySelector('body');  //This selects the body
var ballPlate = document.querySelector('.ball_plate'); //This selects the ballplate 
var linkedin = document.querySelector(".fa-linkedin");
var whatsapp = document.querySelector(".fa-square-whatsapp");
var github = document.querySelector(".fa-square-github");

ball.addEventListener('click', function() { // using add event listener to make it go night
    body.classList.toggle('night');
    ball.classList.toggle('move');
    if(body.classList.contains('night')){
        body.style.color = "#fff";
        body.classList.add('colorWhite')
        linkedin.style.color = "#fff";
        whatsapp.style.color = "#fff";
        github.style.color = "#fff";
    }else {
        body.style.color = "black"; // the color of the text to black to enhance readability
        body.classList.add('colorBlack')
        linkedin.style.color = "#000";
        whatsapp.style.color = "#000";
        github.style.color = "#000";
    };
});


// testimonial slider
document.addEventListener("DOMContentLoaded", function () {
    // Testimonial Slider
    let testSlide = document.querySelectorAll('.testItem');
    let dots = document.querySelectorAll('.dot');
    let counter = 0;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            switchTest(dot, index);
        });
    });

    function switchTest(currentDot, testId) {
        dots.forEach(dot => dot.classList.remove('active'));
        testSlide.forEach(slide => slide.classList.remove('active'));

        currentDot.classList.add('active');

        if (testId > counter) {
            testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
            testSlide[testId].style.animation = 'next2 0.5s ease-in forwards';
        } else if (testId < counter) {
            testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
            testSlide[testId].style.animation = 'prev2 0.5s ease-in forwards';
        }

        testSlide[testId].classList.add('active');
        counter = testId;
    }
})


// Onscroll script for the about me section

window.addEventListener('scroll', disappear);

function disappear(){
    var disappears = document.querySelectorAll('.disappear');
    
    for(var i = 0; i < disappears.length; i++){

        var windowheight = window.innerHeight;
        var disappearTop = disappears[i].getBoundingClientRect().top;
        var disappearpoint = 150;

        if(disappearTop < windowheight - disappearpoint){
            disappears[i].classList.add("appear");
        }
        else {
            disappears[i].classList.remove('appear')
        }
    }
}

// Onscroll script to slide from the left

window.addEventListener('scroll', fromleft);

function fromleft(){
    var fromlefts = document.querySelectorAll('.from__left__side');
    
    for(var i = 0; i < fromlefts.length; i++){

        var windowheight = window.innerHeight;
        var disappearTop = fromlefts[i].getBoundingClientRect().top;
        var disappearpoint = 150;

        if(disappearTop < windowheight - disappearpoint){
            fromlefts[i].classList.add("to__left__side");
        }
        else {
            fromlefts[i].classList.remove('to__left__side')
        }
    }
}

// onscroll from the right


window.addEventListener('scroll', fromRight);

function fromRight(){
    var fromRights = document.querySelectorAll('.from__right__side');
    
    for(var i = 0; i < fromRights.length; i++){

        var windowheight = window.innerHeight;
        var disappearTop = fromRights[i].getBoundingClientRect().top;
        var disappearpoint = 150;

        if(disappearTop < windowheight - disappearpoint){
            fromRights[i].classList.add("to__right__side");
        }
        else {
            fromRights[i].classList.remove('to__right__side')
        }
    }
}
// onscroll from the middle


window.addEventListener('scroll', fromMiddle);

function fromMiddle(){
    var fromMiddles = document.querySelectorAll('.from_middle');
    
    for(var i = 0; i < fromMiddles.length; i++){

        var windowheight = window.innerHeight;
        var disappearTop = fromMiddles[i].getBoundingClientRect().top;
        var disappearpoint = 150;

        if(disappearTop < windowheight - disappearpoint){
            fromMiddles[i].classList.add("to_middle");
        }
        else {
            fromMiddles[i].classList.remove('to_middle')
        }
    }
}

