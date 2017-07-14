import {Directive, ElementRef, HostListener, Input} from "@angular/core";
declare var $: any;
declare var jQuery: any;
@Directive({
    selector: '[ov-custom-hover]'
})


export class MenuDirective {
    constructor(private element: ElementRef) {
        console.log(element);
        element.nativeElement.style.background = 'red';
        $(element.nativeElement).html("");
    }

    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.element);
    }

    @HostListener('mouseleave') onMouseLeave() {

    }
}