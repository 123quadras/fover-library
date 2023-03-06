import { NgModule } from '@angular/core';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ListComponentsRoutingModule } from './list-components-routing.module';
import { MenuLateralComponent } from './pages/default/components/menu-lateral/menu-lateral.component';
import { IconPage } from './pages/default/pages/_icons/icons.page';
import { ColorsPage } from './pages/default/pages/_colors/colors.page';
import { InputExamplesModule } from './pages/default/pages/inputs/input-examples.module';
import { SelectsExamplesModule } from './pages/default/pages/selects/selects-examples.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsExamplesModule } from './pages/default/pages/buttons/buttons-examples.module';
import { AlertsExamplesModule } from './pages/default/pages/alerts/alerts-examples.module';
import { CheckboxExamplesModule } from './pages/default/pages/checkbox/checkbox-examples.module';
import { DialogExamplesModule } from './pages/default/pages/dialog/dialog-examples.module';
import { LoadingsExamplesModule } from './pages/default/pages/loadings/loadings-examples.module';
import { ModalsExamplesModule } from './pages/default/pages/modals/modals-examples.module';
import { NotificationsExamplesModule } from './pages/default/pages/notifications/notifications-examples.module';

@NgModule({
    declarations: [
        ListComponentsDefaultPage,
        MenuLateralComponent,
        IconPage,
        ColorsPage,
    ],
    imports: [
        SharedModule,
        ListComponentsRoutingModule,
        // Exemplos de componentes
        ButtonsExamplesModule,
        AlertsExamplesModule,
        CheckboxExamplesModule,
        DialogExamplesModule,
        InputExamplesModule,
        LoadingsExamplesModule,
        ModalsExamplesModule,
        NotificationsExamplesModule,
        SelectsExamplesModule,
    ],
    exports: [
        ListComponentsDefaultPage
    ],
})
export class ListComponentsModule {}