var url = "https://weatherservices.herokuapp.com/api/alerts/byDay/1";

function getAlertas() {
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      data["alerts"].forEach((element) => mostrarAlerta(element));
    });
}

function getCardAlerta(alerta) {
  return (
    `   
        <div class="card mb-3" >
            <h5 class="card-header "> ` +
    alerta.title +
    `<small>(Alerta Meteorológico Nro ` +
    alerta.nReport +
    `)</small>
            </h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item " ><i class="fas fa-map-marker-alt"></i><b> Zonas: </b>` +
    getZonas(Object.values(alerta.zones)) +
    `</li>
                <li class="list-group-item">` +
    alerta.description +
    `<br><br>

                <p><i class="fas fa-calendar-alt"></i> <b>Fecha de emisión:</b> ` +
    alerta.date +
    ` a las ` +
    alerta.hour +
    ` hs</p></li>
                <li class="list-group-item"><i class="far fa-clock"></i> <b>Próxima Actualización:</b>  ` +
    alerta.update +
    ` hs</li>
            </ul>
            </div>
        </div>
        <div class="separator-bar"></div> `
  );
}
function mostrarAlerta(alerta) {
  var d1 = document.getElementById("divAlertas");
  d1.insertAdjacentHTML("beforeEnd", getCardAlerta(alerta));
}

function getZonas(zonas) {
  var zonasStr = "";
  for (var i = 0; i < zonas.length; i++) {
    if (i == zonas.length - 1) {
      zonasStr = zonasStr + zonas[i] + ".";
    } else {
      zonasStr = zonasStr + zonas[i] + ", ";
    }
  }
  return zonasStr;
}

$(document).ready(function () {
  getAlertas();
});
