import { FoverDialogService, FoverDialogTypeEnum } from 'fover-library';

export class DialogExamplesPage
{
    constructor(private _foverDialogService: FoverDialogService) {}

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