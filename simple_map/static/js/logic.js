// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// L.map() assigns variable map to object, setView() sets view to geographical center, zoom set at 4
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Add Tile Layer-> used to load and display a tile layer on the map, from Leaflet Quck Start Guide
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


