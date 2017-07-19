import {Directive, ElementRef, HostListener, Input, Renderer} from "@angular/core";
declare var $: any;
declare var jQuery: any;


@Directive({
    selector: '[MenuIcon]'
})

export class MenuDirective {
    constructor(private element: ElementRef) {


        
    }

}