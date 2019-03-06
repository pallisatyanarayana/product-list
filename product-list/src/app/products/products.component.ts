import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../shared/service/productlist.service';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public pageTitle = 'Product List';
  public showImageFlag = false;
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  public listFilter: string = 'cart'; 
  public products:any[];

  constructor(private _productService: ProductlistService) { }

  ngOnInit() {

    this.products=this._productService.getProductsData();

  }



displayImages(){
  this.showImageFlag=!this.showImageFlag;

}

}
