import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible: boolean = false
  productObj: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "categoryName": ""
  }
  categoryList: any[] = []



  constructor(private productSrv: ProductService) {

  }

  ngOnInit(): void {
    console.log('hshhdbffshshhdfldlflfjflsjlfs')

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
    };
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    


    this.getAllCategory()
    console.log('chategoryList', this.categoryList)

  }

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: any) => {
      console.log('rs.data', res.data)
      this.categoryList = res.data

    })
  }

  openSidePanel() {
    this.isSidePanelVisible = true
  }
  closeSidePanel() {
    this.isSidePanelVisible = false
  }
}
