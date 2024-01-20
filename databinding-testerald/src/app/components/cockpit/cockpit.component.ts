import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Server } from '../../server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverContentInput')
  serverContentInput: ElementRef<HTMLInputElement> | null = null;

  @Output('srCreated') serverAdded = new EventEmitter<Server>();

  // onAddServer(type: 'server' | 'blueprint') {
  //   const newServer: Server = {
  //     type,
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   };

  //   this.serverAdded.emit(newServer);
  // }

  onAddServer(type: 'server' | 'blueprint', name: string) {
    if (this.serverContentInput) {
      const newServer: Server = {
        type,
        name,
        content: this.serverContentInput.nativeElement.value,
      };

      this.serverAdded.emit(newServer);
    }
  }
}
