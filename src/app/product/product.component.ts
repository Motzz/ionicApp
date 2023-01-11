import { Component, OnInit, Input } from '@angular/core';
// import { ProductModel } from '../product.model';
import { ProductService } from '../service/product/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productName: string = 'Gadget Masa Kini';
  productPrice: number = 8000000;
  netPrice: number = this.productPrice;

  productImg: string = '../assets/img/samsung10.jpg';
  btnDisable: boolean = true;
  btnColor = 'danger';
  fontSize = 10;
  show: boolean[] = [false];
  counter = 0;

  @Input() kata;
  //alias
  // @Input('products') products;
  products = [];
  json: string = '...waitng for observable';
  // products1: ProductModel[] = [
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
  // products = [
  //   {
  //     name: 'Realme 5',
  //     price: 1800000,
  //     disc: 0.1,
  //     url: 'samsung10.jpg',
  //     spec: ['4 Gb', 'Snapdragon', '128 Gb'],
  //   },
  //   {
  //     name: 'OPPO A1',
  //     price: 1400000,
  //     disc: 0.15,
  //     url: 'samsung10.jpg',
  //     spec: ['8 Gb', 'Snapdragon', '128 Gb'],
  //   },
  //   {
  //     name: 'Samsung Galaxy S10',
  //     price: 1200000,
  //     disc: 0,
  //     url: 'samsung10.jpg',
  //     spec: ['7 Gb', 'Snapdragon', '128 Gb'],
  //   },
  //   {
  //     name: 'Redmi Note 8',
  //     price: 1900000,
  //     disc: 0.2,
  //     url: 'samsung10.jpg',
  //     spec: ['5 Gb', 'Snapdragon', '128 Gb'],
  //   },
  //   {
  //     name: 'Iphone X',
  //     price: 6300000,
  //     disc: 0.25,
  //     url: 'samsung10.jpg',
  //     spec: ['2 Gb', 'Snapdragon', '128 Gb'],
  //   },
  // ];
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
  constructor(public ps: ProductService) {}

  listProduct() {
    this.ps.productList().subscribe((data) => {
      // this.json = data;
      this.products = data;
    }); //buat dapetin dari service
  }
  ngOnInit() {
    this.listProduct();
    // this.products = this.ps.productsPhone;
  }
}
