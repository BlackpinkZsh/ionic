import { Directive, ElementRef, Injector, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input'
})
export class KittieKat {
  constructor(private el: ElementRef, private i: Injector) {
    console.log('I am a kitty kat');
    console.log('and I dance dance dance');
    console.log('what up!: ', this.i);
  }
}
