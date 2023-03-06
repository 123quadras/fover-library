import { Component } from '@angular/core';
import { FoverNotificationService } from 'fover-library';

@Component({
    selector: 'notifications-examples-page',
    templateUrl: './notifications-examples.page.html',
    styleUrls: ['./notifications-examples.page.scss']
})
export class NotificationsExamplesPage
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(private _foverNotificationService: FoverNotificationService) 
    {
        this.codeDefault = require('html-loader!./examples/default.ts').default;
    }

    public emitNotification(): void
    {
        this._foverNotificationService.success(["Essa é uma notificação de teste"]);
    }
}