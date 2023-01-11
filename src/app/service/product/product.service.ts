import { Injectable } from '@angular/core';
import { ProductModel } from '../../model/product.model';

//week 12
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // productsPhone: ProductModel[] = [
  //   new ProductModel(
  //     'Realme 5',
  //     1800000,
  //     0.1,
  //     'samsung10.jpg',
  //     ['4 Gb', 'Snapdragon', '128 Gb'],
  //     'Realme 5 berbekal layar mini-drop fullscreen LCD 6.5", ditenagai Snapdragon 665, quad kamera belakang perangkat dan baterai 5000 mAh, Micro USB port'
  //   ),
  //   new ProductModel(
  //     'OPPO A1',
  //     1400000,
  //     0.15,
  //     'samsung10.jpg',
  //     ['8 Gb', 'Snapdragon', '128 Gb'],
  //     ''
  //   ),
  //   new ProductModel(
  //     'Samsung Galaxy A10',
  //     1200000,
  //     0,
  //     'samsung10.jpg',
  //     ['7 Gb', 'Snapdragon', '128 Gb'],
  //     ''
  //   ),
  //   new ProductModel(
  //     'Redmi Note 8',
  //     1900000,
  //     0.2,
  //     'samsung10.jpg',
  //     ['5 Gb', 'Snapdragon', '128 Gb'],
  //     ''
  //   ),
  //   new ProductModel(
  //     'Iphone X',
  //     6300000,
  //     0.25,
  //     'samsung10.jpg',
  //     ['2 Gb', 'Snapdragon', '128 Gb'],
  //     ''
  //   ),
  // ];
  constructor(private http: HttpClient) {}
  newProduct(
    name: string,
    price: number,
    disc: number,
    url: string,
    desc: string
  ): Observable<any> {
    let body = new HttpParams();
    body = body.set('name', name);
    body = body.set('price', price.toString());
    body = body.set('disc', disc.toString());
    body = body.set('url', url);
    body = body.set('desc', desc);
    // return this.http.post('http://localhost/hmp_ionic/addProduct.php', body);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419007/products_api/addProduct.php',
      body
    );
  }
  productDetail(id: number): Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);

    // return this.http.post('http://localhost/hmp_ionic/productDetail.php', body);
    return this.http.post(
      'https://ubaya.fun/hybrid/160419007/products_api/productDetail.php',
      body
    );
  }

  productList(): Observable<any> {
    // return of('ini json dari service produk');
    // return this.http.get('http://localhost/hmp_ionic/products.php');
    return this.http.get(
      'https://ubaya.fun/hybrid/160419007/products_api/products.php'
    );
  }
}
