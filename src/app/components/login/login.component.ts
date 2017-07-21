/**
 * Login Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService, UserService} from "../../services/";
import {User} from "../../models/User";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],//can have a dedicated style file.
    providers: [AuthService, UserService] //Including the services annotation
})
//Exporting the login component
export class LoginComponent implements OnInit {

    //Injecting the services
    constructor(private UserService: UserService,
                private Auth: AuthService,
                private router: Router) {
    }


    public login_form;

    public logged_user = new User();

    //Angular Lifecycle hook
    ngOnInit() {

        //Login form constructor
        this.login_form = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        });

        //Check if logged in
        if (AuthService.isAuth()) {
            this.router.navigate(['/settings']);
        }


    }

//User login
    public login(form) {
        //call Auth login method
        this.Auth.login({
            "username": form.username,
            "password": form.password
        }).subscribe(
            success => {
                alert("Login Successful");
                //Store the user object to the localStorage;

                this.logged_user.id = success[0].id;
                this.logged_user.name = success[0].name;
                this.logged_user.email = success[0].email;
                this.logged_user.role = success[0].role;
                this.logged_user.username = success[0].username;
                this.logged_user.password = success[0].password;

                localStorage.setItem("current_user", JSON.stringify(this.logged_user));
                AuthService.isAuthenticated = true;
                this.router.navigate(['/home']);

            },
            error => {
                alert("Login failed");
            }
        )

    }

//User logout
    public loginOut() {
        AuthService.isAuthenticated = false;
        localStorage.removeItem("current_user");
    }


    //Demo login
    public demoLogin() {
        this.UserService.login("test_user").subscribe(
            success => alert("Hello"),
            error => alert("User not found")
        );
    }


}