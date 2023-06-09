let reportAcudits = [];


let currentJokeSource = 'icanhazdadjoke'; 

async function randomAcudit() {
  let jsonData;
  
  if (currentJokeSource === 'icanhazdadjoke') {
    // Crida a l'API d'acudits actual
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    jsonData = await response.json();
    
    // Canvia a la font d'acudits de Chuck Norris
    currentJokeSource = 'chucknorris';
  } else {
    // Crida a l'API d'acudits de Chuck Norris
    const chuckNorrisResponse = await fetch("https://api.chucknorris.io/jokes/random");
    jsonData = await chuckNorrisResponse.json();
    
    // Canvia a la font d'acudits actual
    currentJokeSource = 'icanhazdadjoke';
  }
  
  const joke = jsonData.joke || jsonData.value; // Agafa el camp correcte per als acudits de cada font
  
  console.log(joke);
  document.getElementById("acudit").innerHTML = joke;
  document.getElementById("votacio").style.display = "block";
}



function votarAcudit(score) {
  const date = new Date().toISOString();
  const acudit = document.getElementById("acudit").innerHTML;
  const index = reportAcudits.findIndex((item) => item.joke === acudit);
  if (index !== -1) {
    reportAcudits[index].score = score;
    reportAcudits[index].date = date;
  } else {
    reportAcudits.push({ joke: acudit, score: score, date: date });
  }
  console.log(reportAcudits);
}

document.addEventListener("DOMContentLoaded", function() {
    getTiempo();
  });

async function getTiempo() {
  const tempsData = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=10f9b5b8eb548e0af3a7418fb76a0d4d&lang=ca&units=metric',
    {
      headers: {
        'Accept': 'application/json'
      }
    }
  );
  const tempsObj = await tempsData.json();
  const location = tempsObj.name;
  const temperature = tempsObj.main.temp;

  document.getElementById('ubicacion-temperatura').innerHTML = `${location}: ${temperature} ºC`;
}
