import { Component, OnInit } from '@angular/core';
import { FoverNotificationService, FoverSelectOptionModel } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'fover-select-page',
    templateUrl: './select.page.html',
    styleUrls: ['./select.page.scss']
})
export class SelectPage implements OnInit
{
    public codeDefault: string;
    public showCodeDefault: boolean;
    public listOptions: FoverSelectOptionModel[] = [];

    constructor(
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    ngOnInit(): void 
    {
        this.buildOptions();
    }

    private buildOptions(): void
    {
        this.listOptions = [
            { id: 1, description: "Item 01", data: { teste: 1 }, active: true },
            { id: 2, description: "Item 02", data: { teste: 2 } },
            { id: 3, description: "Item 03", data: { teste: 3 } },
        ];
    }

    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }

    public itemClicked(_item: FoverSelectOptionModel): void { console.log(_item) };
}