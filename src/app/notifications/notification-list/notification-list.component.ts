import { Component } from '@angular/core';
import { NotificationsService, Command } from '../notifications.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent {
  messages: Observable<Command[]>

  constructor(notificationService: NotificationsService){
    this.messages = notificationService.messagesOutput;

    setInterval(() => {
      notificationService.addSuccess("It is Working")
    }, 500)
  }

}
