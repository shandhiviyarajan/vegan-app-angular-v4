import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [AuthService]
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router, private Auth: AuthService) {

    }

    public isLoggedIn = false;
    public side_menu: boolean = false;
    public user = false;

    ngOnInit() {
        this.getUserInfo();
    }

    public getUserInfo() {
        this.isLoggedIn = AuthService.isAuth();
        if (localStorage.getItem("current_user") != null) {
            this.user = JSON.parse(localStorage.getItem("current_user"))[0];
        } else {
            this.user = false;
        }
    }


    public showHideMenu() {
        this.side_menu = (this.side_menu) ? false : true;
        this.isLoggedIn = AuthService.isAuth();
        this.getUserInfo();
    }

    public logout() {
        this.Auth.logout();
    }
}