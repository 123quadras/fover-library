import { NgModule } from '@angular/core';
import { ButtonsExamplesPage } from './buttons-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        ButtonsExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        ButtonsExamplesPage,
    ],
})
export class ButtonsExamplesModule {}