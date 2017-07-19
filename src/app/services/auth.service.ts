import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Router} from "@angular/router";
@Injectable()
export class AuthService {
    constructor(private request: Http, private router: Router) {

    }


    //User Login
    login(credentials) {

        return this.request.get("http://localhost:3000/user/?username=" + credentials.username + "&password=" + credentials.password)
            .map((response: Response) => response.json());

    }

    public static isAuthenticated: boolean = false;

    public static isAuth() {
        if (localStorage.getItem("current_user") != null && localStorage.getItem("current_user")['id'] != "undefined") {
            AuthService.isAuthenticated = true;
        } else {
            AuthService.isAuthenticated = false;
        }
        console.log("isAuth = " + AuthService.isAuthenticated);
        return AuthService.isAuthenticated;
    }


    logout() {
        AuthService.isAuthenticated = false;
        localStorage.removeItem("current_user");
        this.router.navigate(['/home']);
    }


    //User registration
    create(user) {

        return this.request.post("http://localhost:3000/user/", user)
            .map((response: Response) => response.json());
    }

    //Get user by ID
    getUser(id: number) {
        return this.request.get("http://localhost:3000/user/" + id)
            .map((response: Response) => response.json());
    }

    //User Update
    update(user) {
        return this.request.put("http://localhost:3000/user/" + user.id, user)
            .map((response: Response) => response.json());
    }

    //Delete user
    delete(id: number) {
        return this.request.delete("http://localhost:3000/user/" + id)
            .map((response: Response) => response.json());
    }


}