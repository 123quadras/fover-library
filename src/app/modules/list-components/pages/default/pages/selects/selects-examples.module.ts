import { NgModule } from '@angular/core';
import { SelectsExamplesPage } from './selects-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        SelectsExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        SelectsExamplesPage,
    ],
})
export class SelectsExamplesModule {}