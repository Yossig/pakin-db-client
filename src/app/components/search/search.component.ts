import { Component, OnInit } from '@angular/core';
import { RecordStoreService } from 'src/app/core/services/record-store.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInputUpdate = new Subject<String>();
  public searchInput: String;

  constructor(public recordStore: RecordStoreService, private apiService: ApiService) {
    this.searchInputUpdate.pipe(debounceTime(400), distinctUntilChanged()).subscribe(() => {
      this.filter()
    })
  }

  ngOnInit() {
  }

  clearSearch() {
    this.searchInput = "";
    this.searchInputUpdate.next(this.searchInput)
  }

  async filter() {
    this.searchInput = this.searchInput.toLowerCase();
    this.recordStore.records = await this.apiService.post('api/record/filter', this.searchInput.split(' ').filter(keyword => {
      return keyword != "";
    })).toPromise();
  }

}
