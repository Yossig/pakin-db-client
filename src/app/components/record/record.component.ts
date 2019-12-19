import { Component, OnInit, Input } from '@angular/core';
import { Record } from 'src/app/core/models/record.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() record: Record;

  constructor() { }

  ngOnInit() {
  }

}
