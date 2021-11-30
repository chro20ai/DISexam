

let deletereservationID = document.getElementById("deletereservationID")
  
//Validere om oplysniger er korrekte.
function deleteReservation() {



//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
		{
            let userdata = {
                reservationID : deletereservationID.value
            }
            console.log(deletereservationID.value)
            //let user = new User (userdata)
        
            axios.delete("https://localhost:8080/clients/reservations", { data: {userdata}})
            .then(function(response){
            console.log(response)
            })
         alert("Reservationen er nu slettet");
		}
}