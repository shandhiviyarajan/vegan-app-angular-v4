import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent {
    constructor(private Auth: AuthService, private router: Router) {

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
                this.router.navigate(['/menu']);
            },
            error => {
                alert("Login failed");
            }
        )
    }

    public loginOut() {

    }


}