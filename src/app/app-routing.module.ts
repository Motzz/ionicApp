import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CegahcovidComponent } from './cegahcovid/cegahcovid.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { MovieComponent } from './movie/movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'productDetail/:id', component: ProductdetailComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:id', component: MoviedetailComponent },
  { path: 'covid', component: CegahcovidComponent },

  /*{
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
