// Purpose: contain all the JavaScript and Leaflet code to create the map and add data to the map

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// L.map() assigns variable map to object, setView() sets view to geographical center, zoom set at 4
let map = L.map('mapid').setView([40.7, -94.5], 4);

// An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:, useful when we need to add multiple tile layers, or a background image of our map(s)
// "// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });""

// Add Tile Layer-> used to load and display a tile layer on the map, from Leaflet Quck Start Guide
// To change hte map's style change id to one of these:
    // mapbox/streets-v11
    // mapbox/outdoors-v11
    // mapbox/light-v10
    // mapbox/dark-v10
    // mapbox/satellite-v9
    // mapbox/satellite-streets-v11
// To use the Mapbox Styles API, edit the URL in the Leaflet tilelayer()method, as detailed on the Leaflet website (first part of tileLayer website)
// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'API_KEY'
// }).addTo(mymap);
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


