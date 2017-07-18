import {Component} from '@angular/core';
import {ApiService} from "../../services/api.services";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [ApiService]
})
export class MenuComponent {

    menu = [];

    constructor(private api_services: ApiService) {

        this.getAllMenu();
    }

    public getAllMenu() {
        this.api_services.Menu()
            .subscribe(
                response => console.log(response),
                error => console.log("Error")
            );
    }
}