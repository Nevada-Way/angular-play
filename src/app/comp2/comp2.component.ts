import { Component } from '@angular/core';
import { EMPTY, Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component {
  ngOnInit() {
    const myObservable2$ = new Observable<string>((subscriber2) => {
      console.log('myObservable2 executed.');

      subscriber2.next('Alice');

      setTimeout(() => {
        subscriber2.next('Ben');
      }, 2000);

      setTimeout(() => {
        subscriber2.error(new Error('Testing error'));
      }, 3000);

      return () => {
        console.log('This is the Teardown section.');
      };
    });

    console.log('Before subscribe to myObservable2');
    myObservable2$.subscribe({
      next: (value) => console.log('Value emiited is = ', value),
      error: (err) => console.log(err.message),
      complete: () => console.log('myObservable2 COMPLETED.'),
    });

    console.log('After subscribe to myObservable2');
  }
}
