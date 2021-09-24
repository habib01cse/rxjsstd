import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html'
})
export class ToArrayComponent implements OnInit {

  users = [
    {name: "Mizan", skill: "Dot Net"},
    {name: "Feroz", skill: "Java"},
    {name: "Habibullah", skill: "Javascript"},
    {name: "Abdullah", skill: "PHP"}
  ];

  constructor() { }

  sourceSub : Subscription;

  ngOnInit(): void {

    // Ex- 1
    const source = interval(1000);
    this.sourceSub = source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res =>{
     //console.log('res interval', res);
    })

     // Ex- 2
     const source2 = from(this.users);
     console.log('source2', source2);  
     source2.pipe( toArray())
     .subscribe(res =>{
       console.log('res 2 form', res);
     })
 
     // Ex- 3
     const source3 = of('Habibullah', 'Abdullah', 'Azijullah');
     console.log('source3 of', source3);  
     source3.pipe( toArray())
     .subscribe(res =>{
       console.log('res 3 of', res);
     })
 

  }

}
