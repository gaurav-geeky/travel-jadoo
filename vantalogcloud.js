//  login page  js 

//  vanta cloud for login page 
VANTA.CLOUDS({
    el: "#Loginpage",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x10f2e1,
    skyColor: 0x657bea,
    cloudColor: 0xdeadd8,
    sunColor: 0x18ffaa,
    sunGlareColor: 0x387ee0,
    speed: 1.80
})

//  plane flying  top-right  js 

var plane = document.querySelector('#logplane');
var poe = 0;
var flying = setInterval(animation, 10);

function animation() {
    if (poe == 600) {
        clearInterval(flying)
    }
    else {
        poe++;
        plane.style.bottom = poe + "px";
        plane.style.left = poe + "px";
    } 
    
}


