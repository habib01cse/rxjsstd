import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  exclusive: boolean = false;
  constructor(public utility: UtilityService) { }

  ngOnInit(): void {
    console.log('this.exclusive out', this.exclusive);
    this.utility.exclusive.subscribe(res =>{
      this.exclusive = res;
      console.log('this.exclusive in', this.exclusive);

    })
  }
  
}
