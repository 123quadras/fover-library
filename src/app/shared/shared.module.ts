import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerExampleModule } from './components/container-example/container-example.module';
import { HeaderPageModule } from './components/header-page/header-page.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FoverEditorModule } from './components/fover-editor/fover-editor.module';
import { SetThemeNameClassModule } from './directives/set-theme-name-class/set-theme-name-class.module';
// Sempre usa a referencia da lib para realizar testes
import { 
    FoverButtonModule, 
    FoverAlertModule,
    FoverCheckboxModule,
    FoverInputModule,
    FoverLoadingModule,
    FoverModalModule, 
    FoverNotificationModule,
    FoverSelectModule,
} from 'fover-library';
import { ExamplesTitlesModule } from './components/examples-titles/examples-titles.module';

@NgModule({
    exports: [
        CommonModule,
        ReactiveFormsModule,
        HeaderPageModule,
        ContainerExampleModule,
        FoverEditorModule,
        SetThemeNameClassModule,
        ExamplesTitlesModule,
        /**
         * Componentes da lib
         * É declaro 1 a 1 para poder realizar testes
        */ 
        FoverButtonModule,
        FoverModalModule,
        FoverLoadingModule,
        FoverCheckboxModule,
        FoverAlertModule,
        FoverInputModule,
        FoverNotificationModule,
        FoverSelectModule,
    ],
})
export class SharedModule {}