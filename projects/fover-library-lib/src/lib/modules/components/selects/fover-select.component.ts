import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoverSelectOptionModel } from './models/fover-select-option.model';

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
    @Output() selected = new EventEmitter<FoverSelectOptionModel>();
    public isShowItens: boolean;
    public itemSelected: FoverSelectOptionModel;

    ngOnInit(): void 
    {
        this.hasItemSelected();
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