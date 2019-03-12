import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public pageTitle:string= 'Product Details';
  public product:IProduct;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    let id=+this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product=
      {
        "productId":id,
          "productName":"Saw",
          "productCode":"TBX-0048",
          "releasedate":"May 21, 2016",
          "description":"Curved claw steel hammer",
          "price":8.9,
          "starRating":3.7,
          "imageurl":"assets/hammer.png"
      }
    

  }

}
