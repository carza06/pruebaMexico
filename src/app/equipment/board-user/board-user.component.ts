import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EquipmentService } from '../equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  form: FormGroup;
  user = localStorage.getItem('email');

  constructor(
    public equipmentService: EquipmentService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name:  new FormControl(''),
      ip: new FormControl(''),
      status: new FormControl(''),
    });

  }
  get f(){
    return this.form.controls;
  }
  submit(){

    console.log(this.form.value);
    this.equipmentService.create(this.form.value).subscribe(res => {
         console.log('Equipo creado con exito!');
         this.router.navigateByUrl('home');
    })

  }
}
