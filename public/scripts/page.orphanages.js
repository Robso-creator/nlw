//create map

const mymap = L.map("mapid").setView([-23.2161394, -46.8273787], 15);

//create and add tileLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

//create popup overlay

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 64,
}).setContent(
  'Lar das meninas <a class="choose-orphanages" </a>'
);

//create and add marker

L.marker([-23.2161394, -46.8273787], { icon }).addTo(mymap).bindPopup(popup);
