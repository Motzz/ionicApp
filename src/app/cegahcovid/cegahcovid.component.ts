import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cegahcovid',
  templateUrl: './cegahcovid.component.html',
  styleUrls: ['./cegahcovid.component.scss'],
})
export class CegahcovidComponent implements OnInit {
  constructor() {}

  imgHasil: string = '../assets/img/choose.png';
  imgCuci: string = '../assets/img/cucitangan.jpg';
  imgMasker: string = '../assets/img/pakemasker.png';
  imgStay: string = '../assets/img/stay.jpg';

  btnColor1 = 'success';
  btnColor2 = 'warning';
  btnColor3 = 'danger';

  ApplyGambar(ceker: number) {
    if (ceker == 1) {
      console.log(ceker);

      this.imgHasil = this.imgCuci;
    } else if (ceker == 2) {
      console.log(ceker);

      this.imgHasil = this.imgMasker;
    } else if (ceker == 3) {
      console.log(ceker);
      this.imgHasil = this.imgStay;
    }
  }

  ngOnInit() {}
}
