// FETCH DATA     URL    FETCH 

let fetchdt = async () => {

    let url = "http://localhost:3000/flight";
    let response = await fetch(url)    // only GET can run without GET k.w.

    let data = await response.json()
    console.log(data);

    // now get data in table. 
    
    let show = document.querySelector('#show'); 

    data.map( (e)=> {

    show.innerHTML += ` 
        <tr> 
            <td> ${e.From}</td> 
            <td> ${e.To}</td> 
            <td> ${e.Departure}</td> 
            <td> ${e.Return}</td> 
            <td> ${e.Adult}</td> 
            <td> ${e.Child}</td> 
            <td> ${e.Infant}</td> 
            <td> ${e.Senior}</td> 
            <td> ${e.Total}</td> 
            <td onclick="Del('${e.id}') "> delete </td> 
        </tr>
    `
    }
    )
}
// fetchdt();

//   DELETE method 
let Del = (id)=> { 
    let url = `http://localhost:3000/flight/${id}` 
    fetch(url, {method: "DELETE"})
}


//  POST method 
let ins = () => { 

    let From = document.querySelector('#fromwhere').value
    let To = document.querySelector('#towhere').value
    let Departure = document.querySelector('#depart').value
    let Return = document.querySelector('#returns').value
    let Adult = document.querySelector('#adult').value
    let Child = document.querySelector('#child').value
    let Infant = document.querySelector('#infant').value
    let Senior = document.querySelector('#senior').value

    let url = "http://localhost:3000/flight";

    fetch( url, {

        method: "POST", 

        headers: { 
            "Content-type": "application/json"
        }, 
        
        body: JSON.stringify( 

            {
                From: From, 
                To: To, 
                Departure: Departure, 
                Return: Return, 
                Adult: Adult, 
                Child: Child, 
                Infant: Infant, 
                Senior: Senior, 
                Total: 500*Adult+ 500*Child+ 500*Infant+ 500*Senior, 

                // here key name should be same as tbody td key name
            }
        )
    })   
    location.href="passDetails.html" 

    return false 
}































