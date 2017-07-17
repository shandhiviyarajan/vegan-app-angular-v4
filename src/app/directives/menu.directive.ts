import {Directive, ElementRef, HostListener, Input} from "@angular/core";
declare var $: any;
declare var jQuery: any;
@Directive({
    selector: '[app-ov-custom-selector]'
})
export class AppMenuDirective {
    constructor(private element: ElementRef) {
        console.log(element);
       // element.nativeElement.style.background = 'red';
       // $(element.nativeElement).html("fuck");
    }
    @HostListener('mouseenter') onMouseEnter() {
        console.log(this.element);
    }
    @HostListener('mouseleave') onMouseLeave() {

    }
}