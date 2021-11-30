let updatereservationID = document.getElementById("updatereservationID");
let updateclientID = document.getElementById("updateclientID");
let updatedate = document.getElementById("updatedate");
let updatehotelName = document.getElementById("updatehotelName");
let updateprice = document.getElementById("updateprice")
  
//Validere om oplysniger er korrekte.
function updateReservation() {
    var updateerrormessage = ""; 

    //Errors hvis kravene for udfyldelse af oplysninger ikke er korrekte. 
        if (updatereservationID.value == "") {
            updateerrormessage += "Need a reservationId";}
        if (updateclientID.value == "") {
            updateerrormessage += "Need a clientId";}
        if (updatedate.value == ""){
            updateerrormessage += "Need a date"}
        if (updatehotelName.value == "") {
            updateerrormessage += "Need a hotelName"}
    
    //alert errormessage
    if (updateerrormessage != ""){
        alert(updateerrormessage)
    }
//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
else
		{
            let reservationdata = {
                reservationID : updatereservationID.value,
                clientID : updateclientID.value,
                date : updatedate.value,
                hotelName : updatehotelName.value,
                price : updateprice.value, 
                balance : 0
            }


            console.log(reservationdata)
            //let user = new User (userdata)
        
            axios.put("https://localhost:8080/clients/reservations", reservationdata)
            .then(function(response){
            console.log(response)
            })
         alert("You have now updated a reservation");
		}
}