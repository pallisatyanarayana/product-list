import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../shared/service/productlist.service';
import { IProduct } from './product';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public pageTitle = 'Product List';
  public showImageFlag = false;
  public imageWidth: number = 50;
  public imageMargin: number = 2;
  //public listFilter: string = 'cart'; 
  public errorMessage:string;
  

  

  _listFilter: string;

  get listFilter(): string{
    console.log("get listfilter");
    return this._listFilter;
  }

  set listFilter(value: string)
  {
    console.log("set listFilter");
    this._listFilter = value;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.product;
  }

  public filteredProducts: IProduct[];

  
  public product: IProduct[];

  



  //constructor(private _productService: ProductlistService) { }
  constructor(private _productService: ProductlistService) {
    console.log("constructor");
    //this.filteredProducts = this.product;
     //this.listFilter = 'cart';
   }

   
performFilter(filterBy: string): IProduct[]{
console.log("performFilter");
  filterBy = filterBy.toLocaleLowerCase();
  return this.product.filter((product:IProduct) => 
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

}

  ngOnInit() {
console.log("ngOnInIt");
  //  this.product=this._productService.getProductsData();
  this._productService.getProductsData()
  .subscribe(data =>{ 
    this.product = data,
    this.filteredProducts=this.product;
  }, 
  error => this.errorMessage = <any>error);
  
    
  }



  onRatingClicked(message:string){

    this.pageTitle= 'Product List: '+message;

  }



displayImages(){
  this.showImageFlag=!this.showImageFlag;

}

}
