import {Injectable, OnInit} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/toPromise';
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";

@Injectable()
export class ApiService implements OnInit {

    constructor(private http: Http) {

    }

   // private static API_ENDPOINT = "http://139.59.224.134/index.php/api";
    private static API_ENDPOINT = "http://localhost:3000";

    public getMenu() {
        return this.http.get(ApiService.API_ENDPOINT + "/menu")
            .map((response: Response) => response.json());
    }


    public getMenuId(id:number) {
        return this.http.get(ApiService.API_ENDPOINT + "/menu/"+id)
            .map((response: Response) => response.json());
    }

    public getProductId(id: number) {
        return this.http.get(ApiService.API_ENDPOINT + "/product/" + id)
            .map((response: Response) => response.json());
    }

    public getProduct(id: number) {
        return this.http.get(ApiService.API_ENDPOINT + "/product/?menu_id=" + id)
            .map((response: Response) => response.json());
    }





    ngOnInit() {
    }

}