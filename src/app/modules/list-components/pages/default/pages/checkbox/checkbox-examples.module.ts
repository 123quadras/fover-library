import { NgModule } from '@angular/core';
import { CheckboxExamplesPage } from './checkbox-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CheckboxExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        CheckboxExamplesPage,
    ],
})
export class CheckboxExamplesModule {}