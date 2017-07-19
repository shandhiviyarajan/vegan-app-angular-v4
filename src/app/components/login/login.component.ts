import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormGroup, FormControl} from "@angular/forms";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent implements OnInit {
    constructor(private Auth: AuthService, private router: Router) {


    }


    login_form;

    ngOnInit() {

        this.login_form = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });


        if (AuthService.isAuth()) {
            this.router.navigate(['/settings']);
        }


    }

    /**
     * Login user
     */

    public login(form) {
        console.log(form);

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