let checkSign = () => {

    //  actual values of input   ID in  UPPER
    let name = document.querySelector('#Signname').value.trim();
    let email = document.querySelector('#Signemail').value.trim();
    let con = document.querySelector('#Signcon').value.trim();
    let pass = document.querySelector('#Signpass').value.trim();
    let cpass = document.querySelector('#Signcpass').value.trim();

    //  error show tags   ID  in LOWER 
    let errname = document.querySelector('#errname');
    let erremail = document.querySelector('#erremail');
    let errcon = document.querySelector('#errcon');
    let errpass = document.querySelector('#errpass');
    let errcpass = document.querySelector('#errcpass');

    // to show error in one fields and   others blank; 
    errname.innerHTML = "";
    erremail.innerHTML = "";
    errcon.innerHTML = "";
    errpass.innerHTML = "";
    errcpass.innerHTML = "";

    //   sign up validation 

    if (name == "") {
        errname.innerHTML = "🚫 please enter Name ";
        return false;
    }
    else if (email == "") {
        erremail.innerHTML = "🚫 please enter Email";
        return false;
    }
    else if (!(email.includes("@") && email.includes(".com"))) {
        erremail.innerHTML = "please enter valid email only ";
        return false;
    }
    else if (isNaN(con)) {
        errcon.innerHTML = "🚫 please enter Number only ";
        return false;
    }
    else if (con.length != 10) {
        errcon.innerHTML = "🚫 please enter valid Number ";
        return false;
    }
    else if (pass != cpass) {
        errpass.innerHTML = "🚫 please enter same password ";
        cpass = "";
        document.querySelector('#Signcpass').focus()
        return false;
    }
    else if (!(pass.match(/[a-z]/) &&
        pass.match(/[A-Z]/) &&
        pass.match(/[ 1234567890 ]/) &&
        pass.match(/[ !@#$%^&*() ]/))
    ) {
        errpass.innerHTML = "🚫 please use special chars in Password";
        return false;
    }

    //  local storage use 

    localStorage.setItem("Name", name)
    localStorage.setItem("Email", email)
    localStorage.setItem("Num", con)
    localStorage.setItem("Pass", pass)

    location.href = "login.html"  // jump on other page in js 

    return false

}

let checkLogin = () => {

    let logemail = document.querySelector("#Logemail").value
    let logpass = document.querySelector("#Logpass").value 
    

    let localemail = localStorage.getItem("Email")
    let localpass = localStorage.getItem("Pass")

    if (logemail == localemail && logpass == localpass) {

        location.href = "home.html"
        return false
    }
    else {
        alert("⚠️ Wrong Credentials")
    }

    return false

}




//  now welcome user 
{
const naam = localStorage.getItem('Name');
    const welcomeEl = document.getElementById('welcome-message');

    if (naam) {
      welcomeEl.innerHTML = `Welcome, ${naam}`; 
      welcomeEl.style.color = "red";
    } else {
      welcomeEl.innerHTML = " Guest";
    }
}
















