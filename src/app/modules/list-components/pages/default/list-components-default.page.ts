import { Component, ViewContainerRef } from '@angular/core';
import { FoverDialogService } from 'fover-library';

@Component({
    selector: 'list-components-default',
    templateUrl: './list-components-default.page.html',
    styleUrls: ['./list-components-default.page.scss']
})
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