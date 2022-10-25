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
            
        };
    };
});
