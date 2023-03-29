import { Component, Inject, Input, OnInit } from '@angular/core';
import { ButtonOptions, BUTTON_OPTIONS } from './button-options';
import { Theme, ThemeService } from '../../theme';
import { ButtonType } from './enums/button-type.enum';

@Component({
    selector: 'fover-button',
    templateUrl: './fover-button.component.html',
    styleUrls: ['./fover-button.component.scss']
})
export class FoverButtonComponent implements OnInit
{
    @Input() type: ButtonType | string = ButtonType.default;
    @Input() disabled: boolean;
    public theme: Theme;

    constructor(
        @Inject(BUTTON_OPTIONS) public options: ButtonOptions,
        private _themeService: ThemeService,
    ) {}
    
    ngOnInit(): void 
    {
        this.setGlobalConfig();
        this.getTheme();
        this._themeService.$setThemeEvent.subscribe(() => this.getTheme());
    }

    private getTheme(): void
    {
        this.theme = this._themeService.getActiveTheme();
    }

    private setGlobalConfig(): void
    {
        if (this.options)
        {
            this.type = this.options.type ?? this.type ?? 'default';
        }
    }
}