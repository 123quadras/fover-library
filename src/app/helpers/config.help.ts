import { Injectable } from '@angular/core';
import { Theme, ThemeEnum, ThemeService } from 'fover-library';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigHelp
{
    public $changeThemeListen = new Subject();

    constructor(private _themeService: ThemeService) {}
    
    public changeTheme(): void
    {
        const theme = this._themeService.getActiveTheme()
        if (theme.name == ThemeEnum.light) this._themeService.setTheme(ThemeEnum.dark);
        if (theme.name == ThemeEnum.dark) this._themeService.setTheme(ThemeEnum.light);
        this.$changeThemeListen.next();
    }

    public getThemeActive(): Theme
    {
        return this._themeService.getActiveTheme();
    }
}