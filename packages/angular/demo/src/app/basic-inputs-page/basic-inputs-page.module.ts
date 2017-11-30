import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { IonicAngularModule } from '@ionic/angular';
import { DirectiveOfDoomModule } from '@ionic/angular';

import { BasicInputsPageComponent } from './basic-inputs-page.component';
import { BasicInputsPageRoutingModule } from './basic-inputs-page-routing.module';

import { KittieKat } from './test';

@NgModule({
  imports: [
    BasicInputsPageRoutingModule,
    CommonModule,
    FormsModule,
    DirectiveOfDoomModule
  //  IonicAngularModule
  ],
  declarations: [BasicInputsPageComponent, KittieKat],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BasicInputsPageModule {}
