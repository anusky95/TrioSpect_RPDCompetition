var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://maps.cityofrochester.gov/arcgis/rest/services/RPD/RPD_Part_I_Crime/FeatureServer/2/query?where=1%3D1&outFields=&outSR=4326&f=json');
ourRequest.onload = function(){  
 var ourData = JSON.parse(ourRequest.responseText);

console.log(ourData.features[2].geometry);
    
};
ourRequest.send();