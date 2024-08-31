import { Component, Input, Output, Signal, computed, input, output } from '@angular/core';

@Component({
  selector: 'smart-work-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrl: './dashboard-tile.component.scss'
})
export class DashboardTileComponent {
  updateString= output();
  valueInput = input<number>();
  doubleCount:Signal<string> = computed(()=> `the current Count is ${this.valueInput()}`);

  showEnter(e: any) {
    console.log(e);
  }
}
