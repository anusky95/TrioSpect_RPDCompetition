var map = L.map('map',{
 center:[43.05,-77.54],
zoom: 12,
minZoom:2,
maxZoom:18
});


function informationMap(feature,layer){
    layer.bindPopup("<h1 class='infoHeader'> Crime Details</h1><p class='infoHeader'>"+"Crime Type:" +feature.properties.Statute_Text+"<br />"+"Address:"+feature.properties.Address_StreetFull+"<br />"+"Location Type:"+feature.properties.Location_Type+"<br />"+"Occured Year:"+feature.properties.OccurredFrom_Date_Year+"</p>");
};


/*

function informationMap(feature,layer){
    layer.bindPopup("<h1 class='infoHeader'>Street Address</h1><p class='infoHeader'>"+crimePred.Predictcrimeion.+"</p>");
    console.log()
};

*/


L.geoJson(crime,{
    onEachFeature: informationMap
}).addTo(map);


L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png',{attribution:"Mapbox"}).addTo(map);


var latLngs = [[45.187273, 5.758124], [45.182772, 5.758516], [45.185767, 5.747106], [45.176569, 5.752082], [45.171863, 5.757120], [45.168354, 5.755178]];
var colors = ['rgb(20, 200, 100)', 'rgb(200, 100, 20)', null, null, 'rgb(20, 200, 100)', 'rgb(0, 0, 0)'];

/*
var polyline = L.polycolor(latLngs, {
  colors: colors,
  weight: 5
}).addTo(map);
*/


/*


var ltlang = [[43.158,-77.5692, 0.95],[43.16168,-77.569693,1.0],[ 43.15,-77.61788,1.0],[43.1777,-77.613, 1.0]];

var heat = L.heatLayer(ltlang,{radius: 20,
       blur:60,
    gradient: {
    0.4:  '#f23e45',
    0.50: 'black',
    0.70: 'yellow',
    0.95: '#FF8300',
    1.0:  'red'
  }
}).addTo(map);


*/
/*

var area = L.polygon(ltlang,{
    fillColor:'red',
    opacity:1,
    color:'red'
    
}).addTo(map);

function getColor(d) {
    return d > 4 ? '#800026' :
           d > 3  ? '#BD0026' :
           d > 2  ? '#E31A1C' :
           d > 1  ? '#FC4E2A' :
                      '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.Statute_Degree),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

L.geoJson(crime,{style:style}).addTo(map); */