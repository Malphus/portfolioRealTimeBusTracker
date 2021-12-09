mapboxgl.accessToken = 'pk.eyJ1IjoibWFscGh1cyIsImEiOiJja3dpc2hocmwxNjA2Mm9wMmljeDJ6Zjg3In0.4s8ilPFkgCyx9F8YT0j05Q';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.101,42.358],
    zoom: 15
})

function createMapMarker(){
var marker = new mapboxgl.Marker()
    .setLngLat([-71.091542,42.358862])
    .addTo(map);
}
window.onload = () => {
    createMapMarker();
  };
async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
	console.log(locations);

	// timer
	setTimeout(run, 15000);
}
	
// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();