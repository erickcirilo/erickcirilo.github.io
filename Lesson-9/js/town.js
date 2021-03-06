const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch (requestURL)
  .then (function (response) {
    return response.json ();
  })
  .then (function (jsonObject) {
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      if (
        towns[i].name == 'Preston' ||
        towns[i].name == 'Soda Springs' ||
        towns[i].name == 'Fish Haven'
      ) {
        let card = document.createElement ('section');
        let info = document.createElement ('div');
        let town = document.createElement ('h2');
        let motto = document.createElement ('h4');
        let image = document.createElement ('img');
        let founded = document.createElement ('p');
        let population = document.createElement ('p');
        let ranfaill = document.createElement ('p');

        town.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        founded.textContent = 'Founded: ' + towns[i].yearFounded;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        ranfaill.textContent =
          'Rainfall Average (year): ' + towns[i].averageRainfall + ' ';

        image.setAttribute ('src', '/Lesson-9/img/' + towns[i].photo);
        image.setAttribute ('alt', towns[i].name);
        info.setAttribute ('id', 'info');

        info.appendChild (town);
        info.appendChild (motto);
        info.appendChild (founded);
        info.appendChild (population);
        info.appendChild (ranfaill);

        card.appendChild (info);
        card.appendChild (image);

        document.querySelector ('div.cards').appendChild (card);
      }
    }
  });
