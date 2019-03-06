import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistService } from '../app/shared/service/productlist.service';
import { ConvertToSpacePipe } from '../app/shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
