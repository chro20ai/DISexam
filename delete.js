

let deleteclientId = document.getElementById("deleteclientId")
  
//Validere om oplysniger er korrekte.
function deleteClient() {



//Hvis der ikke er nogle errors, bliver brugeren oprettet i systemet. 
		{
            let userdata = {
                clientId : deleteclientId.value
            }
            console.log(deleteclientId.value)
            //let user = new User (userdata)
        
            axios.delete("https://localhost:8080/clients", { data: {userdata}})
            .then(function(response){
            console.log(response)
            })
         alert("Brugeren er nu slettet");
		}
}