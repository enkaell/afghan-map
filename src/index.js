
var elements = document.getElementsByClassName('block-hidden');

for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = 'none';
}


var markers = document.querySelectorAll('.marker');


markers.forEach(function(marker) {
    marker.addEventListener('click', function() {
        var markerId = this.getAttribute('second-marker');
        handleMarkerClick(markerId);
    });
});

function handleMarkerClick(markerId) {
    console.log('Marker clicked:', markerId+"-block-hidden");
    battleBlock = document.getElementById(markerId).style.display
    if (battleBlock == 'none'){document.getElementById(markerId).style.display = 'block'}
    else{
        document.getElementById(markerId).style.display = 'none'
    }
}
