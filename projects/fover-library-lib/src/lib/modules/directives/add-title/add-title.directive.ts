import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[addTitle]'
})
export class AddTitleDirective implements AfterViewInit
{
    @Input() title?: string;

    constructor(private _elementRef: ElementRef) {}

    ngAfterViewInit(): void 
    {
        this._elementRef.nativeElement.alt = this._elementRef.nativeElement.title = this.title;
    }
}