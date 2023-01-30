import { ApplicationRef, ComponentFactoryResolver, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input } from '@angular/core';
import { FoverTooltipComponent } from './fover-tooltip.component';

@Directive({
  selector: '[foverTooltip]'
})
export class FoverTooltipDirective
{
    @Input() foverTooltip = '';
    public componentRef: any;

    constructor(
        private _elementRef: ElementRef,
        private _applicationRef: ApplicationRef, 
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _injector: Injector,
    ) {}

    ngOnDestroy(): void 
    {
        this.destroy();
    }

    @HostListener('mouseenter')
    public onMouseEnter(): void 
    {
        if (!this.componentRef) 
        {
            const componentFactory = this._componentFactoryResolver.resolveComponentFactory(FoverTooltipComponent);
            this.componentRef = componentFactory.create(this._injector);
            this._applicationRef.attachView(this.componentRef.hostView);
            
            const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;       
            document.body.appendChild(domElem);
            this.setTooltipComponentProperties();
        }
    }

    @HostListener('mouseleave')
    public onMouseLeave(): void 
    {
        this.destroy();
    }

    public setTooltipComponentProperties() 
    {
        if (this.componentRef) 
        {
            this.componentRef.instance.tooltip = this.foverTooltip;
            const {left, right, bottom} = this._elementRef.nativeElement.getBoundingClientRect();
            this.componentRef.instance.left = (right - left) / 2 + left;
            this.componentRef.instance.top = bottom;
        }
    }

    public destroy(): void 
    {
        if (this.componentRef && this.componentRef.hostView)
        {
            this._applicationRef.detachView(this.componentRef.hostView);
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
