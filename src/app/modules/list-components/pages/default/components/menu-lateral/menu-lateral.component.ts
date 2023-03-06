import { Component, OnInit } from '@angular/core';
import { ConfigHelp } from 'src/app/helpers/config.help';

@Component({
    selector: 'menu-lateral',
    templateUrl: './menu-lateral.component.html',
    styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit
{
    public listItens: { routerLink: string, description: string }[] = [];

    constructor(public _configHelp: ConfigHelp) {}

    ngOnInit(): void 
    {
        this.buildList();
    }
    
    private buildList(): void
    {
        this.listItens = [
            { routerLink: "buttons", description: "Buttons" },
            { routerLink: "inputs", description: "Inputs" },
            { routerLink: "dialogs", description: "Dialogs" },
            { routerLink: "alerts", description: "Alerts" },
            { routerLink: "notifications", description: "Notifications" },
            { routerLink: "loadings", description: "Loadings" },
            { routerLink: "modals", description: "Modals" },
            { routerLink: "checkbox", description: "Checkbox" },
            { routerLink: "selects", description: "Selects" },
        ];

        this.listItens.sort((a, b) => (a.description > b.description) ? 1 : -1);
    }
}