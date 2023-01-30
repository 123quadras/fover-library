import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverTooltipComponent } from './fover-tooltip.component';
import { FoverTooltipDirective } from './fover-tooltip.directive';

@NgModule({
    declarations: [
        FoverTooltipComponent,
        FoverTooltipDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverTooltipDirective,
    ]
})
export class FoverTooltipModule {}