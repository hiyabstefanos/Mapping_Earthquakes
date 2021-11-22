// Purpose: contain all the JavaScript and Leaflet code to create the map and add data to the map

// Add console.log to check to see if our code is working.
console.log("working");

// // // Create the map object with a center and zoom level.
// // // L.map() assigns variable map to object, setView() sets view to geographical center, zoom set at 4
// // // location changed to halfway point for mapping a line, zoom changed to 7
// // let map = L.map('mapid').setView([37.6213, -122.3790], 7);

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088],
//   ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     color: "yellow",
//   }).addTo(map);

// // Add GeoJSON data
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // // Grabbing our GeoJSON data.
// // L.geoJSON(sanFranAirport).addTo(map);
// L.geoJSON(sanFranAirport, {
//     // onEachFeature Function to bind popups
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup();
//        }

//     // // We turn each feature into a marker on the map.
//     // pointToLayer: function(feature, latlng) {
//     //   console.log(feature);
//     //   return L.marker(latlng)
//     //   .bindPopup("<h2>" + feature.properties.city + "</h2>");
//     // }

// }).addTo(map);

// Add a circle using circle marker
// L.circleMarker([34.0522, -118.2437]).addTo(map);

// // Add a circle marker to the map
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// // Add a circle marker to the map and adjust color/pixle size
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: '#ffffa1'
//  }).addTo(map);

// // Replaces marker, An array containing each city's location, state, and population.
// // iterate through cities array, can also use for (let i = 0; i < cities.length; i++)
// // moved to cities.js file
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];  

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// //  Add a marker to the map for Los Angeles, California. Using circle function instead
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

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
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Create a base layer that holds both maps.
let baseMaps = {
    Light: light,
    Dark: dark
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [light]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
  
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/hiyabstefanos/Mapping_Earthquakes/Mapping_GeoJSON_Points/mapping_GeoJSON_points/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/hiyabstefanos/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/mapping_geoJSON_linestrings/static/torontoRoutes.json";

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        layer.bindPopup("</h3> Airline: " + feature.properties.airline + "</h3> <hr><h3> Destination: "
        + feature.properties.dst + "</h3>");
      }
  })
    
    .addTo(map);
});

