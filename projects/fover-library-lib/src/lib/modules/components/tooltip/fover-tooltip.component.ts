import { Component } from '@angular/core';

@Component({
    selector: 'fover-tooltip',
    templateUrl: './fover-tooltip.component.html',
    styleUrls: ['./fover-tooltip.component.scss']
})
export class FoverTooltipComponent 
{
    public tooltip: string = '';
    public left: number = 0;
    public top: number = 0;
}