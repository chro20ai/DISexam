let getreservationID = document.getElementById("getreservationID")

function getReservation() {

		{
           
            console.log(getreservationID.value)
            //let user = new User (userdata)
        
            axios.get(`https://localhost:8080/clients/reservations?reservationID=${getreservationID.value}`)
            .then(function(response){
            console.log(response.data[0])
            document.getElementById("getclientID").innerHTML = "clientID: " + response.data[0].clientID;
            document.getElementById("getdate").innerHTML = "Date: " + response.data[0].date;
            document.getElementById("gethotelName").innerHTML = "Hotel Name: " + response.data[0].hotelName;
            document.getElementById("getprice").innerHTML = "Price: " + response.data[0].price;
            document.getElementById("getbalance").innerHTML = "Balance: " + response.data[0].balance;
            })
            .then(function(data){
            })
         alert("Reservationen er her");
		}
}