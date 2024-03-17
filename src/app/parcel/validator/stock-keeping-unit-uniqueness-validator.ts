import {ParcelService} from "../service/parcel.service";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {catchError, map, Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StockKeepingUnitUniquenessValidator implements AsyncValidator {

  constructor(private parcelService: ParcelService) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.parcelService.isStockKeepingUnitUnique(control.value).pipe(
      map((isUnique) => {
        return (!isUnique ? {unique: true} : null)
      }),
      catchError(() => of(null)),
    );
  }

}
