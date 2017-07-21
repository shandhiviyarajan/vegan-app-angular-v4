/**
 * Product Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */


import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

//import app services
import {ApiService, AuthService, CartService} from "../../services/";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    providers: [ApiService, CartService]
})
export class ProductComponent implements OnInit {


    public product_id: number;
    public product: any = [];
    public menu_title: string;
    public quantity = 1;
    public cart_item = {};
    public cart = [];

    //Inject services
    constructor(private router: Router,
                private ActivatedRoute: ActivatedRoute,
                private ApiService: ApiService,
                private CartService: CartService) {

    }

    //Component life cycle hook
    ngOnInit() {
        //Get the product id from route using ActivatedRoute
        this.product_id = this.ActivatedRoute.snapshot.params['id'];
        //Get the product id
        this.ApiService.getProductId(this.product_id)
            .subscribe(
                success => {
                    this.product = success;

                    //Get the menu id
                    this.ApiService.getMenuId(this.product.menu_id)
                        .subscribe(
                            success => {
                                this.menu_title = success.title
                            }
                        )
                },
                error => console.log("error")
            );


    }


    //Add to cart
    public addToCart(form) {

        //Check if user logged in
        if (AuthService.isAuth()) {

            //make a cart object
            this.cart_item = {
                "user_id": JSON.parse(localStorage.getItem('current_user'))[0].id,
                "product": this.product,
                "quantity": form.quantity,
                "menu_id": this.product.menu_id
            };


            //Add to cart using cart service
            this.CartService.addToCart(this.cart_item)
                .subscribe(
                    success => {
                        alert("Your product added !");
                        this.router.navigate(['/cart']);
                    },
                    error => alert("Error adding product")
                )
        } else {

            //Redirect user to login page
            alert("Please login to add to cart !");
            this.router.navigate(['/login']);
        }

    }
    
}