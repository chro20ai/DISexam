
let clientID = document.getElementById("clientID");
let date = document.getElementById("date");
let hotelName = document.getElementById("hotelName");
//var price = document.querySelector('input[name="price"]:checked').value;
let price = document.getElementById("price")

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
  
//Validere om oplysniger er korrekte.
function createReservation() {
var errormessage = ""; 

//Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
    if (clientID.value == "") {
        errormessage += "Need a clientId";}
    if (date.value == ""){
        errormessage += "Need a date"}
    if (hotelName.value == "") {
        errormessage += "Need a hotelName"}

//alert errormessage
if (errormessage != ""){
    alert(errormessage)
}

//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let reservationdata = {
                reservationID : uuidv4(),
                clientID : clientID.value,
                date : date.value,
                hotelName : hotelName.value,
                price : price.value, 
                balance : 0
            }


            console.log(reservationdata)
            //let user = new User (userdata)
            
            axios.post("https://localhost:8080/clients/reservations", reservationdata)
            .then(function(response){
                alert("Client does not exist")
            })
        alert("Reservation created")
		}
}
