import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {

  @Input() nombreHijo: string = 'sin nombre';
  @Output() cambioNombreHijo: EventEmitter<string> = new EventEmitter<string>();

  cambiarNombre(): void {
    this.nombreHijo = 'Juan López';
    this.cambioNombreHijo.emit(this.nombreHijo);
  }

}
