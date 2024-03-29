import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'transparent';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'transition', '0.1s');
    this.backgroundColor = this.defaultColor;
  }
}
