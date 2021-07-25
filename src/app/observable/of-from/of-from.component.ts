import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
})
export class OfFromComponent implements OnInit {

  constructor(public utility: UtilityService) { }
  obsText: any ={};
  ngOnInit(): void {

    const obs1 = of('Mizan', 'Abdullah', 'Feroz');
    obs1.subscribe(res =>{
      this.utility.printEl(res, 'elContainer1');
    });

    const obs2 = of({a:'Mizan', b:'Abdullah', c:'Feroz'});
    obs2.subscribe(res =>{
      this.obsText = res;

      //console.log(' this.obsText',  this.obsText);

    })
    let arr = ['Mizan','Abdullah','Feroz'];
    const obs3 = from(arr);
    obs3.subscribe(res =>{
      this.utility.printEl(res, 'elContainer3');
    });


    // From - promise 
    const promise = new Promise(resolve =>{
      setTimeout(()=>{
        resolve('Promise resolved')
      }, 3000);
    });

    const obs4 = from(promise);
    obs4.subscribe(res =>{
      //console.log('res=>', res);
      this.utility.printEl(res, 'elContainer4');
    });


    // From - string
    const obs5 = from('Welcome ot rxjs');
    obs5.subscribe(res =>{
      console.log('res=>', res);
      this.utility.printEl(res, 'elContainer5');
    });



  }

}
