let reportAcudits = [];

async function randomAcudit() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jsonData = await response.json();
  console.log(jsonData);
  document.getElementById("acudit").innerHTML = jsonData.joke;
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
