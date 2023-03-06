import { Component } from '@angular/core';

@Component({
    selector: 'loadings-examples',
    templateUrl: './loadings-examples.page.html',
    styleUrls: ['./loadings-examples.page.scss']
})
export class LoadingExamplesPage 
{
    public codeDefault: string;

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }
}