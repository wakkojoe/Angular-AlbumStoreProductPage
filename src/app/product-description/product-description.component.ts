import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  private albumInfo: Observable<Response>;

  constructor(productService: ProductService) { }

  ngOnInit() {
    // this.albumInfo = this.productService.getAlbum();
  }

}
