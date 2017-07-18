import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor() {
    }

    my_date:Date = new Date("1987,03,26");
    side_menu: boolean = false;


    public showHideMenu() {
        this.side_menu = (this.side_menu) ? false : true;
        console.log(this.side_menu);
    }
}