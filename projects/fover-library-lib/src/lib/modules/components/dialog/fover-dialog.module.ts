import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverDialogComponent } from './components/fover-dialog.component';
import { FoverCheckboxModule } from '../checkbox';
import { FoverButtonModule } from '../button';
import { FoverLoadingModule } from '../loading';

@NgModule({
    declarations: [
        FoverDialogComponent,
    ],
    imports: [
        CommonModule,
        FoverCheckboxModule,
        FoverButtonModule,
        FoverLoadingModule,
    ],
    exports: [
        FoverDialogComponent,
    ],
})
export class FoverDialogModule {}