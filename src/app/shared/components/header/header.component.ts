import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar color="=primary">
    <span>Store!</span>
    {{ quantity$ | async | json }} - Quantity
  </mat-toolbar>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  totalAction$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;

  constructor(private shoppingCartSvc:ShoppingCartService) { }

  ngOnInit(): void {
  }

}
