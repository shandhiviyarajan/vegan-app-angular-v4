/**
 * Home Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.services";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ApiService]


})

export class HomeComponent implements OnInit {

    menu: Array<any> = [];
    show: boolean = false;

    constructor(private api_service: ApiService) {

    }

    ngOnInit() {
        console.log("Home Component");
    }
}