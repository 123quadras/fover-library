import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
    selector: 'fover-input',
    templateUrl: './fover-input.component.html',
    styleUrls: ['./fover-input.component.scss']
})
export class FoverInputComponent implements AfterViewInit, AfterContentInit, OnChanges
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini' = 'default';
    @Input() label: string;
    @Input() iconRight: string;
    @Input() iconLeft: string;
    @Input() waningTooltip: string;
    @Input() errorMessage: string;
    @Input() loading: boolean;
    @Output() iconLeftClick = new EventEmitter();
    @Output() iconRightClick = new EventEmitter();
    @ContentChild('isPassword') child: ElementRef;
    @ContentChild(FormControlName) control: FormControlName;
    public input: FormControlName;

    ngOnChanges(): void 
    {
        if (this.loading) this.disableInput();
        else this.enableInput();
    }
    
    ngAfterViewInit(): void 
    {
        this.input = this.control;
        if (this.input === undefined) throw new Error("Esse component precisa ser utilizado com o formControlName.");
    }

    ngAfterContentInit(): void 
    {
        // Verificando se é senha
        if (this.child)
        {
            this.iconRight = "fover-eye";
            this.child.nativeElement.type = "password";
        }
    }

    public hasError(): boolean
    {
        if (this.input) return this.input.invalid! && this.input.touched!;

        return false;
    }

    public clickIconRight(): void
    {
        if (this.child)
        {
            // Alterando a visualização da senha
            if (this.iconRight == "fover-eye") 
            {
                this.iconRight = "fover-eye-slash";
                this.child.nativeElement.type = "text";
            }
            else
            {
                this.iconRight = "fover-eye";
                this.child.nativeElement.type = "password";
            }
        }
        else this.iconRightClick.emit();
    }

    public clickIconLeft(): void
    {
        this.iconLeftClick.emit();
    }

    public disableInput(): void
    {
        setTimeout(() => 
        {
            if (this.input) this.input.control.disable();
        }, 500);
    }

    public enableInput(): void
    {
        setTimeout(() => 
        {
            if (this.input) this.input.control.enable();
        }, 500); 
    }
}