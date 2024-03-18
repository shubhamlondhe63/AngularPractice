import { Component, Input, Output, EventEmitter , OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myInput: any ;
  @Output() myOutput: EventEmitter<any> = new EventEmitter ;
  outputStr : string = 'Data we have received from child.';

  ngOnInit(): void {
    console.log("here we get value of input", this.myInput);
  }

  sendData(){
    this.myOutput.emit(this.outputStr);
  }
}
