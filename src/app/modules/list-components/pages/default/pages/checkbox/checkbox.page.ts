import { Component } from '@angular/core';
import { FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'fover-checkbox-page',
    templateUrl: './checkbox.page.html',
    styleUrls: ['./checkbox.page.scss']
})
export class CheckboxPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(
        private _clipboardService: ClipboardService,
        private _foverNotificationService: FoverNotificationService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    public copyCodeDefault(): void 
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}