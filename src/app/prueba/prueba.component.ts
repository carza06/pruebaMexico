import { Component } from '@angular/core';
import { PruebaService } from './prueba.service';
import { Prueba } from './prueba';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})

export class PruebaComponent {
  user = localStorage.getItem('email');
  prueba: Prueba[] = [];

  constructor(public pruebaService: PruebaService) { }

  ngOnInit(): void {
    this.pruebaService.getAll().subscribe((data: Prueba[])=>{
      this.prueba = data;
      console.log(this.prueba);
    })
  }

  test(){
    this.pruebaService.test().subscribe(res => {
         alert('Test realizado con exito');
    })
  }

}