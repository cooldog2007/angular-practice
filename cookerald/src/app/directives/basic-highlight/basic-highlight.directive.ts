import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {
    this.eRef.nativeElement.style.backgroundColor = 'green';
  }
}
