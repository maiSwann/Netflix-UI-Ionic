import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.page.html',
  styleUrls: ['./login-screen.page.scss'],
})
export class LoginScreenPage implements OnInit {

  email: string;
  password: string;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onSignIn() {
    this.auth.signInWithEmailAndPassword(this.email, this.password);
    this.router.navigate(['/home-screen']);
  }

}
