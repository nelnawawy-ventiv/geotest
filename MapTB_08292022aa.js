define(["https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js", "jquery", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js", "https://api.mapbox.com/mapbox.js/plugins/turf/v3.0.11/turf.min.js", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",/*"https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",*/ "text! https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css"], function (mapboxgl, jQuery, MapboxGeocoder, turf, MapboxDraw, slider1, slider2, Info) {
    "use strict";
    var map = '',
        bounds = '',
        geojsonFeature = {};
    var earth = 'none';
    var radar = 'none';
    var MyStyle = 'streets-v10';
    var property = 'visible';
    var lightning = 'none';
    var hurricane = 'none';
    var hazardous = 'none';
    var earth_h = 'none';
    var tornadoes = 'none';
    var claims = 'none';
    var claim_info = '';
    var earthquake_h = 'none';
    var total_paid = 0;
    var wildfire_p = 'none';
    var claims_count = 0;
    var tornado_24 = 'none';
    var snowfall_72 = 'none';
    var wildfireper = 'none';
    var cause = '';
    var customer = '';
    var record_link = '';
    var ustempout = 'none';

    function BasicControl() { };

    BasicControl.prototype.initialize = function (oControlHost, fnDoneInitializing, oDataStore) {

        document.getElementById("v111_ValueComboBox").addEventListener("change", myFunction);

        function myFunction() {

            var visibility = map.getLayoutProperty('Properties2', 'visibility');

            if (sessionStorage.getItem('visibility') === 'visible') {
                map.setLayoutProperty('Properties2', 'visibility', 'none');
                sessionStorage.setItem('visibility', 'none');
                //document.getElementById("v30_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Properties2', 'visibility', 'visible');
                sessionStorage.setItem('visibility', 'visible');
                //document.getElementById("v30_ValueComboBox").style.backgroundColor = '#efbf13';
            }
        }

        document.getElementById("v123_ValueComboBox").addEventListener("change", myFunction2);

        function myFunction2() {

            var visibility = map.getLayoutProperty('points', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('points', 'visibility', 'none');
                //document.getElementById("v42_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('points', 'visibility', 'visible');
                //document.getElementById("v42_ValueComboBox").style.backgroundColor = '#EFE013';
            }
            //map.setLayoutProperty('points', 'visibility', 'visible');

        }

        document.getElementById("v135_ValueComboBox").addEventListener("change", myFunction3);

        function myFunction3() {

            var visibility = map.getLayoutProperty('Radar-Today', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Radar-Today', 'visibility', 'none');
                //document.getElementById("v54_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Radar-Today', 'visibility', 'visible');
                //document.getElementById("v54_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }
        document.getElementById("v147_ValueComboBox").addEventListener("change", myFunction4);

        function myFunction4() {

            var visibility = map.getLayoutProperty('Lightning-Today', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Lightning-Today', 'visibility', 'none');
                //document.getElementById("v66_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Lightning-Today', 'visibility', 'visible');
                //document.getElementById("v66_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v159_ValueComboBox").addEventListener("change", myFunction5);

        function myFunction5() {

            var visibility = map.getLayoutProperty('Hurricane-Today', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Hurricane-Today', 'visibility', 'none');
                //document.getElementById("v78_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Hurricane-Today', 'visibility', 'visible');
                //document.getElementById("v78_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v171_ValueComboBox").addEventListener("change", myFunction6);

        function myFunction6() {

            var visibility = map.getLayoutProperty('Hazardous Weather - Today', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Hazardous Weather - Today', 'visibility', 'none');
                //document.getElementById("v90_MultiSelectList").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Hazardous Weather - Today', 'visibility', 'visible');
                //document.getElementById("v90_MultiSelectList").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v183_ValueComboBox").addEventListener("change", myFunction7);

        function myFunction7() {

            var visibility = map.getLayoutProperty('Earthquakes-last 30days', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Earthquakes-last 30days', 'visibility', 'none');
                //document.getElementById("v102_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Earthquakes-last 30days', 'visibility', 'visible');
                //document.getElementById("v102_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v195_ValueComboBox").addEventListener("change", myFunction8);

        function myFunction8() {

            var visibility = map.getLayoutProperty('Earthquake - Historical', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Earthquake - Historical', 'visibility', 'none');
                //document.getElementById("v114_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Earthquake - Historical', 'visibility', 'visible');
                //document.getElementById("v114_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v207_ValueComboBox").addEventListener("change", myFunction9);

        function myFunction9() {

            var visibility = map.getLayoutProperty('Tornados - Historical', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Tornados - Historical', 'visibility', 'none');
                //document.getElementById("v126_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Tornados - Historical', 'visibility', 'visible');
                //document.getElementById("v126_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v219_ValueComboBox").addEventListener("change", tornadoes24);

        function tornadoes24() {

            var visibility = map.getLayoutProperty('Tornadoes - 24HR', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Tornadoes - 24HR', 'visibility', 'none');
                //document.getElementById("v126_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Tornadoes - 24HR', 'visibility', 'visible');
                //document.getElementById("v126_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v231_ValueComboBox").addEventListener("change", myFunction10);

        function myFunction10() {

            var visibility = map.getLayoutProperty('Wildfire', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Wildfire', 'visibility', 'none');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Wildfire', 'visibility', 'visible');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v243_ValueComboBox").addEventListener("change", myFunction11);

        function myFunction11() {

            var visibility = map.getLayoutProperty('Wildfire Perimeter', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Wildfire Perimeter', 'visibility', 'none');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Wildfire Perimeter', 'visibility', 'visible');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v255_ValueComboBox").addEventListener("change", myFunction12);

        function myFunction12() {

            var visibility = map.getLayoutProperty('Snowfall - 72HR', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Snowfall - 72HR', 'visibility', 'none');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Snowfall - 72HR', 'visibility', 'visible');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v266_ValueComboBox").addEventListener("change", myFunction13);

        function myFunction13() {

            var visibility = map.getLayoutProperty('US Temp 6-10 Day', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('US Temp 6-10 Day', 'visibility', 'none');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('US Temp 6-10 Day', 'visibility', 'visible');
                //document.getElementById("v138_ValueComboBox").style.backgroundColor = '#EFE013';
            }

        }

        jQuery("head link[rel='stylesheet']").last().after("<link href='https://api.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet' />");
        //jQuery("head link[rel='stylesheet']").last().after("<link href='https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css' />");
        jQuery("body").after("<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css' type='text/css' />");
        jQuery("body").prepend("<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.css' type='text/css'/>");
        jQuery("tbody").after("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css' rel='stylesheet' />");
        jQuery("head link[rel='stylesheet']").last().after("<link href='https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css' type='text/css' />");

        //jQuery("td style").prepend("<div id='map'></div><div class='calculation-box'><p>Draw a polygon using the draw tools.</p><div id='calculated-area'></div></div>");
        var mapContainer = oControlHost.container.id;

        //*** Step 2a make some minor adjustments to default map */
        mapboxgl.accessToken = 'pk.eyJ1IjoibmV2bmQiLCJhIjoiY2tuaXc2YzQ0MGhueDJ2cGN4dHlrems2eCJ9.auAuYzuRnTJBlXjC9BddXQ' //pk.eyJ1IjoiZnhoYXdrIiwiYSI6ImNqaDZqYmVsajFwb3kycWs0dzM5aDFxbXgifQ.DcqavEFQJWPJ8eUAGLbK_A'; //Make sure to add Map Token Key
        map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-.165748, 51.507], //Center Map
            zoom: 5, //Change Default Zoom
            interactive: true //Set Interactive to true
        });

        //Set up the Bounds variable
        bounds = new mapboxgl.LngLatBounds();

        //Tell Cognos that we are done initializing 
        fnDoneInitializing();

    };

    BasicControl.prototype.draw = function (oControlHost) {

        console.log('3. Draw ******************')

        var oPage = oControlHost.page;
        jQuery('body .mapboxgl-control-container').append('<div id=' + 'console' + '>' + '<div>' + '<div class=' + 'session' + ' ' + 'id=' + 'sliderbar' + ' ' + '>' + ' ' + '<p>' + '<font color=' + "#efbf13" + '>' + 'Historical - Year: ' + '<label id=' + 'active-Year' + '>' + '2019' + '</label>' + '</font>' +
            '<input id=' + 'slider' + ' ' + 'class=' + 'row' + ' ' + 'type=' + 'range' + ' ' + 'min=' + '2013' + ' ' + 'max=' + '2020' + ' ' + 'step=' + '1' + ' ' + 'value=' + '2020' + '/>' + '</p>' + '</div>');
        jQuery('body .mapboxgl-control-container').append('<div class=' + 'calculation-box' + '>' + '<p>' + 'Create boundaries with the draw tool to select markers' + '</p>' + '<div id=' + 'calculated-area' + '>' + '</div>');
        //jQuery('body .mapboxgl-control-container').append('<div id=' + 'main-legend' + ' ' + 'class=' + 'legend' + '>' + '<h4>' + 'Legend' + '</h4>' + '<div>' + '<span style=' + '"background-image:' + " url('https://cdn.rawgit.com/mapbox/mapbox-gl-styles/master/sprites/bright-v9/_svg/town-hall-11.svg')" + '; padding: 10px 10px 5px 10px; left: auto; margin: auto;">' + '</span>' + 'Properties' + '</div>' + '<div>' + '<span style=' + '"background-color: #efbf13"' + '>' + '</span>' + 'Claims' + '</div>' + '<div>' + '<span style=' + '"background-color: #f80a0a"' + '>' + '</span>' + 'Wildfire' + '</div>');

        var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
        map.on('load', function () {

            map.addSource('earthquakes', {
                type: 'geojson',
                data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
            });
            map.addLayer({
                "id": "Earthquakes-last 30days",
                "type": "circle",
                "source": "earthquakes",
                "layout": {
                    "visibility": earth
                },
                "paint": {
                    "circle-color": "#f00",
                    "circle-radius": {
                        "property": "mag",
                        "base": 1.8,
                        "stops": [
                            [{ zoom: 0, value: 2 }, 2],
                            [{ zoom: 0, value: 8 }, 15],
                            [{ zoom: 11, value: 2 }, 20],
                            [{ zoom: 11, value: 8 }, 900],
                            [{ zoom: 20, value: 2 }, 40],
                            [{ zoom: 20, value: 8 }, 2250]
                        ],

                    }, "circle-opacity": 0.7,
                    'circle-stroke-width': 1,
                    'circle-stroke-color': '#EE4234'//'#ffffff'
                }
            });
        });

        map.on('click', function (e) {

            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Earthquakes-last 30days'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];
            var Day = new Date(feature.properties.time);
            var Day1 = Day.toUTCString();

            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.place + '</h3><p>' + 'Magnitude: ' + feature.properties.mag + '<br>' + 'Date: ' + Day1 + '<br>' + 'source: http://earthquake.usgs.gov/earthquakes' + '</p>')
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);

        });
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'Earthquakes-last 30days', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Earthquakes-last 30days', function () {
            map.getCanvas().style.cursor = '';
        });

        map.on('load', function () {
            var frameCount = 1;
            for (var i = 0; i < frameCount; i++) {
                var revi = frameCount - i;
                var t = new Date();
                var d = t.getTime();
                var newD = d - 60 * 1000 * revi * 30;
                var datetext = new Date(newD);
                var newDiso = datetext.toISOString();
                var timeBlock = newDiso;
                map.addLayer({
                    'id': 'Radar-Today',
                    'type': 'raster',
                    'source': {
                        'type': 'raster',
                        'tiles': [
                            'https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer?service=WMS&request=GetMap&version=1.3.0&layers=1&styles=&format=image/png&transparent=true&height=256&width=256&crs=EPSG:3857&bbox={bbox-epsg-3857}&time=' + timeBlock
                        ],
                        'tileSize': 256
                    },
                    'layout': { 'visibility': radar },
                    'paint': {
                        'raster-opacity': 1,
                        'raster-opacity-transition': {
                            duration: 0
                        }
                    }
                });
            }

        });

        map.on("load", function () {
            map.addSource("points", {
                "type": "geojson",
                "data": geojsonFeature
            });


            map.addLayer({
                "id": "points",
                "type": "circle",
                "source": "points",
                "layout": {
                    "visibility": claims
                },
                "paint": {
                    'circle-radius': {
                        'base': 5.75,
                        'stops': [
                            [6, 6],
                            [8, 6],
                            [10, 8],
                            [12, 9],
                            [16, 10]
                        ]

                    },
                    "circle-color": "#efbf13",
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                },
                "filter": ["==", "$type", "Point"],

            });


        });


        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'points', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'points', function () {
            map.getCanvas().style.cursor = '';
        });



        map.on('load', function () {
            map.addLayer({
                "id": "Hurricane-Today",
                "type": "raster",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "raster",
                    "tiles": ['https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'],
                    // https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer/export?dpi=96&transparent=true&format=png8&bbox=-19257827.773674857%2C-287473.82805563323%2C-8679055.928092321%2C8087387.216363874&bboxSR=102100&imageSR=102100&size=768%2C608&f=image
                    "tileSize": 256

                }, 'layout': { 'visibility': hurricane },
            });
        });

        map.on('load', function () {
            var frameCount = 1;
            for (var i = 0; i < frameCount; i++) {
                var revi = frameCount - i;
                var t = new Date();
                var d = t.getTime();
                var newD = d - 60 * 1000 * revi * 30;
                var datetext = new Date(newD);
                var newDiso = datetext.toISOString();
                var timeBlock = newDiso;
                map.addLayer({
                    'id': 'Lightning-Today',
                    'type': 'raster',
                    'source': {
                        'type': 'raster',
                        'tiles': [
                            'https://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WmsServer?service=WMS&request=GetMap&version=1.3.0&layers=1&styles=&format=image/png&transparent=true&height=256&width=256&crs=EPSG:3857&bbox={bbox-epsg-3857}&time=' + timeBlock
                        ],
                        'tileSize': 256
                    },
                    'layout': { 'visibility': lightning },
                    'paint': {
                        'raster-opacity': 1,
                        'raster-opacity-transition': {
                            duration: 0
                        }
                    }
                });
            }

        });

        map.on('load', function () {
            map.addLayer({
                "id": "Hazardous Weather - Today",
                "type": "raster",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "raster",
                    "tiles": ['https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteoceanhydro_longduration_hazards_time/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'],
                    // https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer/export?dpi=96&transparent=true&format=png8&bbox=-19257827.773674857%2C-287473.82805563323%2C-8679055.928092321%2C8087387.216363874&bboxSR=102100&imageSR=102100&size=768%2C608&f=image
                    "tileSize": 256

                }, 'layout': { 'visibility': hazardous },
            });

        });

        map.on('load', function () {
            map.addLayer({
                "id": "Wildfire",
                "type": "circle",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "geojson",
                    "data": 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/USA_Wildfires_v1/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='//'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='


                }, 'layout': { 'visibility': wildfire_p },
                'paint': {
                    'circle-radius': 5,
                    'circle-color': 'rgba(247, 12, 12, 0.4)'
                    //'circle-outline-color': 'rgba(4, 0, 0, 1)'
                }
            });




        });

        map.on('click', 'Wildfire', function (e) {
            var Day = new Date(e.features[0].properties.FireDiscoveryDateTime);
            var Day1 = Day.toUTCString();

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('<h3>' + 'IncidentName: ' + e.features[0].properties.IncidentName + '</h3><p>' + 'Date: ' + Day1 + '<br>' + 'Daily Acres Affected: ' + Math.round(e.features[0].properties.DailyAcres) + '</p>')
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on('mouseenter', 'Wildfire', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Wildfire', function () {
            map.getCanvas().style.cursor = '';
        });

        map.on('load', function () {
            map.addLayer({
                "id": "Wildfire Perimeter",
                "type": "fill",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "geojson",
                    "data": 'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/CY_WildlandFire_Perimeters_ToDate/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='

                }, 'layout': { 'visibility': wildfireper },
                'paint': {
                    'fill-color': 'rgba(247, 12, 12, 0.4)',
                    'fill-opacity': 0.5,
                    'fill-outline-color': 'rgba(148, 7, 7, 0.4)'
                    //'circle-outline-color': 'rgba(4, 0, 0, 1)'
                }
            });




        });

        map.on('click', 'Wildfire Perimeter', function (e) {
            var Day = new Date(e.features[0].properties.irwin_FireDiscoveryDateTime);
            var Day1 = Day.toUTCString();

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('<h3>' + 'IncidentName: ' + e.features[0].properties.poly_IncidentName + '</h3><p>' + 'Date: ' + Day1 + '<br>' + 'Daily Acres Affected: ' + Math.round(e.features[0].properties.irwin_DailyAcres) + '</p>')
                .addTo(map);
        });

        // Change the cursor to a pointer when the mouse is over the states layer.
        map.on('mouseenter', 'Wildfire Perimeter', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Wildfire Perimeter', function () {
            map.getCanvas().style.cursor = '';
        });




        map.on('load', function () {

            map.addSource('HistTorPath2019shape-5sozpv', {
                type: 'vector',
                url: 'mapbox://nevnd.4gf3vfwd' //fxhawk.b7tr8njd'
            });
            map.addLayer({
                "id": "Tornados - Historical",
                "type": "line",
                "source": "HistTorPath2019shape-5sozpv",
                "source-layer": "HistTorPath2019shape-5sozpv",
                "layout": {
                    "visibility": tornadoes
                },
                "paint": {
                    "line-color": "hsl(275, 71%, 60%)",
                    "line-opacity": 0.67,
                    "line-width": 5
                },

            });
        })
        map.on('load', function () {

            map.addSource('queryearthquakes-7gq3ih', {
                type: 'vector',
                url: 'mapbox://nevnd.bv5sflxt' //fxhawk.cjhhzt5rk00hw2xro80s4lgdy-8ybmv'
            });
            map.addLayer({
                'id': 'Earthquake - Historical',
                "type": "circle",
                "source": "queryearthquakes-7gq3ih",
                "source-layer": "queryearthquakes-7gq3ih",
                "layout": {
                    "visibility": earthquake_h
                },
                "paint": {
                    "circle-color": "#f00",
                    "circle-radius": {
                        "property": "mag",
                        "base": 3, //1.8,
                        "stops": [
                            [{ zoom: 0, value: 4 }, 2],
                            [{ zoom: 0, value: 8 }, 15],
                            [{ zoom: 11, value: 4 }, 20],
                            [{ zoom: 11, value: 8 }, 900],
                            [{ zoom: 20, value: 4 }, 40],
                            [{ zoom: 20, value: 8 }, 2250]
                        ],

                    }, "circle-opacity": 0.7
                }
            });
        });

        map.on('load', function () {
            map.addLayer({
                "id": "Tornadoes - 24HR",
                "type": "circle",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "geojson",
                    "data": 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/NOAA_storm_reports_v1/FeatureServer/1/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='//'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='

                }, 'layout': { 'visibility': tornado_24 },
                'paint': {
                    'circle-radius': 5,
                    'circle-color': 'hsl(275, 71%, 60%)',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffffff'
                }
            });




        });

        map.on('load', function () {
            map.addLayer({
                "id": "Snowfall - 72HR",
                "type": "fill",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "geojson",
                    "data": 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/NDFD_SnowFall_v1/FeatureServer/2/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='//'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='

                }, 'layout': { 'visibility': snowfall_72 },
                'paint': {
                    'fill-color': 'hsl(260, 96%, 49%)',
                    'fill-opacity': 0.5
                    //'circle-outline-color': 'white'
                    //'circle-outline-color': 'rgba(4, 0, 0, 1)'
                }
            });

            map.on('load', function () {
                map.addLayer({
                    "id": "US Temp 6-10 Day",
                    "type": "raster",
                    "minzoom": 0,
                    "maxzoom": 22,
                    "source": {
                        "type": "raster",
                        "tiles": ['https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Climate_Outlooks/cpc_6_10_day_outlk/MapServer/export?dpi=96&transparent=true&format=png32&layers=show:layers=0&bbox=%7Bbbox-epsg-3857%7D&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image']

                    }, 'layout': { 'visibility': ustempout },
                });

            });




        });

        //Popups

        map.on('click', function (e) {


            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Tornados - Historical'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];
            //var TorDay = new Date(feature.properties.UTC_DATETIME);
            //var TorDay1 = TorDay.toUTCString();
            var slong = parseFloat(feature.properties.slon).toFixed(2);
            var slat = parseFloat(feature.properties.slat).toFixed(2);
            var torcoordinates = new mapboxgl.LngLat(slong, slat);
            console.log(torcoordinates.lng);

            if (isNaN(torcoordinates)) {
                console.log('Coordinates are not numbers')
            } else {
                var popup = new mapboxgl.Popup({ offset: [0, -15] })
                    .setLngLat(torcoordinates) //.setLngLat(feature.geometry.coordinates)
                    .setHTML('<h3>' + 'Tornado ID: ' + feature.properties.om + '</h3><p>' + '<br>' + 'State: ' + feature.properties.st + '<br>' + 'Date: ' + feature.properties.date + '<br>' + ' Magnitude: ' + feature.properties.mag + '</p>')
                    .setLngLat(feature.geometry.coordinates)
                    .addTo(map);
            }
        });

        map.on('click', function (e) {


            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Tornadoes - 24HR'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];
            var TorDay = new Date(feature.properties.UTC_DATETIME);
            var TorDay1 = TorDay.toUTCString();

            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.COUNTY + ', ' + feature.properties.STATE + '</h3><p>' + '<br>' + 'Location: ' + feature.properties.LOCATION + '<br>' + 'Date: ' + TorDay1 + '<br>' + ' Comments: ' + feature.properties.COMMENTS + '</p>')
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);

        });

        map.on('click', function (e) {


            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Earthquake - Historical'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];

            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.place + '</h3><p>' + 'Magnitude: ' + feature.properties.mag + '<br>' + 'Year: ' + feature.properties.Year + ' Month: ' + feature.properties.Month + ' Day: ' + feature.properties.Day + '</p>')
                .setLngLat(feature.geometry.coordinates)
                .addTo(map);

        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'Earthquake - Historical', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Earthquake - Historical', function () {
            map.getCanvas().style.cursor = '';
        });

        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'Earthquake - Historical', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Earthquake - Historical', function () {
            map.getCanvas().style.cursor = '';
        });


        map.on('load', function () {
            map.addSource('Properties2', {
                type: 'vector',
                url: 'mapbox://fxhawk.cjhkjvk4202mi6mt2y4lkns44-7mdr6'
            });
            map.addLayer({
                'id': 'Properties2',
                'type': 'symbol',
                'source': 'Properties2',
                'source-layer': 'Properties2',
                "layout": {
                    "visibility": property,
                    "text-field": [
                        "to-string",
                        [
                            "get",
                            "Office"
                        ]
                    ],
                    "text-size": 12,
                    "icon-image": "town-hall-11",
                    "text-anchor": "top-left",
                    "icon-size": 1
                },
                "paint": {
                    "text-color": '#1d82ac', //'#261d1d', //'#f70707',//"rgb(152, 153, 29)",
                    "icon-opacity": 1,
                    "text-halo-color": '#02415c', //"#fff",
                    "text-halo-width": 0.2
                }
            });
        })

        map.on('click', function (e) {
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Properties2'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];
            var url = 'http://www.ventivtech.com'
            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + feature.properties.Office + '</h3>' + 'Street: ' + feature.properties.Street + '<br>' + 'Insured Value: ' + feature.properties.Insured_Value + '</p>')
                .setLngLat(feature.geometry.coordinates)

                .addTo(map);
        });
        // Change the cursor to a pointer when the mouse is over the places layer.
        map.on('mouseenter', 'Properties2', function () {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'Properties2', function () {
            map.getCanvas().style.cursor = '';
        });

        document.getElementById('slider').addEventListener('input', function (e) {
            var Year = parseInt(e.target.value);
            // update the map

            map.setFilter('Earthquake - Historical', ['==', ['number', ['get', 'Year']], Year]);
            map.setFilter('Tornados - Historical', ['==', ['number', ['get', 'yr']], Year]);



            // update text in the UI
            document.getElementById('active-Year').innerText = Year;
        });


        // Add geolocate control to the map.
        var nav = new mapboxgl.GeolocateControl();
        map.addControl(nav, 'bottom-right');

        map.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }));

        //Zoom and Fit map to points
        geojsonFeature.features.forEach(function (feature) {
            bounds.extend(feature.geometry.coordinates);
        });

        map.fitBounds(bounds, {
            padding: 60

        });

        var draw = new MapboxDraw({
            displayControlsDefault: true,
            controls: {
                polygon: true,
                trash: true
            }
        });
        map.addControl(draw);

        // map.on('draw.create', updateArea);
        map.on('draw.delete', updateArea);
        map.on('draw.update', updateArea);
        map.on('draw.combine', updateArea);



        map.on('draw.create', function (e) {
            var userPolygon = e.features[0];


            // generate bounding box from polygon the user drew
            var polygonBoundingBox = turf.bbox(userPolygon);

            var southWest = [polygonBoundingBox[0], polygonBoundingBox[1]];
            var northEast = [polygonBoundingBox[2], polygonBoundingBox[3]];

            var northEastPointPixel = map.project(northEast);
            var southWestPointPixel = map.project(southWest);

            var features = map.queryRenderedFeatures([southWestPointPixel, northEastPointPixel], { layers: ['points'] });



            window.aggr = features.reduce(function (memo, feature, Paid3) {

                if (!(undefined === turf.intersect(feature, userPolygon))) {
                    // only add the property, if the feature intersects with the polygon drawn by the user

                    var Paid3 = feature.properties.total_paid3;

                    console.log("2****************")

                    console.log(Paid3)

                }
                return memo + Paid3;
            }, 0);

            console.log(aggr)


            updateArea()

        });



        map.on('draw.update', function (e) {
            var userPolygon = e.features[0];


            // generate bounding box from polygon the user drew
            var polygonBoundingBox = turf.bbox(userPolygon);

            var southWest = [polygonBoundingBox[0], polygonBoundingBox[1]];
            var northEast = [polygonBoundingBox[2], polygonBoundingBox[3]];

            var northEastPointPixel = map.project(northEast);
            var southWestPointPixel = map.project(southWest);

            var features = map.queryRenderedFeatures([southWestPointPixel, northEastPointPixel], { layers: ['points'] });



            window.aggr = features.reduce(function (memo, feature, Paid3) {

                if (!(undefined === turf.intersect(feature, userPolygon))) {
                    // only add the property, if the feature intersects with the polygon drawn by the user

                    var Paid3 = feature.properties.total_paid3;

                    console.log("2****************")

                    console.log(Paid3)

                }
                return memo + Paid3;
            }, 0);

            console.log(aggr)
            console.log(e)

            updateArea()

        });




        function updateArea(e) {

            var data = draw.getAll();
            var options2 = { style: 'currency', currency: 'USD' };
            var numberFormat2 = new Intl.NumberFormat('en-US', options2);
            console.log(data)

            var answer = document.getElementById('calculated-area');
            if (data.features.length > 0) {

                answer.innerHTML = '<p><strong>' + 'Insured Value: ' + window.aggr.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</strong></p>';
            } else {
                answer.innerHTML = '';
                if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
            }
        }




    };


    BasicControl.prototype.setData = function (oControlHost, oDataStore) {
        console.log('2 Set Data')
        //Default GeoJSON
        geojsonFeature = {
            "type": "FeatureCollection",
            "features": []
        }

        var iRowCount = oDataStore.rowCount;

        for (var iRow = 0; iRow < iRowCount; iRow++) {

            var feature = {}
            feature['type'] = 'Feature'
            feature['geometry'] = {
                'type': 'Point',
                'coordinates': [parseFloat(oDataStore.getCellValue(iRow, 1)), parseFloat(oDataStore.getCellValue(iRow, 2))],
            }
            feature['properties'] = { 'name': oDataStore.getCellValue(iRow, 0), 'total_paid3': oDataStore.getCellValue(iRow, 21), 'cause': oDataStore.getCellValue(iRow, 18), 'customer': customer = oDataStore.getCellValue(iRow, 19), 'record_link': oDataStore.getCellValue(iRow, 20) }
            earth = oDataStore.getCellValue(iRow, 3)
            radar = oDataStore.getCellValue(iRow, 4)
            MyStyle = oDataStore.getCellValue(iRow, 5)
            property = oDataStore.getCellValue(iRow, 6)
            lightning = oDataStore.getCellValue(iRow, 7)
            hurricane = oDataStore.getCellValue(iRow, 8)
            hazardous = oDataStore.getCellValue(iRow, 9)
            earthquake_h = oDataStore.getCellValue(iRow, 10)
            tornadoes = oDataStore.getCellValue(iRow, 11)
            claims = oDataStore.getCellValue(iRow, 12)
            claim_info = oDataStore.getCellValue(iRow, 13)
            wildfire_p = oDataStore.getCellValue(iRow, 14)
            //claims_count = oDataStore.getCellValue(iRow, 18)
            wildfireper = oDataStore.getCellValue(iRow, 15)
            tornado_24 = oDataStore.getCellValue(iRow, 16)
            snowfall_72 = oDataStore.getCellValue(iRow, 17)


            geojsonFeature['features'].push(feature)
            map.setStyle('mapbox://styles/mapbox/' + MyStyle);
        }

        console.log('test2')
        map.on('click', 'points', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var Paid = e.features[0].properties.total_paid3;
            var Claim_N = e.features[0].properties.name;
            var Street_N = e.features[0].properties.street;
            var City_N = e.features[0].properties.city;

            var options2 = { style: 'currency', currency: 'USD' };
            var numberFormat2 = new Intl.NumberFormat('en-US', options2);
            var paidr = Math.round(Paid * Math.pow(10, 2)) / Math.pow(10, 2).toFixed(2);
            var paidf = paidr.toLocaleString();

            var total_claims = e.features[0].properties.claims_count;

            var hyperlink = e.features[0].properties.record_link;

            var cause = e.features[0].properties.cause;
            var customer = e.features[0].properties.customer;


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('<h3>' + 'Claim: ' + Claim_N + '</h3>' + 'Cause: ' + cause + '<br>' + 'Customer: ' + customer + '<br>' + 'Total Paid: ' + paidf + '<br>' + '<a href=' + hyperlink/*e.features[0].properties.RECORD_LINK.value*/ + ' target="_blank">' + 'View Details' + '</a>' + '</p>')
                .addTo(map);
        });




    };


    return BasicControl;
});// JavaScript source code// JavaScript source code// JavaScript source code// JavaScript source code
