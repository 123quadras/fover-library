import { FoverDialogTypeEnum } from "../enum/fover-dialog-type.enum";

export class FoverDialogDataModel
{
    type: FoverDialogTypeEnum;
    title: string;
    description: string;
    loading?: boolean;
    confirmText?: string;
    cancelText?: string;
    checkboxText?: string;
}
