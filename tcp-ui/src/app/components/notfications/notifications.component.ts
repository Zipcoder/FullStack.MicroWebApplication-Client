import { Component, OnInit } from '@angular/core';
import { NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-messages',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
  }

}
