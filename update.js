
let updatefirstName = document.getElementById("updatefirstnameid");
let updatelastname = document.getElementById("updatelastnameid");
let updatestreetAddress = document.getElementById("updatestreetAddress");
let updatecity = document.getElementById("updatecity");
let updateclientId = document.getElementById("updateclientId")
  
//Validere om oplysniger er korrekte.
function update() {
var updateerrormessage = ""; 

//Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
    if (updatefirstName.value == "") {
        errormessage += "Need a firstname \n";}
    if (updatelastname.value == ""){
        errormessage += "Need a lastname"}
    if (updatestreetAddress.value == "") {
        errormessage += "Need a streetaddress"}
    if (updatecity.value == "") {
        errormessage += "Need a city"}

//alert errormessage
if (updateerrormessage != ""){
    alert(updateerrormessage)
}

//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let userdata = {
                clientId : updateclientId.value,
                firstName : updatefirstName.value,
                lastname : updatelastname.value,
                streetAddress : updatestreetAddress.value,
                city : updatecity.value  
            }
            console.log(userdata)
            //let user = new User (userdata)
        
            axios.put("https://localhost:8080/clients", userdata)
            .then(function(response){
            console.log(response)
            })
         alert("Din bruger er nu opdateret");
		}
}