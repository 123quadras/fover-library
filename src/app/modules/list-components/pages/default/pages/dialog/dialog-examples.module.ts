import { NgModule } from '@angular/core';
import { DialogExamplesPage } from './dialog-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        DialogExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        DialogExamplesPage,
    ],
})
export class DialogExamplesModule {}