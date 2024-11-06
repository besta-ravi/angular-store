import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBgcolor]'
})
export class CustomBgcolorDirective {

  constructor(private eleRef:ElementRef) { }
  @Input('mytext') mytext:ElementRef<HTMLElement> ;
  ngOnInit(){
    
    this.eleRef.nativeElement.style.background = 'white';
  }
  @HostListener('input')
  // @HostListener('change')
  onChange($event) {
    let val = this.eleRef.nativeElement as HTMLInputElement

    console.log('in change InputTextFilterDirective',val.value.includes('aeiou'));
    if(val.value.includes('a')){
      this.eleRef.nativeElement.style.background = 'green';
    }else if(val.value.includes('e')){
      this.eleRef.nativeElement.style.background = 'green';
    }else if(val.value.includes('i')){
      this.eleRef.nativeElement.style.background = 'green';
    }else if(val.value.includes('o')){
      this.eleRef.nativeElement.style.background = 'green';
    }else if(val.value.includes('u')){
      this.eleRef.nativeElement.style.background = 'green';
    }else{
      this.eleRef.nativeElement.style.background = 'red';
    }
    
  }
}