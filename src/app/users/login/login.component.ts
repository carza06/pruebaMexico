import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    public usersService: UsersService,
    private router: Router
  ) { }
  ngOnInit(): void {

    this.form = new FormGroup({
      email:  new FormControl(''),
      password: new FormControl(''),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){

    localStorage.clear()
    localStorage.setItem('email', this.form.value.email);
    console.log(this.form.value.email);
    this.usersService.login(this.form.value).subscribe(res => {
         alert('Ha iniciado sesion con exito!');
         this.router.navigateByUrl('home');
    })
    alert('algun dato es invalido');

  }
}
