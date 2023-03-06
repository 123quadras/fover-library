import { NgModule } from '@angular/core';
import { CoreDefaultPage } from './pages/default/core-default.page';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { MenuTopComponent } from './pages/default/components/menu-top/menu-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FoverButtonModule, ThemeEnum, ThemeModule } from 'fover-library';
import { SetThemeNameClassModule } from 'src/app/shared/directives/set-theme-name-class/set-theme-name-class.module';

@NgModule({
    declarations: [
        CoreDefaultPage,
        MenuTopComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreRoutingModule,
        SetThemeNameClassModule,
        FoverButtonModule,
        ThemeModule.forRoot({
            active: ThemeEnum.light
        })
    ],
    bootstrap: [
        CoreDefaultPage,
    ]
})
export class CoreModule {}