const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoiZmppYW5nOTEiLCJhIjoiY2p2MmltMmF6MDg0bzQzbjV0ZHFibjg3NiJ9.6Lg7fZop-oy41_g1Ivndbw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
