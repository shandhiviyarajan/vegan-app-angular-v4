/**
 * Menu Directive - Custom Directive - sample
 */

import {Directive, ElementRef} from "@angular/core";
declare var $: any;
declare var jQuery: any;

//Directive decorator
@Directive({
    selector: '[MenuIcon]' // attribute selector
})

export class MenuDirective {
    constructor(private element: ElementRef) {

        //getting the native element
        console.log(element.nativeElement);

        //using jquery 
        console.log($(element.nativeElement))

    }

}