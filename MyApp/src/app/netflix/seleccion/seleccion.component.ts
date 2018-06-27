import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit, OnDestroy, OnChanges {

  @Input() contador;

  constructor() {
    // Configuracion de servicios (providers) u otras configuraciones
    console.log('Constructor');
  }

  aumentarContador() {
    this.contador = this.contador + 1
  }

  ngOnInit() {
    // Empezar la logica de la pantalla

    console.log('On Init');

    console.log('Contador: ', this.contador);
  }

  ngOnDestroy() {
    console.log('On Destroy');
  }

  ngOnChanges(cambios) {
    console.log('On Changes', cambios);
  }


}
