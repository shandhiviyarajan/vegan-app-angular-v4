import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


import {HomeComponent} from "../../components/home/home.component";
import {MenuComponent} from "../../components/menu/menu.component";
import {CategoryComponent} from "../../components/category/category.component";
import {FoodComponent} from "../../components/food/food.component";
import {CartComponent} from "../../components/cart/cart.component";
import {LoginComponent} from "../../components/login/login.component";
import {RegisterComponent} from "../../components/register/register.component";


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'menu',
        component: MenuComponent,
        children: [{
            path: 'category',
            component: CategoryComponent
        }]
    },

    {
        path: 'menu',
        component: FoodComponent
    },

    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path:'**',
        redirectTo:'home'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}