import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private http: HttpClient) {}

  rainfall: object;
  dbReports;

  getMap(mapReqInfo) {
    return this.http.post("/getMap", { mapReqInfo });
  }

  submitReport(report) {
    console.log(report);
    return this.http.post("/submitReport", { report });
  }

  //this will submit a message to a user's emergency contacts
  submitMessage(message) {
    return this.http.post("/submitMessage", { message });
  }

  //this will get info about the current user
  getUserInfo() {
    return this.http.get("/userInfo");
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

  getAddress(latlng) {
    return this.http.get(`/reportLocation/:${latlng}`);
  }

  submitContacts(contacts) {
    return this.http.post("./submitContacts", { contacts });
  }
}
