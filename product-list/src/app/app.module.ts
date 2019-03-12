import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductlistService } from '../app/shared/service/productlist.service';
import { ConvertToSpacePipe } from '../app/shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponentComponent } from './home/welcome-component/welcome-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products',component:ProductsComponent},
      {path:'products/:id',component:ProductDetailsComponent},
      {path:'welcome',component:WelcomeComponentComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  providers: [ProductlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
