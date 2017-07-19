import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OrderModule} from 'ngx-order-pipe';


/*
 Application modules */
import {AppRouterModule, PageComponents} from "./app.router";
/*
 Application Components */
import {AppComponent} from "./app.component";
import {MenuDirective} from "./directives/menu.directive";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        OrderModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        PageComponents,
        MenuDirective
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
