import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesTitlesComponent } from './examples-titles.component';

@NgModule({
    declarations: [
        ExamplesTitlesComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ExamplesTitlesComponent,
    ],
})
export class ExamplesTitlesModule {}