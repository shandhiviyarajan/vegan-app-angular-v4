/**
 * Api Service
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
//import {Observable} from "rxjs/Observable";
// import 'rxjs/add/operator/toPromise';
// import "rxjs/add/operator/catch";
// import "rxjs/add/operator/map";


//Using injectable decoration for injectable service
@Injectable()

//exporting my service
export class ApiService {

    //Injecting the HTTP service
    constructor(private http: Http) {

    }

    //My public static API Endpoint using fake json-server db.json
    public static API_ENDPOINT = "http://localhost:3000";

    //Get menu items
    public getMenu() {

        //http will return a observable and .map will return ANY response as JSON
        return this.http.get(ApiService.API_ENDPOINT + "/menu")
            .map((response: Response) => response.json());
    }

    //Get menu item by id
    public getMenuId(id: number) {
        return this.http.get(ApiService.API_ENDPOINT + "/menu/" + id)
            .map((response: Response) => response.json());
    }

    //Get product by id
    public getProductId(id: number) {
        return this.http.get(ApiService.API_ENDPOINT + "/product/" + id)
            .map((response: Response) => response.json());
    }

    //Get products by menu id
    public getProduct(id: number) {
        return this.http.get(ApiService.API_ENDPOINT + "/product/?menu_id=" + id)
            .map((response: Response) => response.json());
    }

}