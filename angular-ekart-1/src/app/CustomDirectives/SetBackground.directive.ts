import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'

})
export class SetBackground{
    constructor(element: ElementRef){
        element.nativeElement.style.backgroundColor = 'red';
    }

}