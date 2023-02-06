import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { FoverDialogDataModel } from '../models/fover-dialog-data.model';
import { FoverDialogComponent } from '../components/fover-dialog.component';
import { FoverDialogEventsEnum } from '../enum/fover-dialog-events.enum';

@Injectable({
    providedIn: 'root'
})
export class FoverDialogService
{
    private rootViewContainer: ViewContainerRef;
    
    constructor(private factoryResolver: ComponentFactoryResolver) {}

    /**
     * Método usado para realizar a configuração de 'ViewContainerRef'
     * @param viewContainerRef Obj
     */
    public setRootViewContainerRef(viewContainerRef: ViewContainerRef) 
    {
        if (!this.rootViewContainer) this.rootViewContainer = viewContainerRef;
    }

    /**
     * Método usado para abrir o modal de dialog
     * @param _data Info do dialog
     */
    public open(_data: FoverDialogDataModel): FoverDialogComponent
    {
        const factory = this.factoryResolver.resolveComponentFactory(FoverDialogComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        this.rootViewContainer.insert(component.hostView);
        component.instance.dialogData = _data;
        
        component.instance.events.subscribe(event => 
        {
            if (event === FoverDialogEventsEnum.close) component.destroy();
        });
        
        return component.instance;
    }
}
