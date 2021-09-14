
function buttonClicked() {
    var square = document.getElementById("square");

    var r = Math.random() * 255;
    var g = Math.random() * 255;
    var b = Math.random() * 255;

    var color = `rgb(${r}, ${g}, ${b})`;

    var x = Math.random() * 40 - 20;
    var y = Math.random() * 40 - 20;

    var translate = `translate(${x}px, ${y}px)`;

    square.style.backgroundColor = color;
    square.style.transform = translate;

}