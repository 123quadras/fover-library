import { NgModule } from '@angular/core';
import { LoadingExamplesPage } from './loadings-examples.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        LoadingExamplesPage,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        LoadingExamplesPage,
    ],
})
export class LoadingsExamplesModule {}