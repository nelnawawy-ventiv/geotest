define(["https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.js", "jquery", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.min.js", "https://api.mapbox.com/mapbox.js/plugins/turf/v3.0.11/turf.min.js", "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.js", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js",/*"https://code.jquery.com/ui/1.12.1/jquery-ui.min.js",*/ "text! https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css"], function (mapboxgl, jQuery, MapboxGeocoder, turf, MapboxDraw, slider1, slider2, Info) {
    "use strict";
    var map = '',
        bounds = '',
        geojsonFeature = {};
    var earth = 'none';
    var radar = 'none';
    var MyStyle = 'dark-v10';
    var property = 'visible';
    var lightning = 'none';
    var hurricane = 'none';
    var flooding = 'none';
    var earth_h = 'none';
    var tornadoes = 'none';
    var claims = 'none';
    var claim_info = '';
    var earthquake_h = 'none';
    var total_paid = 0;
    var wildfire_p = 'none';

    function BasicControl() { };

    BasicControl.prototype.initialize = function (oControlHost, fnDoneInitializing, oDataStore) {

        document.getElementById("v30_ValueComboBox").addEventListener("change", myFunction);

        function myFunction() {

            var visibility = map.getLayoutProperty('Properties2', 'visibility');

            if (sessionStorage.getItem('visibility') === 'visible') {
                map.setLayoutProperty('Properties2', 'visibility', 'none');
                sessionStorage.setItem('visibility', 'none');
                //document.getElementById("v30_ValueComboBox").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Properties2', 'visibility', 'visible');
                sessionStorage.setItem('visibility', 'visible');
                //document.getElementById("v30_ValueComboBox").style.backgroundColor = '#EFE013';
            }
        }

        document.getElementById("v42_ValueComboBox").addEventListener("change", myFunction2);

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

        document.getElementById("v54_ValueComboBox").addEventListener("change", myFunction3);

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
        document.getElementById("v66_ValueComboBox").addEventListener("change", myFunction4);

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

        document.getElementById("v78_ValueComboBox").addEventListener("change", myFunction5);

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

        document.getElementById("v90_ValueComboBox").addEventListener("change", myFunction6);

        function myFunction6() {

            var visibility = map.getLayoutProperty('Flood Prone Areas', 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty('Flood Prone Areas', 'visibility', 'none');
                //document.getElementById("v90_MultiSelectList").style.backgroundColor = '#9BA3A5';

            } else {

                map.setLayoutProperty('Flood Prone Areas', 'visibility', 'visible');
                //document.getElementById("v90_MultiSelectList").style.backgroundColor = '#EFE013';
            }

        }

        document.getElementById("v102_ValueComboBox").addEventListener("change", myFunction7);

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

        document.getElementById("v114_ValueComboBox").addEventListener("change", myFunction8);

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

        document.getElementById("v126_ValueComboBox").addEventListener("change", myFunction9);

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

        document.getElementById("v138_ValueComboBox").addEventListener("change", myFunction10);

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

        jQuery("head link[rel='stylesheet']").last().after("<link href='https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css' rel='stylesheet' />");
        //jQuery("head link[rel='stylesheet']").last().after("<link href='https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css' />");
        jQuery("body").after("<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.0/mapbox-gl-geocoder.css' type='text/css' />");
        jQuery("body").prepend("<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.css' type='text/css'/>");
        jQuery("tbody").after("<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css' rel='stylesheet' />");
        jQuery("head link[rel='stylesheet']").last().after("<link href='https://cdn.jsdelivr.net/gh/nelnawawy-ventiv/geotest/Demobase7.css' type='text/css' />");

        //jQuery("td style").prepend("<div id='map'></div><div class='calculation-box'><p>Draw a polygon using the draw tools.</p><div id='calculated-area'></div></div>");
        var mapContainer = oControlHost.container.id;

        //*** Step 2a make some minor adjustments to default map */
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnhoYXdrIiwiYSI6ImNqaDZqYmVsajFwb3kycWs0dzM5aDFxbXgifQ.DcqavEFQJWPJ8eUAGLbK_A'; //Make sure to add Map Token Key
        map = new mapboxgl.Map({
            container: mapContainer,
            style: 'mapbox://styles/mapbox/dark-v10',
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
        jQuery('body .mapboxgl-control-container').append('<div id=' + 'console' + '>' + '<div>' + '<div class=' + 'session' + ' ' + 'id=' + 'sliderbar' + ' ' + '>' + ' ' + '<p>' + '<font color=' + "#efbf13" + '>' + 'Historical - Year: ' + '<label id=' + 'active-Year' + '>' + '2013' + '</label>' + '</font>' +
            '<input id=' + 'slider' + ' ' + 'class=' + 'row' + ' ' + 'type=' + 'range' + ' ' + 'min=' + '2013' + ' ' + 'max=' + '2019' + ' ' + 'step=' + '1' + ' ' + 'value=' + '2013' + '/>' + '</p>' + '</div>');
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

                    }, "circle-opacity": 0.7
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
                            'https://utility.arcgis.com/usrsvcs/servers/debeada03cc845b3a47bd77ef619f8ef/rest/services/Europe/Radar_Europe_Latest/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'
                            //'https://tile.openweathermap.org/map/precipitation_new/6/50/7.png?appid=9fc2072c0d48770909bd6310b1e96aa9'
                            //'https://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WmsServer?service=WMS&request=GetMap&version=1.3.0&layers=1&styles=&format=image/png&transparent=true&height=256&width=256&crs=EPSG:3857&bbox={bbox-epsg-3857}&time=' + timeBlock
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
                    "circle-color": "#efbf13"
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
                "id": "Flood Prone Areas",
                "type": "raster",
                "minzoom": 0,
                "maxzoom": 22,
                "source": {
                    "type": "raster",
                    "tiles": ['https://water.discomap.eea.europa.eu/arcgis/rest/services/Flood/Potential_flood_prone_area/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'],
                    // https://nowcoast.noaa.gov/arcgis/rest/services/nowcoast/wwa_meteocean_tropicalcyclones_trackintensityfcsts_time/MapServer/export?dpi=96&transparent=true&format=png8&bbox=-19257827.773674857%2C-287473.82805563323%2C-8679055.928092321%2C8087387.216363874&bboxSR=102100&imageSR=102100&size=768%2C608&f=image
                    "tileSize": 256

                }, 'layout': { 'visibility': flooding },
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
                    "data": 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/MODIS_Thermal_v1/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='
                    //"tiles": [
                        //'https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/de5657f1c6c0c8d26e629bbefbaeeceb/fires_modis_24/?REQUEST=GetMap&WIDTH=256&HEIGHT=256&BBOX=-180,-90,180,90'],
                   // "tileSize": 256
                        //'https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/de5657f1c6c0c8d26e629bbefbaeeceb/?REQUEST=GetMap&layers=fires_modis_24,fires_viirs_24&WIDTH=1024&HEIGHT=512&BBOX=-180,-90,180,90&symbols=triangle,triangle&colors=240+40+40,250+200+50&size=5,2&version=1.1.1'],
                    //'https://firms2.modaps.eosdis.nasa.gov/mapserver/wfs/Europe/YourMapKey/?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAME=ms:fires_modis_24hrs&STARTINDEX=0&COUNT=1000&SRSNAME=urn:ogc:def:crs:EPSG::3857&BBOX=-90,-180,90,180,urn:ogc:def:crs:EPSG::4326&outputformat=geojson'
                        //'https://firms.modaps.eosdis.nasa.gov/mapserver/wms/fires/de5657f1c6c0c8d26e629bbefbaeeceb/?REQUEST=GetMap&layers=fires_modis_24,fires_viirs_24&WIDTH=1024&HEIGHT=512&BBOX=-180,-90,180,90&symbols=triangle,triangle&colors=240+40+40,250+200+50&size=5,2&version=1.1.1'],
                        //'https://gis1.servirglobal.net/arcgis/rest/services/Global/MODIS_Fire_1DAY/MapServer/export?bbox=-238.88890599796747%2C9.422347384996819%2C242.92900609562372%2C136.58002570311996&bboxSR=EPSG%3A3857&layers=&layerDefs=&size=&imageSR=EPSG%3A3857&format=png&transparent=true&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&&size=256,256&f=image'],
                        //'https://gis1.servirglobal.net/arcgis/rest/services/Global/MODIS_Fire_1DAY/MapServer/export?bbox=-238.88890599796747%2C9.422347384996819%2C242.92900609562372%2C136.58002570311996&bboxSR=&layers=&layerDefs=&size=&imageSR=&format=png&transparent=false&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&f=image'],
                        //'https://gis1.servirglobal.net/arcgis/rest/services/Global/MODIS_Fire_1DAY/MapServer/export?bbox=-238.88890599796747%2C9.422347384996819%2C242.92900609562372%2C136.58002570311996&bboxSR=&layers=&layerDefs=&size=&imageSR=&format=png&transparent=false&dpi=&time=&layerTimeOptions=&dynamicLayers=&gdbVersion=&mapScale=&rotation=&f=image'],
                        //'https://gis1.servirglobal.net/arcgis/rest/services/Global/MODIS_Fire_1DAY/MapServer/export?dpi=96&transparent=true&format=png32&layers=show%3A0&bbox={bbox-epsg-3857}&bboxSR=EPSG:3857&imageSR=EPSG:3857&size=256,256&f=image'],
                    //"data": 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/ArcGIS/rest/services/USA_Wildfires_v1/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='//'https://services3.arcgis.com/T4QMspbfLg3qTGWY/arcgis/rest/services/Public_Wildfire_Perimeters_View/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token='
                    //"tileSize": 256

                }, 'layout': { 'visibility': wildfire_p },
                'paint': {
                    'circle-radius': 5,
                    'circle-color': 'rgba(255, 112, 3, 0.9)'
                    //'circle-outline-color': 'rgba(4, 0, 0, 1)'
                }
            });




        });

        map.on('click', /*'Wildfire', */function (e) {
            /*var Day = new Date(e.features[0].properties.ACQ_DATE);
            var Day1 = Day.toUTCString();

            new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setHTML('<h3>' + 'Confidence (%): ' + e.features[0].properties.CONFIDENCE + '</h3><p>' + 'Date: ' + e.features[0].properties.ACQ_DATE + '<br>' + '</p>')
                .addTo(map);*/
            var features = map.queryRenderedFeatures(e.point, {
                layers: ['Wildfire'] // replace this with the name of the layer
            });

            if (!features.length) {
                return;
            }

            var feature = features[0];

            var popup = new mapboxgl.Popup({ offset: [0, -15] })
                .setLngLat(feature.geometry.coordinates)
                .setHTML('<h3>' + 'Confidence (%): ' + feature.properties.CONFIDENCE + '</h3><p>' + 'Date: ' + feature.properties.ACQ_DATE + '<br>' + '</p>') //.setHTML('<h3>' + feature.properties.place + '</h3><p>' + 'Magnitude: ' + feature.properties.mag + '<br>' + 'Year: ' + feature.properties.Year + ' Month: ' + feature.properties.Month + ' Day: ' + feature.properties.Day + '</p>')
                .setLngLat(feature.geometry.coordinates)
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

            map.addSource('torn-9u8vfn', {
                type: 'vector',
                url: 'mapbox://fxhawk.b7tr8njd'
            });
            map.addLayer({
                "id": "Tornados - Historical",
                "type": "line",
                "source": "torn-9u8vfn",
                "source-layer": "torn-9u8vfn",
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

            map.addSource('Earthquake.geojson', {
                type: 'vector',
                url: 'mapbox://fxhawk.cjhhzt5rk00hw2xro80s4lgdy-8ybmv'
            });
            map.addLayer({
                'id': 'Earthquake - Historical',
                "type": "circle",
                "source": "Earthquake.geojson",
                "source-layer": "Earthquake.geojson",
                "layout": {
                    "visibility": earthquake_h
                },
                "paint": {
                    "circle-color": "#f00",
                    "circle-radius": {
                        "property": "mag",
                        "base": 1.8,
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

        //Popups
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
                    "text-color": "rgb(152, 153, 29)", //(187,189,11)", //"rgb(234, 236, 24)",
                    "icon-opacity": 0.8
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
                .setHTML('<h3>' + feature.properties.Office + '</h3>' + 'Street: ' + feature.properties.Street + '<br>' + 'Insured Value: €' + feature.properties.Value + '</p>')
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

        var nav2 = new mapboxgl.NavigationControl();
        map.addControl(nav2, 'bottom-left');

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
            var options2 = { style: 'currency', currency: 'EUR' };
            var numberFormat2 = new Intl.NumberFormat('en-GB', options2);
            console.log(data)

            var answer = document.getElementById('calculated-area');
            if (data.features.length > 0) {

                answer.innerHTML = '<p><strong>' + 'Total Paid: ' + window.aggr.toLocaleString('en-GB', { style: 'currency', currency: 'EUR' }) + '</strong></p>';
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
            feature['properties'] = { 'name': oDataStore.getCellValue(iRow, 0), 'total_paid3': oDataStore.getCellValue(iRow, 15) }
            earth = oDataStore.getCellValue(iRow, 3)
            radar = oDataStore.getCellValue(iRow, 4)
            MyStyle = oDataStore.getCellValue(iRow, 5)
            property = oDataStore.getCellValue(iRow, 6)
            lightning = oDataStore.getCellValue(iRow, 7)
            hurricane = oDataStore.getCellValue(iRow, 8)
            flooding = oDataStore.getCellValue(iRow, 9)
            earthquake_h = oDataStore.getCellValue(iRow, 10)
            tornadoes = oDataStore.getCellValue(iRow, 11)
            claims = oDataStore.getCellValue(iRow, 12)
            claim_info = oDataStore.getCellValue(iRow, 13)
            wildfire_p = oDataStore.getCellValue(iRow, 14)



            geojsonFeature['features'].push(feature)
            map.setStyle('mapbox://styles/mapbox/' + MyStyle);
        }

        console.log('test2')
        map.on('click', 'points', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var Paid = e.features[0].properties.total_paid3;
            var Claim_N = e.features[0].properties.name;

            var options2 = { style: 'currency', currency: 'EUR' };
            var numberFormat2 = new Intl.NumberFormat('en-GB', options2);


            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML('<p><strong>' + 'Claim Number: ' + Claim_N + '</strong></p>' + '<br><strong>' + 'Total Paid: ' + numberFormat2.format(Paid) + '</strong></p>')
                .addTo(map);
        });




    };


    return BasicControl;
});// JavaScript source code// JavaScript source code// JavaScript source code// JavaScript source code// JavaScript source code
