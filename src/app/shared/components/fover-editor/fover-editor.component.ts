import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fover-editor',
    templateUrl: './fover-editor.component.html',
    styleUrls: ['./fover-editor.component.scss']
})
export class FoverEditorComponent implements OnInit
{
    @Input() language: 'typescript' | 'html' = 'html';
    @Input() code: string = "Digite o código que vai aparecer na tela";
    @Input() editorOptions = {
        theme: 'vs-dark', 
        language: 'html',
        readOnly: true,
        scrollBeyondLastLine: false,
        
        wrappingStrategy: "advanced",
        
        minimap: {
            enabled: false
        },
    };

    ngOnInit(): void 
    {
        this.editorOptions.language = this.language;
    }
}