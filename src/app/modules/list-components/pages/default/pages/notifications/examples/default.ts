import { FoverNotificationService, FoverNotificationStatusEnum } from "fover-library";

export class NotificationPage 
{
    constructor(private _foverNotificationService: FoverNotificationService) {}

    public emitNotification(_type: FoverNotificationStatusEnum): void
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