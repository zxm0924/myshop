import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle:string;
  // 注入(接入参数)
  constructor() { }

  ngOnInit() {
  
  }

}
