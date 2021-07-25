import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html'
})
export class IntervalComponent implements OnInit {
  textVal = '';
  videoUnsubscrib: Subscription;
  constructor(public utility: UtilityService) { }

  ngOnInit(): void {
    const broadCastVideo = interval(2000);
    //const broadCastVideo = timer(5000, 1000);

    this.videoUnsubscrib = broadCastVideo.subscribe(res =>{
      console.log('res', res);  
      this.textVal = 'Video'+ res;  
      this.utility.printEl(this.textVal, 'elContainer1');
      this.utility.printEl(this.textVal, 'elContainer2'); 
      this.utility.printEl(this.textVal, 'elContainer3'); 
      
      if(res >= 5){
        this.videoUnsubscrib.unsubscribe()
      }



    });
    
  }

}
