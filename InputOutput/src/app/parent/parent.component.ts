import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  inputVariable: string = 'Shubham';
  receivingData : any = '';

  ngOnInit(): void {}

  getData(value: any){
   this.receivingData = value ;
  }
}
