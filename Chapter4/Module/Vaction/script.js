(function () {
    "use strict";

    const detailsForm = document.querySelector("#destination_details_form");

    detailsForm.addEventListener("submit", handleFormSubmit);

    function handleFormSubmit(e) {
        e.preventDefault();

        const destName = e.target.elements["name"].value;
        const destLocation = e.target.elements["location"].value;
        const destPhoto = e.target.elements["photo"].value;
        const destDesc = e.target.elements["description"].value;

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        const destCard = createDestinationCard(
            destName,
            destLocation,
            destPhoto,
            destDesc
        );

        const wishListContainer = document.querySelector(
            "#destinations_container"
        );
        if (wishListContainer.children.length === 0) {
            document.querySelector("#title").innerHTML = "My wish List";
        }

        document.querySelector("#destinations_container").appendChild(destCard);
    }

    function createDestinationCard(name, location, photoUrl, description) {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.setAttribute("alt", name);

        const constPhotoUrl = "images/signpost.jpg";

        if (photoUrl.length === 0) {
            img.setAttribute("src", constPhotoUrl);
        } else {
            img.setAttribute("src", photoUrl);
        }

        card.appendChild(img);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement("h4");
        cardSubTitle.innerText = location;
        cardBody.appendChild(cardSubTitle);

        if (description.length !== 0) {
            const cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }

        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerHTML = "Remove";

        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    // remove card
    function removeDestination(e) {
        const card = e.target.parentElement.parentElement;
        card.remove();
    }
})();
