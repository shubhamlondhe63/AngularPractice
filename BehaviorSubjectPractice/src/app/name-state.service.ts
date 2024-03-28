import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameStateService {
  private nameSubject = new BehaviorSubject<string>(''); // Initial value is an empty string
  name$ = this.nameSubject.asObservable();

  constructor() { }

  updateName(name: string) {
    this.nameSubject.next(name);
  }
}
