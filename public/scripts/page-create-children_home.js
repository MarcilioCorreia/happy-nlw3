// create map
const map = L.map('mapid').setView([41.1506342, -8.631285], 14)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// create icon 
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon from
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon})
    .addTo(map)
})

// addPhotoField
function addPhotoField() {
    // take the photos container #images
    const container = document.querySelector('#images')
    // take the container to double it .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // make the clone of the last added image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verify if the field is empty. If yes: dont add to the images container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // clear the field before add it to the images Container
    input.value = ""
    // add the clone to the images imageContainer
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length <= 1) {
        return
    }
}