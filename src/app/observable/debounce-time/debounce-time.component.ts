import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html'
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData = null;
  reqData2 = null;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){    

    // Ex - 01 DebunceTime
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    );
    searchTerm.subscribe(res =>{
      console.log('res', res);
      this.reqData = res;  
        
      setTimeout(() =>{
        this.reqData = null;          
      }, 2000);
    });

    // Ex - 02 DistinctUntilChanged
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    );
    searchTerm2.subscribe(res =>{
      console.log('res', res);
      this.reqData2 = res;  
        
      setTimeout(() =>{
        this.reqData2 = null;          
      }, 2000);
    });




  }



}
