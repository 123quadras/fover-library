import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderPageComponent } from './header-page.component';
import { SetThemeNameClassModule } from '../../directives/set-theme-name-class/set-theme-name-class.module';


@NgModule({
    declarations: [
        HeaderPageComponent,
    ],
    imports: [
        CommonModule,
        SetThemeNameClassModule,
    ],
    exports: [
        HeaderPageComponent,
    ],
})
export class HeaderPageModule {}