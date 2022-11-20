import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/providers/client.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.scss']
})
export class TalleresComponent implements OnInit {
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
