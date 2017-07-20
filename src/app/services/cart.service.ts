/**
 * Cart Service
 * Author - Shan Dhiviyarajan <prashasoft@gmail.com>
 */

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {ApiService} from "./api.services"; // importing my ApiService to access my API_ENDPOINT eg : ApiService.API_ENDPOINT

//Create a injectable service
@Injectable()

//Export class cart services
export class CartService {
    constructor(private http: Http) {}

    //Add to cart
    public addProductToCart(cart_item) {
        this.http.post(ApiService.API_ENDPOINT + "/cart/", cart_item)
            .map((response: Response) => response.json());
    }
}