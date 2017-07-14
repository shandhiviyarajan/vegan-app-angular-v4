import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

/*
 Application modules */
import {AppRouterModule} from "./module/router/app.router.module";

/*
 Application includes */
import {HeaderComponent} from "./_includes/header/header.component";
/*
 Application Components */

import {MenuComponent} from './components/menu/menu.component';
import {HomeComponent} from "./components/home/home.component";
import {CategoryComponent} from "./components/category/category.component";
import {CartComponent} from "./components/cart/cart.component";
import {FoodComponent} from "./components/food/food.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AppComponent} from "./app.component";
import {MenuDirective} from "./directives/menu.directive";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        MenuComponent,
        CategoryComponent,
        CartComponent,
        FoodComponent,
        LoginComponent,
        RegisterComponent,
        MenuDirective

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
