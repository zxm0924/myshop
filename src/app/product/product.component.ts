import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 private products:Array<Product>
  constructor() { }

  // 钩子函数（实例化调用一次）
  ngOnInit() {
    // 初始化这个数组
     
    this.products=[
      new Product(1,"第一个商品",1.99,3.5,"我在学习",["电子唱片","素颜淡妆"]),
      new Product(1,"第二个商品",2.99,6.5,"我在学习",["电子唱片","素颜淡妆"]),
      new Product(1,"第三个商品",6.99,8.5,"我在学习",["电子唱片","素颜淡妆"]),
      new Product(1,"第四个商品",5.99,9.5,"我在学习",["电子唱片","素颜淡妆"]),
      new Product(1,"第四个商品",5.99,9.5,"我在学习",["电子唱片","素颜淡妆"]),
      new Product(1,"第四个商品",5.99,9.5,"我在学习",["电子唱片","素颜淡妆"])
    ]
  }

}

// 对象(封装了产品信息)
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public catagorise: Array<string>
  ) {  

  }


}
