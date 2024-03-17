import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-parcel-table-filter',
  templateUrl: './parcel-table-filter.component.html',
  styleUrls: ['./parcel-table-filter.component.scss']
})
export class ParcelTableFilterComponent {
  @Output() applyFilter = new EventEmitter<any>();
  filterForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.filterForm = this.fb.group({
      description: [''],
      country: [''],
    });
  }

  onApplyFilter() {
    this.applyFilter.emit(this.filterForm.value);
  }

}
