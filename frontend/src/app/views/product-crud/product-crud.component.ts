import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // importei o router

@Component({
    selector: 'app-product-crud',
    templateUrl: './product-crud.component.html',
    styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

    constructor(private router: Router, private headerService: HeaderService) { 
        headerService.headerData = {
            title: 'Cadastro de Produtos',
            icon: 'storefront',
            routeUrl: '/products'
        }
    } //ao instaciar um router no construtor vou poder usar no componente

    ngOnInit(): void {
    }

    navigateToProductCreate(): void{
        this.router.navigate(['/products/create'])
    }
}
