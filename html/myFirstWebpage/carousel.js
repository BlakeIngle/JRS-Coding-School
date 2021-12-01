const imgSrcArr = [
    "angels-egg-1.jpg",
    "angels-egg-2.jpg",
    "angels-egg-3.jpg",
];
var slideIndex = 0;

function nextImage() {
    slideIndex = (slideIndex + 1) % imgSrcArr.length;
    showImage(slideIndex);
}

function prevImage() {
    slideIndex = (slideIndex + imgSrcArr.length - 1) % imgSrcArr.length;
    showImage(slideIndex)
}

function showImage(n) {
    const carousel = document.getElementsByClassName("carousel")[0];

    const img = carousel.getElementsByTagName("img")[0];

    const basePath = "./images/angelsEgg/";
    slideIndex = n;
    img.src = basePath + imgSrcArr[slideIndex];

    adjustButtons(n, carousel);
}

function adjustButtons(n, carousel) {
    const circles = carousel.getElementsByClassName("circle");

    for (let i = 0; i < circles.length; i++) {
        if (i === n) {
            // this button is now active
            circles[i].classList.add("active");
        } else {
            circles[i].classList.remove("active");
        }
    }
}

setInterval(nextImage, 5000)