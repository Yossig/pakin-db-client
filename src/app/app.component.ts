import { Component } from '@angular/core';
import { RecordStoreService } from './core/services/record-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public recordStore: RecordStoreService){}
  title = 'client';
}
