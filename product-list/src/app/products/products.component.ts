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
  //public listFilter: string = 'cart'; 
  

  

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string)
  {
    this._listFilter = value;
    this.filteredProducts = this.listFilter? this.performFilter(this.listFilter): this.product;
  }



  public filteredProducts: IProduct[];

  
  product: IProduct[]= [
    {
      "productId":2,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
        "releasedate":"March 18, 2016",
        "description":"15 gallon capacity rolling garden",
        "price":20.25,
        "starRating":4.2,
        "imageurl":"assets/car.jpg"
    },
    {
      "productId":5,
        "productName":"Hammer",
        "productCode":"TBX-0048",
        "releasedate":"May 21, 2016",
        "description":"Curved claw steel hammer",
        "price":8.9,
        "starRating":4.8,
        "imageurl":"assets/hammer.png"
    },
    {
      "productId":2,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
        "releasedate":"March 18, 2016",
        "description":"15 gallon capacity rolling garden",
        "price":20.25,
        "starRating":4.2,
        "imageurl":"assets/car.jpg"
    },
    {
      "productId":5,
        "productName":"Hammer",
        "productCode":"TBX-0048",
        "releasedate":"May 21, 2016",
        "description":"Curved claw steel hammer",
        "price":8.9,
        "starRating":4.8,
        "imageurl":"assets/hammer.png"
    },
    {
      "productId":2,
        "productName":"Garden Cart",
        "productCode":"GDN-0023",
        "releasedate":"March 18, 2016",
        "description":"15 gallon capacity rolling garden",
        "price":20.25,
        "starRating":4.2,
        "imageurl":"assets/car.jpg"
    },
 
]


  //constructor(private _productService: ProductlistService) { }
  constructor() {
    this.filteredProducts=this.product;
    this.listFilter='cart';
   }

   
performFilter(filterBy: string): IProduct[]{

  filterBy = filterBy.toLocaleLowerCase();
  return this.product.filter((product:IProduct) => 
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

}

  ngOnInit() {

   // this.products=this._productService.getProductsData();

  }







displayImages(){
  this.showImageFlag=!this.showImageFlag;

}

}
