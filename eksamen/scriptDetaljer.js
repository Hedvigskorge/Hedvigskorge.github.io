//lagrer primærnøkkelen fra URL i en variable vi kaller id
let url_string = window.location.href;
let url = new URL (url_string);
let id = url.searchParams.get("id");
main = document.querySelector("main");

//variabler som kobler til database
const db = firebase.database();
const tur = db.ref("Tur/" + id);

function genererHTML (snapshot) {
  valgtTur = snapshot.val();
  nokkel = snapshot.key;
  main.innerHTML = `
    <h1>${nokkel}</h1>
    <div id="turInfo">
      <div class="generellTekst">
        <p>Område: </p>
        <p>Lengde: </p>
        <p>Varighet: </p>
        <p>Runde: </p>
        <p>Natur: </p>
        <p>Barnevogn-vennlig: </p>
      </div>
      <div class="spesiellInfo">
        <p>${valgtTur.Område}</p>
        <p>${valgtTur.Lengde} km </p>
        <p>${valgtTur.Tid} timer </p>
        <p>${valgtTur.Runde}</p>
        <p>${valgtTur.Natur}</p>
        <p>${valgtTur.Barnevogn}</p>
      </div>
      <div class="Kart">
        ${valgtTur.Kart}
      </div>
    </div>
    `
  }

tur.on("value",genererHTML);
function slettTur(){
  tur.remove();
}


function goBack() {
  window.history.back();
}
