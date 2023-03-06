import { NgModule } from '@angular/core';
import { InputExamplesPage } from './input-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        InputExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        InputExamplesPage,
    ],
})
export class InputExamplesModule {}