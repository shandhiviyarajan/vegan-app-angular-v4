import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
/*
 Application modules */
import {AppRouterModule, PageComponents} from "./module/router/app.router.module";
/*
 Application Components */
import {AppComponent} from "./app.component";




@NgModule({
    declarations: [
        AppComponent,
        PageComponents
    ],
    imports: [
        BrowserModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
