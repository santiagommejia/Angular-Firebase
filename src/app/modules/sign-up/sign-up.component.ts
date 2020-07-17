import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  visiblePassword: boolean = false;
  visibleConfirmPassword: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toogleVisiblePassword() {
    this.visiblePassword = !this.visiblePassword;
  }
  
  toogleVisibleConfirmPassword() {
    this.visibleConfirmPassword = !this.visibleConfirmPassword;
  }

  async signUp() {
    // todo: show loading
    const uid = await this.userService.signUp(this.email, this.password);
    // todo: hide loading
    if (uid) {
      // todo: show message of successfull sign up
      this.router.navigate(['log-in'], {queryParams: { uid }});
    } else {
      alert('Hubo un problema al crear tu cuenta, por favor inténtalo mas tarde.');
    }
  }

  goBack() {
    this.router.navigate(['log-in']);
  }

}
