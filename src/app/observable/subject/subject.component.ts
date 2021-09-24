import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html'
})
export class SubjectComponent implements OnInit {

  userName: string;
  constructor(public utility: UtilityService) { 
    utility.userName.subscribe(res =>{
      this.userName = res;    
    });
  }

  ngOnInit(): void {
    this.utility.exclusive.next(true);
  }

  ngOnDestroy(){
    this.utility.exclusive.next(false);
  }
  
}
