import { Component } from '@angular/core';
import { addItem, removeItem } from '../state/app.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as AppActions from '../state/app.actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items: string[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('items').subscribe((items) => {
      this.items = items;
    });
  }

  addItem(item: string): void {
    this.store.dispatch(AppActions.addItem(item));
  }

  removeItem(index: number): void {
    this.store.dispatch(AppActions.removeItem((index)));
  }
}
