import { Directive, ElementRef, Injector, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input'
})
export class DirectiveOfDoom {
  constructor() {
  // constructor(private el: ElementRef) {
  // constructor(private i: Injector) {
    console.log('who is it?');
    console.log('Your doom!!!!');
    console.log('No one opens the door for their doom');
    console.log('Oh. Basket of puppies!!');
    // console.log('what up!: ', el);
  }
}
