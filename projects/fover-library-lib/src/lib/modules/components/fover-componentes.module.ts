import { NgModule } from '@angular/core';
import { FoverAlertModule } from './alert';
import { FoverButtonModule } from './button/fover-button.module';
import { FoverInputModule } from './input/fover-input.module';
import { FoverLoadingModule } from './loading';
import { FoverModalModule } from './modal';
import { FoverNotificationModule } from './notification';
import { FoverTooltipModule } from './tooltip';
import { FoverDialogModule } from './dialog';
import { FoverCheckboxModule } from './checkbox';
import { FoverSelectModule } from './selects';

@NgModule({
    exports: [
        FoverButtonModule,
        FoverInputModule,
        FoverAlertModule,
        FoverNotificationModule,
        FoverLoadingModule,
        FoverModalModule,
        FoverTooltipModule,
        FoverDialogModule,
        FoverCheckboxModule,
        FoverSelectModule,
    ],
})
export class FoverComponentsModule {}