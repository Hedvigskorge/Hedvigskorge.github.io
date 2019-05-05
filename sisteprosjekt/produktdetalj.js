const main = document.querySelector("main")

var database = firebase.database();
var varer = database.ref("varer");

var url_string = window.location.href;
var url = new URL (url_string);
var id = url.searchParams.get("id");
var parent = url.searchParams.get("parent");

const db = firebase.database();
const valgtProdukt = db.ref("varer/"+parent+"/"+id);



function genererHTML(snapshot){
  let varer = snapshot.val();
  main.innerHTML = `
  <div id="produktinfo">
    <div class="produktBilde">
      <img src="bilder/${varer.bilde}">
    </div>
    <div class="infovarer">
      <h1 id="produktNavn">${varer.navn}</h1>
      <p id="produktMerke">${varer.merke}</p>
      <p>${varer.modell}, ${varer.farge}</p>
      <p id="produktPris">${varer.pris},- </p>
      <form action="handlekurv.html">
          <select id="Str" name="velgStr" required>
              <option value="">Størrelse</option>
              <option value="34">34</option>
              <option value="36">36</option>
              <option value="38">38</option>
              <option value="40">40</option>
          </select>
          <button id="submithandlekurv" type="submit">Legg til i handlekurv</button>
        </form>
    </div>
  </div>
  `;
  }

valgtProdukt.on("value",genererHTML);
