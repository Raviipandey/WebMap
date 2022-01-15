var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Landuse_1 = new ol.format.GeoJSON();
var features_Landuse_1 = format_Landuse_1.readFeatures(json_Landuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landuse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landuse_1.addFeatures(features_Landuse_1);
var lyr_Landuse_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Landuse_1, 
                style: style_Landuse_1,
                interactive: true,
                title: '<img src="styles/legend/Landuse_1.png" /> Landuse'
            });
var format_Rail_2 = new ol.format.GeoJSON();
var features_Rail_2 = format_Rail_2.readFeatures(json_Rail_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rail_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rail_2.addFeatures(features_Rail_2);
var lyr_Rail_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rail_2, 
                style: style_Rail_2,
                interactive: true,
                title: '<img src="styles/legend/Rail_2.png" /> Rail'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                interactive: true,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_WardBoundary_4 = new ol.format.GeoJSON();
var features_WardBoundary_4 = format_WardBoundary_4.readFeatures(json_WardBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WardBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WardBoundary_4.addFeatures(features_WardBoundary_4);
var lyr_WardBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WardBoundary_4, 
                style: style_WardBoundary_4,
                interactive: true,
                title: '<img src="styles/legend/WardBoundary_4.png" /> WardBoundary'
            });
var format_Municipal_Boundary_5 = new ol.format.GeoJSON();
var features_Municipal_Boundary_5 = format_Municipal_Boundary_5.readFeatures(json_Municipal_Boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipal_Boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipal_Boundary_5.addFeatures(features_Municipal_Boundary_5);
var lyr_Municipal_Boundary_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipal_Boundary_5, 
                style: style_Municipal_Boundary_5,
                interactive: true,
                title: '<img src="styles/legend/Municipal_Boundary_5.png" /> Municipal_Boundary'
            });
var format_WaterLvl_6 = new ol.format.GeoJSON();
var features_WaterLvl_6 = format_WaterLvl_6.readFeatures(json_WaterLvl_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLvl_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLvl_6.addFeatures(features_WaterLvl_6);
var lyr_WaterLvl_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLvl_6, 
                style: style_WaterLvl_6,
                interactive: true,
                title: '<img src="styles/legend/WaterLvl_6.png" /> WaterLvl'
            });
var format_WaterLvl4_7 = new ol.format.GeoJSON();
var features_WaterLvl4_7 = format_WaterLvl4_7.readFeatures(json_WaterLvl4_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLvl4_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLvl4_7.addFeatures(features_WaterLvl4_7);
var lyr_WaterLvl4_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLvl4_7, 
                style: style_WaterLvl4_7,
                interactive: true,
                title: '<img src="styles/legend/WaterLvl4_7.png" /> WaterLvl4'
            });
var format_WaterLvl1_8 = new ol.format.GeoJSON();
var features_WaterLvl1_8 = format_WaterLvl1_8.readFeatures(json_WaterLvl1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLvl1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLvl1_8.addFeatures(features_WaterLvl1_8);
var lyr_WaterLvl1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLvl1_8, 
                style: style_WaterLvl1_8,
                interactive: true,
                title: '<img src="styles/legend/WaterLvl1_8.png" /> WaterLvl1'
            });
var format_WaterLvl2_9 = new ol.format.GeoJSON();
var features_WaterLvl2_9 = format_WaterLvl2_9.readFeatures(json_WaterLvl2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLvl2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLvl2_9.addFeatures(features_WaterLvl2_9);
var lyr_WaterLvl2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLvl2_9, 
                style: style_WaterLvl2_9,
                interactive: true,
                title: '<img src="styles/legend/WaterLvl2_9.png" /> WaterLvl2'
            });
var format_WaterLvl3_10 = new ol.format.GeoJSON();
var features_WaterLvl3_10 = format_WaterLvl3_10.readFeatures(json_WaterLvl3_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterLvl3_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterLvl3_10.addFeatures(features_WaterLvl3_10);
var lyr_WaterLvl3_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WaterLvl3_10, 
                style: style_WaterLvl3_10,
                interactive: true,
                title: '<img src="styles/legend/WaterLvl3_10.png" /> WaterLvl3'
            });
var format_Zones_11 = new ol.format.GeoJSON();
var features_Zones_11 = format_Zones_11.readFeatures(json_Zones_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zones_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zones_11.addFeatures(features_Zones_11);
var lyr_Zones_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zones_11, 
                style: style_Zones_11,
                interactive: true,
                title: '<img src="styles/legend/Zones_11.png" /> Zones'
            });
var format_Water_12 = new ol.format.GeoJSON();
var features_Water_12 = format_Water_12.readFeatures(json_Water_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_12.addFeatures(features_Water_12);
var lyr_Water_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_12, 
                style: style_Water_12,
                interactive: true,
                title: '<img src="styles/legend/Water_12.png" /> Water'
            });
var format_Water_Landuse_13 = new ol.format.GeoJSON();
var features_Water_Landuse_13 = format_Water_Landuse_13.readFeatures(json_Water_Landuse_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Landuse_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Landuse_13.addFeatures(features_Water_Landuse_13);
var lyr_Water_Landuse_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Landuse_13, 
                style: style_Water_Landuse_13,
                interactive: true,
                title: '<img src="styles/legend/Water_Landuse_13.png" /> Water_Landuse'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Landuse_1.setVisible(true);lyr_Rail_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_WardBoundary_4.setVisible(true);lyr_Municipal_Boundary_5.setVisible(true);lyr_WaterLvl_6.setVisible(true);lyr_WaterLvl4_7.setVisible(true);lyr_WaterLvl1_8.setVisible(true);lyr_WaterLvl2_9.setVisible(true);lyr_WaterLvl3_10.setVisible(true);lyr_Zones_11.setVisible(true);lyr_Water_12.setVisible(true);lyr_Water_Landuse_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Landuse_1,lyr_Rail_2,lyr_Roads_3,lyr_WardBoundary_4,lyr_Municipal_Boundary_5,lyr_WaterLvl_6,lyr_WaterLvl4_7,lyr_WaterLvl1_8,lyr_WaterLvl2_9,lyr_WaterLvl3_10,lyr_Zones_11,lyr_Water_12,lyr_Water_Landuse_13];
