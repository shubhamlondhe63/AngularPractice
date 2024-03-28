import { Component } from '@angular/core';
import { NameStateService } from '../name-state.service';

@Component({
  selector: 'app-name-input',
  template: `
  <h1> Providing Name from This Component </h1>
    <input type="text" [(ngModel)]="name" placeholder="Enter your name" (input)="updateName()">
  `,
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  name: string = '';

  constructor(private nameStateService: NameStateService) { }

  updateName() {
    this.nameStateService.updateName(this.name);
  }
}
