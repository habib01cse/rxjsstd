import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  promiseVal;
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Silvar'
  }

  notAvil = {
    brand: 'Not available',
    status: 'Failed'
  }



  dellAvailable(){
    return true;
  }

  hpAvailable(){
    return false;
  }



  ngOnInit(): void {

    // let buyLaptop = new Promise(function(resolve, reject){
    //   resolve('Promise is resolved!');
    // })

    let buyLaptop = new Promise((resolve, reject) =>{
      // resolve('Promise is resolved!');
      // reject('Promise is reject!!');

      if(this.dellAvailable()){
        return setTimeout(() =>{
          resolve(this.dell);
        }, 3000);

      }else if(this.hpAvailable()){
        return setTimeout(() =>{
          resolve(this.hp);
        }, 3000);
      }else{
        reject(this.notAvil);
      }

    })

    buyLaptop.then(res => {
      this.promiseVal = res;
      console.log('then code=>', res);
    }).catch(res =>{
      this.promiseVal = res;
      console.log('catch code=>', res);
    });



  }

 

}
