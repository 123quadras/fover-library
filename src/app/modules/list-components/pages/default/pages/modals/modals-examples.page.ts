import { Component } from '@angular/core';

@Component({
    selector: 'modals-examples',
    templateUrl: './modals-examples.page.html',
    styleUrls: ['./modals-examples.page.scss']
})
export class ModalsExamplesPage 
{
    public codeDefault: string;
    public showModal: boolean;

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }
}