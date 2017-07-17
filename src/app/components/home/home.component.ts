import {Component, OnInit} from "@angular/core";
import {ApiService} from "../../services/api.services";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    providers: [ApiService]


})

export class HomeComponent implements OnInit {

    public title = "This is home component";
    public name: string;
    public id: number;
    public attandance:Array<any> = [];


    constructor(private api_service: ApiService) {

    }


    ngOnInit() {
        console.log("Home Component");
        this.api_service.getAttandance()
            .subscribe(
                response => this.attandance = response.json(),
                error => console.log(error));
    }
    


}