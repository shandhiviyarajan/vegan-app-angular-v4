/**
 * Auth Service
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Router} from "@angular/router";
import {ApiService} from "./api.service"; // importing my ApiService to access my API_ENDPOINT eg : ApiService.API_ENDPOINT
@Injectable()
export class AuthService {
    //Injecting the HTTP service
    constructor(private request: Http,
                private router: Router) {
    }

    //User Login
    login(credentials) {
        //For login we use POST for Demo purpose i use GET here (fake db)
        return this.request.get(ApiService.API_ENDPOINT + "/users/?username=" + credentials.username + "&password=" + credentials.password)
            .map((response: Response) => response.json());

    }

    //Create authenticated variable
    public static isAuthenticated: boolean = false;

    //Check is use authenticated
    public static isAuth() {
        if (localStorage.getItem("current_user") != null && localStorage.getItem("current_user")['id'] != "undefined") {
            AuthService.isAuthenticated = true;
        } else {
            AuthService.isAuthenticated = false;
        }
        return AuthService.isAuthenticated;
    }

    //User logout
    logout() {
        AuthService.isAuthenticated = false;
        localStorage.removeItem("current_user");
        this.router.navigate(['/home']);
    }

    //User registration
    create(user) {
        //http will return a observable and .map will return ANY response as JSON
        return this.request.post(ApiService.API_ENDPOINT + "/users/", user)
            .map((response: Response) => response.json());
    }

    //Get user by ID
    getUser(id: number) {
        //http will return a observable and .map will return ANY response as JSON
        return this.request.get(ApiService.API_ENDPOINT + "/users/" + id)
            .map((response: Response) => response.json());
    }

    //User Update
    update(user) {
        //http will return a observable and .map will return ANY response as JSON
        return this.request.put(ApiService.API_ENDPOINT + "/users/" + user.id, user)
            .map((response: Response) => response.json());
    }

    //Delete user
    delete(id: number) {
        //http will return a observable and .map will return ANY response as JSON
        return this.request.delete(ApiService.API_ENDPOINT + "/users/" + id)
            .map((response: Response) => response.json());
    }
}