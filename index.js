async function randomAcudit() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jsonData = await response.json();
  console.log(jsonData);
  
}



