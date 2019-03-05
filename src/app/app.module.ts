import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistService } from '../app/shared/service/productlist.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
