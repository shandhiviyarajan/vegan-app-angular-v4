import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor() {

    }

   my_date = new Date("1987,03,26");
}