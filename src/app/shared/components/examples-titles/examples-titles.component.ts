import { Component, Input } from '@angular/core';

@Component({
    selector: 'examples-titles',
    templateUrl: './examples-titles.component.html',
    styleUrls: ['./examples-titles.component.scss']
})
export class ExamplesTitlesComponent 
{
    @Input() title: string;
    @Input() subTitle: string;
}