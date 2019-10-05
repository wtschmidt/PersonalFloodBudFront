import { Component, OnInit } from "@angular/core";
import { HttpService } from './http.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  title = "flood";

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getRainfall().subscribe(data => {
        console.log(data + ' is the rainfall so far today');
        this.http.rainfall = data;

  })
}
}
