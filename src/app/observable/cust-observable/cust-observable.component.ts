import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-cust-observable',
  templateUrl: './cust-observable.component.html', 
})
export class CustObservableComponent implements OnInit, OnDestroy {

  techStatus1 = '';
  techStatus2 = '';
  nameStatus = '';
  subs1: Subscription;
  names: '';
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
        observer.complete();          
      }, 4000); 


      setTimeout(() =>{
        observer.next("React js !");                
      }, 5000);

      setTimeout(() =>{
        observer.next("Vue js !");
        //observer.error(new Error('Limit Exceed!'));        
      }, 6000);

    });

    cusObs1.subscribe(
      res =>{
        //console.log('custom observable => ', res);
        this.utility.printEl( res, 'container1');
      },
      err =>{
        this.techStatus1 = 'error';
      }, 
      () =>{
        this.techStatus1 = 'completed';
      }
    );


    // Ex - 2 (Custom interval observable)
    const arr2 = ['Html/Css', 'javaScript', 'typeScript', 'Angular', 'Angularjs', 'ReactJs', 'VueJs'];
    const cusObs2 = Observable.create(observer =>{
      let cout = 0;
      setInterval(() =>{
        observer.next(arr2[cout]);  
       
        if(cout >= 3){
          observer.error(new Error('Limit Exceed!'));    
        }
        
        if(cout >= 5){
          observer.complete();  
        }

        cout++;   

      }, 1000);
    });

    this.subs1 = cusObs2.subscribe(
      res =>{
        //console.log('Custom interval observable => ', res);
        this.utility.printEl(res, 'container2');
      },
      err =>{
        this.techStatus2 = 'error';
      }, 
      () =>{
        this.techStatus2 = 'completed';
      }
    );


     // Ex - 3 (Random names)
     const arr3 = ['Habib', 'Abdullah', 'Azin', 'Hiya', 'Hridoy'];
     const cusObs3 = Observable.create(observer =>{
       let cout = 0;
       setInterval(() =>{
         observer.next(arr3[cout]);  
        
        //  if(cout >= 3){
        //    observer.error(new Error('Limit Exceed!'));    
        //  }
         
         if(cout >= 3){
           observer.complete();  
         }
 
         cout++;   
 
       }, 1000);
     });
 
     this.subs1 = cusObs3.subscribe(
       res =>{
         console.log(' Random  name => ', res);
         this.names = res;

         //this.utility.printEl(res, 'container2');
       },
       err =>{
         this.nameStatus = 'error';
       }, 
       () =>{
         this.nameStatus = 'completed';
       }
     );




  }

  ngOnDestroy() {
    this.subs1.unsubscribe();
  }

}
