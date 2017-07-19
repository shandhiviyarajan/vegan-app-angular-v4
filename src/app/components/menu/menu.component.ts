import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.services";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [ApiService]
})
export class MenuComponent implements OnInit {

    public menu: any;

    constructor(private Api: ApiService) {

    }

    ngOnInit() {
        this.getAllMenu();
    }
    public getAllMenu() {

        this.Api.getMenu()
            .subscribe(
                success => {
                    console.log(success);
                    this.menu = success;
                },

                error => {
                    console.log("Error");
                }
            )

    }


}