import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private url = '/assets/data/products.json';

  constructor(private http:HttpClient) { }

  getProductsData():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url)
    .pipe(tap(data=> console.log('All : ',JSON.stringify(data))),
  catchError(this.handleError));
  }


  private handleError(err: HttpErrorResponse)
  {
    let errorMessage = '';
    if(err.error instanceof ErrorEvent)
    {
      errorMessage=`An error occured: ${err.error.message}`;
    }
    else
    {
      errorMessage=`Server return code : ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);

    return throwError(errorMessage);
   
  }

}
