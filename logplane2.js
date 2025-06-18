//  plane flying  left  js 

var plane2 = document.querySelector('#logplane2');
var poe = 0;
var flying = setInterval(animation, 10);

function animation() {
    if (poe == 500) {
        clearInterval(flying)
    }
    else {
        poe++;
        plane2.style.right = poe + "px";
    }
}