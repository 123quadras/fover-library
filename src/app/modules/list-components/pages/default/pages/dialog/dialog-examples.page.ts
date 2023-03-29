import { Component } from '@angular/core';
import { FoverDialogService, FoverDialogTypeEnum } from 'fover-library';

@Component({
    selector: 'dialog-examples-page',
    templateUrl: './dialog-examples.page.html',
    styleUrls: ['./dialog-examples.page.scss']
})
export class DialogExamplesPage
{
    public codeDefault: string;
    public codeConfig: string;
    public showCodeDefault: boolean;

    constructor(private _foverDialogService: FoverDialogService) 
    {
        this.codeDefault = require('html-loader!./examples/default.ts').default;
        this.codeConfig = require('html-loader!./examples/config.ts').default;
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
}