import { Component } from '@angular/core';
import { FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss']
})
export class ModalPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;
    public showModal: boolean;

    constructor(
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    public copyCodeDefault(): void 
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}