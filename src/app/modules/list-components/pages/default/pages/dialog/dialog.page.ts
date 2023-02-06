import { Component } from '@angular/core';
import { FoverDialogService, FoverDialogTypeEnum, FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'fover-dialog-page',
    templateUrl: './dialog.page.html',
    styleUrls: ['./dialog.page.scss']
})
export class DialogPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(
        private _clipboardService: ClipboardService,
        private _foverDialogService: FoverDialogService,
        private _foverNotificationService: FoverNotificationService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.ts').default;
    }

    public openDialog(): void
    {
        this._foverDialogService.open({
            title: 'Remover preço',
            description: 'Você tem certeza que deseja remover o preço? Ao confirmar esse processo, você não poderá recuperar o mesmo preço novamente.',
            type: FoverDialogTypeEnum.info,
        }).onConfirm(dialog =>
        {
            dialog.dialogData.loading = true;
            setTimeout(() => 
            {
                dialog.dialogData.loading = false;
                alert("Dialog confirmation is ok!");
                dialog.close();
            }, 2000);
        });
    }

    public copyCodeDefault(): void 
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}