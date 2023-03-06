import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoverSelectOptionModel } from './models/fover-select-option.model';
import { Theme, ThemeService } from 'fover-library';

@Component({
    selector: 'fover-select',
    templateUrl: './fover-select.component.html',
    styleUrls: ['./fover-select.component.scss']
})
export class FoverSelectComponent implements OnInit
{
    @Input() listOptions: FoverSelectOptionModel[] = [];
    @Input() label: string;
    @Input() placeholder: string;
    @Input() waningTooltip: string;
    @Input() errorMessage: string;
    @Input() hasRequiredError: boolean;
    @Input() loading: boolean;
    @Input() backgroundColor: '1' | '2' | '3' = '3';
    @Output() selected = new EventEmitter<FoverSelectOptionModel>();
    public isShowItens: boolean;
    public itemSelected: FoverSelectOptionModel;
    public theme: Theme;

    constructor(private _themeService: ThemeService) {}

    ngOnInit(): void 
    {
        this.hasItemSelected();
        this.theme = this._themeService.getActiveTheme();
    }

    private hasItemSelected(): void
    {
        const existActive = this.listOptions.find(x => x.active);
        if (existActive) this.itemSelected = existActive;
    }

    public selectItem(_item: FoverSelectOptionModel): void
    {
        this.listOptions.map(x => x.active = false); // Limpando todos os itens ativos
        _item.active = true; // Ativando o item clicado
        this.itemSelected = _item; // Passando o item clicado para a variável
        this.selected.emit(this.itemSelected); // Emitando o item que foi selecionado.

        this.isShowItens = false; // Fechando a lista
        this.hasRequiredError = false; // Passando a variavel de 'campo obrigatório' para false, pois um item foi clicado
    }
}