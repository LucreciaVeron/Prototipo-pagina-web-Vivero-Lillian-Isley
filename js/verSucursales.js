let map = L.map('mapa').setView([-34.5230424,-58.7001869],16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Marker=L.marker([-34.5233581,-58.6997422]).bindPopup(
  '<h5> Sucursal Trebol </h5> <p>Horario de atencion: Lunes a Viernes 9:00 a 17:00</p><p>Direccion: 999 Sarratea Los Polvorines, Provincia de Buenos Aires</p> '); 
Marker.addTo(map);

var Marker=L.marker([-34.5191316,-58.6952891]).bindPopup(
  '<h5> Sucursal Oasis </h5> <p>Horario de atencion: Lunes a Viernes 9:00 a 17:00 - Sabado y Domingo 8:00 a 13:00</p><p>Direccion: 1801 César Bacle Villa de Mayo, Provincia de Buenos Aires</p>'); 
Marker.addTo(map);

var Marker=L.marker([-34.5209281,-58.7037016]).bindPopup(
  ' <h5> Sucursal Floresta </h5> <p>Horario de atencion: Domingo a Viernes 8:00 a 18:00</p><p>Direccion: 2112 José Verdi Los Polvorines, Provincia de Buenos Aires</p>'); 
Marker.addTo(map);

var Marker=L.marker([-34.5241822,-58.7058526]).bindPopup(
  ' <h5> Sucursal Verde Claro </h5> <p> Horario de atencion: Lunes a Viernes 9:00 a 17:00</p><p>Direccion: 1961 Velazquéz Los Polvorines, Provincia de Buenos Aires</p>'); 
Marker.addTo(map);


var Marker=L.marker([-34.5235727,-58.6944795]).bindPopup(
  '<h5> Sucursal Las hojas </h5> <p>Horario de atencion: Lunes a Sabado 8:00 a 18:00</p><p>Direccion: 1383 John F. Kennedy Los Polvorines, Provincia de Buenos Aires</p>'); 
Marker.addTo(map);