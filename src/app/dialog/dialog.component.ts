import { Component, Inject, OnInit } from "@angular/core";
import AerisWeather from "@aerisweather/javascript-sdk";
import { DialogData } from "../shared/dialog-data";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { UserLocationService } from "../services/user-location.service";
import {} from "googlemaps";
import { HttpService } from "../http.service";
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from "@angular/platform-browser-dynamic";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styles: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  markers;
  lat;
  lng;
  currUser = "You Are Here!";
  gmap;

  radarLayer;

  radar;
  aeris = new AerisWeather(
    `cpmoBx8KS2aW4va7zoDze`,
    `xADMSwJQCB4Ay8Fw21B0l2bCIn3kfjIcN6T9f3xG`
  );

  constructor(
    private geo: UserLocationService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<DialogComponent>,
    private http: HttpService
  ) {}

  close() {
    this.dialogRef.close(true);
  }

  ngOnInit() {
    console.log("init location", this.geo.currLat, this.geo.currLng);
    this.lat = this.geo.currLat;
    this.lng = this.geo.currLng;

    this.aeris.views().then(views => {
      console.log("!!!!!!!", views);
      const map = new views.InteractiveMap(
        document.getElementById("radar-map"),
        {
          center: {
            lat: 29.977,
            lon: -90.08
          },
          // zoom: 4,
          strategy: "google",
          accessToken: "AIzaSyAbJOa8X-CeBSal5VFPQPT1Qkhd-XTnf0s", //GOOGLE
          layers: "radar,alerts",
          timeline: {
            from: -6 * 3600,
            to: 0
          }
        }
      );
      console.log(map);
      // this.radarLayer = map;
      // var layers = new google.maps.ImageMapType({
      //   getTileUrl: function(coord, zoom) {
      //     return [
      //       `https://maps.aerisapi.com/cpmoBx8KS2aW4va7zoDze_xADMSwJQCB4Ay8Fw21B0l2bCIn3kfjIcN6T9f3xG/flat,radar,admin/`,
      //       zoom,
      //       "/",
      //       coord.x,
      //       "/",
      //       coord.y,
      //       "/current.png"
      //     ].join("");
      //     // need to move these API keys to be in an env file, there's one for id and pass/secret
      //   },
      //   tileSize: new google.maps.Size(256, 256)
      // });
      // map.overlayMapTypes.push(layers);
      this.gmap = map;
    });
  }
}
