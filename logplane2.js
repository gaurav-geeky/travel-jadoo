//  plane flying  left  js 

var plane2 = document.querySelector('#logplane');
var poe = 0;
var flying = setInterval(animation, 100);

function animation() {
    if (poe == 500) {
        clearInterval(flying)
    }
    else {
        poe++;
        plane2.style.left = poe + "px";
    }
}


