import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  id: string = '';
  disableSubmit: boolean = true;
  isDisabled: boolean = true;
  isChecked: boolean = false;
  visit: string = '';
  addLabel: string = '';
  name = 'Angular';
  selectedText = '';
  labelArry = [];
  enterText="";
  @Input('mytext') private mytext: ElementRef<HTMLElement>;
  // public getSelection(): void {
  //   const currentSelection: Selection = window.getSelection();
  //   const currentSelectedText: string = currentSelection.toString();
  //   this.labelArry.push(currentSelectedText);
  //   const divText = this.mytext.nativeElement.innerHTML;
  //   this.selectedText = divText;
  //   console.log(this.labelArry);
  //   console.log(this.selectedText);
  //   for (let x in this.labelArry) {
  //     if (this.selectedText.includes(this.labelArry[x])) {
  //       this.selectedText = divText.replace(
  //         this.labelArry[x],
  //         '<span style="background-color:#FFF176;">' +
  //           this.labelArry[x] +
  //           '</span>'
  //       );
  //       console.log(31, this.selectedText);
  //       this.renderer.setProperty(
  //         this.mytext.nativeElement,
  //         'innerHTML',
  //         this.selectedText
  //       );
  //     }
  //   }
  // }

  // visitUpdate() {
  //   if (this.visit === 'no') {
  //     const divText = this.mytext.nativeElement.innerHTML;
  //     this.selectedText = divText;
  //     if (this.labelArry.length > 0) {
  //       for (let k = 0; k < this.labelArry.length; k++) {
  //         if (this.selectedText.includes(this.labelArry[k])) {
  //           this.labelArry.splice(k, 1);
  //         }
  //       }
  //     }
  //     if (this.labelArry.length > 0) {
  //       for (let k = 0; k < this.labelArry.length; k++) {
  //         if (this.selectedText.includes(this.labelArry[k])) {
  //           alert(this.labelArry[k]);

  //           this.labelArry.splice(k, 1);
  //         } else {
  //           setTimeout(() => this.highlightText(), 500);
  //         }
  //       }
  //     }
  //   }
  // }
  // delete(key: any) {
  //   console.log(key);
  //   // const index = this.labelArry.indexOf(key, 0);
  //   if (key > -1) {
  //     this.labelArry.splice(key, 1);
  //   }
  //   // this.getSelection()
  //   const divText = this.mytext.nativeElement.innerHTML;
  //   this.selectedText = divText;
  //   if (this.selectedText.includes(this.labelArry[key])) {
  //     this.selectedText = divText.replace(
  //       this.labelArry[key],
  //       '<span style="background-color:#fff;">' +
  //         this.labelArry[key] +
  //         '</span>'
  //     );
  //     console.log(31, this.selectedText);
  //     this.renderer.setProperty(
  //       this.mytext.nativeElement,
  //       'innerHTML',
  //       this.selectedText
  //     );
  //   }
  // }

  // addTextLabel(text: string) {
  //   console.log(!text);
  //   if (text) {
  //     this.addLabel = '';
  //     this.labelArry.push(text);
  //   }
  // }
  // ngAfterViewInit() {
  //   setTimeout(() => this.highlightText(), 500);
  // }

  // highlightText(): void {
  //   this.mytext.nativeElement.innerHTML = 'vinegar for sunburn reddit';
  // }
}
