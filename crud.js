// FETCH DATA  get method

let fetchdt = async () => {

    let url = "http://localhost:3000/flight";
    let response = await fetch(url)    // only GET can run without GET k.w.

    let data = await response.json()  //    GET method fetch
    console.log(data);

    DataShow(data)
} 

//  search in passenger details
let searchh = async ()=> { 

    let searchinp = document.querySelector('#searchinp').value.toLowerCase() 
    let url = "http://localhost:3000/flight";

    let response = await fetch(url)    // only GET can run without GET k.w.
    let data = await response.json()  //    GET method fetch
    

    let FilterData = data.filter((e) => { 

        return e.From.toLowerCase().includes(searchinp) || e.To.toLowerCase().includes(searchinp) ||  e.Seat.toLowerCase().includes(searchinp) || e.Total.toString().includes(searchinp) 
    })
    DataShow(FilterData) 

}

// show data in table
let DataShow = (data) => {
    let show = document.querySelector('#show');
    show.innerHTML=""; 

    data.map((e) => {
        //                       now get data in table. 
        show.innerHTML += ` 
        <tr> 
            <td> ${e.From}</td> 
            <td> ${e.To}</td> 
            <td> ${e.Departure}</td> 
            <td> ${e.Seat}</td> 
            <td> ${e.Adult}</td> 
            <td> ${e.Child}</td> 
            <td> ${e.Infant}</td> 
            <td> ${e.Senior}</td> 
            <td> ${e.Total}</td> 
            <td onclick="Conf('${e.id}') "> delete </td> 
            <td onclick="formopen('${e.id}')"> edit </td> 
        </tr>
    `
    }
    )
}

// fetchdt();

let Conf=(id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Del(id)
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
}



//   DELETE method 
let Del = (id) => {
    let url = `http://localhost:3000/flight/${id}`
    fetch(url, { method: "DELETE" })
}

//  POST method 
let ins = () => {

    let From = document.querySelector('#fromwhere').value
    let To = document.querySelector('#towhere').value
    let Departure = document.querySelector('#depart').value
    let Seat = document.querySelector('#seat').value
    let Adult = document.querySelector('#adult').value
    let Child = document.querySelector('#child').value
    let Infant = document.querySelector('#infant').value
    let Senior = document.querySelector('#senior').value

    let url = "http://localhost:3000/flight";

    fetch(url, {

        method: "POST",

        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(

            {
                From: From,
                To: To,
                Departure: Departure,
                Seat: Seat,
                Adult: Adult,
                Child: Child,
                Infant: Infant,
                Senior: Senior,
                Total: 500 * Adult + 500 * Child + 500 * Infant + 500 * Senior,

                // here key name should be same as tbody td key name
            }
        )
    })

    location.href = "passDetails.html"
    return false
}


// PUT method  to update data ... 

let formopen = async (id) => {

    let url = `http://localhost:3000/flight/${id}`

    let res = await fetch(url)
    let data = await res.json()

    let wait = document.querySelector('#waitplane'); // hide image while editing
    wait.style.display = "none"; 
    let FormData = `
                <div id="editform">    
                        <div id="placedate">
                            <div class="fields" class="area">
                                From
                                <p >
                                    <input name="place" id="upfromwhere" type="text" placeholder="City/Airport" value="${data.From}">
                                    <i class="fa-solid fa-magnifying-glass" style="color: rgb(245, 96, 96);"></i>
                                </p>
                            </div>
                            <div class="fields" class="area">
                                To
                                <p>
                                    <input name="place" id="uptowhere" type="text" placeholder="City/Airport" value="${data.To}">
                                    <i class="fa-solid fa-magnifying-glass" style="color: rgb(245, 96, 96);"></i>
                                </p>
                            </div>
                            <div class="fields" class="area">
                                Departure Date
                                <p >
                                    <input name="date" id="updepart" type="date" placeholder="Date" value="${data.Departure}">
                                    <i class="fa-solid fa-calendar-days" style="color: rgb(245, 96, 96);"></i>
                                </p>
                            </div>
                            <div class="fields" class="area">
                                Seating class
                                <select  id="upseat">
                                    <option value="Business">Business</option>
                                    <option value="Economy">Economy</option>
                                    <option value="First">First</option>
                                </select>
                            </div>
                        </div>

                        <!--                         passenger  -->
                        <div id="passenger">
                            <div class="fields" class="area">
                                Adult
                                <p> <input name="adult" id="upadult" type="number" value="${data.Adult}"> </p>
                            </div>
                            <div class="fields" class="area">
                                Child
                                <p> <input name="child" id="upchild" type="number" value="${data.Child}"> </p>
                            </div>
                            <div class="fields" class="area">
                                Infant
                                <p> <input name="infant" id="upinfant" type="number" value="${data.Infant}"> </p>
                            </div>
                            <div class="fields" class="area">
                                Senior
                                <p> <input name="senior" id="upsenior" type="number" value="${data.Senior}"> </p>
                            </div>
                        </div>
                        <!--                       book now  -->

                        <article id="booknow">
                            <input type="submit" onclick="return UpdateForm('${data.id}')" value="Update"> 
                        </article>
                </div>
    `
    document.querySelector('#formShow').innerHTML = FormData

}

let UpdateForm = (id) => {

    let From = document.querySelector('#upfromwhere').value
    let To = document.querySelector('#uptowhere').value
    let Departure = document.querySelector('#updepart').value
    let Seat = document.querySelector('#upseat').value
    let Adult = document.querySelector('#upadult').value
    let Child = document.querySelector('#upchild').value
    let Infant = document.querySelector('#upinfant').value
    let Senior = document.querySelector('#upsenior').value

    let url = `http://localhost:3000/flight/${id}`;

    fetch(url, {

        method: "PUT",

        headers: {
            "Content-type": "application/json"
        },

        body: JSON.stringify(

            {
                From: From,
                To: To,
                Departure: Departure,
                Seat: Seat,
                Adult: Adult,
                Child: Child,
                Infant: Infant,
                Senior: Senior,
                Total: 500 * Adult + 500 * Child + 500 * Infant + 500 * Senior,

                // here key name should be same as tbody td key name (dt. in table)
            }
        )
    })
    location.href = "passDetails.html"

    return false
}

























