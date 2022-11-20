import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.scss']
})
export class ProgramaComponent implements OnInit {
  
  talleres = [
    { 
      nombre: 'Ciberseguridad',
      horario: '09:00:00',
      ponente: 'Ing.Nombre',
      class: 'xd'
    },
    { 
      nombre: 'Ciberseguridad',
      horario: '12:00:00',
      ponente: 'Ing.Nombre',
      class: 'xdxd'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
