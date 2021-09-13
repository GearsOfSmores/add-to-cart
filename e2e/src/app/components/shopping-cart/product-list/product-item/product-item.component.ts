import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  constructor(private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit() {
  }
  //onclick sends the handleAddToCart method with the product item
  //calling an api, 'addProductToCart', which takes in the productItem and adds it to the cart
  //once the item is added its sends a message to the CartComponent
  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    }) 
  }

}
