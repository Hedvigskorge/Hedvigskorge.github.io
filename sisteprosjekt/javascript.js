    var database = firebase.database();
    var bukser = database.ref("varer/bukser");
    var genser = database.ref("varer/genser");
    var jakker = database.ref("varer/jakker");
    var kjoler = database.ref("varer/kjoler");
    var sko = database.ref("varer/sko");
    var tilbehør = database.ref("varer/tilbehør");
    var varer = database.ref("varer");
    var farge = database.ref("varer/farge");


    let header = document.querySelector("header");
    let klesgrid = document.querySelector("#klesgrid");
    let main = document.querySelector("main");
         function visVare(snapshot) {
             let vare = snapshot.val();
             klesgrid.innerHTML += `
                 <article>
                     <img src="bilder/${vare.bilde}">
                     <h1>${vare.navn}</h1>
                     <h3>${vare.merke}</h3>
                     <p>${vare.pris}</p>
                 </article>
             `;
        }
        function visKlær() {
          main.innerHTML=`
          <div class="sidepanel">
            <div>
              <p>Shop etter kategori</p>
              <button onclick="visBukser()">Bukser</button>
              <button onclick="visGenser()">Genser</button>
              <button onclick="visJakker()">Jakker</button>
              <button onclick="visKjoler()">Kjoler</button>
              <p>Sorter etter</p>
              <button onclick="visFargenBlå()">Blå</button>
            </div>
              <div id="klesgrid"></div>
          </div>
          `;
          klesgrid = document.querySelector("#klesgrid");
          header.innerHTML = "";
          bukser.on("child_added", visVare);
          kjoler.on("child_added", visVare);
          genser.on("child_added", visVare);
          jakker.on("child_added", visVare);
        }
        function visBukser() {
            klesgrid.innerHTML = "";
            header.innerHTML = " ";
            bukser.on("child_added", visVare);
        }
        function visKjoler() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            kjoler.on("child_added", visVare);
        }
        function visGenser() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            genser.on("child_added", visVare);
        }
        function visJakker() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            jakker.on("child_added", visVare);
        }
        function visSko() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            main.innerHTML=`
            <div class="sidepanel">
              <div>
                <p>Shop etter kategori</p>
                <button onclick="visBukser()">Bukser</button>
                <button onclick="visGenser()">Genser</button>
                <p>Sorter etter</p>
              </div>
                <div id="klesgrid"></div>
            </div>
            `;
            klesgrid = document.querySelector("#klesgrid");
            sko.on("child_added", visVare);
        }
        function visTilbehør() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            main.innerHTML=`
            <div class="sidepanel">
              <div>
                <p>Shop etter kategori</p>
                <button onclick="visBukser()">Bukser</button>
                <button onclick="visGenser()">Genser</button>
                <p>Sorter etter</p>
              </div>
                <div id="klesgrid"></div>
            </div>
            `;
            tilbehør.on("child_added", visVare);
          }

        function visFargenBlå(){
          header.innerHTML = " ";
          main.innerHTML="";
          bukser
            .orderByChild("farge");
            .equalTo("blå");
            .on("child_added",visVare);
        }
