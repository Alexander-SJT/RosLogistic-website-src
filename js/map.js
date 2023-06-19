const map = () => {
	let cord = [59.92919191082086, 30.359210579762067];

	const mapConf = {
		center: cord,
		zoom: 17,
	};

	const iconConf = {
		iconLayout: "default#image",
		iconImageHref: "../icons/decor/map-mark.svg",
		iconImageSize: [40, 40],
		iconImageOffset: [-21, -47],
	};

	const balloonConf = {
		balloonContent: `
        <address class="map__address">
            г. Санкт-Петербург, ул. Лиговский пр., 53
        </address> 
        <a href="mailto:info@roslogistic.com" class="map__link">
            info@roslogistic.com
        </a>`,
	};

	function initMap() {
		let myMap = new ymaps.Map("map", mapConf);
		let myIcon = new ymaps.Placemark(cord, balloonConf, iconConf);
		myMap.geoObjects.add(myIcon);
		myIcon.balloon.open();

		myMap.controls.remove("searchControl");
		myMap.controls.remove("geolocationControl");
		myMap.controls.remove("trafficControl");
		myMap.controls.remove("typeSelector");
		myMap.controls.remove("rulerControl");
	}

	ymaps.ready(initMap);
};

export default map;
