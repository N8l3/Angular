import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-base-model',
  template: ` `,
  styles: [ ]

})

export class BaseModelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  key:string = "emp";
  arr:any = JSON.parse(localStorage.getItem(this.key)!);

  deleteData(id: number)
  {
    let ans = confirm("Are you sure you want to delete this record ?");
    if (ans == true) 
    {
      this.arr.splice(id, 1);
      localStorage.setItem(this.key,JSON.stringify(this.arr));
      return true;
    }
    else
    {
      return false;
    }
  }

  
  

  sortByNameDesc(){
    this.arr.sort(function(a:any,b:any){
      var A = a.name.toUpperCase();
      var B = b.name.toUpperCase();
      if(A < B)
      {
        return 1;
      }
      if (A > B) 
      {
        return -1;  
      }
      return 0;
    });
  }
  sortByNameAsc(){
    this.arr.sort(function(a:any,b:any){
      var A = a.name.toUpperCase();
      var B = b.name.toUpperCase();
      if (A > B) 
      {
        return 1;  
      }
      else if (A < B) {
        return -1;
      }
      return 0;
    });
  }

  sortDataAsc(){
    const asc = this.arr.sort((a:any,b:any)=>(a.age > b.age ? 1: -1));
  }
  sortDataDesc(){
    const desc = this.arr.sort((a:any , b:any )=>(a.age > b.age ? -1: 1));
  }


  genrateId() {
    const id = (<HTMLInputElement>document.getElementById('id')).valueAsNumber = Math.floor(Math.random() * 10000);
  }
  
  add() 
  {
    // const id = (<HTMLInputElement>document.getElementById('id')).valueAsNumber;
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const age = (<HTMLInputElement>document.getElementById('age')).valueAsNumber;

    let key:string = 'emp';

    if (name !="" && age > 17)
    {
      let arr = JSON.parse(localStorage.getItem(key)!);
      if(arr == null)
      {
        let data = [ {name,age,},];
        localStorage.setItem(key,JSON.stringify(data));
        // window.location.href="../employee";
        // this.router.navigate(['./employee']);
      }
      else
      {
        arr.push({name,age,});
        localStorage.setItem(key,JSON.stringify(arr));
        // this.router.navigate(['./employee']);
      }
    }
    else
    {
      // (<HTMLInputElement>document.getElementById('msg')).innerHTML="Please Provide Valid Input";
      alert('Please Fill all the Empty Details.');
    }
  }


  edit(id:any)
  {
    let arr = JSON.parse(localStorage.getItem(this.key)!); 
    (<HTMLInputElement>document.getElementById('id')).value = id; 
    ((<HTMLInputElement>document.getElementById('Name')).value = arr[id].name);
    ((<HTMLInputElement>document.getElementById('Age')).value = arr[id].age);
  }

  update()
  {
    var id = (<HTMLInputElement>document.getElementById('id')).value;
    this.arr[id].name = (<HTMLInputElement>document.getElementById('Name')).value  ;
    this.arr[id].age = (<HTMLInputElement>document.getElementById('Age')).value;
    localStorage.setItem(this.key,JSON.stringify(this.arr));
    alert("Record Updated");
    
  }


}
