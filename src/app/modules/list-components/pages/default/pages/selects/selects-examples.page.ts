import { Component, OnInit } from '@angular/core';
import { FoverSelectOptionModel } from 'fover-library';

@Component({
    selector: 'selects-examples-page',
    templateUrl: './selects-examples.page.html',
    styleUrls: ['./selects-examples.page.scss']
})
export class SelectsExamplesPage implements OnInit
{
    public codeDefault: string;
    public showCodeDefault: boolean;
    public listOptions: FoverSelectOptionModel[] = [];

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    ngOnInit(): void 
    {
        this.buildOptions();
    }

    private buildOptions(): void
    {
        this.listOptions = [
            { id: 1, description: "Item 01", data: { teste: 1 }, active: true },
            { id: 2, description: "Item 02", data: { teste: 2 } },
            { id: 3, description: "Item 03", data: { teste: 3 } },
        ];
    }

    public itemClicked(_item: FoverSelectOptionModel): void { console.log(_item) };
}