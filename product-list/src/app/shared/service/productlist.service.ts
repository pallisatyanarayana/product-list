import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor() { }

  getProductsData(): IProduct[] {
    return [
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
  }
}
