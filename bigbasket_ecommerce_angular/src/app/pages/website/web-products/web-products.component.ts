import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'web-products-products',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {
  
  
  productList: any[] = []
  categoryList: any[] = []
  constructor(private productSrv: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategory()

  }
  navigateToProducts(id: number) {
    this.router.navigate(['/products', id])
  }
  getAllProducts() {
    this.productSrv.getProducts().subscribe((res: any) => {
      debugger;
      this.productList = res.data

    })
  }
  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data
    })
  }


}
