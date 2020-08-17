const carousel_slide = document.querySelector('.carousel-slide');
console.log(carousel_slide);
const carousel_images = document.querySelectorAll('.carousel-slide img');
console.log(carousel_images);

// buttons
const prevbtn = document.querySelector('#prev');
const nextbtn = document.querySelector('#next');

// counter
let counter = 1;

const size = carousel_images[0].clientWidth;
console.log(size);

carousel_slide.style.transform = 'translateX('+(-size * counter) + 'px)';

//button Listeners

nextbtn.addEventListener('click',() => {
    if(counter >= carousel_images.length-1) return;
    carousel_slide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    // console.log("c : "+counter);
    carousel_slide.style.transform = "translateX("+(-size * counter) +"px)";
});

prevbtn.addEventListener('click',() => {
    if(counter <= 0) return;
    carousel_slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log("c : "+counter);
    carousel_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
});

carousel_slide.addEventListener('transitionend',()=>{
    if(carousel_images[counter].id === 'lastclone'){
        carousel_slide.style.transition = 'none';
        counter = carousel_images.length - 2;
        carousel_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
    }
    if(carousel_images[counter].id === 'firstclone'){
        carousel_slide.style.transition = 'none';
        counter = carousel_images.length - counter;
        carousel_slide.style.transform = 'translateX('+(-size * counter) + 'px)';
    }
});