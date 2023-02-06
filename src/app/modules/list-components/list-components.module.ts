import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ListComponentsRoutingModule } from './list-components-routing.module';
import { MenuLateralComponent } from './pages/default/components/menu-lateral/menu-lateral.component';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { FoverEditorModule } from '../_shared/fover-editor/fover-editor.module';
import { InputPage } from './pages/default/pages/inputs/input.page';
import { IconPage } from './pages/default/pages/_icons/icons.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertPage } from './pages/default/pages/alerts/alerts.page';
import { ClipboardModule } from 'ngx-clipboard';
import { NotificationPage } from './pages/default/pages/notifications/notifications.page';
import { LoadingPage } from './pages/default/pages/loadings/loading.page';
import { ModalPage } from './pages/default/pages/modals/modal.page';
import { FoverCheckboxModule, FoverComponentsModule, FoverDialogModule } from 'fover-library';
import { ColorsPage } from './pages/default/pages/_colors/colors.page';
import { DialogPage } from './pages/default/pages/dialog/dialog.page';
import { CheckboxPage } from './pages/default/pages/checkbox/checkbox.page';

@NgModule({
    declarations: [
        ListComponentsDefaultPage,
        MenuLateralComponent,
        IconPage,
        ColorsPage,
        ButtonPage,
        InputPage,
        AlertPage,
        NotificationPage,
        LoadingPage,
        ModalPage,
        DialogPage,
        CheckboxPage,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ListComponentsRoutingModule,
        FoverEditorModule,
        ClipboardModule,
        FoverComponentsModule,
        FoverDialogModule,
        FoverCheckboxModule,
    ],
    exports: [
        ListComponentsDefaultPage
    ],
})
export class ListComponentsModule {}