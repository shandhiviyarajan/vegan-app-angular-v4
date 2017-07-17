import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {OrderModule} from 'ngx-order-pipe';

/*
 Application modules */
import {AppRouterModule, PageComponents} from "./module/router.module";
/*
 Application Components */
import {AppComponent} from "./app.component";


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        OrderModule,
        AppRouterModule
    ],
    declarations: [
        AppComponent,
        PageComponents
    ],

    bootstrap: [AppComponent]
})
export class AppModule {
}
