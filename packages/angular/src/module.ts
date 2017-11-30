import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonBooleanValueAccessor } from './directives/ion-boolean-value-accessor';
import { IonNavDelegate } from './directives/ion-nav';

import { AlertController } from './providers/alert-controller';

@NgModule({
  declarations: [
    IonBooleanValueAccessor,
    IonNavDelegate,
  ],
  exports: [
    IonBooleanValueAccessor,
    IonNavDelegate,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AlertController
  ]
})
export class IonicAngularModule {

}
