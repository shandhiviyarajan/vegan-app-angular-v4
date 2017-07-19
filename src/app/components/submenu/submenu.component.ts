import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
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

    constructor(private router: Router, private ActivatedRoute: ActivatedRoute, private Api: ApiService) {


    }

    ngOnInit() {
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