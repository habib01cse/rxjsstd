import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  constructor(public utility: UtilityService) { }

  @ViewChild('addBtn') addBtn:ElementRef;

  ngOnInit(): void {  

  }

  ngAfterViewInit(){
    let count = 1;
    fromEvent( this.addBtn.nativeElement, 'click').subscribe(res =>{
      console.log('res', res);
      let val = 'Video-' + count++;
      this.utility.printEl(val, 'elContainer1');
      this.utility.printEl(val, 'elContainer2');
    })
  }


  


}
