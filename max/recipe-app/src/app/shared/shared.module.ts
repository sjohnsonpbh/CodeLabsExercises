import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { DropDownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropDownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropDownDirective,
    CommonModule,
  ],
  // the below is not needed in Angular 9+
  entryComponents: [AlertComponent],
})
export class SharedModule {}
