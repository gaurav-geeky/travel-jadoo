
//  vanta cloud for login page 
VANTA.CLOUDS({
  el: "#Loginpage",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: 0xfdae5,
  skyColor: 0xa7a7b1,
  cloudColor: 0xf7dfb7,
  cloudShadowColor: 0x1a1850
})


//  plane flying 


        var plane = document.querySelector('#logplane');
        var poe = 0;
        var flying = setInterval(animation, 5);

        function animation() {
            if (poe == 650) {
                clearInterval(flying)
            } 
            else {
                poe++;
                plane.style.bottom = poe + "px";
                plane.style.left = poe + "px";
            } 
        }
