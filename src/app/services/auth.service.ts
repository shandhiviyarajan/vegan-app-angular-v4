import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
@Injectable()


export class AuthService {
    constructor(private request: Http) {

    }

    //User Login
    login(credentials) {

        return this.request.get("http://localhost:3000/user/?username" + credentials.username + "&password=" + credentials.password)
            .map((response: Response) => response.json());

    }


    //User registration
    create(user) {

        return this.request.post("http://localhost:3000/user/",user)
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