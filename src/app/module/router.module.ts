import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "../_includes/header/header.component";
import {FooterComponent} from "../_includes/footer/footer.component";
import {SubMenuComponent} from "../_includes/sub_menu/submenu.component";
import {HomeComponent} from "../components/home/home.component";
import {MenuComponent} from "../components/menu/menu.component";
import {CategoryComponent} from "../components/category/category.component";
import {FoodComponent} from "../components/food/food.component";
import {CartComponent} from "../components/cart/cart.component";
import {LoginComponent} from "../components/login/login.component";
import {RegisterComponent} from "../components/register/register.component";


const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
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
        path: '**',
        redirectTo: 'home'
    }
];

export const PageComponents = [HeaderComponent, FooterComponent, SubMenuComponent, HomeComponent, MenuComponent, CategoryComponent, FoodComponent, CartComponent, LoginComponent, RegisterComponent];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {

}

