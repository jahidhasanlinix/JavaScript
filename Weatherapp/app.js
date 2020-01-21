window.addEventListener('load', ()=> {
	let long;
	let lat;
	let temperatureDescription = document.querrySelector

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const proxy = 'https://cors-anywhere.herokuapp.com/';

			const api = '${proxy}https://api.darksky.net/forecast/f978274242175a2e2e0d998610445862/${lat},${long}';
			fetch(api) 
		  .then(response =>{
			return response.json();
		})
		  .then(data => {
		  	console.log(data);
		  	const {temperature, summery} = data.currently;
		  });
		});

		

	}
});