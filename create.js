
let firstName = document.getElementById("firstnameid");
let lastname = document.getElementById("lastnameid");
let streetAddress = document.getElementById("streetAddress");
let city = document.getElementById("city");


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
//Validere om oplysniger er korrekte.
function validate() {
var errormessage = ""; 

//Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
    if (firstName.value == "") {
        errormessage += "Need a firstname \n";}
    if (lastname.value == ""){
        errormessage += "Need a lastname"}
    if (streetAddress.value == "") {
        errormessage += "Need a streetaddress"}
    if (city.value == "") {
        errormessage += "Need a city"}

//alert errormessage
if (errormessage != ""){
    alert(errormessage)
}

//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let userdata = {
                clientId : uuidv4(),
                firstName : firstName.value,
                lastname : lastname.value,
                streetAddress : streetAddress.value,
                city : city.value  
            }
            console.log(userdata)
            //let user = new User (userdata)
        
            axios.post("https://localhost:8080/clients", userdata)
            .then(function(response){
            console.log(response)
            })
         alert("Din bruger er nu oprettet");
		}
}