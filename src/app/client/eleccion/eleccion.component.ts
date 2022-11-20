import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleccion',
  templateUrl: './eleccion.component.html',
  styleUrls: ['./eleccion.component.scss']
})
export class EleccionComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  eleccion(){
    console.log('eleccion');
    this.router.navigate(['/programa']);
  }

}
