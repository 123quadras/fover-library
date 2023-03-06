import { Component } from '@angular/core';
import { FoverNotificationService, FoverNotificationStatusEnum } from 'fover-library';

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

    public emitNotification(_type: FoverNotificationStatusEnum | string): void
    {
        switch (_type) 
        {
            case FoverNotificationStatusEnum.success: this._foverNotificationService.success(["Essa é uma notificação de sucesso."]); break;
            case FoverNotificationStatusEnum.error: this._foverNotificationService.danger(["Essa é uma notificação de erro."]); break;
            case FoverNotificationStatusEnum.info: this._foverNotificationService.info(["Essa é uma notificação de informação."]); break;
            case FoverNotificationStatusEnum.warning: this._foverNotificationService.warning(["Essa é uma notificação de atenção."]); break;
        }
    }
}