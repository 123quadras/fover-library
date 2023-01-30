import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FoverNotificationService } from 'fover-library';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'fover-input-page',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss']
})
export class InputPage implements OnInit
{
    public formGroup: FormGroup;
    public codeDefault: string;
    public codeWithLabel: string;
    public codeWithWarning: string;
    public codeWithLoading: string;
    public showCodeDefault: boolean;
    public showCodeWithLabel: boolean;
    public showCodeWithWarning: boolean;
    public showCodeWithLoading: boolean;

    constructor(
        private _formBuilder: FormBuilder,
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
        this.codeWithLabel = require('html-loader!./examples/with-label.html').default;
        this.codeWithWarning = require('html-loader!./examples/with-warning.html').default;
        this.codeWithLoading = require('html-loader!./examples/with-loading.html').default;
    }

    ngOnInit(): void 
    {
        this.buildForm();
    }

    private buildForm(): void
    {
        this.formGroup = this._formBuilder.group({
            email: new FormControl("", [ Validators.email ]),
            withLoading: new FormControl("", [ ]),
        });
    }

    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
    
    public copyCodeWithLabel(): void
    {
        this._clipboardService.copy(this.codeWithLabel);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
    
    public copyCodeWithWarning(): void
    {
        this._clipboardService.copy(this.codeWithWarning);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
    
    public copyCodeWithLoading(): void
    {
        this._clipboardService.copy(this.codeWithLoading);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}