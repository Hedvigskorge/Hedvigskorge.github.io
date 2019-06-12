
// Kobling til html-elementene
const sidepanel = document.querySelector(".sidepanel");
const db = firebase.database();
const turer = db.ref("Tur");
let header = document.querySelector("header");
let hovedgrid = document.querySelector("#hovedgrid");


function genererHTML(snapshot) {
  let tur = snapshot.val();
  let nokkel = snapshot.key;
  sidepanel.innerHTML=`
      <h1>Sorteringer</h1>
      <p>Turområde</p>
        <button class="sorteringTurområde" onclick="visSandvika()">Sandvika</button>
        <button class="sorteringturområde" onclick="visKolsås()">Kolsås</button>
        <button class="sorteringturområde" onclick="visLommedalen()">Lommedalen</button>
        <button class="sorteringturområde" onclick="visFornebu()">Fornebu</button>
      <p>Natur</p>
        <button class="sorteringNatur" onclick="visSkog()">Skog</button>
        <button class="sorteringNatur" onclick="visKyst()">Kyst</button>
        <button class="sorteringNatur" onclick="visBebygd()">Bebygd</button>
      <p>Passer for barnevogn</p>
        <button class="sorteringBarnevogn" onclick="visJaB()">Ja</button>
        <button class="sorteringBarnevogn" onclick="visNeiB()">Nei</button>
      <br><br><br>
      <button class="fjernSortering" onclick="visTurer()">Fjern sortering</button>
  `;
  hovedgrid.innerHTML += `
      <article class="gridcontainer">
        <a href="turDetaljer.html?id=${nokkel}">
        <h1>${nokkel} </h1>
        <p>Område: ${tur.Område} </p>
        <p>Lengde: ${tur.Lengde} km</p>
        <p>Natur: ${tur.Natur}</p>
        </a>
      </article>
    `;
  }

function visTurer() {
  header.innerHTML = "";
  hovedgrid.innerHTML = "";
  turer.on("child_added",genererHTML);
  }

//funksjoner til sorteringer

  function visSkog() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Natur")
    .equalTo("Skog")
    .on("child_added",genererHTML);
    }
  function visKyst() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Natur")
    .equalTo("Kyst")
    .on("child_added",genererHTML);
    }
  function visBebygd() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Natur")
    .equalTo("Bebygd")
    .on("child_added",genererHTML);
    }

  function visJaB() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Barnevogn")
    .equalTo("Ja")
    .on("child_added",genererHTML);
    }
  function visNeiB() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Barnevogn")
    .equalTo("Nei")
    .on("child_added",genererHTML);
    }

  function visSandvika() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    console.log(turer);
    turer
    .orderByChild("Område")
    .equalTo("Sandvika")
    .on("child_added",genererHTML);
    }

  function visKolsås() {
    header.innerHTML = " ";
    hovedgrid.innerHTML = "";
    turer
      .orderByChild("Område")
      .equalTo("Kolsås")
      .on("child_added",genererHTML);
    }
  function visFornebu() {
    header.innerHTML = "";
    hovedgrid.innerHTML = "";
    turer
    .orderByChild("Område")
    .equalTo("Fornebu")
    .on("child_added",genererHTML);
    }

  function visLommedalen() {
    header.innerHTML = " ";
    hovedgrid.innerHTML = "";
    turer
      .orderByChild("Område")
      .equalTo("Lommedalen")
      .on("child_added",genererHTML);
    }
