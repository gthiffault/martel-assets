if($('.c-contact-us').length) {
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyABqo9wi4pQePhI2bSJmy2BoZtJw-ULJsE").done(function(script, textStatus) {
	var mapAction = function(CurrentAnimation) {
        var center_ico = new google.maps.LatLng(45.300841, -73.853363);     
        var locations = [['Excavation L. Martel', 45.300841, -73.853363]];
        // Create an array of styles.
        var styles = [ { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 } ] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 } ] }, { "featureType": "administrative", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.country", "elementType": "geometry", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.country", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.province", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.locality", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.neighborhood", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 20 } ] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 21 } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" }, { "lightness": 17 } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 16 } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 19 } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 17 } ] } ]
        var styledMap = new google.maps.StyledMapType(styles,
        {name: 'Styled Map'});
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            var mapOptions = {zoom: 11,center: center_ico,zoomControl: true,scrollwheel: false,draggable: false,mapTypeControl: false,zoomControlOptions: {style: google.maps.ZoomControlStyle.MEDIUM,position: google.maps.ControlPosition.RIGHT_CENTER},streetViewControl: false,panControl: true,panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}}
        } else {
            var mapOptions = {zoom: 11,center: center_ico,zoomControl: true,scrollwheel: false,draggable: true,mapTypeControl: false,zoomControlOptions: {style: google.maps.ZoomControlStyle.MEDIUM,position: google.maps.ControlPosition.RIGHT_CENTER},streetViewControl: false,panControl: true,panControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}}
        }      
        var map = new google.maps.Map(document.getElementById('google-map'),mapOptions);
        marker = new google.maps.Marker({map:map,animation: google.maps.Animation.DROP,size: new google.maps.Size(20, 32)});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        for (i = 0; i < locations.length; i++) {  
            var image = {
                scaledSize: new google.maps.Size(32, 49),
                // url: "https://staging-valens.agencezel.dev/assets/images/icons/fermes-valens_shop.svg"
            };
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                // ,icon: image,
                optimized: false,
                animation: CurrentAnimation



            });
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
            }
            })(marker, i));
        }
    }

    window.onload = mapAction();

    $(window).resize(function() {
        mapAction();
    });  
	});

}       