import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle3',
  imports: [],
  templateUrl: './detalle3.html',
  styleUrl: './detalle3.css',
})
export class Detalle3 {
  constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    console.log(params["miparam"]);
  });
}

}
