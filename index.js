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
