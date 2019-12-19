import { NgModule } from '@angular/core';
import { ApiService } from './services/api.service';
import { RecordStoreService } from './services/record-store.service';

@NgModule({
    providers: [
        ApiService,
        RecordStoreService
    ]
})
export class CoreModule { }