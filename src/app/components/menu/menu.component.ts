/**
 * Menu Component
 * Author Shan Dhiviyarajan <prashasoft@gmail.com>
 */
import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.services";
//Create menu component
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers: [ApiService]
})
export class MenuComponent implements OnInit {
    // 'any' can accept any data type
    public menu: any;

    //Inject ApiService
    constructor(private ApiService: ApiService) {

    }

    //Component life cycle hook
    ngOnInit() {

        //Show all the menu items on component load
        this.getAllMenu();
    }

    //Get all menu items
    public getAllMenu() {
        //Api call returns an observable stream of events so we can to use subscribe()
        this.ApiService.getMenu()
            .subscribe(
                success => {

                    this.menu = success;
                },
                error => {
                    console.log("Error loading menu items");
                }
            )
    }


}