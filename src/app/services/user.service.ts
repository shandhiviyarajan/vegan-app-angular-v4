/**
 * Demo user service
 * Author - Shan Dhiviyarjan <prashasoft@gmail.com>
 */

import {Injectable} from "@angular/core";
import construct = Reflect.construct;
import {Http} from "@angular/http";
import {ApiService} from "./api.service";

//Create an injectable service
@Injectable()
export class UserService {
    //Inject the http service
    constructor(private http: Http) {
    }

    //Login 
    public login(username) {
        //Will return a observable stream
        return this.http.get(ApiService.API_ENDPOINT + "/users/?username=" + username);
    }


}

