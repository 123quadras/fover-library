import { Component, OnInit } from '@angular/core';
import { FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'colors',
    templateUrl: './colors.page.html',
    styleUrls: ['./colors.page.scss']
})
export class ColorsPage implements OnInit
{
    public colors: { title: string, itens: { name: string, hexa: string }[] }[] = [];

    constructor(
        private _clipboardService: ClipboardService,
        private _foverNotificationService: FoverNotificationService,
    ) {}

    ngOnInit(): void 
    {
        this.buildList();
    }

    private buildList(): void
    {
        this.colors = 
        [
            {
                title: "Backgrounds",
                itens: 
                [
                    { name: "background-page", hexa: "#F4F7F8" },
                    { name: "background-cards", hexa: "#FFFFFF" },
                    { name: "background-cards-2", hexa: "#EEF2F4" },
                ]
            },
            {
                title: "Tipografias",
                itens: 
                [
                    { name: "title", hexa: "#2C3E50" },
                    { name: "placeholder", hexa: "#B1B2B4" },
                ]
            },
            {
                title: "Border",
                itens: 
                [
                    { name: "border", hexa: "#DDDDDD" },
                ]
            },
            {
                title: "Defaults",
                itens: 
                [
                    { name: "primary", hexa: "#814CF1" },
                    { name: "primary-1", hexa: "#811EF1" },
                    { name: "primary-2", hexa: "#8178F1" },
                ]
            },
            {
                title: "Auxiliares",
                itens: 
                [
                    { name: "success", hexa: "#17c964" },
                    { name: "success-1", hexa: "#17A064" },
                    { name: "success-2", hexa: "#17F064" },
                    { name: "error", hexa: "#f2135d" },
                    { name: "error-1", hexa: "#BE154D" },
                    { name: "error-2", hexa: "#F2505D" },
                    { name: "warning", hexa: "#FFA000" },
                    { name: "warning-1", hexa: "#FF8200" },
                    { name: "warning-2", hexa: "#FFBE00" },
                ]
            },
        ];
    }

    public copyName(_item: { name: string, hexa: string }): void
    {
        this._clipboardService.copy(`var(--${_item.name})`);
        this._foverNotificationService.success(["Valor copiado com sucesso."]);
    }
}