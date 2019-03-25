    var database = firebase.database();
    var bukser = database.ref("varer/bukser");
    var genser = database.ref("varer/genser");
    var jakker = database.ref("varer/jakker");
    var kjoler = database.ref("varer/kjoler");
    var sko = database.ref("varer/sko");
    var tilbehør = database.ref("varer/tilbehør");

    let main = document.querySelector("main");
         function visVare(snapshot) {
             let vare = snapshot.val();
             main.innerHTML += `
                 <article>
                     <img src="bilder/${vare.bilde}">
                     <h1>${vare.merke}</h1>
                     <h2>${vare.navn}</h2>
                     <p>${vare.pris}</p>
                 </article>
             `;
        }
        function visKlær() {
          main.innerHTML = " "; //Fjerner alt innhold i main
          bukser.on("child_added", visVare);
          genser.on("child_added", visVare);
          kjoler.on("child_added", visVare);
          jakker.on("child_added", visVare);
        }
        function visBukser() {
            main.innerHTML = " ";
            bukser.on("child_added", visVare);
        }
        function visKjoler() {
            main.innerHTML = " ";
            kjoler.on("child_added", visVare);
        }
        function visGenser() {
            main.innerHTML = " ";
            genser.on("child_added", visVare);
        }
        function visJakker() {
            main.innerHTML = " ";
            jakker.on("child_added", visVare);
        }
        function visSko() {
            main.innerHTML = " ";
            sko.on("child_added", visVare);
        }
        function visTilbehør() {
            main.innerHTML = " ";
            tilbehør.on("child_added", visVare);
        }
