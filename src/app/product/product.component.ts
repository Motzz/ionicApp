import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}
  productName: string = 'Gadget Masa Kini';
  productPrice: number = 8000000;
  netPrice: number = this.productPrice;

  productImg: string = '../assets/img/samsung10.jpg';
  btnDisable: boolean = true;
  btnColor = 'danger';
  fontSize = 10;
  show: boolean[] = [false];
  counter = 0;
  products = [
    {
      name: 'Realme 5',
      price: 1800000,
      disc: 0.1,
      url: 'samsung10.jpg',
      spec: ['4 Gb', 'Snapdragon', '128 Gb'],
    },
    {
      name: 'OPPO A1',
      price: 1400000,
      disc: 0.15,
      url: 'samsung10.jpg',
      spec: ['8 Gb', 'Snapdragon', '128 Gb'],
    },
    {
      name: 'Samsung Galaxy S10',
      price: 1200000,
      disc: 0,
      url: 'samsung10.jpg',
      spec: ['7 Gb', 'Snapdragon', '128 Gb'],
    },
    {
      name: 'Redmi Note 8',
      price: 1900000,
      disc: 0.2,
      url: 'samsung10.jpg',
      spec: ['5 Gb', 'Snapdragon', '128 Gb'],
    },
    {
      name: 'Iphone X',
      price: 6300000,
      disc: 0.25,
      url: 'samsung10.jpg',
      spec: ['2 Gb', 'Snapdragon', '128 Gb'],
    },
  ];
  // toggle = () => (this.show = !this.show);
  // toggle(index[]) {
  //   // for (let i = 0; i < this.products.length; i++) {
  //   //   this.counter++;
  //   //   // console.log(counter);
  //   //   console.log(i);
  //   //   if (i + 1 == this.counter) {
  //   this.show = !this.show;
  //   //   } else {
  //   //     this.show = false;
  //   //   }
  //   // }
  // }
  applyDiscount() {
    this.netPrice = this.productPrice - this.productPrice * 0.2;
    this.btnDisable = true;
  }
  checkVoucher(event: Event) {
    var element = event.target as HTMLInputElement;
    if (element.value == '007') {
      this.btnDisable = false;
    } else this.btnDisable = true;
  }

  ngOnInit() {}
}
