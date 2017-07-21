/**
 * App Module
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";  //used to build forms

import {OrderModule} from 'ngx-order-pipe'; //used to sort the [ngFor] results


/*
 Application modules */
import {AppRouterModule, PageComponents} from "./app.router";
/*
 Application Components */
import {AppComponent} from "./app.component";
import {MenuDirective} from "./directives/menu.directive";
import { JokeComponent } from './joke/joke.component';

//Bootstrap your application
@NgModule({

    //Your imported modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        OrderModule,
        AppRouterModule //Your AppRouterModule   "app.router.ts"
    ],
    //Your app components
    declarations: [
        AppComponent,
        PageComponents,
        MenuDirective,
        JokeComponent
    ],
    //Your app component to start
    bootstrap: [AppComponent]
})
export class AppModule {
}
