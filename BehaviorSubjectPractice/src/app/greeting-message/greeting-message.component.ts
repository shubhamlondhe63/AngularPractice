import { Component, OnInit } from '@angular/core';
import { NameStateService } from '../name-state.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-greeting-message',
  template: `
  <h1> Receiving name In This Component </h1>
    <h2>{{ greetingMessage$ | async }}</h2>
  `,
  styleUrls: ['./greeting-message.component.css']
})
export class GreetingMessageComponent implements OnInit {
  greetingMessage$: Observable<string>;

  constructor(private nameStateService: NameStateService) {
    this.greetingMessage$ = this.nameStateService.name$.pipe(
      map(name => `Hello, ${name}!`)
    );
  }

  ngOnInit(): void {
  }
}
