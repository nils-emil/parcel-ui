import {Component, Input} from '@angular/core';
import {Parcel} from "../../parcel.model";

@Component({
  selector: 'app-parcel-table',
  templateUrl: './parcel-table.component.html',
  styleUrls: ['./parcel-table.component.scss']
})
export class ParcelTableComponent {
  @Input() parcels!: Parcel[];
}
