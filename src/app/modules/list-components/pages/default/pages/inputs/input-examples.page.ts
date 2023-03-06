import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'input-examples-page',
    templateUrl: './input-examples.page.html',
    styleUrls: ['./input-examples.page.scss']
})
export class InputExamplesPage implements OnInit
{
    public formGroup: FormGroup;
    public codeDefault: string;
    public codeWithLabel: string;
    public codeWithWarning: string;
    public codeWithLoading: string;

    constructor(private _formBuilder: FormBuilder) 
    {
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
}