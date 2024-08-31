import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  count:WritableSignal<number> = signal(0);
  doubleCount:Signal<string> = computed(()=> `the current Count is ${this.count()}`);
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  updateCount() {
    
    this.count.update(value => value+1);
    console.log(this.doubleCount());
  }
}
