import { Component, OnInit } from '@angular/core';
import { ProductlistService } from '../shared/service/productlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public pageTitle="Product List";
  public showImageFlag=false;
  public products:any[];

  constructor(private _productService: ProductlistService) { }

  ngOnInit() {

    this.products=this._productService.getProductsData();

  }

 
//   public products: any[]=[
//     {
//       "productId":"2",
//         "productName":"Garden Cart",
//         "productCode":"GDN-0023",
//         "releasedate":"March 18, 2016",
//         "description":"15 gallon capacity rolling garden",
//         "price":"20.25",
//         "starRating":"4.2",
//         "imageurl":"assets/car.jpg"
//     },
//     {
//       "productId":"5",
//         "productName":"Hammer",
//         "productCode":"TBX-0048",
//         "releasedate":"May 21, 2016",
//         "description":"Curved claw steel hammer",
//         "price":"8.9",
//         "starRating":"4.8",
//         "imageurl":"assets/hammer.png"
//     }
// ]

displayImages(){
  this.showImageFlag=!this.showImageFlag;

}

}
