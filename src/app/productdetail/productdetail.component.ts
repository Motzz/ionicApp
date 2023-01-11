import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product/product.service';
import { ProductModel } from '../model/product.model';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  name: string = '';
  price: number = 0;
  url: string = '';
  desc: string = '';

  constructor(public ps: ProductService, public route: ActivatedRoute) {}
  detail() {
    var id: number = this.route.snapshot.params['id'];

    this.ps.productDetail(id).subscribe((data) => {
      // this.json = data;
      this.name = data.name;
      this.price = data.price;
      this.url = data.url;
      this.desc = data.desc;
    }); //buat dapetin dari service
  }

  ngOnInit() {
    this.detail();
  }
}
