import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MediaInterface} from "../../../ts/interfaces";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {

  thumbs: MediaInterface[] = [
    {
      url: 'assets/images/mouse-product-1.png'
    },
    {
      url: 'assets/images/mouse-product-2.png'
    },
    {
      url: 'assets/images/mouse-product-3.png'
    },
    {
      url: 'assets/images/mouse-product-4.png'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
