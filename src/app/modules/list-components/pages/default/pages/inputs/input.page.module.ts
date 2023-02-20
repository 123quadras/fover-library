import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPage } from './input.page';
import { ReactiveFormsModule } from '@angular/forms';
import { FoverEditorModule } from 'src/app/modules/_shared/fover-editor/fover-editor.module';
import { FoverInputModule } from 'fover-library';

@NgModule({
    declarations: [
        InputPage,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FoverEditorModule,
        FoverInputModule,
    ],
    exports: [
        InputPage,
    ],
})
export class InputPageModule {}