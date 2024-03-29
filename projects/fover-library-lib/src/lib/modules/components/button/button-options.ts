import { InjectionToken } from "@angular/core";
import { ButtonType } from "./enums/button-type.enum";

export const BUTTON_OPTIONS = new InjectionToken('BUTTON_OPTIONS');

export class ButtonOptions
{
    public type?: ButtonType;
}