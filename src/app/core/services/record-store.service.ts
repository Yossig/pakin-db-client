import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Record } from '../models/record.model';
import { ApiService } from './api.service';

@Injectable()
export class RecordStoreService {


    private readonly _records = new BehaviorSubject<Record[]>([]);
    readonly records$ = this._records.asObservable();
    constructor(private apiService: ApiService) {
        this.fetchData(); // todo: replace with resolve
    }
    get records(): Record[] {
        return this._records.getValue();
    }

    set records(val: Record[]) {
        this._records.next(val);
    }

    filterRecords(filter: String) {
        // todo: get filtered data from server
    }

    async fetchData() {
        this.records = [
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            },
            {
                author: "Itamar",
                date: new Date(),
                recordLength: 30,
                recordUrl: ""
            }
            
        ]

        // todo: fetch data from server
    }

}

