var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.852582, 74.585138],
        zoom: 17
    });

    DG.marker([42.852582, 74.585138]).addTo(map).bindPopup('IT HUB');
});