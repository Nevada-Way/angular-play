import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component {
  ngOnInit() {
    const myObservable1$ = new Observable(() =>
      console.log('myObservable1 executed.')
    );
    const myObservable2$ = new Observable<string>((subscriber2) => {
      console.log('myObservable2 executed.');
      subscriber2.next('Alice');
    });

    // console.log('Before subscribe to myObservable1');
    // myObservable1$.subscribe();
    // console.log('After subscribe to myObservable1');
    ///
    console.log('Before subscribe to myObservable2');
    myObservable2$.subscribe();
    console.log('After subscribe to myObservable2');

  }
}
