/**
 * Register Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Component} from "@angular/core";
import {AuthService} from "../../services";
import {Router} from "@angular/router";
import {User} from "../../models/User";


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    providers: [AuthService]
})

export class RegisterComponent {

    //Inject AuthService and Router
    constructor(private Auth: AuthService,
                private router: Router) {

    }

    username: string;
    password: string;
    email: string;
    //Create a new user object using User Class /models/User.ts
    newUser = new User();

    //Create new user
    public register(form) {
        this.newUser.username = form.username;
        this.newUser.password = form.password;
        this.newUser.email = form.email;

        this.Auth.create(this.newUser).subscribe(
            success => {
                alert("Registration Successful");
                this.router.navigate(['../login']);
            },
            error => {
                alert("Registration Unsuccessful")
            }
        )
    }
}