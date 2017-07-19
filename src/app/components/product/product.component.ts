import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
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

    public addToCart(form) {


        if (AuthService.isAuth()) {
            console.log(form);
            console.log(this.product_id);
        } else {
            this.router.navigate(['/login']);
        }

    }
}