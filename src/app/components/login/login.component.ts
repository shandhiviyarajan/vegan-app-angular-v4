import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent implements OnInit {
    constructor(private Auth: AuthService, private router: Router) {

    }


    ngOnInit() {
        if (AuthService.isAuth()) {
            this.router.navigate(['/settings']);
        }
    }

    /**
     * Login user
     */
    public login(form) {

        this.Auth.login({
            "username": form.username,
            "password": form.password
        }).subscribe(
            success => {
                alert("Login Success");
                localStorage.setItem("current_user", JSON.stringify(success));
                AuthService.isAuthenticated = true;
                this.router.navigate(['/menu']);

            },
            error => {
                alert("Login failed");
            }
        )

    }

    public loginOut() {
        AuthService.isAuthenticated = false;
        localStorage.removeItem("current_user");
    }


}