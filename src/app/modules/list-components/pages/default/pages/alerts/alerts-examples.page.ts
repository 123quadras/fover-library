import { Component } from '@angular/core';

@Component({
    selector: 'alerts-examples',
    templateUrl: './alerts-examples.page.html',
    styleUrls: ['./alerts-examples.page.scss']
})
export class AlertsExamplesPage
{
    public codeDefault: string;

    constructor()
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }
}
