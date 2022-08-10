let images = [
    'zelda.jpg',
    'zelda2.jpg',
    'zelda_oot.jpg',
    'majoras_mask.jpg'
];
let activeIndex = 0;

let timer = setInterval(showNext, 3000);

function showPrev() {
    if (activeIndex == 0) {
        showImg(images.length - 1);
    } else {
        showImg(activeIndex - 1);
    }
}

function showNext() {
    if (activeIndex == images.length - 1) {
        showImg(0);
    } else {
        showImg(activeIndex + 1);
    }
}

function showImg(i) {
    activeIndex = i;
    // get element
    let carousel = document.getElementsByClassName('carousel-root')[0];
    let img = carousel.getElementsByTagName('img')[0];

    // set src property on img obj
    let basePath = 'images/video_games/';
    let fileName = images[i];
    img.src = basePath + fileName;

    // find the 'dots'
    let circles = carousel.getElementsByClassName('circle')
    // update them
    for (let j = 0; j < circles.length; j++) {
        const circle = circles[j];
        circle.classList.remove("active");
    }
    circles[i].classList.add('active');

    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(showNext, 3000);
}