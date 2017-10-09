import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Un host component es elemento que representa el mismo componente, en este caso "app-article" tag y al usar el decorador HostBinding
  // estamos encapsulando el elemento en nuestro componente, de esta forma podemos añadir propiedades como estilos cada que se instancia el componente
  // y no hacerlos en el componente padre que lo invoque. Ejm: <app-article class="row">
  @HostBinding('attr.class') cssClass = 'row';

  // El Input decorator nos sirve para enviar datos, mediante atributo en el HTML, de un componente padre a un hijo. En este caso article recibirá un objeto
  // de tipo Article desde el AppComponent.
  @Input() article: Article; 

  constructor() {}

  voteUp(): boolean {
    this.article.voteUp();
    return false; // evita reload en la página
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // evita reload en la página
  }

  ngOnInit() {
  }

}
