
var map = L.map('map',{
 center:[43.05,-77.54],
zoom: 12,
minZoom:2,
maxZoom:18
});

L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png',{attribution:"Mapbox"}).addTo(map);

function informationMap(feature,layer){
    layer.bindPopup("<h1 class='infoHeader'>Crime Type</h1><p class='infoHeader'>"+feature.properties.Statute_Text+"</p>");
};

var heat = L.heatLayer([
    [43.1520114,-77.627881,0.3],[43.16168,-77.590,0.5]
],{radius:25}).addTo(map);

L.geoJson(crime,{
    onEachFeature: informationMap
}).addTo(map);



var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
var ltlang = [[],[],[],[]]
var area = L.polygon(latlngs,{
    fillColor:'red',
    opacity:1,
    color:'red'
    
}).addTo(map);