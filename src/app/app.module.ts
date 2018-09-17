import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HearderComponent } from './hearder/hearder.component';
import { FoteerComponent } from './foteer/foteer.component';
import { SearchComponent } from './search/search.component';
import { CarsuesComponent } from './carsues/carsues.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HearderComponent,
    FoteerComponent,
    SearchComponent,
    CarsuesComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  // 注入路由配置
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{ enableTracing: true })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
