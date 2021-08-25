
import { Product } from "./../product.model";
import { Router } from '@angular/router';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

    product: Product = {
        name: '',
        price: null
    }

    constructor(private productService: ProductService, private router: Router) { }

    ngOnInit(): void {
    }

    createProduct(): void {
        this.productService.create(this.product).subscribe(() => { //subscribe esperando a chamada do backend
            this.productService.showMessage('Produto criado!') //Mensagem de sucesso
            this.router.navigate(['/products']) //Retornar para a tela de produtos

        })
    }
    cancel(): void { //cancela a operação e volta para a tela de produtos
        this.router.navigate(['/products'])
    }
}
