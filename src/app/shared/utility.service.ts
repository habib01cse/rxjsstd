import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  exclusive = new Subject<boolean>();

  //userName = new Subject<string>();
  //Default value set
  userName = new BehaviorSubject<string>('Habibullah');

  constructor() { }


  printEl(_val, _selector){
    let el = document.createElement('li');
    el.innerText = _val;
    document.getElementById( _selector ).appendChild(el);
  }

}
