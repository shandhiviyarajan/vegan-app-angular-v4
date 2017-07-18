import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/toPromise';
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";

@Injectable()
export class ApiService implements OnInit {

    constructor(private http: Http) {

    }

  // private static API_ENDPOINT = "http://139.59.224.134/index.php/api";
    private static API_ENDPOINT = "http://localhost:3000"

    public Users(): Observable<any> {
        return this.http.get(ApiService.API_ENDPOINT + "/user");
    }
    public Menu() {
        return this.http.get(ApiService.API_ENDPOINT + "/menu")
    }
    public Product() {
        
        return this.http.get(ApiService.API_ENDPOINT + "/product");

    }


    ngOnInit() {
    }

}