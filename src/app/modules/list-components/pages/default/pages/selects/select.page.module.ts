import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPage } from './select.page';
import { FoverEditorModule } from 'src/app/modules/_shared/fover-editor/fover-editor.module';
import { FoverSelectModule } from 'fover-library';

@NgModule({
    declarations: [
        SelectPage,
    ],
    imports: [
        CommonModule,
        FoverEditorModule,
        FoverSelectModule,
    ],
    exports: [
        SelectPage,
    ],
})
export class SelectPageModule {}