import {forwardRef, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ParcelPageComponent} from './parcel/page/parcel-page.component';
import {HttpClientModule} from "@angular/common/http";
import {NG_ASYNC_VALIDATORS, ReactiveFormsModule} from "@angular/forms";
import {StockKeepingUnitUniquenessValidator} from "./parcel/validator/stock-keeping-unit-uniqueness-validator";
import {ParcelInputFormComponent} from "./parcel/component/parcel-input-form/parcel-input-form.component";
import {ParcelTableComponent} from "./parcel/component/parcel-table/parcel-table.component";
import {ParcelTableFilterComponent} from "./parcel/component/parcel-table-filter/parcel-table-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    ParcelInputFormComponent,
    ParcelTableComponent,
    ParcelPageComponent,
    ParcelTableFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => StockKeepingUnitUniquenessValidator),
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
