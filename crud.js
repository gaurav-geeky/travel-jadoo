
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
            <td onclick="Del('${e.id}') "> delete </td> 
        </tr>
    `
    }
    )
}
fetchdt();

let Del = (id)=> { 
    let url = `http://localhost:3000/flight/${id}` 
    fetch(url, {method: "DELETE"})
}


