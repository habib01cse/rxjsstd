import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html'
})
export class CompaComponent implements OnInit {

  userName: string;
  constructor(public utility: UtilityService) { 
    this.utility.userName.subscribe(res =>{
      this.userName = res;    
    });
  }

  ngOnInit(): void {
  }

  onChange(e){
    console.log(e.value);
    //this.userName = e.value;
    this.utility.userName.next(e.value);
  }

}
