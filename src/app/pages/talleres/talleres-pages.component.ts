import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/providers/client.service';

@Component({
  selector: 'app-talleres-pages',
  templateUrl: './talleres-pages.component.html',
  styleUrls: ['./talleres-pages.component.scss']
})
export class TalleresPagesComponent implements OnInit {
  talleres: any;

  constructor(private ClienteS: ClientService) { }

  ngOnInit(): void {
    this.getTalleres();
  }

  getTalleres(){
    this.ClienteS.getTallers().subscribe((data: any) => {
      console.log(data);
      this.talleres = data;
    });
  }
}
