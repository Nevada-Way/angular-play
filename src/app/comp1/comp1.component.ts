import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  myObservable$ = new Observable<string>((subscriber) => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout( () => subscriber.next('Ben'), 2000);
    setTimeout( () => subscriber.next('Charlie'), 4000);
  });

  ngOnInit() {
    console.log('Triggering a subscribe to myObservable');
    
    const mySubs = this.myObservable$.subscribe((value: string) => console.log(value));
    
    setTimeout( () => 
    {
      console.log('Unsubscribed from myObservable');
      mySubs.unsubscribe()}
      , 3000);
  }
}
