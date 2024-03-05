var elements = document.getElementsByClassName('block-hidden');
var markerIds = document.getElementsByClassName('marker');

for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
}


var markers = document.querySelectorAll('.marker');

var crosses = document.querySelectorAll('.close')

markers.forEach(function(marker) {
    marker.addEventListener('click', function() {
        var markerId = this.getAttribute('second-marker');
        handleMarkerClick(markerId);
    });
});


crosses.forEach(function(marker){

    marker.addEventListener('click', function() {
        for (var i = 0; i < markerIds.length; i++) {
            markerIds[i].style.display = 'block';
        }
        var allMarkers = document.getElementsByClassName('block-hidden')
        for (var i = 0; i < allMarkers.length; i++) {
            allMarkers[i].style.display = 'none';
        }
        console.log('Cross clicker')
        
    });
});


function handleMarkerClick(markerId) {
    console.log('Marker clicked:', markerId+"-block-hidden");
    battleBlock = document.getElementById(markerId).style.display
    if (battleBlock == 'none')
    {
        document.getElementById(markerId).style.display = 'block'
    for (var i = 0; i < markerIds.length; i++) {
        markerIds[i].style.display = 'none';
    }
}
    else{
        document.getElementById(markerId).style.display = 'none'
    }
}
