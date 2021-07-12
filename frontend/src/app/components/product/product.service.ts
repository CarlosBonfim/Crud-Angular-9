import { Product } from './../products/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseUrl =  "http://localhost:3001/products" //Url do Backend

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string) : void{ //SnackBar de sucesso
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top"
        })
    }

    create(product: Product): Observable<Product>{
        return this.http.post<Product>(this.baseUrl, product) //Chamada para o backend ultilizando observable
    }

}
