// Create map
const map = L.map("mapid").setView([-19.9023386, -44.1041357], 16);

//Create and add titleLayer

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//Create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

//create and add marker
let marker;

map.on('click', (event) => {

  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name = lat]').value = lat;
  document.querySelector('[name = lng]').value = lng;

  // remove icon 
  marker && map.removeLayer(marker)


  // add icon layer
  marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Addded photo input

function addPhotoField() {
  // Get container photos #images
  const container = document.querySelector('#images')
  // get container to duplicate
  const fieldsContainer = document.querySelectorAll('.new-upload')
  // Clone the last image added
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

  // Verify if input is clean
  // If sure, dont add to container images
  const input = newFieldContainer.children[0]

  if (input.value == "") {
    return 
  }


  // clean the input before added
  input.value = ""

  // Add clone to cotainer #images
  container.appendChild(newFieldContainer)
}

function deleteField (event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')
  
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = ""
    // Clean value of input
    return
  }

  // delete input
  span.parentNode.remove();
}

// Select yes or no
function toggleSelect(event) {
  document.querySelectorAll('.button-select button')
  .forEach((button) => {
    button.classList.remove('active')
  })

  const button = event.currentTarget
  button.classList.add('active')

  const input = document.querySelector('[name="open_on_weekends"]')
  //Verify if yes or not
  input.value = button.dataset.value
}