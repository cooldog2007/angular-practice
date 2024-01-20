import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('heading')
  header: ElementRef | null = null;

  @ContentChild('serverParagraph')
  serverParagraph: ElementRef | null = null;

  @Input('srvElement')
  element: Server = { type: 'server', name: 'test', content: 'test' };

  @Input('srvName')
  name: string = '';

  constructor() {
    console.log('constructer');
  }
  ngOnDestroy(): void {
    console.log('destroyed');
  }
  ngAfterViewInit(): void {
    console.log(
      `after view init | view child - ${this.header?.nativeElement.textContent}`
    );

    console.log(
      `after view init | content child - ${this.serverParagraph?.nativeElement.textContent} `
    );
  }
  ngAfterViewChecked(): void {
    console.log('after view checkedt');
  }

  ngOnInit(): void {
    console.log(`on init - ${this.header?.nativeElement.textContent}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('do be checkin');
  }

  ngAfterContentInit(): void {
    console.log(
      `after content init | content child - ${this.serverParagraph?.nativeElement.textContent} `
    );
  }
  ngAfterContentChecked(): void {
    console.log('after content checjkd');
  }
}
