import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[apply-counter]'
  // selector: '[ngModel][apply-counter]' //ngModel is a must!
})
export class ApplyCounterDirective {

  @HostBinding('class.bg-success') bgClass = false;  //Property binding
  @HostListener('click', ['$event']) myClick() { //Event binding
    this.bgClass = !this.bgClass;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
    setTimeout(() => {

      this.bgClass = true;
    }, 5000);

  }

  ngOnInit() {
    console.dir(this.el.nativeElement);
    // this.renderer.setElementClass(....);
  }

}
