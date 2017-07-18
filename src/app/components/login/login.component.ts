import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})

export class LoginComponent {
    constructor(private Auth: AuthService) {

    }

    username: string;
    password: string

    /**
     * Login user
     */
    public userLogin() {
        this.Auth.login({
            "username": this.username,
            "password": this.password
        })
    }

    public loginOut() {

    }


}