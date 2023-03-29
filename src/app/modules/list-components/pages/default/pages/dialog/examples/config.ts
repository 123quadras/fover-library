import { ViewContainerRef } from '@angular/core';
import { FoverDialogService } from 'fover-library';

export class ListComponentsDefaultPage 
{
    constructor(
        private _foverDialogService: FoverDialogService,
        private _viewContainerRef: ViewContainerRef,
    ) 
    {
        this._foverDialogService.setRootViewContainerRef(this._viewContainerRef);
    }
}