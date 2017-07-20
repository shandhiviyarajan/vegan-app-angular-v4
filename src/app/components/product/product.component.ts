/**
 * Product Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */


import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

//import app services
import {ApiService} from "../../services/api.services";
import {AuthService} from "../../services/auth.service";
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    providers: [ApiService]
})
export class ProductComponent implements OnInit {


    public product_id: number;
    public product: any = [];
    public menu_title: string;
    public quantity = 1;


    constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private Api: ApiService) {

    }

    ngOnInit() {

        this.product_id = this.ActivatedRoute.snapshot.params['id'];

        this.Api.getProductId(this.product_id)
            .subscribe(
                success => {
                    this.product = success;

                    this.Api.getMenuId(this.product.menu_id)
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

            JSON.parse(localStorage.getItem('current_user'))['id'];
            console.log(JSON.parse(localStorage.getItem('current_user'))['id']);
            console.log(this.product_id);
            console.log(this.product.menu_id);
            console.log(form.value);

        } else {

            //Redirect user to login page
            alert("Please login to add to cart !");
            this.router.navigate(['/login']);
        }

    }
}