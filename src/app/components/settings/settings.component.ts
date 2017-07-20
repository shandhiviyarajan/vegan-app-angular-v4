/**
 * Settings Component
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */
import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/";
import {User} from "../../models/User";
import {Router} from "@angular/router";

//Settings component
@Component({
    selector: 'app-settings',
    providers: [AuthService],
    //Created a inline form
    template: `
        <section id="settings_component" class="ov-component">
            <p>
                &nbsp;
            </p>
            <a routerLink="/home" class="logo_small">
                <img src="/assets/logo_small.svg" alt="">
            </a>
            <p>
                &nbsp;
            </p>
            <form
                    #updateForm="ngForm"
                    (ngSubmit)="update(updateForm.value)"
                    class="ov-form">
                <input class="form-control" type="text" name="name" placeholder="Name" [(ngModel)]="name">
                <input class="form-control" type="text" name="username" placeholder="Username" [(ngModel)]="username">
                <input class="form-control" type="text" name="email" placeholder="Email Address" [(ngModel)]="email"> <input class="form-control" type="text" name="role" placeholder="Designation" [(ngModel)]="role">
                <input class="form-control" type="password" name="password" placeholder="New Password" [(ngModel)]="password">
                <input class="form-control" type="password" name="confirm" placeholder="Conform Password" [(ngModel)]="confirm">
                <button>
                    Update Profile
                </button>
            </form>
        </section>
    `
})

export class SettingsComponent implements OnInit {

    //Injecting the services
    constructor(private Auth: AuthService,
                private router: Router) {

    }

    //Create a new user using User Class
    public current_user = new User();
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    role: string;
    image: string;
    public user_storage;


    //Component life cycle hook runs right after your component loads.
    ngOnInit() {

        if (AuthService.isAuth()) {
            this.user_storage = JSON.parse(localStorage.getItem("current_user"));
            this.id = this.user_storage[0].id;
            this.name = this.user_storage[0].name;
            this.username = this.user_storage[0].username;
            this.password = this.user_storage[0].password;
            this.role = this.user_storage[0].role;
            this.email = this.user_storage[0].email;
            this.image = this.user_storage[0].image;


        } else {
            //Redirect the route to login
            this.router.navigate(['/login']);
        }


    }

    //Profile update function
    update = function (form) {
        this.current_user.id = this.id;
        this.current_user.name = this.name;
        this.current_user.email = this.email;
        this.current_user.role = this.role;
        this.current_user.username = this.username;
        this.current_user.password = this.password;

        this.Auth.update(this.current_user)
            .subscribe(
                success => {
                    alert("Profile information updated");
                    this.id = success.id;
                    this.name = success.name;
                    this.username = success.username;
                    this.email = success.email;
                    this.role = success.role;
                    this.password = success.password;

                    //Redirect to home
                    this.router.navigate(['/home']);
                }
            )

    }
}