lyr_Landuse_1.set('fieldAliases', {'level_3': 'level_3', 'Facility': 'Facility', 'Level_1': 'Level_1', 'Name_Surve': 'Name_Surve', 'Level_2': 'Level_2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Rail_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Code': 'Code', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Rail_ID': 'Rail_ID', 'Rail_Name': 'Rail_Name', 'Remarks': 'Remarks', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Roads_3.set('fieldAliases', {'Layer': 'Layer', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Level_3': 'Level_3', 'Name': 'Name', 'Cons_Mat': 'Cons_Mat', });
lyr_WardBoundary_4.set('fieldAliases', {'Name': 'Name', 'WardNumber': 'WardNumber', });
lyr_Municipal_Boundary_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WaterLvl_6.set('fieldAliases', {'id': 'id', 'Level': 'Level', });
lyr_WaterLvl4_7.set('fieldAliases', {'id': 'id', 'Level': 'Level', });
lyr_WaterLvl1_8.set('fieldAliases', {'id': 'id', 'Level': 'Level', });
lyr_WaterLvl2_9.set('fieldAliases', {'id': 'id', 'Level': 'Level', });
lyr_WaterLvl3_10.set('fieldAliases', {'id': 'id', 'Level': 'Level', });
lyr_Zones_11.set('fieldAliases', {'id': 'id', 'ZoneNo': 'ZoneNo', });
lyr_Water_12.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'level_3': 'level_3', 'Category': 'Category', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Water_Landuse_13.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID': 'OBJECTID', 'Layer': 'Layer', 'level_3': 'level_3', 'Category': 'Category', 'Level_1': 'Level_1', 'Level_2': 'Level_2', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Landuse_1.set('fieldImages', {'level_3': '', 'Facility': '', 'Level_1': '', 'Name_Surve': '', 'Level_2': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Rail_2.set('fieldImages', {'OBJECTID': '', 'Code': '', 'Level_1': '', 'Level_2': '', 'Rail_ID': '', 'Rail_Name': '', 'Remarks': '', 'SHAPE_Leng': '', });
lyr_Roads_3.set('fieldImages', {'Layer': '', 'Shape_Leng': '', 'Shape_Area': '', 'Level_1': '', 'Level_2': '', 'Level_3': '', 'Name': '', 'Cons_Mat': '', });
lyr_WardBoundary_4.set('fieldImages', {'Name': 'TextEdit', 'WardNumber': 'TextEdit', });
lyr_Municipal_Boundary_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WaterLvl_6.set('fieldImages', {'id': 'TextEdit', 'Level': 'TextEdit', });
lyr_WaterLvl4_7.set('fieldImages', {'id': 'TextEdit', 'Level': 'TextEdit', });
lyr_WaterLvl1_8.set('fieldImages', {'id': 'TextEdit', 'Level': 'TextEdit', });
lyr_WaterLvl2_9.set('fieldImages', {'id': 'TextEdit', 'Level': 'TextEdit', });
lyr_WaterLvl3_10.set('fieldImages', {'id': 'TextEdit', 'Level': 'TextEdit', });
lyr_Zones_11.set('fieldImages', {'id': 'TextEdit', 'ZoneNo': 'TextEdit', });
lyr_Water_12.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'level_3': 'TextEdit', 'Category': 'TextEdit', 'Level_1': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_Landuse_13.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'OBJECTID': 'TextEdit', 'Layer': 'TextEdit', 'level_3': 'TextEdit', 'Category': 'TextEdit', 'Level_1': 'TextEdit', 'Level_2': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Landuse_1.set('fieldLabels', {'level_3': 'no label', 'Facility': 'no label', 'Level_1': 'no label', 'Name_Surve': 'no label', 'Level_2': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Rail_2.set('fieldLabels', {'OBJECTID': 'no label', 'Code': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Rail_ID': 'no label', 'Rail_Name': 'no label', 'Remarks': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Roads_3.set('fieldLabels', {'Layer': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Level_3': 'no label', 'Name': 'no label', 'Cons_Mat': 'no label', });
lyr_WardBoundary_4.set('fieldLabels', {'Name': 'no label', 'WardNumber': 'no label', });
lyr_Municipal_Boundary_5.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WaterLvl_6.set('fieldLabels', {'id': 'no label', 'Level': 'no label', });
lyr_WaterLvl4_7.set('fieldLabels', {'id': 'no label', 'Level': 'no label', });
lyr_WaterLvl1_8.set('fieldLabels', {'id': 'no label', 'Level': 'no label', });
lyr_WaterLvl2_9.set('fieldLabels', {'id': 'no label', 'Level': 'no label', });
lyr_WaterLvl3_10.set('fieldLabels', {'id': 'no label', 'Level': 'no label', });
lyr_Zones_11.set('fieldLabels', {'id': 'no label', 'ZoneNo': 'no label', });
lyr_Water_12.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'Layer': 'no label', 'level_3': 'no label', 'Category': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Water_Landuse_13.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID': 'no label', 'Layer': 'no label', 'level_3': 'no label', 'Category': 'no label', 'Level_1': 'no label', 'Level_2': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Water_Landuse_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});