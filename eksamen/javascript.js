
// Kobling til html-elementene
const main = document.querySelector("main");
const db = firebase.database();
const turer = db.ref("Tur");

function genererHTML(snapshot){
  let tur = snapshot.val();
  let nokkel = snapshot.key;
  main.innerHTML +=`
    <div class = "gridcontainer">
      <h1>Terreng: ${tur.Terreng} </h1>
      <p>Lengde: ${tur.Lengde}km </p>
      <p>Høydeforskjell: ${tur.Høydeforskjell}m</p>
      <a href="turDetaljer.html?id=${nokkel}">Detaljer</a>
    </div>
  `
}

//on er en spørring. her på db (alt sammen). Sender resultatet til funksjonen genererHTML
turer.on("child_added",genererHTML);
