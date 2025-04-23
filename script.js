let map = L.map('map').setView([20, 0], 2);
let impactLatLng = null;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click', function(e) {
  impactLatLng = e.latlng;
  L.marker(impactLatLng).addTo(map)
    .bindPopup("Impact Location Selected 🌍")
    .openPopup();
});

function simulateImpact() {
  if (!impactLatLng) {
    alert("Please select an impact location on the map!");
    return;
  }

  let size = document.getElementById("size").value;
  let speed = document.getElementById("speed").value;
  let angle = document.getElementById("angle").value;

  // Simple damage calculation
  let energy = (0.5 * size * speed * speed * Math.sin(angle * Math.PI / 180)).toFixed(2);
  let craterSize = (size * 1.3 + speed * 0.5).toFixed(1);
  let damageRadius = (size * speed * 0.2).toFixed(1);

  document.getElementById("output").innerHTML = `
    <h2>💥 Impact Results</h2>
    <p><strong>Crater Size:</strong> ${craterSize} km</p>
    <p><strong>Destruction Radius:</strong> ${damageRadius} km</p>
    <p><strong>Impact Energy:</strong> ${energy} TNT equivalent (fictional)</p>
    <p><strong>Location:</strong> Lat ${impactLatLng.lat.toFixed(2)}, Lng ${impactLatLng.lng.toFixed(2)}</p>
    <p>🌎 <em>The city is toast!</em></p>
  `;
}
