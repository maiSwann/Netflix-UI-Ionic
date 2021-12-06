import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.page.html',
  styleUrls: ['./register-screen.page.scss'],
})
export class RegisterScreenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onCancel() {
    this.navCtrl.back();
  }

}
