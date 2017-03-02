import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {CustomSelect} from './custom-select/custom-select.component';
import { AppService } from './app.service'

/* Modules */

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CustomSelect
    ],
    bootstrap: [AppComponent],
    providers: [AppService]
})

export class AppModule { }