import { Component } from '@angular/core';
// import { ProductModel } from './model/product.model';
import { Storage } from '@ionic/storage-angular';

import { UserService } from './service/user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
// export class AppComponent {
//   constructor() {}
// }
export class AppComponent {
  username = 'Timothy';
  judul = 'Ionic-Angular week 09';
  katadariapp = 'no.';
  intro: boolean = true;
  user_id = '1';
  username_user = '';
  login_passwd = '';
  login_error = '';
  login() {
    if (this.login_passwd == '1234') {
      this.user_id = this.username_user;
      this.storage.set('user_id', this.user_id);
      alert(this.storage.get('user_id'));
    } else {
      this.login_error = 'username atau password salah';
    }
  }
  loginDB() {
    this.us.login(this.username_user, this.login_passwd).subscribe((data) => {
      // alert(data['result']);
      if (data['result'] == 'success') {
        this.user_id = this.username_user;
        this.storage.set('user_id', this.user_id);
        // this.storage.set('asdasd', '1111');

        alert(this.storage.get('user_id'));
      } else {
        this.login_error = 'username atau password salah';
      }
    });
  }
  async logout() {
    await this.storage.remove('user_id');
    window.location.reload();
  }

  // productsPhone: ProductModel[] = [
  //   new ProductModel('Realme 5', 1800000, 0.1, 'samsung10.jpg', [
  //     '4 Gb',
  //     'Snapdragon',
  //     '128 Gb',
  //   ]),
  //   new ProductModel('OPPO A1', 1400000, 0.15, 'samsung10.jpg', [
  //     '8 Gb',
  //     'Snapdragon',
  //     '128 Gb',
  //   ]),
  //   new ProductModel('Samsung Galaxy A10', 1200000, 0, 'samsung10.jpg', [
  //     '7 Gb',
  //     'Snapdragon',
  //     '128 Gb',
  //   ]),
  //   new ProductModel('Redmi Note 8', 1900000, 0.2, 'samsung10.jpg', [
  //     '5 Gb',
  //     'Snapdragon',
  //     '128 Gb',
  //   ]),
  //   new ProductModel('Iphone X', 6300000, 0.25, 'samsung10.jpg', [
  //     '2 Gb',
  //     'Snapdragon',
  //     '128 Gb',
  //   ]),
  // ];
  constructor(private storage: Storage, public us: UserService) {}

  async ngOnInit() {
    await this.storage.create();
    this.user_id = await this.storage.get('user_id');
  }
}
