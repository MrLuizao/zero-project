import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  arrayItems: any;

  constructor() { }

  ngOnInit(): void {

    this.arrayItems = [
      { 
        icon: 'assets/icons/notificaciones-1.svg',
        text: 'Preferencia de notificaciones'
      },
      { 
        icon: 'assets/icons/contraseña.svg',
        text: 'Cambio de contraseña'
      },
      { 
        icon: 'assets/icons/correo_electronico.svg',
        text: 'Cambio de correo electrónico'
      },
      { 
        icon: 'assets/icons/autenticacion.svg',
        text: 'Doble factor de autenticación'
      },
      { 
        icon: 'assets/icons/eliminacion_cuenta.svg',
        text: 'Eliminación de la cuenta'
      },
    ]
  }

}
