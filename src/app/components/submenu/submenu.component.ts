/**
 * Submenu Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.services";
@Component({
    selector: 'app-submenu',
    templateUrl: 'submenu.component.html',
    providers: [ApiService]
})

export class SubmenuComponent implements OnInit {


    public menu_id: number;
    public products: any;
    public menu_title: string;

    //Inject your services
    constructor(private ActivatedRoute: ActivatedRoute,
                private Api: ApiService) {
    }

    //Component life cycle hook
    ngOnInit() {
        // Get the route params ID using ActivatedRoute
        this.menu_id = this.ActivatedRoute.snapshot.params['id'];
        this.Api.getMenuId(this.menu_id)
            .subscribe(
                success => {
                    this.menu_title = success.title;
                }
            );
        this.Api.getProduct(this.menu_id)
            .subscribe(
                success => {
                    this.products = success;
                }
            )
    }
}