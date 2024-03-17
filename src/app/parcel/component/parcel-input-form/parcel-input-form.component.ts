import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ParcelService} from "../../service/parcel.service";
import {StockKeepingUnitUniquenessValidator} from "../../validator/stock-keeping-unit-uniqueness-validator";

@Component({
  selector: 'app-parcel-input-form',
  templateUrl: './parcel-input-form.component.html',
  styleUrls: ['./parcel-input-form.component.scss']
})
export class ParcelInputFormComponent {
  parcelForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private stockKeepingUnitUniquenessValidator: StockKeepingUnitUniquenessValidator,
              private parcelService: ParcelService) {
  }

  ngOnInit() {
    this.parcelForm = this.fb.group({
      stockKeepingUnit: ['', {
        validators: [Validators.required],
        asyncValidators: [
          this.stockKeepingUnitUniquenessValidator.validate.bind(this.stockKeepingUnitUniquenessValidator),
        ],
        updateOn: 'blur'
      }],
      description: ['', Validators.required],
      street: ['', Validators.required],
      town: ['', Validators.required],
      country: ['', Validators.required],
      deliveryDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.parcelForm.valid) {
      this.parcelService.addParcel(this.parcelForm.value).subscribe({
        next: () => this.parcelForm.reset(),
        error: err => console.error(err)
      });
    } else {
      this.parcelForm.markAllAsTouched();
    }
  }
}
