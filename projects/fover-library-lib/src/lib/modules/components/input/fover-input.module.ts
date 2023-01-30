import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverInputComponent } from './fover-input.component';
import { FoverTooltipModule } from '../tooltip';
import { FoverLoadingModule } from '../loading';

@NgModule({
    declarations: [
        FoverInputComponent,
    ],
    imports: [
        CommonModule,
        FoverTooltipModule,
        FoverLoadingModule,
    ],
    exports: [
        FoverInputComponent,
    ],
})
export class FoverInputModule {}