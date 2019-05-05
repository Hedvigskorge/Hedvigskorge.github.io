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
             let parent = snapshot.ref.parent.key;
             let vare = snapshot.val();
             let key = snapshot.key;
             klesgrid.innerHTML += `
                 <article>
                     <img src="bilder/${vare.bilde}">
                     <h1>${vare.navn}</h1>
                     <h3>${vare.merke}</h3>
                     <p>${vare.pris}</p>
                     <a class="produkt" href="produktdetaljer.html?id=${key}&parent=${parent}">Detaljer</a>
                 </article>
             `;
        }

        function visKlær() {
          main.innerHTML=`
          <div class="sidepanel">
            <div class="sortere">
              <p>Shop etter kategori</p>
              <button class="kategori" onclick="visBukser()"><span>Bukser</span></button>
              <button class="kategori" onclick="visGenser()"><span>Genser</span></button>
              <button class="kategori" onclick="visJakker()"><span>Jakker</span></button>
              <button class="kategori" onclick="visKjoler()"><span>Kjoler</span></button>
              <p>Sorter etter</p>
              <button class="buttonBlå" onclick="visFargenBlå()">Blå</button>
              <button class="button buttonGul" onclick="visFargenGul()">Gul</button>
              <button class="button buttonSort" onclick="visFargenSort()">Sort</button>
              <button class="button buttonOransje" onclick="visFargenOransje()">Oransje</button>
              <button class="button buttonRosa" onclick="visFargenRosa()">Rosa</button>
              <button class="button buttonHvit" onclick="visFargenHvit()">Hvit</button>
              <button class="button buttonBrun" onclick="visFargenBrun()">Brun</button>
              <button class="button buttonGrønn" onclick="visFargenGrønn()">Grønn</button>
              <button class="button buttonRød" onclick="visFargenRød()">Rød</button>
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


        function visSko() {
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            main.innerHTML=`
            <div class="sidepanel">
              <div class="sortere">
                <p>Shop etter kategori</p>
                <button class="kategori" onclick="visSneakers()"><span>Sneakers</span></button>
                <button class="kategori" onclick="visHeler()"><span>Heler</span></button>
                <p>Sorter etter</p>
                <button class="button buttonGul" onclick="visFargenSkoGul()">Gul</button>
                <button class="button buttonSort" onclick="visFargenSkoSort()">Sort</button>
                <button class="button buttonOransje" onclick="visFargenSkoOransje()">Oransje</button>
                <button class="button buttonHvit" onclick="visFargenSkoHvit()">Hvit</button>
                <button class="button buttonRød" onclick="visFargenSkoRød()">Rød</button>
              </div>
                <div id="klesgrid"></div>
            </div>
            `;
            klesgrid = document.querySelector("#klesgrid");
            sko.on("child_added", visVare);
          }


        function visTilbehør(){
            header.innerHTML = " ";
            klesgrid.innerHTML = "";
            main.innerHTML=`
            <div class="sidepanel">
              <div class="sortere">
                <p>Shop etter kategori</p>
                <button class="kategori" onclick="visLuer()">Lue</button>
                <button class="kategori" onclick="visBriller()">Solbriller</button>
                <p>Sorter etter</p>
                <button class="buttonBlå" onclick="visFargenTilbehørBlå()">Blå</button>
                <button class="button buttonSort" onclick="visFargenTilbehørSort()">Sort</button>
                <button class="button buttonOransje" onclick="visFargenTilbehørOransje()">Oransje</button>
                <button class="button buttonBrun" onclick="visFargenTilbehørBrun()">Brun</button>
                <button class="button buttonGrønn" onclick="visFargenTilbehørGrønn()">Grønn</button>
              </div>
                <div id="klesgrid"></div>
            </div>
            `;
            klesgrid = document.querySelector("#klesgrid");
            tilbehør.on("child_added", visVare);
          }



//funksjoner til sorteringer i klær
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
        function visFargenBlå() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("blå")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("blå")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("blå")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("blå")
            .on("child_added",visVare);
          }
        function visFargenGul() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("gul")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("gul")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("gul")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("gul")
            .on("child_added",visVare);
          }
        function visFargenSort() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("sort")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("sort")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("sort")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("sort")
            .on("child_added",visVare);
          }
        function visFargenOransje() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("oransje")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("oransje")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("oransje")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("oransje")
            .on("child_added",visVare);
          }
        function visFargenRosa() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("rosa")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("rosa")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("rosa")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("rosa")
            .on("child_added",visVare);
          }
        function visFargenBrun() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("brun")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("brun")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("brun")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("brun")
            .on("child_added",visVare);
          }
        function visFargenHvit() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("hvit")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("hvit")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("hvit")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("hvit")
            .on("child_added",visVare);
          }
        function visFargenGrønn() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("grønn")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("grønn")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("grønn")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("grønn")
            .on("child_added",visVare);
          }

        function visFargenRød() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          bukser
            .orderByChild("farge")
            .equalTo("rød")
            .on("child_added",visVare);
          genser
            .orderByChild("farge")
            .equalTo("rød")
            .on("child_added",visVare);
          kjoler
            .orderByChild("farge")
            .equalTo("rød")
            .on("child_added",visVare);
          jakker
            .orderByChild("farge")
            .equalTo("rød")
            .on("child_added",visVare);
          }


//Funksjoner til sorteringer i Sko
        function visSneakers() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("modell")
            .equalTo("sneakers")
            .on("child_added",visVare);
          }
        function visHeler() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("modell")
            .equalTo("heler")
            .on("child_added",visVare);
          }

        function visFargenSkoGul() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("farge")
            .equalTo("gul")
            .on("child_added",visVare);
          }
        function visFargenSkoSort() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("farge")
            .equalTo("sort")
            .on("child_added",visVare);
          }
        function visFargenSkoHvit() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("farge")
            .equalTo("hvit")
            .on("child_added",visVare);
          }
        function visFargenSkoRød() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("farge")
            .equalTo("rød")
            .on("child_added",visVare);
          }
        function visFargenSkoOransje() {
          header.innerHTML = " ";
          klesgrid.innerHTML = "";
          sko
            .orderByChild("farge")
            .equalTo("oransje")
            .on("child_added",visVare);
          }


//Funksjoner til sorteringer i Tilbehør
      function visLuer() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("modell")
          .equalTo("lue")
          .on("child_added",visVare);
        }
      function visBriller() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("modell")
          .equalTo("solbriller")
          .on("child_added",visVare);
        }

      function visFargenTilbehørBlå() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("farge")
          .equalTo("blå")
          .on("child_added",visVare);
        }
      function visFargenTilbehørSort() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("farge")
          .equalTo("sort")
          .on("child_added",visVare);
        }
      function visFargenTilbehørOransje() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("farge")
          .equalTo("oransje")
          .on("child_added",visVare);
        }
      function visFargenTilbehørBrun() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("farge")
          .equalTo("brun")
          .on("child_added",visVare);
        }
      function visFargenTilbehørGrønn() {
        header.innerHTML = " ";
        klesgrid.innerHTML = "";
        tilbehør
          .orderByChild("farge")
          .equalTo("grønn")
          .on("child_added",visVare);
        }
