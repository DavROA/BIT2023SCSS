import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo',
  templateUrl: './metodo.component.html',
  styleUrls: ['./metodo.component.scss']
})
export class MetodoComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  
  file(){
    console.log('file');
    this.router.navigate(['/eleccion']);
  }
}