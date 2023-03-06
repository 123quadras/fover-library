import { NgModule } from '@angular/core';
import { PresentationDefaultPage } from './pages/default/presentation-default.page';
import { ListComponentsRoutingModule } from './presentation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        PresentationDefaultPage,
    ],
    imports: [
        SharedModule,
        ListComponentsRoutingModule,
    ],
    exports: [
        PresentationDefaultPage,
    ],
})
export class PresentationModule {}