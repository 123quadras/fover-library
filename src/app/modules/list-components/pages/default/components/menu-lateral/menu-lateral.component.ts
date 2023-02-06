import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu-lateral',
    templateUrl: './menu-lateral.component.html',
    styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit
{
    public listItens: { routerLink: string, description: string }[] = [];

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
        ];

        this.listItens.sort((a, b) => (a.description > b.description) ? 1 : -1);
    }
}