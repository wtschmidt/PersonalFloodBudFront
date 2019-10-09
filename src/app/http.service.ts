import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}
  rainfall: object;
  dbReports;

  submitReport(report) {
    console.log(report);
    return this.http.post("/submitReport", { report });
  }

  submitMessage(message) {
    return this.http.post("/submitMessage", { message });
  }

  getRoute() {
    return this.http.get("/route");
  }

  getRainfall() {
    return this.http.get("/rainfall");
  }

  getReports() {
    return this.http.get("/floodReports");
  }
}
