import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverCheckboxComponent } from './fover-checkbox.component';

@NgModule({
    declarations: [
        FoverCheckboxComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverCheckboxComponent,
    ],
})
export class FoverCheckboxModule {}