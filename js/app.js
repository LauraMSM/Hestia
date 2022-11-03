const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);



const nextBtn = $(".next");
const prevBtn = $(".prev");
prevBtn.style.display = "none";
const sliderContainer = $(".slider-container");
const nav = $(".header_nav");

const sliderWidth = $$(".slider-item").length * 100;
let sliderPos = 0;


nextBtn.addEventListener("click", () => {
    if ( sliderPos > (sliderWidth - 100) * -1 ) {
        sliderPos -= 100;
        sliderContainer.style.transform = `translateX(${sliderPos}vw)`;
        prevBtn.style.display = "block";
        
        if ( sliderPos === (sliderWidth - 100) * -1 ) {
            nextBtn.style.display = "none";           
        };
        
        nav.classList.add("header_nav__fixed")
    };
    
});

prevBtn.addEventListener("click", () => {
    if ( sliderPos ) {
        sliderPos += 100;
        sliderContainer.style.transform = `translateX(${sliderPos}vw)`;  
        nextBtn.style.display = "block";
        
        if ( sliderPos === 0 ) {
            prevBtn.style.display = "none";
            
            nav.classList.remove("header_nav__fixed");     
            nav.classList.remove("header_nav__fixed");
        };
    };
});

/* $(".nav-item:nth-child(1)").addEventListener("click", () => {
    sliderPos -= 100;
    sliderContainer.style.transform = `translateX(${-100}vw)`;
    prevBtn.style.display = "block";
    nav.classList.add("header_nav__fixed")
});
$(".nav-item:nth-child(2)").addEventListener("click", () => {
    sliderContainer.style.transform = `translateX(${-200}vw)`;
    sliderPos -= 200;
    prevBtn.style.display = "block";
    nav.classList.add("header_nav__fixed")
});
$(".nav-item:nth-child(3)").addEventListener("click", () => {
    sliderContainer.style.transform = `translateX(${-300}vw)`;
    sliderPos -= 300;
    prevBtn.style.display = "block";
    nav.classList.add("header_nav__fixed")
});
$(".nav-item:nth-child(4)").addEventListener("click", () => {
    sliderContainer.style.transform = `translateX(${-400}vw)`;
    sliderPos -= 400;
    prevBtn.style.display = "block";
    nav.classList.add("header_nav__fixed")
});
$(".nav-item:nth-child(5)").addEventListener("click", () => {
    sliderContainer.style.transform = `translateX(${-500}vw)`;
    sliderPos -= 500;
    prevBtn.style.display = "block";
    nav.classList.add("header_nav__fixed")
}); */
