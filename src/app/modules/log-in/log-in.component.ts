import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  email = 'test@user.com';
  password = '123456';
  visiblePassword = false;
  imageUrl = 'https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png';

  constructor(
    private userService: UserService,
    private router: Router
    ) { 
  }

  ngOnInit(): void {
  }

  async login() {
    try {
      // todo: show loading
      const uid = await this.userService.login(this.email, this.password);
      // todo: hide loading
      if (uid) {
        this.router.navigate(['home'], {queryParams: { uid }});
      } else {
        alert('Esta cuenta no se encuentra registrada, puedes registrar una nueva haciendo click en "Soy Nuevo"');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async forgotPassword() {
    const email = prompt('Introduce tu correo', this.email)
    if (email !== null && email.trim() !== '') {
      await firebase.auth().sendPasswordResetEmail(email);
      alert('Hemos enviado un correo para reestablecer tu contraseña, revisa tu bandeja de entrada.');
    }    
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }

  toogleVisiblePassword() {
    this.visiblePassword = !this.visiblePassword;
  }

}
