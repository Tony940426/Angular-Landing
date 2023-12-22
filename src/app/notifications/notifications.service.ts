import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Command {
  id: number;
  type: 'success' | 'error' | 'clear';
  text?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messages: Subject<Command>;

  constructor(){
    this.messages = new Subject<Command>
  }

  addSuccess(message: string){
    this.messages.next({
      id: this.randomID(),
      text: message,
      type: 'success'
    });
  }

  addError(message: string){
    this.messages.next({
      id: this.randomID(),
      text: message,
      type: 'error'
    });
  }

  clearMessage(id: number){
    this.messages.next({
      id: this.randomID(),
      type: 'error'
    });
  }

  private randomID(){
    return Math.round(Math.random() * 100)
  }
}

//Behaviour Subjects, Async Subjects, Replay Subjects