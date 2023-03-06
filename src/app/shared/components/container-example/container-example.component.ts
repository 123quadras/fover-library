import { Component, Input } from '@angular/core';
import { FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'container-example',
    templateUrl: './container-example.component.html',
    styleUrls: ['./container-example.component.scss']
})
export class ContainerExampleComponent 
{
    @Input() codeCopy: string;
    @Input() language: 'typescript' | 'html' = 'html';
    public showCodeDefault: boolean;

    constructor(
        private _clipboardService: ClipboardService,
        private _foverNotificationService: FoverNotificationService,
    ) {}
    
    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeCopy);
        this._foverNotificationService.success(["Código copiado com sucesso."]);
    }
}