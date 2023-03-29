import { NgModule } from '@angular/core';
import { AlertsExamplesPage } from './alerts-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        AlertsExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        AlertsExamplesPage,
    ],
})
export class AlertsExamplesModule {}