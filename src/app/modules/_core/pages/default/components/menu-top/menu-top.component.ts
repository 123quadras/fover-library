import { Component, OnInit } from '@angular/core';
import { Theme } from 'fover-library';
import { ConfigHelp } from 'src/app/helpers/config.help';

@Component({
    selector: 'menu-top',
    templateUrl: './menu-top.component.html',
    styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit
{
    public title: string = "Fover Componentes";
    public theme: Theme;

    constructor(private _configHelp: ConfigHelp) {}
    
    ngOnInit(): void 
    {
        this.theme = this._configHelp.getThemeActive();
    }

    public changeTheme(): void
    {
        this._configHelp.changeTheme();
        this.theme = this._configHelp.getThemeActive();
    }
}