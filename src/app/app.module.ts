import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

// component
import { TglHariIniComponent } from './tgl-hari-ini/tgl-hari-ini.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { ProductformComponent } from './productform/productform.component';
//endcomponent

//module
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

//service
import { ProductService } from './service/product/product.service';
import { MovieService } from './service/movie/movie.service';
//endservice

import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { IonicStorageModule } from '@ionic/storage-angular';
import { Camera } from '@ionic-native/camera/ngx';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviedetailComponent,
    ProductComponent,
    ProductdetailComponent,
    ProductformComponent,
    TglHariIniComponent,
    CegahcovidComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    Camera,
    ProductService,
    MovieService,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
