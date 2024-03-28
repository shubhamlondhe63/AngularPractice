import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { NameStateService } from '../name-state.service';

@Component({
  selector: 'app-another-component',
  templateUrl: './another-component.component.html',
  styleUrls: ['./another-component.component.css']
})
export class AnotherComponentComponent implements OnInit {
  greetingMessage$: Observable<string>;
  constructor(private nameStateService : NameStateService) { 
    this.greetingMessage$ = this.nameStateService.name$.pipe(
      map(name => `Hello, ${name}!`)
    );

  }

  ngOnInit(): void {
  }

}
