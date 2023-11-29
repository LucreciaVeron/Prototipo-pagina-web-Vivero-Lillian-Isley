function getTiempo() {
  fetch("https://weatherservices.herokuapp.com/api/weather")
    .then((data) => data.json())
    .then((data) => {
      var location = data["items"][0];
      var weather = location.weather;
      var forecast = Object.values(data["items"][0].forecast.forecast);
      mostrarTiempoActual(weather, location);
    });
}

function getDivTiempoActual(itemsTiempo, localizacion) {
  return (
    `	<p style=" font-size:30px;"><i style="color:#64A3F1;" class="fas fa-map-marker-alt"></i> ` +
    localizacion.name +
    `, ` +
    localizacion.province +
    `</p>
              <div>
                  <div class="card-body" style="width: 50rem;">
                      <div class="row justify-content-start">
                          <div class="col align-center">
                              <p class="text-muted"style="font-size:78px;">` +
    itemsTiempo.temp +
    ` ºC</p>
                          </div>	
                      </div>
                      <div class="card-group ">
                          <div class="card">
                              <div class="card border-light font-weight-normal ">
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item list-group-item-dark"><b>` +
    itemsTiempo.description +
    `</b></li>
                                      <li class="list-group-item"><b>Presion H.:</b> ` +
    itemsTiempo.pressure +
    ` hPa</li>
                                      <li class="list-group-item list-group-item-dark"><b>Viento:</b> ` +
    itemsTiempo.wing_deg +
    ` a ` +
    itemsTiempo.wind_speed +
    ` km/h</li>
                                  </ul>
                              </div>
                          </div>
                          <div class="card">
                              <div class="card border-light">
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item"><b>Visibilidad:</b> ` +
    itemsTiempo.visibility +
    ` km</li>
                                      <li class="list-group-item list-group-item-dark"><b>Humedad:</b> ` +
    itemsTiempo.humidity +
    ` %</li>
                                      <li class="list-group-item">...</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>`
  );
}

function mostrarTiempoActual(itemsTiempo, localizacion) {
  var d1 = document.getElementById("tiempoActual");
  d1.insertAdjacentHTML(
    "beforeEnd",
    getDivTiempoActual(itemsTiempo, localizacion)
  );
}

$(document).ready(function () {
  getTiempo();
});
