import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[movieCardHover]'
})
export class CardHoverDirective {
  constructor(private el: ElementRef,
    private renderer: Renderer) {
    //el.nativeElement.style.backgroundColor = "gray";
    //renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }
  @HostListener('mouseover') onmouseover() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.borderColor = 'green';
  }

  @HostListener('mouseout') onmouseout() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.borderColor = 'lightskyblue';
  }

  @HostBinding('style.border-color') borderColor: string;
}
