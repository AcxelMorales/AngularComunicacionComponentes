import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public _dataService: DataService) { }

}
