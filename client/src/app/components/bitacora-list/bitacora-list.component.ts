import { Component, OnInit } from '@angular/core';
import {BitacorasService} from '../../services/bitacoras.service'

@Component({
  selector: 'app-bitacora-list',
  templateUrl: './bitacora-list.component.html',
  styleUrls: ['./bitacora-list.component.css']
})
export class BitacoraListComponent implements OnInit {

  bitacoras: any = [];

  constructor(private bitacorasServices: BitacorasService) { }

  ngOnInit(): void {
    this.getBitacoras();
  }

  getBitacoras(){
    this.bitacorasServices.getBitacoras()
    .subscribe(
      res => {
        this.bitacoras = res;
      },
      err => console.error(err)
    )
  }

  deleteBitacora(id: String){
    this.bitacorasServices.deleteBitacora(id)
      .subscribe(
        res=>  {
          console.log(res);
          this.getBitacoras();
        },
        err=> console.error(err)
      )
  }


}
