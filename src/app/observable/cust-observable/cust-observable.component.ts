import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-cust-observable',
  templateUrl: './cust-observable.component.html', 
})
export class CustObservableComponent implements OnInit {

  techStatus = '';
  constructor(public utility: UtilityService) { }

  ngOnInit(): void {

    const cusObs1 = Observable.create(observer =>{
      setTimeout(() =>{
        observer.next("Javascript !");        
      }, 1000);

      setTimeout(() =>{
        observer.next("TypeScript !");
      }, 2000); 

      setTimeout(() =>{
        observer.next("Angualr !");
        
      }, 3000); 

      setTimeout(() =>{
        observer.next("Angular js !");          
      }, 4000); 


      setTimeout(() =>{
        observer.next("React js !");        
        observer.complete();
      }, 5000);

      setTimeout(() =>{
        observer.next("Vue js !");
        observer.error(new Error('Limit Exceed!'));        
      }, 6000);

    });

    cusObs1.subscribe(
      res =>{
        console.log('custom observable => ', res);
        this.utility.printEl( res, 'example1');
      },
      err =>{
        this.techStatus = 'error';
      }, 
      () =>{
        this.techStatus = 'completed';
      }
    );



  }

}
