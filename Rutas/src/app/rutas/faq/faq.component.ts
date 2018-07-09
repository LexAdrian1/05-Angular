import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit() {
    const url = 'https://jsonplaceholder|.typicode.com/posts';
    const observablePost$ = this._httpClient
      .post(url,
        {
          id: 1,
          title: 'hola'
        });

    console.log('INICIO');
    observablePost$
      .subscribe(
        (respuestaOk) => {
          console.log(respuestaOk);
        },
        (respuestaError) => {
          console.log(respuestaError);
        },
        () => {
          console.log('Completado');
        }
      );
    console.log('FIN');


  }

}
