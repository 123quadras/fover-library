import { NgModule } from '@angular/core';
import { SetThemeNameClassDirective } from './set-theme-name-class.directive';

@NgModule({
    declarations: [
        SetThemeNameClassDirective,
    ],
    exports: [
        SetThemeNameClassDirective,
    ]
})
export class SetThemeNameClassModule {}