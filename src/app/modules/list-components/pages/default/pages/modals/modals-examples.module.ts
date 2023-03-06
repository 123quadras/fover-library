import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalsExamplesPage } from './modals-examples.page';

@NgModule({
    declarations: [
        ModalsExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        ModalsExamplesPage,
    ],
})
export class ModalsExamplesModule {}