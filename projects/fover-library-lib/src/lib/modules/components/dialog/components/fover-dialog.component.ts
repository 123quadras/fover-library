import { Component } from '@angular/core';
import { FoverDialogDataModel } from '../models/fover-dialog-data.model';
import { FoverDialogEventsEnum } from '../enum/fover-dialog-events.enum';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'fover-dialog',
    templateUrl: './fover-dialog.component.html',
    styleUrls: ['./fover-dialog.component.scss']
})
export class FoverDialogComponent 
{
    public dialogData: FoverDialogDataModel;
    public readonly events = new BehaviorSubject(FoverDialogEventsEnum.open);
    public confirmFunction: (dialogComponent: FoverDialogComponent) => void;
    public cancelFunction: (dialogComponent: FoverDialogComponent) => void;
    public checkConfirmation: boolean;
    public checkConfirmationInvalid: boolean;

    public close(): void
    {
        if (event) event.stopPropagation();
        if (!this.dialogData.loading)
        {
            this.events.next(FoverDialogEventsEnum.close);
            this.events.complete();
        }
    }

    public confirm(): void
    {
        if (event) event.stopPropagation();
        if (!this.dialogData.loading)
        {
            if (this.checkConfirmation) this.confirmFunction(this);
            else this.checkConfirmationInvalid = true;
        }
    }

    public onCancel(fn: (dialogComponent: FoverDialogComponent) => void): FoverDialogComponent
    {
        this.cancelFunction = fn;

        return this;
    }

    public onConfirm(fn: (dialogComponent: FoverDialogComponent) => void): FoverDialogComponent
    {
        this.confirmFunction = fn;
        
        return this;
    }
}
