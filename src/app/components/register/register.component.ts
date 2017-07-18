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
    constructor(private Auth: AuthService, private router: Router) {

    }

    username: string;
    password: string;
    email: string;
    newUser = new User();

    /**
     * Create user
     */
    public register(form) {

        console.log(this.router);

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