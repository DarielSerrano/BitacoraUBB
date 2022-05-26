import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/models/Bitacora';
import {ActivatedRoute,Router} from '@angular/router'

import {BitacorasService} from '../../services/bitacoras.service'

@Component({
  selector: 'app-bitacora-form',
  templateUrl: './bitacora-form.component.html',
  styleUrls: ['./bitacora-form.component.css']
})
export class BitacoraFormComponent implements OnInit {

  bitacora: Bitacora = {
    idbitacora: 0 ,
    duracionactividad: '',
    descripcionbitacora: '',
    encompaniade: '' ,
    actividadcorrespondea: '',
    usuario_idusuario: 1,
    created_at: new Date ()
   };

  constructor(private bitacoraService: BitacorasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idbitacora']) {
      this.bitacoraService.getBitacora(params['idbitacora'])
      .subscribe(
        (res: any = [])=> {
          this.bitacora=res[0];
        },
        err=> console.error(err)
      )
    }
  }

   saveNewBitacora(){
    delete this.bitacora.idbitacora;
    delete this.bitacora.created_at;

    this.bitacoraService.saveBitacora(this.bitacora)
    .subscribe(
      res=> {
        console.log(res);
        this.router.navigate(['/bitacoras'])
      },
      err=> console.error(err)
    )
   }

  

}
