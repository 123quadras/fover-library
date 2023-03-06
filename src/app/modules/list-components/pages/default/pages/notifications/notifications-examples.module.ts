import { NgModule } from '@angular/core';
import { NotificationsExamplesPage } from './notifications-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        NotificationsExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        NotificationsExamplesPage,
    ],
})
export class NotificationsExamplesModule {}