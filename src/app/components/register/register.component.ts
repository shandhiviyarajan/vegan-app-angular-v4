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
    public register() {


        this.newUser.username = this.username;
        this.newUser.password = this.password;
        this.newUser.email = this.email;

        this.Auth.create(this.newUser).subscribe(
            success => {
                alert("Registration Successful");
                this.router.navigate(['/login']);
            },
            error => {
                alert("Registration Unsuccessful")
            }
        )
    }
}