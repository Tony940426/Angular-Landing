import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  messages: Subject<any>;

  constructor(){
    this.messages = new Subject<any>
  }

  addSuccess(message: string){
    this.messages.next(message);

  }

  addError(message: string){

  }

  clearMessage(id: number){

  }
}

//Behaviour Subjects, Async Subjects, Replay Subjects