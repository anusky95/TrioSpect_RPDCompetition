function main(){
var map = L.map('map',{
 center:[43.05,-77.54],
zoom: 12,
minZoom:2,
maxZoom:18
});

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);

function geoInformation(feature,layer){
    
  
    layer.bindPopup("<h1 class='infoHeader'> Crime Details</h1><p class='infoHeader'>"+"Crime Type:" +feature.properties.Statute_Text+"<br />"+"Address:"+feature.properties.Address_StreetFull+"<br />"+"Location Type:"+feature.properties.Location_Type+"<br />"+"Occured Year:"+feature.properties.OccurredFrom_Date_Year+"</p>");
    console.log("hello");
};
    
/*    
L.geoJson(crime,{
    onEachFeature: geoInformation
}).addTo(map);
  */      
    
var assaultMarker = L.icon({
    iconUrl:'assault.png',
    iconSize: [50,70],
    iconAnchor:[43.147466,-77.610598]
    
});


var burglaryMarker = L.icon({
    iconUrl:'burglary.png',
    iconSize: [50,70],
    iconAnchor:[43.1778,-77.5918]
    
});
    

var larcenyMarker = L.icon({
    iconUrl:'larceny.jpg',
    iconSize: [50,70],
    iconAnchor:[43.17988,-77.5911]
    
});
    

var murderMarker = L.icon({
    iconUrl:'murder.png',
    iconSize: [50,50],
    iconAnchor:[43.15069,-77.6359]
    
});
   
    

var manslaughterMarker = L.icon({
    iconUrl:'manslaughter.png',
    iconSize: [50,50],
    iconAnchor:[43.1807,-77.6203]
    
});
    


var robberyMarker = L.icon({
    iconUrl:'robbery.jpg',
    iconSize: [50,50],
    iconAnchor:[43.25504,-77.615]
    
});
    

var theftMarker = L.icon({
    iconUrl:'theft.png',
    iconSize: [50,50],
    iconAnchor:[43.18198,-77.5796]
    
});
    

var vehicleMarker = L.icon({
    iconUrl:'vehicleTheft.jpg',
    iconSize: [50,50],
    iconAnchor:[43.24386,-77.6248]
    
});
    
    /*
L.geoJson(crime,{
        onEachFeature: geoInformation
}).addTo(map);
  */
L.marker([43.14556,-77.641],{icon: larcenyMarker}).addTo(map);
L.marker([43.13779,-77.6291],{icon: larcenyMarker}).addTo(map);
L.marker([43.13779,-77.6291],{icon: larcenyMarker}).addTo(map);
L.marker([43.13779,-77.6291],{icon: larcenyMarker}).addTo(map);
L.marker([43.16629,-77.5604],{icon: larcenyMarker}).addTo(map);
L.marker([43.15619,-77.6414],{icon: larcenyMarker}).addTo(map);

L.marker([43.19414,-77.641],{icon: robberyMarker}).addTo(map);
L.marker([43.16406,-77.6078],{icon: robberyMarker}).addTo(map);
L.marker([43.17463,-77.6078],{icon: robberyMarker}).addTo(map);
L.marker([43.18096,-77.6078],{icon: vehicleMarker}).addTo(map);
L.marker([43.17772,-77.614],{icon: vehicleMarker}).addTo(map);
L.marker([43.16754,-77.6229],{icon: vehicleMarker}).addTo(map);

L.marker([43.19414,-77.614],{icon: assaultMarker}).addTo(map);
L.marker([43.155,-77.5566],{icon: assaultMarker}).addTo(map);
L.marker([43.18293,-77.17604],{icon: burglaryMarker}).addTo(map);
L.marker([43.14486,-77.6103],{icon: burglaryMarker}).addTo(map);

L.marker([43.14831,-77.6042],{icon: robberyMarker}).addTo(map);
L.marker([43.14731,-77.5929],{icon: robberyMarker}).addTo(map);
L.marker([43.16144,-77.566],{icon: robberyMarker}).addTo(map);


//L.marker(crimeLocation, {icon: customMarker}).addTo(map);




/*
//L.marker(, {icon: customMarker}).addTo(map);
map.on('click',function(e,feature){
						var coord = e.latlng.toString().split(',');
						var lat = coord[0].split('(');
						var lng = coord[1].split(')');
						console.log(lat[1] + lng[0]);
                       
					});
*/			
    
}
window.onload = main;