import { Component, Inject, OnInit } from "@angular/core";
import AerisWeather from '@aerisweather/javascript-sdk';
import { DialogData } from "../shared/dialog-data";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { UserLocationService } from "../services/user-location.service";
import { } from "googlemaps";
import { HttpService } from '../http.service';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styles: ["./dialog.component.css"],
})
export class DialogComponent implements OnInit {
  markers;
  lat;
  lng;
  currUser = "You Are Here!";
  gmap;

    radarLayer;

  radar;
  aeris = new AerisWeather('cpmoBx8KS2aW4va7zoDze', 'xADMSwJQCB4Ay8Fw21B0l2bCIn3kfjIcN6T9f3xG');

  constructor(
    private geo: UserLocationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<DialogComponent>,
    private http: HttpService,
  ) { }

  close() {
    this.dialogRef.close(true);
  }

  ngOnInit() {
    console.log("init location", this.geo.currLat, this.geo.currLng);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;

    this.aeris.views()
    .then((views) => {
      console.log("!!!!!!!", views);
      const map = new views.InteractiveMap(document.getElementById('radar-map'), {
        center: {
          lat: 29.977,
          lon: -90.08,
        },
        // zoom: 4,
        strategy: 'google',
        accessToken: 'AIzaSyAbJOa8X-CeBSal5VFPQPT1Qkhd-XTnf0s', //GOOGLE
        layers: 'radar,alerts',
        timeline: {
          from: -6 * 3600,
          to: 0,
        },
      });
      console.log(map);
      // this.radarLayer = map;
      var layers = new google.maps.ImageMapType({
        getTileUrl: function(coord, zoom) {
            return ['https://maps.aerisapi.com/cpmoBx8KS2aW4va7zoDze_xADMSwJQCB4Ay8Fw21B0l2bCIn3kfjIcN6T9f3xG/flat,radar,admin/', zoom, '/', coord.x, '/', coord.y, '/current.png'].join('');
            // need to move these API keys to be in an env file, there's one for id and pass/secret
        },
        tileSize: new google.maps.Size(256, 256)
    });
    map.overlayMapTypes.push(layers);
    this.gmap = map;
    });
    
    // this.gmap = new google.maps.Map(document.getElementById('radar-map'), {
    //   center: { lat: this.lat, lng: this.lng },
    //   zoom: 7
    // });

    // this.radarLayer = new google.maps.ImageMapType({
    //   getTileUrl: function (coord, zoom) {
    //     return ['https://maps.aerisapi.com/cpmoBx8KS2aW4va7zoDze_xADMSwJQCB4Ay8Fw21B0l2bCIn3kfjIcN6T9f3xG/flat,radar,admin/', zoom, '/', coord.x, '/', coord.y, '/current.png'].join('');
    //   },
    //   tileSize: new google.maps.Size(256, 256)
    // });
    // this.gmap.overlayMapTypes.push(this.radarLayer);

    //   this.radarLayer = views;
    // });
    //   const map = new views.InteractiveMap(document.getElementById('map'), {
    //       center: {
    //         lat: 39.0,
    //         lon: -95.5,
    //       },
    //       zoom: 4,
    //       strategy: 'google',
    //       accessToken: 'GOOGLE_KEY',
    //       layers: 'radar,alerts',
    //       timeline: {
    //         from: -6 * 3600,
    //         to: 0,
    //       },
    //     });
    //   console.log(views);
    //   this.radarLayer = views;
  }
}

// geoJsonObject: Object = {
//   "type": "FeatureCollection",
//   "features": [
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "G",
//   "color": "blue",
//   "rank": "7",
//   "ascii": "71"
//   },
//   "geometry": {
//   "type": "Polygon",
//   "coordinates": [
//   [
//   [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
//   [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
//   [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
//   [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
//   [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
//   [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
//   [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
//   [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
//   ]
//   ]
//   }
//   },
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "o",
//   "color": "red",
//   "rank": "15",
//   "ascii": "111"
//   },
//   "geometry": {
//   "type": "Polygon",
//   "coordinates": [
//   [
//   [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
//   [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
//   [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
//   [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
//   ],
//   [
//   [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
//   [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
//   ]
//   ]
//   }
//   },
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "o",
//   "color": "yellow",
//   "rank": "15",
//   "ascii": "111"
//   },
//   "geometry": {
//   "type": "Polygon",
//   "coordinates": [
//   [
//   [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
//   [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
//   [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
//   [132.71, -25.64], [131.87, -25.76]
//   ],
//   [
//   [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
//   [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
//   ]
//   ]
//   }
//   },
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "g",
//   "color": "blue",
//   "rank": "7",
//   "ascii": "103"
//   },
//   "geometry": {
//   "type": "Polygon",
//   "coordinates": [
//   [
//   [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
//   [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
//   [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
//   [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
//   [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
//   [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
//   [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
//   ],
//   [
//   [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
//   [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
//   ]
//   ]
//   }
//   },
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "l",
//   "color": "green",
//   "rank": "12",
//   "ascii": "108"
//   },
//   "geometry": {
//   "type": "Polygon",
//   "coordinates": [
//   [
//   [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
//   ]
//   ]
//   }
//   },
//   {
//   "type": "Feature",
//   "properties": {
//   "letter": "e",
//   "color": "red",
//   "rank": "5",
//   "ascii": "101"
//   },

//   }
//   ]
// };