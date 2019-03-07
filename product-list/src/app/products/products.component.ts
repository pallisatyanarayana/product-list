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

  
  public product: IProduct[];

  
//   product: IProduct[]= [
//     {
//       "productId":2,
//         "productName":"Garden Cart",
//         "productCode":"GDN-0023",
//         "releasedate":"March 18, 2016",
//         "description":"15 gallon capacity rolling garden",
//         "price":20.25,
//         "starRating":4.2,
//         "imageurl":"assets/car.jpg"
//     },
//     {
//       "productId":5,
//         "productName":"Hammer",
//         "productCode":"TBX-0048",
//         "releasedate":"May 21, 2016",
//         "description":"Curved claw steel hammer",
//         "price":8.9,
//         "starRating":4.8,
//         "imageurl":"assets/hammer.png"
//     },
//     {
//       "productId":8,
//         "productName":"Leaf Rake",
//         "productCode":"GDN-001",
//         "releasedate":"March 19, 2016",
//         "description":"15 gallon capacity rolling garden",
//         "price":20.25,
//         "starRating":3.2,
//         "imageurl":"assets/car.jpg"
//     },
//     {
//       "productId":3,
//         "productName":"Saw",
//         "productCode":"TBX-0048",
//         "releasedate":"May 21, 2016",
//         "description":"Curved claw steel hammer",
//         "price":8.9,
//         "starRating":3.7,
//         "imageurl":"assets/hammer.png"
//     },
//     {
//       "productId":9,
//         "productName":"Video Game Controller",
//         "productCode":"GDN-0023",
//         "releasedate":"October 15, 2015",
//         "description":"15 gallon capacity rolling garden",
//         "price":20.25,
//         "starRating":4.6,
//         "imageurl":"assets/car.jpg"
//     },
 
// ]


  //constructor(private _productService: ProductlistService) { }
  constructor(private _productService: ProductlistService) {
    // this.filteredProducts = this.product;
    // this.listFilter = 'cart';
   }

   
performFilter(filterBy: string): IProduct[]{

  filterBy = filterBy.toLocaleLowerCase();
  return this.product.filter((product:IProduct) => 
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);

}

  ngOnInit() {

   this.product=this._productService.getProductsData();
   this.filteredProducts=this.product;

  }



  onRatingClicked(message:string){

    this.pageTitle= 'Product List: '+message;

  }



displayImages(){
  this.showImageFlag=!this.showImageFlag;

}

}
