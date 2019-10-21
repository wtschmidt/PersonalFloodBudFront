import { Component, OnInit } from "@angular/core";
import { MatStepperModule } from "@angular/material/stepper";
import { MatExpansionModule } from "@angular/material/expansion";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpService } from "../http.service";

@Component({
  selector: "app-add-contacts",
  templateUrl: "./add-contacts.component.html",
  styleUrls: ["./add-contacts.component.scss"]
})
export class AddContactsComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thidFormGroup: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpService) {}
  step = 0;
  name1;
  name2;
  name3;
  phone1;
  phone2;
  phone3;
  userId;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.http.getContacts(this.userId)
    .subscribe(res => {
      console.log('res', res);
      this.name1 = res[0].name === "undefined" ? 'name' : res[0].name;
      this.name2 = res[1].name === "undefined" ? 'name' : res[1].name;
      this.name3 = res[2].name === "undefined" ? 'name' : res[2].name;
      this.phone1 = res[0].phone_number === "undefined" ? 'phone' : res[0].phone_number;
      this.phone2 = res[1].phone_number === "undefined" ? 'phone' : res[1].phone_number;
      this.phone3 = res[2].phone_number === "undefined" ? 'phone' : res[2].phone_number;
    });
  }

  handleName1(event) {
    this.name1 = event.target.value;
  }

  handleName2(event) {
    this.name2 = event.target.value;
  }

  handleName3(event) {
    this.name3 = event.target.value;
  }

  handlePhone1(event) {
    this.phone1 = event.target.value;
  }

  handlePhone2(event) {
    this.phone2 = event.target.value;
  }

  handlePhone3(event) {
    this.phone3 = event.target.value;
  }

  submitContacts() {
    this.http.submitContacts({
      name1: this.name1,
      name2: this.name2,
      name3: this.name3,
      phone1: this.phone1,
      phone2: this.phone2,
      phone3: this.phone3,
      id: this.userId
    })
    .subscribe(res => {
      console.log(res);
    });
  }
}
