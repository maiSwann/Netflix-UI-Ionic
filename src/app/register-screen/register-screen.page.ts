import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.page.html',
  styleUrls: ['./register-screen.page.scss'],
})
export class RegisterScreenPage implements OnInit {

  email: string;
  password: string;

  constructor(private navCtrl: NavController, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  onRegister() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
    this.navCtrl.back();
  }

  onCancel() {
    this.navCtrl.back();
  }

}
