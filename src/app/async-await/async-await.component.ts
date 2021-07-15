import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  constructor() { }

  // promise = new Promise((resolve, reject) =>{
  //   setTimeout(()=>{
  //     resolve('adsf asdf');
  //   }, 3000);
  // });

  // async getData(){
  //   let response = await this.promise;
  //   console.log('response', response);
  //   //return 'Data received';
  // }

  ngOnInit(): void {

    //this.getData();

  }

  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Silvar',
  }

  buyLaptop = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(this.dell);
    }, 3000);
  });

  postData = fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json()
  );

  public resThen = 'Promise with then';
  public resAwait = 'Promise with Async Await';
  public resApi = 'Fetch api';

  // Ex -01: Witn promise
  onClickPromise(){
    this.buyLaptop.then(res =>{
      this.resThen = JSON.stringify(res);
    });
  }

  // Ex -02: Witn Async Await
  async onClickAsyncAwait(){
    let res = await this.buyLaptop;
    this.resAwait = JSON.stringify(res);   
  }

  //Ex -03: With Fetch Api
  // Promise wala torika
  // onClickApi(){
  //   this.postData.then(res =>{
  //     this.resApi = JSON.stringify(res);
  //   });
  // }

  async onClickApi(){
    let res = await this.postData;
    this.resApi = JSON.stringify(res);
  }

}
