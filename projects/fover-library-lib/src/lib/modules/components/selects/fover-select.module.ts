import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverSelectComponent } from './fover-select.component';
import { FoverLoadingModule } from '../loading';
import { FoverTooltipModule } from '../tooltip';

@NgModule({
    declarations: [
        FoverSelectComponent,
    ],
    imports: [
        CommonModule,
        FoverLoadingModule,
        FoverTooltipModule,
    ],
    exports: [
        FoverSelectComponent,
    ],
})
export class FoverSelectModule {}