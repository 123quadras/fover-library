import { FoverNotificationService } from "fover-library";

export class NotificationPage 
{
    constructor(private _foverNotificationService: FoverNotificationService) {}

    public emitNotification(): void
    {
        this._foverNotificationService.success(["Essa é uma notificação de teste"]);
    }
}