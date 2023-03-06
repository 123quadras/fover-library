import { Component } from '@angular/core';

@Component({
    selector: 'buttons-examples',
    templateUrl: './buttons-examples.page.html',
    styleUrls: ['./buttons-examples.page.scss']
})
export class ButtonsExamplesPage 
{
    public showCodeDefault: boolean;
    public showCodeTypes: boolean;
    public codeDefault: string;
    public codeTypes: string;
    public codeSizes: string;

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
        this.codeTypes = require('html-loader!./examples/types.html').default;
        this.codeSizes = require('html-loader!./examples/sizes.html').default;
    }
}