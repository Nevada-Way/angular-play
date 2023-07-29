import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component {
  ngOnInit() {
    const myObservable3$ = new Observable((subscriber3) => {
      console.log('Activated observable3.');

      let counter = 1;

      const idOfInterval = setInterval(() => {
        console.log('Going to emitt : ', counter);
        subscriber3.next(counter++);
      }, 2000);

      return () => {
        clearInterval(idOfInterval);
      };
    }); //end of defining myObservable3

    const mySubscription = myObservable3$.subscribe((value) =>
      console.log(value)
    );

    setTimeout(() => {
      console.log('Activating unsubscribe');
      mySubscription.unsubscribe();
    }, 7000);
  } //end ngOnInit
}
