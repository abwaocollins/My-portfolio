
const filterButtons = document.querySelector('#filter-btns').children;

const items = document.querySelector('.portfolio-gallery').children;

for(let i = 0; i < filterButtons.length; i++){
    filterButtons[i].addEventListener('click', function(){
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove('active')
        }
        this.classList.add('active');
        const target = this.getAttribute('data-target')
        
        for(let k =0; k< items.length; k++){
            items[k].style.display = 'none';
            if(target == items[k].getAttribute('data-id')){
                items[k].style.display = 'block';
            }
            if(target == 'all'){
                items[k].style.display = 'block';
            }

        }
    })
}
// lightbox
const closeLghtBox = document.querySelector('.close-lightbox');
const lightbox = document.querySelector('.lightbox');
const lightImage = lightbox.querySelector('img');

        lightbox.addEventListener('click',function(){
            if(event.target != lightImage){
                lightbox.classList.remove('show');
                lightbox.classList.add('hide');
            }
            else{
                lightbox.classList.remove('hide');
                lightbox.classList.add('show');
            }
        })

        closeLghtBox.addEventListener('click', function(){
            lightbox.classList.remove('show');
            lightbox.classList.add('hide');
        })

const gallery = document.querySelector('.portfolio-gallery')
const galleryItem = gallery.querySelectorAll('.item')

galleryItem.forEach(function(element){
    element.querySelector('.fa-plus').addEventListener('click', function(){
        lightbox.classList.remove('hide');
        lightbox.classList.add('show');
        lightImage.src = element.querySelector('img').getAttribute('src');
    })
})

// end lightbox


// testimonials 

const sliderContainer = document.querySelector('.test-slider');
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
const margin = 30;
let slideDots;
let autoSlide = 0;
// console.log(containerWidth);
let itemPerSlide = 0;

// responsive

const responsive = [
    // shows 1 item for width greater than 0 and 2 items for width greater than 991px
    {breakpoint:{width:0,item:1}},
    {breakpoint:{width:991,item:2}}
]

function load(){
    // console.log(innerWidth);
    for(let i=0; i<responsive.length; i++){

        if(window.innerWidth > responsive[i].breakpoint.width){
            itemPerSlide = responsive[i].breakpoint.item;
        }
    }
    begin()
}

function begin(){
    totalWidth = 0;
    for(let i = 0; i < slides.length; i++){
        slides[i].style.width = (containerWidth/itemPerSlide)-margin +"px";
        slides[i].style.margin = margin/2 +'px';
        totalWidth += containerWidth/itemPerSlide
    }

    // setting slide container width
    sliderContainer.style.width = totalWidth +'px';
    slideDots = Math.ceil(slides.length/itemPerSlide);


    // creating slide dots 
    for(let i=0; i<slideDots; i++){
        const div = document.createElement('div');
        div.id = i;
        div.setAttribute("onclick","controlSlide(this)")
        if(i==0){
            div.classList.add('active');
        }
        document.querySelector('.slide-controls').appendChild(div);

        
    }

}

let currentSlide = 0;

    function controlSlide(element){
        clearInterval(timer)
        
        timer = setInterval(autoPlay,5000)
        autoSlide = element.id;
        currentSlide = element.id;
        changeSlide(currentSlide)

    }

function changeSlide(currentSlide){
    controlButtons =  document.querySelector('.slide-controls').children;

    for(let i = 0; i < controlButtons.length; i++){
            controlButtons[i].classList.remove('active');
    }
            controlButtons[currentSlide].classList.add('active');
            sliderContainer.style.marginLeft =- (containerWidth * currentSlide) +'px';
        
    }

function autoPlay(){

    if(autoSlide == (slideDots-1)){
        autoSlide = 0;
    }else{
        autoSlide++
    }
    changeSlide(autoSlide)

}

let timer = setInterval(autoPlay,5000)

window.onload = load()

// fixed header on scroll using javascript

window.onscroll =function(){
    const docScrolTop = document.documentElement.scrollTop;
    if(innerWidth > 991){
        if(docScrolTop > 100){
            document.querySelector('header').classList.add('fixed');
        }else{
            document.querySelector('header').classList.remove('fixed');
        }
    }
}

// navbar links 

const navbar = document.querySelector('.navbar');
    a = navbar.querySelectorAll('a'); 
    a.forEach(function(element){
        element.addEventListener('click',function(){
            for(let i = 0; i < a.length; i++){
                a[i].classList.remove('active');
            }
            this.classList.add('active');
            navbar.classList.toggle('show');

        })
    })

    // cursor

    const cursor = document.querySelector('#cursor');
    document.addEventListener('mousemove', function(e){
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x +'px';
        cursor.style.top = y +'px';

    })


// parallax

// const parallax = document.querySelector('.home');

// window.addEventListener('scroll',function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset*0.7 + 'px';
// })

// the ham-burger menu

const hamburger = document.querySelector('.ham-burger');

hamburger.addEventListener('click',function(){
    navbar.classList.toggle('show');
})

// scroll reveal

    window.sr = ScrollReveal();

    sr.reveal(".animate-left", {
      origin: "left",
      duration: 2000,
      distance: "25rem",
      delay: 700,
    });
    
    sr.reveal(".animate-right", {
      origin: "right",
      duration: 2200,
      distance: "25rem",
      delay: 900,
    });
    
    sr.reveal('.animate-top',{
        origin:'top',
        duration:2000,
        distance:'25rem',
        delay:600
    });
    
    
    sr.reveal('.animate-bottom',{
        origin:'bottom',
        duration:2000,
        distance:'25rem',
        delay:600
    });
    
    
    