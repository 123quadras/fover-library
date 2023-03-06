import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { ThemeEnum } from 'fover-library';
import { ConfigHelp } from 'src/app/helpers/config.help';

@Directive({
  selector: '[setThemeNameClass]'
})
export class SetThemeNameClassDirective implements AfterViewInit, OnInit
{
    constructor(
        private _elementRef: ElementRef,
        private _configHelp: ConfigHelp,
    ) {}
    
    ngOnInit(): void 
    {
        this._configHelp.$changeThemeListen.subscribe(() => this.setThemeOnElement());
    }

    ngAfterViewInit(): void 
    {
        this.setThemeOnElement();
    }

    private setThemeOnElement(): void
    {
        const theme = this._configHelp.getThemeActive();
        this._elementRef.nativeElement.classList.remove(theme.name == ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark);
        this._elementRef.nativeElement.classList.add(theme.name);
    }
}