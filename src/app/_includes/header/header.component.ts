import {Component, OnInit} from "@angular/core";
import {AuthService, CartService} from "../../services/";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [AuthService, CartService]
})

export class HeaderComponent implements OnInit {
    constructor(private router: Router, private Auth: AuthService) {

    }

    public isLoggedIn = false;
    public side_menu: boolean = false;
    public user: any;


    ngOnInit() {
        this.getUserInfo();

    }

    public getUserInfo() {
        this.isLoggedIn = AuthService.isAuth();
        if (AuthService.isAuth()) {
            this.user = JSON.parse(localStorage.getItem("current_user"));
            this.Auth.getUser(this.user.id).subscribe(
                success => {
                    this.user = success;
                    console.log(this.user);
                }
            )
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