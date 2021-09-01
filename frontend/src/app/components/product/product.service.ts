// import { Product } from './../product/product.model';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    baseUrl = "http://localhost:3001/products" //Url do Backend

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void { //SnackBar de sucesso
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        ) //Chamada para o backend ultilizando observable
    }

    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl) //Chamada para o backend ultilizando observable que espera uma lista de produtos
    }
    readById(id: number): Observable<Product> {//Vai fazer a chamada para o backend ultilizando concatenando com a id
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    update(product: Product): Observable<Product> { // vai fazer a chamada para o backend para atualizar
        const url = `${this.baseUrl}/${product.id}`
        return this.http.put<Product>(url, product).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    delete(product: Product): Observable<Product> { //vai fazer a chamada para o backend para excluir
        const url = `${this.baseUrl}/${product.id}` 
        return this.http.delete<Product>(url).pipe(
            map(obj => obj),
            catchError(e => this.errorHandler(e))
        )
    }

    errorHandler(e: any): Observable<any> { // Vai receber um erro e retornar uma mensagem de erro
        this.showMessage('Ocorreu um erro!', true)
        return EMPTY
    }

}
