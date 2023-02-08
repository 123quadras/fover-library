import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { AlertPage } from './pages/default/pages/alerts/alerts.page';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { InputPage } from './pages/default/pages/inputs/input.page';
import { LoadingPage } from './pages/default/pages/loadings/loading.page';
import { ModalPage } from './pages/default/pages/modals/modal.page';
import { IconPage } from './pages/default/pages/_icons/icons.page';
import { ColorsPage } from './pages/default/pages/_colors/colors.page';
import { DialogPage } from './pages/default/pages/dialog/dialog.page';
import { NotificationPage } from './pages/default/pages/notifications/notifications.page';
import { CheckboxPage } from './pages/default/pages/checkbox/checkbox.page';
import { SelectPage } from './pages/default/pages/selects/select.page';

const routes: Routes = [
    { 
        path: "", 
        component: ListComponentsDefaultPage,
        children: [
            { path: "", redirectTo: "buttons", pathMatch: "full" },
            { path: "icons", component: IconPage, },
            { path: "colors", component: ColorsPage, },
            { path: "buttons", component: ButtonPage, },
            { path: "inputs", component: InputPage, },
            { path: "alerts", component: AlertPage, },
            { path: "notifications", component: NotificationPage, },
            { path: "loadings", component: LoadingPage, },
            { path: "modals", component: ModalPage, },
            { path: "dialogs", component: DialogPage, },
            { path: "checkbox", component: CheckboxPage, },
            { path: "selects", component: SelectPage, },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
