import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nombre: string = 'Nombre Usuario';

  constructor(private _dataService: DataService) { }

  cambiarNombre(): void {
    this.nombre = 'Acxel';
    this._dataService.nombreUsuario = this.nombre;
  }

  public hijoCambioNombre(evt: any): void {
    this.nombre = evt;
    this._dataService.nombreUsuario = evt;
  }

}
