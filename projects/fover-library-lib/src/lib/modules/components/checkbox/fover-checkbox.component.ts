import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'fover-checkbox',
    templateUrl: './fover-checkbox.component.html',
    styleUrls: ['./fover-checkbox.component.scss']
})
export class FoverCheckboxComponent implements OnInit
{
    @Input() id: string;
    @Input() label: string;
    @Input() value: any;
    @Input() hasError: boolean;
    @Output() onChangeValue = new EventEmitter<boolean>();

    ngOnInit(): void 
    {
        this.buildId();
    }

    private async buildId(): Promise<void>
    {
        this.id = await this.hash("id");
    }

    private async hash(_prefix: string): Promise<string>
    {
        const utf8 = new TextEncoder().encode(_prefix);
        return crypto.subtle.digest('SHA-256', utf8).then((hashBuffer) => 
        {
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray
            .map(
                (bytes) => bytes.toString(16).padStart(2, '0')
            )
            .join('');

            return hashHex;
        });
    }

    public setValue(_value: boolean): void
    {
        this.value = _value;
        this.onChangeValue.emit(this.value);
    }
}