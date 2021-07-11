import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importei o router

@Component({
    selector: 'app-product-crud',
    templateUrl: './product-crud.component.html',
    styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

    constructor(private router: Router) { } //ao instaciar um router no construtor vou poder usar no componente

    ngOnInit(): void {
    }

    navigateToProductCreate(): void{
        this.router.navigate(['/products/create'])
    }
}
