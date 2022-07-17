import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
    private  firstObjsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  //   this.firstObjsSubscription = interval(1000).subscribe(count =>{
  // console.log(count);
  const customInteravlObservable = Observable.create(
    observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error( new Error('count is more than 3!'));
        }
        count++;
      }, 1000);
    }
  );
  this.firstObjsSubscription = customInteravlObservable.subscribe(data => {
    console.log(data);
  },
  error => {
    console.log(error);
    alert(error.message);
  },
  () => {
    console.log('complete');
  });
    }
  
  ngOnDestroy(): void{
    this.firstObjsSubscription.unsubscribe();

  }

}
