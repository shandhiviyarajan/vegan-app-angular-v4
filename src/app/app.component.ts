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
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private titleService: Title, private Auth: AuthService) {
    }
    ngOnInit() {
        this.titleService.setTitle('My awesome app');
        AuthService.isAuth();
    }
}
