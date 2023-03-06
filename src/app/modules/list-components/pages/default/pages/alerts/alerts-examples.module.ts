import { NgModule } from '@angular/core';
import { AlertsExamplesPage } from './alerts-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { FoverAlertModule } from 'fover-library';

@NgModule({
    declarations: [
        AlertsExamplesPage,
    ],
    imports: [
        SharedModule,
        FoverAlertModule,
    ],
    exports: [
        AlertsExamplesPage,
    ],
})
export class AlertsExamplesModule {}