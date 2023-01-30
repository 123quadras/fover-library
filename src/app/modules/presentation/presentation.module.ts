import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationDefaultPage } from './pages/default/presentation-default.page';
import { ListComponentsRoutingModule } from './presentation-routing.module';
import { FoverComponentsModule } from 'fover-library';

@NgModule({
    declarations: [
        PresentationDefaultPage,
    ],
    imports: [
        CommonModule,
        FoverComponentsModule,
        ListComponentsRoutingModule,
    ],
    exports: [
        PresentationDefaultPage,
    ],
})
export class PresentationModule {}