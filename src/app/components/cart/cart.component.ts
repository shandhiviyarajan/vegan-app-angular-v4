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
                        console.log(success);
                        //Check if have cart items 
                        if (success.length == 0) {
                            alert("No items found !");
                            this.no_cart_items = true;
                        } else {
                            //Get product information

                            this.product_id = success.product_id;

                            this.ApiService.getProductId(this.product_id)
                                .subscribe(
                                    success => {
                                        console.log(success);
                                    },
                                    error => {
                                        alert("No products found !");
                                    }
                                );

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
