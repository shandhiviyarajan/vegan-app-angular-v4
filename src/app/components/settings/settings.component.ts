import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/User";
import {Router} from "@angular/router";
@Component({
    selector: 'app-settings',
    providers: [AuthService],
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
    constructor(private Auth: AuthService, private router: Router) {

    }

    current_user = new User();
    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    role: string;
    image: string;


    ngOnInit() {

        if (AuthService.isAuth()) {
            var user_storage = JSON.parse(localStorage.getItem("current_user"));
            this.id = user_storage[0].id;
            this.name = user_storage[0].name;
            this.username = user_storage[0].username;
            this.password = user_storage[0].password;
            this.role = user_storage[0].role;
            this.email = user_storage[0].email;
            this.image = user_storage[0].image;


        } else {
            this.router.navigate(['/login']);
        }


    }


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
                    alert("User updated");
                    this.id = success.id;
                    this.name = success.name;
                    this.username = success.username;
                    this.email = success.email;
                    this.role = success.role;
                    this.password = success.password;

                    this.router.navigate(['/home']);
                }
            )

    }
}