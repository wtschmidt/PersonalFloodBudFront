import { Component, AfterViewInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-auto-complete-search',
  templateUrl: './auto-complete-search.component.html'
})
export class AutoCompleteSearchComponent implements AfterViewInit {

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext', {static: true}) addresstext: any;

  autocompleteInput: string;
  destLat: number;
  destLng: number;

  constructor() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'US' },
        types: ["address"]  // 'establishment' / 'address' / 'geocode'
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.destLat = place.geometry.location.lat();
      this.destLng = place.geometry.location.lng();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }
}
