/**
 * Cart Component
 * Author Shan Dhiviyarajan <prashasoft@gmail.com>
 */
import {Component, OnInit} from "@angular/core";
import {CartService} from "../../services/cart.service";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

//Cart component decorative
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    providers: [CartService, ApiService] // include the services
})

//Export cart component
export class CartComponent implements OnInit {

    //Inject services
    constructor(private CartService: CartService, private router: Router, private ApiService: ApiService) {

    }

    public user_id: number;
    public product_id: number;
    public cart_items: Array<any> = [];  //any type of array
    public no_cart_items: boolean = false;


    //Component life cycle hook
    ngOnInit() {


        //Check user logged in or not
        if (AuthService.isAuth()) {
            //Get the user ID from localStorage
            this.user_id = JSON.parse(localStorage.getItem('current_user'))[0].id;
            this.CartService.showCart(this.user_id)
                .subscribe(
                    success => {
                        //Check if have cart items

                        if (success.length == 0) {
                            alert("No items found !");
                            this.no_cart_items = true;
                        } else {
                            CartService.CART_COUNT = success.length;
                            this.cart_items = success;

                        }
                    },
                    error => {
                        alert("Error loading cart items");
                    }
                )
        } else {
            //redirect to login page
            this.router.navigate(['/login']);
        }
    }
}
