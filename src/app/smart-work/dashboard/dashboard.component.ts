import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
showEnter() {
throw new Error('Method not implemented.');
}
  count:WritableSignal<number> = signal(0);
  
  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  updateCount() {
    
    this.count.update(value => value+1);
  }
}
