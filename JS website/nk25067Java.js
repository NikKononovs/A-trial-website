window.addEventListener('DOMContentLoaded', (event) => { 

    const trips_tipes = [];
    trips.forEach(trip=>{
        if (!trips_tipes.includes(trip.Type)){
            trips_tipes.push(trip.Type);
        }
    });
    trips_tipes.sort();

    const travel_tipe = document.getElementById("travel_tipe");
    for (let i = 0; i < trips_tipes.length; i++){
        let tipe = document.createElement("option");
        tipe.value = trips_tipes[i];
        tipe.innerText = trips_tipes[i];
        travel_tipe.appendChild(tipe);
    }

    function filterTrips(){
        body_site.innerHTML = "";

        var selectedType = document.getElementById("travel_tipe").value;
        for (let trip of trips){
            if (selectedType === "" || trip.Type === selectedType){
                body_site.appendChild(createCard(trip));
            }
        }
    }

    const body_site = document.getElementById("body_site");
    function createCard(trip){
        let card = document.createElement("div");
        card.className = "card";

        let image = document.createElement("img");
        card.appendChild(image);
        image.src = trip.ImgLink;
        image.alt = trip.AltImg;

        let text_div = document.createElement("div");
        text_div.className = "text_div";
        card.appendChild(text_div);

        let title = document.createElement("h2");
        text_div.appendChild(title);
        title.textContent = trip.Title;

        let content = document.createElement("p");
        text_div.appendChild(content);
        content.textContent = trip.Content;

        return card;
    }

    const fButton = document.getElementById("filter_btn");
	fButton.addEventListener("click", filterTrips);

    filterTrips();

});