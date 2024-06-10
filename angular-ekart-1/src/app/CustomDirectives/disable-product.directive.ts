import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[disableProduct]'
})
export class DisableProductDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set disableProduct(disable: Boolean){
    if(disable){
      this.renderer.addClass(this.element.nativeElement, 'disable-out-of-stock-product');
    }
  }
}
