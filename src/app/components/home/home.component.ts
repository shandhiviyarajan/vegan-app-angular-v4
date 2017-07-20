/**
 * Home Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {ApiService,AuthService} from "../../services/";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ApiService]


})

export class HomeComponent implements OnInit {

    menu: Array<any> = [];
    show: boolean = false;
    isLoggedIn = false;

    constructor(private ApiService: ApiService) {

    }

    ngOnInit() {
        console.log("Home Component");
        this.isLoggedIn = AuthService.isAuth();
    }
}