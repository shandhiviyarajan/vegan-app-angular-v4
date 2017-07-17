import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ApiService {

    constructor(private http: Http) {

    }

    private static API_ENDPOINT = "http://localhost:3000/";

    public getAttandance(): Observable<any> {
        return this.http.get(ApiService.API_ENDPOINT + "attandance");
    }
    
}