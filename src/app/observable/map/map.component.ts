import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription, } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  constructor(public utility: UtilityService) { }
  // Subscription
  subs1: Subscription;

  // Messages
  msg1 = '';

  msg2;
  ngOnInit(): void {
    const boardCustVideo = interval(1000);

    // Ex 01
    this.subs1 = boardCustVideo.pipe(
      map(data => 'Video '+ data)
    ).subscribe(res => {
      //console.log('res str', res);
      this.msg1 = res;
    });

    // Ex 02
    this.subs1 = boardCustVideo.pipe(
      map(data => data * 2)
    ).subscribe(res => {
      //console.log('res *', res);
      this.msg2 = res;
    });

    
    // Ex 03
    let members = from( [
      {id:1, name:'Mizan'},
      {id:2, name:'Habib'},
      {id:3, name:'Abdullah'},
      {id:4, name:'Azij'}
    ]);

    this.subs1 = members.pipe(
      map(data => data.name)
    ).subscribe(data =>{
      console.log('Data obj', data);
      this.utility.printEl(data, 'elContainer')

    });

    setTimeout(() =>{
      this.subs1.unsubscribe();
    }, 10000);

    



  }




}
