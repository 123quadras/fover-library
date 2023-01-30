import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'colors',
    templateUrl: './colors.page.html',
    styleUrls: ['./colors.page.scss']
})
export class ColorsPage implements OnInit
{
    public colors: { name: string, hexa: string }[] = [];

    ngOnInit(): void 
    {
        this.buildList();
    }

    private buildList(): void
    {
        this.colors = [
            { name: "--background-page", hexa: '#21272D' },
            { name: "--background-cards", hexa: '#323741' },
            { name: "--background-cards-2", hexa: '#2A2E36' },
            { name: "--background-cards-3", hexa: '#000' },
            { name: "--border", hexa: '#484B55' },
            { name: "--title", hexa: '#fff' },
            { name: "--placeholder", hexa: '#808289' },
            { name: "--primary", hexa: '#0071FF' },
            { name: "--error", hexa: '#f2135d' },
            { name: "--success", hexa: '#17c964' },
            { name: "--warning", hexa: '#ff8200' },
            { name: "--warning-font", hexa: '#cc9500' },
            { name: "--warning-background", hexa: '#FFEADB' },
            { name: "--error-background", hexa: '#FFDBDB' },
        ];
    }
}