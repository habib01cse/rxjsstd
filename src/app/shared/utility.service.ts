import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  printEl(_val, _selector){
    let el = document.createElement('li');
    el.innerText = _val;
    document.getElementById( _selector ).appendChild(el);
  }

}
