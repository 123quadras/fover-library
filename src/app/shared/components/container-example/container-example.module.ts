import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerExampleComponent } from './container-example.component';
import { ClipboardModule } from 'ngx-clipboard';
import { FoverEditorModule } from '../fover-editor/fover-editor.module';
import { SetThemeNameClassModule } from '../../directives/set-theme-name-class/set-theme-name-class.module';

@NgModule({
    declarations: [
        ContainerExampleComponent,
    ],
    imports: [
        CommonModule,
        ClipboardModule,
        FoverEditorModule,
        SetThemeNameClassModule,
    ],
    exports: [
        ContainerExampleComponent,
    ],
})
export class ContainerExampleModule {}