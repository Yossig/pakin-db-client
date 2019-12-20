import { Component, OnInit, Input } from '@angular/core';
import { Record } from 'src/app/core/models/record.model';
import * as moment from 'moment';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() record: Record;
  formattedDate: any;
  avatar: String;
  constructor() {
  }

  ngOnInit() {
    this.formattedDate = moment(this.record.date).format("DD MMM YYYY");
    switch(this.record.author) {
      case "Itamar Efrati": {
        this.avatar = "../../assets/profile-pictures/itamar.jpg"
      }
    }
  }
}
