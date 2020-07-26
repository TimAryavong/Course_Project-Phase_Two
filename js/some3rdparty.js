/*
    Title: Course Project - Phase Two - some3rdparty.js(geolocation)
    By: Tim Aryavong 200176280
    Date: Saturday July 25, 2020
    Description: The geolocation and google maps from our in-class lecture.
    Decided against scoping up the project due to time constraints and inexperience.
    Still had to troubleshoot initMap() not being a function.
    This was due to the script not loading before the document finished loading.
    To solve this all I did was add elements straight to the index.html.
    Then came the problem of the map not showing up do to its CSS being over written.
    It was tricky to solve, at first I thought it was my grid CSS but even after commenting everything out it didn't work.
*/

let map;
let infoWindow;
let mapSpot = document.getElementById("map");
let georgian = {
    lat: -34.397,
    lng: 150.644
};

function initMap() {
    map = new google.maps.Map(mapSpot, {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation ?
        "Error: The Geolocation service has failed." :
        "Error: Your browser doesn't support geolocation"
    );
    infoWindow.open(map);
}