import { InjectionToken } from "@angular/core";
import { ButtonType } from "./enums/button-type.enum";

export const BUTTON_OPTIONS = new InjectionToken('BUTTON_OPTIONS');

export class ButtonOptions
{
    public height?: 'xl' | 'l' | 'default' | 'small' | 'mini';
    public type?: ButtonType;
}