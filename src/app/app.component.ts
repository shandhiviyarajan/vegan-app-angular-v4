import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private router: Router, private titleService: Title) {

    }

    ngOnInit() {
        this.titleService.setTitle('My awesome app');
        this.router.events.subscribe((event) => {
        })
    }
}


