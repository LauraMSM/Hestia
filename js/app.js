const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


const nextBtn = $(".next");
const prevBtn = $(".prev");
prevBtn.style.display = "none";
const sliderContainer = $(".slider-container");
const sliderWidth = $$(".slider-item").length * 100;
let sliderPos = 0;


nextBtn.addEventListener("click", () => {
    if ( sliderPos > (sliderWidth - 100) * -1 ) {
        sliderPos -= 100;
        console.log(sliderPos + "|" + sliderWidth * -1);
        sliderContainer.style.transform = `translateX(${sliderPos}vw)`;

        nextBtn.style.display = sliderPos === (sliderWidth - 100) * -1 ? "none" : "block";
        prevBtn.style.display = "block";
    };

});

prevBtn.addEventListener("click", () => {
    if ( sliderPos ) {
        sliderPos += 100;
        sliderContainer.style.transform = `translateX(${sliderPos}vw)`;
        
        nextBtn.style.display = "block";
        prevBtn.style.display = sliderPos === 0 ? "none" : "block";
    };
});

