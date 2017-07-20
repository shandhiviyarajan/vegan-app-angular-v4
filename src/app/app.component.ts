/**
 * App Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [AuthService]  //AuthService annotation
})

//export AppComponent class
export class AppComponent implements OnInit {

    //Dependency injection - injecting the services
    constructor(private router: Router,
                private titleService: Title,
                private Auth: AuthService) {
    }


    //Component life cycle hook
    ngOnInit() {
        this.titleService.setTitle('Sample Angular4 Applicaiton');
        AuthService.isAuth();
    }
}
