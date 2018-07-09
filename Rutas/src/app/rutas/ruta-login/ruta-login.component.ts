import {Component, OnInit} from '@angular/core';
import {CredencialesService} from "../../servicios/credenciales.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.css']
})
export class RutaLoginComponent implements OnInit {
  password = '';

  constructor(private _credencialesService: CredencialesService,
              private _router: Router,
  ) {
  }

  ngOnInit() {
  }

  login() {
    this._credencialesService
      .login(this.password);
    const rutaHomeUsuario = [
      '/home', // Segmentos
      'usuario', // Segmentos
      1, // Segmentos
      'epn' // Segmentos
    ];
    this._router.navigate(rutaHomeUsuario);

  }

}
