import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-examples-page',
    templateUrl: './checkbox-examples.page.html',
    styleUrls: ['./checkbox-examples.page.scss']
})
export class CheckboxExamplesPage 
{
    public codeDefault: string;

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }
}