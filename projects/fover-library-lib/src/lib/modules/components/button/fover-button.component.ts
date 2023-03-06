import { Component, Inject, Input, OnInit } from '@angular/core';
import { ButtonOptions, BUTTON_OPTIONS } from './button-options';
import { Theme, ThemeService } from '../../theme';

@Component({
    selector: 'fover-button',
    templateUrl: './fover-button.component.html',
    styleUrls: ['./fover-button.component.scss']
})
export class FoverButtonComponent implements OnInit
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini';
    @Input() type: 'default' | 'transparent' | 'secondary' | 'border';
    @Input() disabled: boolean;
    public theme: Theme;

    constructor(
        @Inject(BUTTON_OPTIONS) public options: ButtonOptions,
        private _themeService: ThemeService,
    ) {}
    
    ngOnInit(): void 
    {
        this.setGlobalConfig();
        this.theme = this._themeService.getActiveTheme();
    }

    private setGlobalConfig(): void
    {
        if (this.options)
        {
            this.height = this.options.height ?? this.height ?? 'default';
            this.type = this.options.type ?? this.type ?? 'default';
        }
    }
}