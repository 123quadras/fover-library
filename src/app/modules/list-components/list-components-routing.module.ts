import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { AlertsExamplesPage } from './pages/default/pages/alerts/alerts-examples.page';
import { ButtonsExamplesPage } from './pages/default/pages/buttons/buttons-examples.page';
import { LoadingExamplesPage } from './pages/default/pages/loadings/loadings-examples.page';
import { ModalsExamplesPage } from './pages/default/pages/modals/modals-examples.page';
import { IconPage } from './pages/default/pages/_icons/icons.page';
import { ColorsPage } from './pages/default/pages/_colors/colors.page';
import { DialogExamplesPage } from './pages/default/pages/dialog/dialog-examples.page';
import { NotificationsExamplesPage } from './pages/default/pages/notifications/notifications-examples.page';
import { CheckboxExamplesPage } from './pages/default/pages/checkbox/checkbox-examples.page';
import { InputExamplesPage } from './pages/default/pages/inputs/input-examples.page';
import { SelectsExamplesPage } from './pages/default/pages/selects/selects-examples.page';

const routes: Routes = [
    { 
        path: "", 
        component: ListComponentsDefaultPage,
        children: [
            { path: "", redirectTo: "alerts", pathMatch: "full" },
            { path: "alerts", component: AlertsExamplesPage, },
            { path: "buttons", component: ButtonsExamplesPage, },
            { path: "checkbox", component: CheckboxExamplesPage, },
            { path: "dialogs", component: DialogExamplesPage, },
            { path: "inputs", component: InputExamplesPage, },
            { path: "loadings", component: LoadingExamplesPage, },
            { path: "modals", component: ModalsExamplesPage, },
            { path: "notifications", component: NotificationsExamplesPage, },
            { path: "selects", component: SelectsExamplesPage, },

            
            { path: "icons", component: IconPage, },
            { path: "colors", component: ColorsPage, },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
