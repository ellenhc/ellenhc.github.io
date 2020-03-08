const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let cardText = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('h5');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let img = document.createElement('img');

                h2.textContent = towns[i].name;

                motto.textContent = towns[i].motto;

                yearFounded.textContent = "Year founded: " + towns[i].yearFounded;

                population.textContent = "Population: " + towns[i].currentPopulation;

                rainfall.textContent = "Average rainfall: " + towns[i].averageRainfall + " inches";

                img.setAttribute('src', "images/" + towns[i].photo);

                img.setAttribute('alt', "Photo of " + towns[i].name);

                cardText.appendChild(h2);
                cardText.appendChild(motto);
                cardText.appendChild(yearFounded);
                cardText.appendChild(population);
                cardText.appendChild(rainfall);
                card.appendChild(cardText);
                card.appendChild(img);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    });