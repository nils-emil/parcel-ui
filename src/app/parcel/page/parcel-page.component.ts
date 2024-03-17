import {Component} from '@angular/core';
import {Parcel} from "../parcel.model";
import {ParcelService} from "../service/parcel.service";

@Component({
  selector: 'app-parcel-page',
  templateUrl: './parcel-page.component.html',
  styleUrls: ['./parcel-page.component.scss']
})
export class ParcelPageComponent {

  parcels: Parcel[] = [];

  constructor(private parcelService: ParcelService) {
  }

  ngOnInit() {
    this.loadParcels({} as any);
  }

  loadParcels(queryParams: any) {
    this.parcelService.getParcels(queryParams).subscribe({
      next: parcels => this.parcels = parcels,
      error: err => console.error(err)
    });
  }

}
