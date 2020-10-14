const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
// Create map
const map = L.map("mapid", options).setView([-19.9023386, -44.1041357], 16);

//Create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create and add marker

L.marker([-19.9023386, -44.1041357], { icon }).addTo(map);

// Image galery

function selectImage(event) {
  const button = event.currentTarget

  // Remover todas as classe .active

  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass (button) {
    button.classList.remove("active")
  }

  // Selecionar imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  // Atualizar o container do image
  imageContainer.src = image.src

  // Adicionar a classe .active para esse botao
  button.classList.add('active')
}
