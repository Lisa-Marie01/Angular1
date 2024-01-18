import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule, NgFor} from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';
}

@Component({
  selector: "App-item",
  templateUrl: "item.component.html",
})
export class ItemComponent {
  items = 'Item1';
  itemName: string = "Default Item";
  itemprice: number = 15.99;

  displayItemDetails(): string {
    return 'Item: ${this.itemName}, Price: $${this.itemPrice.toFixed(2)}';
  }
}

@NgModule({
  declarations: [
    NgFor
  ],
  imports: [
    CommonModule
  ],
})
export class AppModule {}
