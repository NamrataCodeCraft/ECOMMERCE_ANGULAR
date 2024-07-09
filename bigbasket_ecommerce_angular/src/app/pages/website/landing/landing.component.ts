import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: '../../../../styles.css'
})
export class LandingComponent implements OnInit {

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
